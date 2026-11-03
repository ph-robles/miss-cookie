import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdminClient } from "../../../../lib/supabase/admin";
import { createSupabaseServerClient } from "../../../../lib/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type GalleryAccessRow = {
    user_id: string;
    active: boolean;
};

type UpdateAccessBody = {
    userId?: unknown;
    active?: unknown;
};

const UUID_PATTERN =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

async function requireAdministrator() {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        return {
            authorized: false as const,
            status: 401,
            error: "Faça login para continuar.",
        };
    }

    const { data: administrator, error: administratorError } =
        await supabase
            .from("admin_users")
            .select("user_id")
            .eq("user_id", user.id)
            .maybeSingle();

    if (administratorError) {
        console.error(
            "Erro ao verificar administrador:",
            administratorError.message
        );

        return {
            authorized: false as const,
            status: 500,
            error: "Não foi possível verificar a permissão administrativa.",
        };
    }

    if (!administrator) {
        return {
            authorized: false as const,
            status: 403,
            error: "Você não possui permissão administrativa.",
        };
    }

    return {
        authorized: true as const,
        user,
    };
}

export async function GET() {
    try {
        const authorization = await requireAdministrator();

        if (!authorization.authorized) {
            return NextResponse.json(
                {
                    error: authorization.error,
                },
                {
                    status: authorization.status,
                    headers: {
                        "Cache-Control": "private, no-store, max-age=0",
                    },
                }
            );
        }

        const adminClient = createSupabaseAdminClient();

        const {
            data: { users },
            error: usersError,
        } = await adminClient.auth.admin.listUsers({
            page: 1,
            perPage: 1000,
        });

        if (usersError) {
            console.error("Erro ao listar usuários:", usersError.message);

            return NextResponse.json(
                {
                    error: "Não foi possível carregar os usuários.",
                },
                {
                    status: 500,
                }
            );
        }

        const { data: accessRows, error: accessError } = await adminClient
            .from("gallery_access")
            .select("user_id, active");

        if (accessError) {
            console.error(
                "Erro ao carregar acessos da galeria:",
                accessError.message
            );

            return NextResponse.json(
                {
                    error: "Não foi possível carregar os acessos da galeria.",
                },
                {
                    status: 500,
                }
            );
        }

        const accessMap = new Map<string, boolean>(
            ((accessRows ?? []) as GalleryAccessRow[]).map((row) => [
                row.user_id,
                row.active,
            ])
        );

        const formattedUsers = users
            .map((user) => ({
                id: user.id,
                email: user.email ?? "E-mail não informado",
                emailConfirmed: Boolean(user.email_confirmed_at),
                emailConfirmedAt: user.email_confirmed_at ?? null,
                createdAt: user.created_at,
                lastSignInAt: user.last_sign_in_at ?? null,
                galleryAccess: accessMap.get(user.id) ?? false,
                isAdministrator: user.id === authorization.user.id,
            }))
            .sort((firstUser, secondUser) => {
                return (
                    new Date(secondUser.createdAt).getTime() -
                    new Date(firstUser.createdAt).getTime()
                );
            });

        return NextResponse.json(
            {
                users: formattedUsers,
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "private, no-store, max-age=0",
                },
            }
        );
    } catch (error) {
        console.error("Erro inesperado ao listar usuários:", error);

        return NextResponse.json(
            {
                error: "Ocorreu um erro inesperado ao carregar os usuários.",
            },
            {
                status: 500,
            }
        );
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const authorization = await requireAdministrator();

        if (!authorization.authorized) {
            return NextResponse.json(
                {
                    error: authorization.error,
                },
                {
                    status: authorization.status,
                    headers: {
                        "Cache-Control": "private, no-store, max-age=0",
                    },
                }
            );
        }

        let body: UpdateAccessBody;

        try {
            body = (await request.json()) as UpdateAccessBody;
        } catch {
            return NextResponse.json(
                {
                    error: "O corpo da solicitação não é válido.",
                },
                {
                    status: 400,
                }
            );
        }

        if (
            typeof body.userId !== "string" ||
            !UUID_PATTERN.test(body.userId)
        ) {
            return NextResponse.json(
                {
                    error: "O identificador do usuário não é válido.",
                },
                {
                    status: 400,
                }
            );
        }

        if (typeof body.active !== "boolean") {
            return NextResponse.json(
                {
                    error: "O status de acesso não é válido.",
                },
                {
                    status: 400,
                }
            );
        }

        const adminClient = createSupabaseAdminClient();

        const {
            data: { user: targetUser },
            error: targetUserError,
        } = await adminClient.auth.admin.getUserById(body.userId);

        if (targetUserError || !targetUser) {
            console.error(
                "Usuário não encontrado:",
                targetUserError?.message ?? body.userId
            );

            return NextResponse.json(
                {
                    error: "O usuário selecionado não foi encontrado.",
                },
                {
                    status: 404,
                }
            );
        }

        const { data: access, error: updateError } = await adminClient
            .from("gallery_access")
            .upsert(
                {
                    user_id: body.userId,
                    active: body.active,
                    updated_at: new Date().toISOString(),
                },
                {
                    onConflict: "user_id",
                }
            )
            .select("user_id, active, updated_at")
            .single();

        if (updateError) {
            console.error(
                "Erro ao atualizar acesso:",
                updateError.message
            );

            return NextResponse.json(
                {
                    error: "Não foi possível atualizar o acesso à galeria.",
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json(
            {
                message: body.active
                    ? "Acesso à galeria liberado."
                    : "Acesso à galeria bloqueado.",
                access,
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "private, no-store, max-age=0",
                },
            }
        );
    } catch (error) {
        console.error("Erro inesperado ao atualizar acesso:", error);

        return NextResponse.json(
            {
                error: "Ocorreu um erro inesperado ao atualizar o acesso.",
            },
            {
                status: 500,
            }
        );
    }
}