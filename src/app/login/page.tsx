"use client";

import { Suspense, FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createSupabaseBrowserClient } from "../../lib/supabase/browser";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [mode, setMode] = useState<"login" | "signup">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setMessage("");
        setError("");

        try {
            const supabase = createSupabaseBrowserClient();

            if (mode === "signup") {
                const { data, error: authError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/auth/callback`,
                    },
                });

                if (authError) throw authError;

                if (data.session) {
                    router.replace("/account");
                    router.refresh();
                    return;
                }

                setMessage(
                    "Cadastro iniciado. Confira seu e-mail para confirmar a conta antes de entrar."
                );
            } else {
                const { error: authError } =
                    await supabase.auth.signInWithPassword({
                        email,
                        password,
                    });

                if (authError) throw authError;

                const requestedNext = searchParams.get("next");
                const destination =
                    requestedNext?.startsWith("/") && !requestedNext.startsWith("//")
                        ? requestedNext
                        : "/account";

                router.replace(destination);
                router.refresh();
                return;
            }
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Não foi possível concluir a operação. Tente novamente."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#090809] px-5 py-16 text-[#F0D5DE]">
            <div className="w-full max-w-md">
                <Link
                    href="/"
                    className="mb-10 block text-center text-xs uppercase tracking-[0.35em] text-[#C77D96] transition hover:text-[#F0D5DE]"
                >
                    Miss Cookie
                </Link>

                <section className="rounded-2xl border border-[#C77D96]/25 bg-[#24151D]/70 p-7 shadow-2xl sm:p-9">
                    <p className="mb-3 text-center text-[10px] uppercase tracking-[0.3em] text-[#C77D96]">
                        Private Gallery
                    </p>

                    <h1 className="mb-3 text-center font-serif text-3xl">
                        {mode === "login" ? "Welcome Back" : "Create Your Account"}
                    </h1>

                    <p className="mb-8 text-center text-sm leading-6 text-[#BDA7B0]">
                        {mode === "login"
                            ? "Sign in to access your account."
                            : "Create an account to continue to the private gallery."}
                    </p>

                    <div className="mb-6 grid grid-cols-2 rounded-lg border border-[#C77D96]/20 p-1">
                        <button
                            type="button"
                            onClick={() => {
                                setMode("login");
                                setMessage("");
                                setError("");
                            }}
                            className={`rounded-md px-3 py-2.5 text-sm transition ${mode === "login"
                                ? "bg-[#C77D96] text-[#090809]"
                                : "text-[#BDA7B0] hover:text-[#F0D5DE]"
                                }`}
                        >
                            Sign In
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setMode("signup");
                                setMessage("");
                                setError("");
                            }}
                            className={`rounded-md px-3 py-2.5 text-sm transition ${mode === "signup"
                                ? "bg-[#C77D96] text-[#090809]"
                                : "text-[#BDA7B0] hover:text-[#F0D5DE]"
                                }`}
                        >
                            Create Account
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm text-[#F0D5DE]"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                required
                                maxLength={254}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="w-full rounded-lg border border-[#C77D96]/25 bg-[#090809] px-4 py-3 text-sm outline-none transition placeholder:text-[#BDA7B0]/50 focus:border-[#C77D96]"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm text-[#F0D5DE]"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                autoComplete={
                                    mode === "login" ? "current-password" : "new-password"
                                }
                                required
                                minLength={8}
                                maxLength={128}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="w-full rounded-lg border border-[#C77D96]/25 bg-[#090809] px-4 py-3 text-sm outline-none transition placeholder:text-[#BDA7B0]/50 focus:border-[#C77D96]"
                                placeholder="At least 8 characters"
                            />
                        </div>

                        {error && (
                            <p role="alert" className="text-sm leading-6 text-red-300">
                                {error}
                            </p>
                        )}

                        {message && (
                            <p role="status" className="text-sm leading-6 text-[#F0D5DE]">
                                {message}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-[#C77D96] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#090809] transition hover:bg-[#F0D5DE] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {loading
                                ? "Please wait..."
                                : mode === "login"
                                    ? "Sign In"
                                    : "Create Account"}
                        </button>
                    </form>

                    <p className="mt-7 text-center text-xs leading-6 text-[#BDA7B0]">
                        By continuing, you agree to use the site in accordance with its
                        terms and privacy policy.
                    </p>

                    <Link
                        href="/subscribe"
                        className="mt-5 block text-center text-sm text-[#C77D96] transition hover:text-[#F0D5DE]"
                    >
                        Explore membership
                    </Link>
                </section>
            </div>
        </main>
    );
}

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <main className="flex min-h-screen items-center justify-center bg-[#090809] text-[#F0D5DE]">
                    <p className="text-sm">Loading...</p>
                </main>
            }
        >
            <LoginForm />
        </Suspense>
    );
}