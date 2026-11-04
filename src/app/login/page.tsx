"use client";

import {
    Eye,
    EyeOff,
    LoaderCircle,
    LockKeyhole,
    Mail,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { createSupabaseBrowserClient } from "../../lib/supabase/browser";

type AuthMode = "login" | "signup";

function getAuthenticationErrorMessage(error: unknown) {
    if (!(error instanceof Error)) {
        return "We could not complete your request. Please try again.";
    }

    const normalizedMessage = error.message.toLowerCase();

    if (
        normalizedMessage.includes("invalid login credentials") ||
        normalizedMessage.includes("invalid credentials")
    ) {
        return "The email address or password is incorrect.";
    }

    if (normalizedMessage.includes("email not confirmed")) {
        return "Please confirm your email address before signing in.";
    }

    if (
        normalizedMessage.includes("user already registered") ||
        normalizedMessage.includes("already been registered")
    ) {
        return "An account already exists for this email address. Please sign in.";
    }

    if (
        normalizedMessage.includes("password should be") ||
        normalizedMessage.includes("password must be")
    ) {
        return "Your password must contain at least 8 characters.";
    }

    if (
        normalizedMessage.includes("rate limit") ||
        normalizedMessage.includes("too many requests")
    ) {
        return "Too many attempts. Please wait a few minutes and try again.";
    }

    if (normalizedMessage.includes("error sending confirmation email")) {
        return "Your account could not be created because the confirmation email could not be sent. Please try again.";
    }

    return error.message;
}

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [mode, setMode] = useState<AuthMode>("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const requestedNext = searchParams.get("next");
    const queryError = searchParams.get("error");

    const destination = useMemo(() => {
        if (
            requestedNext?.startsWith("/") &&
            !requestedNext.startsWith("//")
        ) {
            return requestedNext;
        }

        return "/account";
    }, [requestedNext]);

    const confirmationErrorMessage = useMemo(() => {
        if (queryError === "confirmation_failed") {
            return "The confirmation link could not be validated. If your email is already confirmed, please sign in normally.";
        }

        if (queryError === "invalid_confirmation_link") {
            return "This confirmation link is invalid or incomplete. Please create the account again or contact support.";
        }

        return "";
    }, [queryError]);

    function changeMode(nextMode: AuthMode) {
        if (loading) {
            return;
        }

        setMode(nextMode);
        setMessage("");
        setError("");
        setPassword("");
        setShowPassword(false);
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (loading) {
            return;
        }

        setLoading(true);
        setMessage("");
        setError("");

        const normalizedEmail = email.trim().toLowerCase();

        try {
            const supabase = createSupabaseBrowserClient();

            if (mode === "signup") {
                const { data, error: authError } = await supabase.auth.signUp({
                    email: normalizedEmail,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/private-gallery`,
                    },
                });

                if (authError) {
                    throw authError;
                }

                if (data.session) {
                    router.replace("/private-gallery");
                    router.refresh();
                    return;
                }

                setEmail(normalizedEmail);
                setPassword("");
                setShowPassword(false);

                setMessage(
                    "Your account was created. Check your inbox and spam folder, then select the confirmation button to activate your account."
                );

                return;
            }

            const { error: authError } =
                await supabase.auth.signInWithPassword({
                    email: normalizedEmail,
                    password,
                });

            if (authError) {
                throw authError;
            }

            router.replace(destination);
            router.refresh();
        } catch (authenticationError) {
            setError(getAuthenticationErrorMessage(authenticationError));
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090809] px-5 py-12 text-[#F0D5DE] sm:py-16">
            {/* BACKGROUND LIGHTS */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#C77D96]/[0.055] blur-[130px]" />

                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C77D96]/[0.05] blur-[140px]" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                {/* BRAND */}
                <Link
                    href="/"
                    aria-label="Return to Miss Cookie website"
                    className="group mx-auto mb-9 flex w-fit items-center gap-2"
                >
                    <span className="text-[10px] font-semibold tracking-[0.35em] text-[#F0D5DE]">
                        MISS
                    </span>

                    <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#F0D5DE] transition-colors duration-300 group-hover:text-[#C77D96]">
                        COOKIE
                    </span>
                </Link>

                <section className="relative overflow-hidden rounded-2xl border border-[#C77D96]/25 bg-[#24151D]/80 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-9">
                    <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#C77D96]/[0.07] blur-[90px]" />

                    <div className="relative">
                        {/* TITLE */}
                        <header className="text-center">
                            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                <LockKeyhole
                                    size={19}
                                    strokeWidth={1.4}
                                    className="text-[#C77D96]"
                                />
                            </div>

                            <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#C77D96]">
                                Private Gallery
                            </p>

                            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[#F0D5DE] sm:text-4xl">
                                {mode === "login"
                                    ? "Welcome Back"
                                    : "Create Your Account"}
                            </h1>

                            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#BDA7B0]">
                                {mode === "login"
                                    ? "Sign in to access your account and private collection."
                                    : "Create an account and confirm your email to request access to the private gallery."}
                            </p>
                        </header>

                        {/* MODE SELECTOR */}
                        <div className="mb-7 mt-8 grid grid-cols-2 gap-1 rounded-xl border border-[#C77D96]/20 bg-[#090809]/70 p-1.5">
                            <button
                                type="button"
                                onClick={() => changeMode("login")}
                                aria-pressed={mode === "login"}
                                disabled={loading}
                                className={
                                    mode === "login"
                                        ? "auth-tab-active rounded-lg px-3 py-3 text-sm font-semibold"
                                        : "auth-tab-inactive rounded-lg px-3 py-3 text-sm"
                                }
                            >
                                Sign In
                            </button>

                            <button
                                type="button"
                                onClick={() => changeMode("signup")}
                                aria-pressed={mode === "signup"}
                                disabled={loading}
                                className={
                                    mode === "signup"
                                        ? "auth-tab-active rounded-lg px-3 py-3 text-sm font-semibold"
                                        : "auth-tab-inactive rounded-lg px-3 py-3 text-sm"
                                }
                            >
                                Create Account
                            </button>
                        </div>

                        {/* CALLBACK ERROR */}
                        {!error && confirmationErrorMessage && (
                            <div
                                role="alert"
                                className="mb-5 rounded-xl border border-amber-400/25 bg-amber-950/25 px-4 py-3.5"
                            >
                                <p className="text-sm leading-6 text-amber-100">
                                    {confirmationErrorMessage}
                                </p>
                            </div>
                        )}

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* EMAIL */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-[#F0D5DE]"
                                >
                                    Email address
                                </label>

                                <div className="relative">
                                    <Mail
                                        aria-hidden="true"
                                        size={17}
                                        strokeWidth={1.4}
                                        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C77D96]"
                                    />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        inputMode="email"
                                        autoComplete="email"
                                        required
                                        maxLength={254}
                                        disabled={loading}
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className="auth-input w-full rounded-xl border py-3.5 pl-12 pr-4 text-sm outline-none disabled:cursor-not-allowed"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <div className="mb-2 flex items-center justify-between gap-4">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-[#F0D5DE]"
                                    >
                                        Password
                                    </label>

                                    <span className="text-[10px] text-[#BDA7B0]">
                                        Minimum 8 characters
                                    </span>
                                </div>

                                <div className="relative">
                                    <LockKeyhole
                                        aria-hidden="true"
                                        size={17}
                                        strokeWidth={1.4}
                                        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C77D96]"
                                    />

                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete={
                                            mode === "login"
                                                ? "current-password"
                                                : "new-password"
                                        }
                                        required
                                        minLength={8}
                                        maxLength={128}
                                        disabled={loading}
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        className="auth-input w-full rounded-xl border py-3.5 pl-12 pr-12 text-sm outline-none disabled:cursor-not-allowed"
                                        placeholder="At least 8 characters"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((currentValue) => !currentValue)
                                        }
                                        disabled={loading}
                                        aria-label={
                                            showPassword ? "Hide password" : "Show password"
                                        }
                                        aria-pressed={showPassword}
                                        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border-0 bg-transparent text-[#BDA7B0] transition-colors duration-300 hover:bg-[#C77D96]/10 hover:text-[#F0D5DE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D96] disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={17} strokeWidth={1.5} />
                                        ) : (
                                            <Eye size={17} strokeWidth={1.5} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* ERROR */}
                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-xl border border-red-400/25 bg-red-950/30 px-4 py-3.5"
                                >
                                    <p className="text-sm leading-6 text-red-200">
                                        {error}
                                    </p>
                                </div>
                            )}

                            {/* SUCCESS */}
                            {message && (
                                <div
                                    role="status"
                                    className="rounded-xl border border-green-400/25 bg-green-950/25 px-4 py-4"
                                >
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck
                                            size={18}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-green-300"
                                        />

                                        <p className="text-sm leading-6 text-green-100">
                                            {message}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="auth-submit-button mt-7 gap-2 rounded-xl px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em]"
                            >
                                {loading && (
                                    <LoaderCircle
                                        size={16}
                                        strokeWidth={1.8}
                                        className="animate-spin"
                                    />
                                )}

                                {loading
                                    ? "Please wait..."
                                    : mode === "login"
                                        ? "Sign In"
                                        : "Create Account"}
                            </button>
                        </form>

                        {/* LEGAL */}
                        <p className="mt-7 text-center text-xs leading-6 text-[#BDA7B0]">
                            By continuing, you agree to use this website in accordance
                            with its terms and privacy policy.
                        </p>

                        {/* SECONDARY LINKS */}
                        <div className="mt-6 border-t border-[#C77D96]/15 pt-6 text-center">
                            <Link
                                href="/subscribe"
                                className="text-sm text-[#C77D96] transition-colors duration-300 hover:text-[#F0D5DE]"
                            >
                                Explore membership
                            </Link>

                            <span className="mx-3 text-[#C77D96]/30">•</span>

                            <Link
                                href="/"
                                className="text-sm text-[#BDA7B0] transition-colors duration-300 hover:text-[#F0D5DE]"
                            >
                                Return to website
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SECURITY NOTE */}
                <div className="mt-6 flex items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.2em] text-[#BDA7B0]/75">
                    <ShieldCheck
                        size={13}
                        strokeWidth={1.4}
                        className="text-[#C77D96]"
                    />

                    Secure member access
                </div>
            </div>
        </main>
    );
}

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <main className="flex min-h-screen items-center justify-center bg-[#090809] text-[#F0D5DE]">
                    <div className="flex items-center gap-3">
                        <LoaderCircle
                            size={19}
                            strokeWidth={1.5}
                            className="animate-spin text-[#C77D96]"
                        />

                        <p className="text-sm text-[#BDA7B0]">
                            Loading secure access...
                        </p>
                    </div>
                </main>
            }
        >
            <LoginForm />
        </Suspense>
    );
}