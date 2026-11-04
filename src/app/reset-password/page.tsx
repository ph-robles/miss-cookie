"use client";

import {
    CheckCircle2,
    Eye,
    EyeOff,
    LoaderCircle,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createSupabaseBrowserClient } from "../../lib/supabase/browser";

function getPasswordErrorMessage(error: unknown) {
    if (!(error instanceof Error)) {
        return "We could not update your password. Please request a new reset link.";
    }

    const normalizedMessage = error.message.toLowerCase();

    if (
        normalizedMessage.includes("session") ||
        normalizedMessage.includes("jwt") ||
        normalizedMessage.includes("token")
    ) {
        return "Your reset link is invalid or has expired. Please request a new one.";
    }

    if (
        normalizedMessage.includes("password should be") ||
        normalizedMessage.includes("password must be")
    ) {
        return "Your new password must contain at least 8 characters.";
    }

    if (
        normalizedMessage.includes("different") ||
        normalizedMessage.includes("same password")
    ) {
        return "Your new password must be different from your current password.";
    }

    return error.message;
}

export default function ResetPasswordPage() {
    const router = useRouter();

    const [checkingSession, setCheckingSession] = useState(true);
    const [validSession, setValidSession] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);

    const [loading, setLoading] = useState(false);
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const supabase = createSupabaseBrowserClient();
        let mounted = true;

        async function checkRecoverySession() {
            try {
                const {
                    data: { user },
                    error: userError,
                } = await supabase.auth.getUser();

                if (!mounted) {
                    return;
                }

                if (userError || !user) {
                    setValidSession(false);
                    return;
                }

                setValidSession(true);
            } catch {
                if (mounted) {
                    setValidSession(false);
                }
            } finally {
                if (mounted) {
                    setCheckingSession(false);
                }
            }
        }

        void checkRecoverySession();

        return () => {
            mounted = false;
        };
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (loading) {
            return;
        }

        setError("");

        if (password.length < 8) {
            setError("Your new password must contain at least 8 characters.");
            return;
        }

        if (password !== passwordConfirmation) {
            setError("The password confirmation does not match.");
            return;
        }

        setLoading(true);

        try {
            const supabase = createSupabaseBrowserClient();

            const { error: updateError } = await supabase.auth.updateUser({
                password,
            });

            if (updateError) {
                throw updateError;
            }

            setPassword("");
            setPasswordConfirmation("");
            setPasswordUpdated(true);

            await supabase.auth.signOut();
        } catch (updateError) {
            setError(getPasswordErrorMessage(updateError));
        } finally {
            setLoading(false);
        }
    }

    if (checkingSession) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#090809] text-[#F0D5DE]">
                <div className="flex items-center gap-3">
                    <LoaderCircle
                        size={19}
                        strokeWidth={1.5}
                        className="animate-spin text-[#C77D96]"
                    />

                    <p className="text-sm text-[#BDA7B0]">
                        Verifying your reset link...
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090809] px-5 py-12 text-[#F0D5DE] sm:py-16">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#C77D96]/[0.055] blur-[130px]" />

                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#C77D96]/[0.05] blur-[140px]" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                <Link
                    href="/"
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
                        <header className="text-center">
                            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                {passwordUpdated ? (
                                    <CheckCircle2
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-green-300"
                                    />
                                ) : (
                                    <LockKeyhole
                                        size={19}
                                        strokeWidth={1.4}
                                        className="text-[#C77D96]"
                                    />
                                )}
                            </div>

                            <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#C77D96]">
                                Secure Recovery
                            </p>

                            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[#F0D5DE] sm:text-4xl">
                                {passwordUpdated
                                    ? "Password Updated"
                                    : "Create a New Password"}
                            </h1>

                            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#BDA7B0]">
                                {passwordUpdated
                                    ? "Your password was updated successfully. You can now sign in using your new password."
                                    : "Choose a secure password for your Miss Cookie account."}
                            </p>
                        </header>

                        {!validSession && !passwordUpdated ? (
                            <div className="mt-8">
                                <div className="rounded-xl border border-red-400/25 bg-red-950/30 px-5 py-5 text-center">
                                    <p className="text-sm leading-6 text-red-200">
                                        This reset link is invalid or has expired. Request a new
                                        password reset email to continue.
                                    </p>
                                </div>

                                <Link
                                    href="/forgot-password"
                                    className="auth-submit-button mt-6 rounded-xl px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em]"
                                >
                                    Request New Link
                                </Link>
                            </div>
                        ) : passwordUpdated ? (
                            <div className="mt-8">
                                <div className="rounded-xl border border-green-400/25 bg-green-950/25 px-5 py-5">
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck
                                            size={20}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-green-300"
                                        />

                                        <p className="text-sm leading-6 text-green-100">
                                            Your previous sessions were closed on this device.
                                            Sign in again with your new password.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => router.replace("/login")}
                                    className="auth-submit-button mt-6 rounded-xl px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]"
                                >
                                    Continue to Sign In
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <div>
                                    <label
                                        htmlFor="new-password"
                                        className="mb-2 block text-sm font-medium text-[#F0D5DE]"
                                    >
                                        New password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            aria-hidden="true"
                                            size={17}
                                            strokeWidth={1.4}
                                            className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C77D96]"
                                        />

                                        <input
                                            id="new-password"
                                            name="new-password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="new-password"
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
                                            aria-label={
                                                showPassword ? "Hide password" : "Show password"
                                            }
                                            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border-0 bg-transparent text-[#BDA7B0] transition hover:bg-[#C77D96]/10 hover:text-[#F0D5DE]"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={17} strokeWidth={1.5} />
                                            ) : (
                                                <Eye size={17} strokeWidth={1.5} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="confirm-password"
                                        className="mb-2 block text-sm font-medium text-[#F0D5DE]"
                                    >
                                        Confirm new password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            aria-hidden="true"
                                            size={17}
                                            strokeWidth={1.4}
                                            className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C77D96]"
                                        />

                                        <input
                                            id="confirm-password"
                                            name="confirm-password"
                                            type={
                                                showPasswordConfirmation ? "text" : "password"
                                            }
                                            autoComplete="new-password"
                                            required
                                            minLength={8}
                                            maxLength={128}
                                            disabled={loading}
                                            value={passwordConfirmation}
                                            onChange={(event) =>
                                                setPasswordConfirmation(event.target.value)
                                            }
                                            className="auth-input w-full rounded-xl border py-3.5 pl-12 pr-12 text-sm outline-none disabled:cursor-not-allowed"
                                            placeholder="Enter the password again"
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPasswordConfirmation(
                                                    (currentValue) => !currentValue
                                                )
                                            }
                                            aria-label={
                                                showPasswordConfirmation
                                                    ? "Hide password confirmation"
                                                    : "Show password confirmation"
                                            }
                                            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg border-0 bg-transparent text-[#BDA7B0] transition hover:bg-[#C77D96]/10 hover:text-[#F0D5DE]"
                                        >
                                            {showPasswordConfirmation ? (
                                                <EyeOff size={17} strokeWidth={1.5} />
                                            ) : (
                                                <Eye size={17} strokeWidth={1.5} />
                                            )}
                                        </button>
                                    </div>
                                </div>

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

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="auth-submit-button mt-7 gap-2 rounded-xl px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]"
                                >
                                    {loading && (
                                        <LoaderCircle
                                            size={16}
                                            strokeWidth={1.8}
                                            className="animate-spin"
                                        />
                                    )}

                                    {loading ? "Updating..." : "Update Password"}
                                </button>
                            </form>
                        )}
                    </div>
                </section>

                <div className="mt-6 flex items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.2em] text-[#BDA7B0]/75">
                    <ShieldCheck
                        size={13}
                        strokeWidth={1.4}
                        className="text-[#C77D96]"
                    />

                    Secure password update
                </div>
            </div>
        </main>
    );
}