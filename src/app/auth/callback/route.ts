
import { NextResponse, type NextRequest } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

export async function GET(request: NextRequest) {
    const { searchParams, origin } = new URL(request.url);

    const code = searchParams.get("code");
    const requestedNext = searchParams.get("next");

    const destination =
        requestedNext?.startsWith("/") && !requestedNext.startsWith("//")
            ? requestedNext
            : "/account";

    if (!code) {
        return NextResponse.redirect(
            new URL("/login?error=confirmation_failed", origin)
        );
    }

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
        console.error("Erro ao confirmar sessão:", error.message);

        return NextResponse.redirect(
            new URL("/login?error=confirmation_failed", origin)
        );
    }

    return NextResponse.redirect(new URL(destination, origin));
}
