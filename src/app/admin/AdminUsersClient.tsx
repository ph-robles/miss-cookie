"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

type AdminUser = {
    id: string;
    email: string;
    emailConfirmed: boolean;
    emailConfirmedAt: string | null;
    createdAt: string;
    lastSignInAt: string | null;
    galleryAccess: boolean;
    isAdministrator: boolean;
};

type UsersResponse = {
    users?: AdminUser[];
    error?: string;
};

function formatDate(date: string | null) {
    if (!date) {
        return "Nunca";
    }

    return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
    }).format(new Date(date));
}

export default function AdminUsersClient() {
    const [users, setUsers] = useState<AdminUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [changingUserId, setChangingUserId] = useState<string | null>(
        null
    );
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const loadUsers = useCallback(async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/users", {
                method: "GET",
                cache: "no-store",
            });

            const contentType = response.headers.get("content-type");

            if (!contentType?.includes("application/json")) {
                throw new Error(
                    "A API administrativa não retornou uma resposta válida."
                );
            }

            const result = (await response.json()) as UsersResponse;

            if (response.status === 401) {
                window.location.href = "/login?next=/admin";
                return;
            }

            if (response.status === 403) {
                window.location.href = "/account";
                return;
            }

            if (!response.ok) {
                throw new Error(
                    result.error ?? "Não foi possível carregar os usuários."
                );
            }

            setUsers(result.users ?? []);
        } catch (loadError) {
            setError(
                loadError instanceof Error
                    ? loadError.message
                    : "Não foi possível carregar os usuários."
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void loadUsers();
    }, [loadUsers]);

    async function updateAccess(user: AdminUser) {
        const nextStatus = !user.galleryAccess;

        setChangingUserId(user.id);
        setMessage("");
        setError("");

        try {
            const response = await fetch("/api/admin/users", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id,
                    active: nextStatus,
                }),
            });

            const result = (await response.json()) as {
                message?: string;
                error?: string;
            };

            if (response.status === 401) {
                window.location.href = "/login?next=/admin";
                return;
            }

            if (response.status === 403) {
                window.location.href = "/account";
                return;
            }

            if (!response.ok) {
                throw new Error(
                    result.error ?? "Não foi possível atualizar o acesso."
                );
            }

            setUsers((currentUsers) =>
                currentUsers.map((currentUser) =>
                    currentUser.id === user.id
                        ? {
                            ...currentUser,
                            galleryAccess: nextStatus,
                        }
                        : currentUser
                )
            );

            setMessage(
                result.message ??
                (nextStatus
                    ? "Acesso liberado."
                    : "Acesso bloqueado.")
            );
        } catch (updateError) {
            setError(
                updateError instanceof Error
                    ? updateError.message
                    : "Não foi possível atualizar o acesso."
            );
        } finally {
            setChangingUserId(null);
        }
    }

    const activeUsers = users.filter(
        (user) => user.galleryAccess
    ).length;

    const confirmedUsers = users.filter(
        (user) => user.emailConfirmed
    ).length;

    return (
        <main className="min-h-screen bg-[#090809] px-5 py-12 text-[#F0D5DE] sm:px-8">
            <div className="mx-auto max-w-7xl">
                <header className="mb-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <Link
                                href="/"
                                className="text-xs uppercase tracking-[0.35em] text-[#C77D96] transition hover:text-[#F0D5DE]"
                            >
                                Miss Cookie
                            </Link>

                            <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-[#C77D96]">
                                Administração
                            </p>

                            <h1 className="mt-3 font-serif text-4xl">
                                Private Gallery Access
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#BDA7B0]">
                                Gerencie os usuários cadastrados e controle quem pode
                                visualizar as fotografias privadas.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={() => void loadUsers()}
                                disabled={loading}
                                className="rounded-lg border border-[#C77D96]/40 px-5 py-3 text-xs uppercase tracking-[0.18em] transition hover:bg-[#C77D96]/10 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Atualizar
                            </button>

                            <Link
                                href="/account"
                                className="rounded-lg bg-[#C77D96] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#090809] transition hover:bg-[#F0D5DE]"
                            >
                                Minha conta
                            </Link>
                        </div>
                    </div>
                </header>

                <section className="mb-8 grid gap-4 sm:grid-cols-3">
                    <article className="rounded-xl border border-[#C77D96]/20 bg-[#24151D]/60 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#BDA7B0]">
                            Usuários
                        </p>
                        <p className="mt-3 font-serif text-3xl">{users.length}</p>
                    </article>

                    <article className="rounded-xl border border-[#C77D96]/20 bg-[#24151D]/60 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#BDA7B0]">
                            E-mails confirmados
                        </p>
                        <p className="mt-3 font-serif text-3xl">
                            {confirmedUsers}
                        </p>
                    </article>

                    <article className="rounded-xl border border-[#C77D96]/20 bg-[#24151D]/60 p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#BDA7B0]">
                            Galerias liberadas
                        </p>
                        <p className="mt-3 font-serif text-3xl">{activeUsers}</p>
                    </article>
                </section>

                {message && (
                    <p
                        role="status"
                        className="mb-6 rounded-lg border border-green-400/25 bg-green-950/30 px-4 py-3 text-sm text-green-200"
                    >
                        {message}
                    </p>
                )}

                {error && (
                    <p
                        role="alert"
                        className="mb-6 rounded-lg border border-red-400/25 bg-red-950/30 px-4 py-3 text-sm text-red-200"
                    >
                        {error}
                    </p>
                )}

                {loading ? (
                    <p className="py-16 text-center text-sm text-[#BDA7B0]">
                        Carregando usuários...
                    </p>
                ) : users.length === 0 ? (
                    <p className="py-16 text-center text-sm text-[#BDA7B0]">
                        Nenhum usuário cadastrado.
                    </p>
                ) : (
                    <section className="overflow-hidden rounded-xl border border-[#C77D96]/20 bg-[#24151D]/40">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[980px] border-collapse text-left">
                                <thead className="bg-[#24151D]">
                                    <tr className="text-xs uppercase tracking-[0.15em] text-[#C77D96]">
                                        <th className="px-5 py-4 font-medium">Usuário</th>
                                        <th className="px-5 py-4 font-medium">
                                            Confirmação
                                        </th>
                                        <th className="px-5 py-4 font-medium">
                                            Cadastro
                                        </th>
                                        <th className="px-5 py-4 font-medium">
                                            Último login
                                        </th>
                                        <th className="px-5 py-4 font-medium">
                                            Galeria
                                        </th>
                                        <th className="px-5 py-4 text-right font-medium">
                                            Ação
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user) => (
                                        <tr
                                            key={user.id}
                                            className="border-t border-[#C77D96]/15"
                                        >
                                            <td className="px-5 py-5">
                                                <p className="text-sm text-[#F0D5DE]">
                                                    {user.email}
                                                </p>

                                                <p className="mt-1 font-mono text-[10px] text-[#BDA7B0]">
                                                    {user.id}
                                                </p>

                                                {user.isAdministrator && (
                                                    <span className="mt-2 inline-block rounded-full border border-[#C77D96]/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-[#C77D96]">
                                                        Administrador
                                                    </span>
                                                )}
                                            </td>

                                            <td className="px-5 py-5">
                                                <span
                                                    className={
                                                        user.emailConfirmed
                                                            ? "text-sm text-green-300"
                                                            : "text-sm text-amber-300"
                                                    }
                                                >
                                                    {user.emailConfirmed
                                                        ? "Confirmado"
                                                        : "Pendente"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-5 text-sm text-[#BDA7B0]">
                                                {formatDate(user.createdAt)}
                                            </td>

                                            <td className="px-5 py-5 text-sm text-[#BDA7B0]">
                                                {formatDate(user.lastSignInAt)}
                                            </td>

                                            <td className="px-5 py-5">
                                                <span
                                                    className={
                                                        user.galleryAccess
                                                            ? "inline-flex rounded-full bg-green-500/15 px-3 py-1.5 text-xs text-green-300"
                                                            : "inline-flex rounded-full bg-red-500/15 px-3 py-1.5 text-xs text-red-300"
                                                    }
                                                >
                                                    {user.galleryAccess
                                                        ? "Liberada"
                                                        : "Bloqueada"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-5 text-right">
                                                <button
                                                    type="button"
                                                    onClick={() => void updateAccess(user)}
                                                    disabled={changingUserId === user.id}
                                                    className={
                                                        user.galleryAccess
                                                            ? "rounded-lg border border-red-400/35 px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-red-200 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                                            : "rounded-lg bg-[#C77D96] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#090809] transition hover:bg-[#F0D5DE] disabled:cursor-not-allowed disabled:opacity-50"
                                                    }
                                                >
                                                    {changingUserId === user.id
                                                        ? "Salvando..."
                                                        : user.galleryAccess
                                                            ? "Bloquear"
                                                            : "Liberar"}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                <footer className="mt-10 border-t border-[#C77D96]/15 pt-6 text-center">
                    <Link
                        href="/private-gallery"
                        className="text-xs uppercase tracking-[0.2em] text-[#BDA7B0] transition hover:text-[#F0D5DE]"
                    >
                        Abrir galeria privada
                    </Link>
                </footer>
            </div>
        </main>
    );
}