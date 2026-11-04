"use client";

import {
    ArrowLeft,
    LoaderCircle,
    LockKeyhole,
    Mail,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { createSupabaseBrowserClient } from "../../lib/supabase/browser";

function getResetErrorMessage(error: unknown) {
    if (!(error instanceof Error)) {
        return "We could not send the password reset email. Please try again.";
    }

    const normalizedMessage = error.message.toLowerCase();

    if (
        normalizedMessage.includes("rate limit") ||
        normalizedMessage.includes("too many requests")
    ) {
        return "Too many requests. Please wait a few minutes before trying again.";
    }

    if (normalizedMessage.includes("email")) {
        return "We could not send the password reset email. Please check the address and try again.";
    }

    return error.message;
}

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (loading) {
            return;
        }

        setLoading(true);
        setError("");

        const normalizedEmail = email.trim().toLowerCase();

        try {
            const supabase = createSupabaseBrowserClient();

            const { error: resetError } =
                await supabase.auth.resetPasswordForEmail(normalizedEmail, {
                    redirectTo: `${window.location.origin}/reset-password`,
                });

            if (resetError) {
                throw resetError;
            }

            setEmail(normalizedEmail);
            setEmailSent(true);
        } catch (resetError) {
            setError(getResetErrorMessage(resetError));
        } finally {
            setLoading(false);
        }
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
                        <header className="text-center">
                            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                <LockKeyhole
                                    size={19}
                                    strokeWidth={1.4}
                                    className="text-[#C77D96]"
                                />
                            </div>

                            <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#C77D96]">
                                Account Recovery
                            </p>

                            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[#F0D5DE] sm:text-4xl">
                                {emailSent ? "Check Your Email" : "Forgot Your Password?"}
                            </h1>

                            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#BDA7B0]">
                                {emailSent
                                    ? "If an account exists for this address, you will receive instructions to create a new password."
                                    : "Enter the email connected to your account and we will send you a secure reset link."}
                            </p>
                        </header>

                        {emailSent ? (
                            <div className="mt-8">
                                <div
                                    role="status"
                                    className="rounded-xl border border-green-400/25 bg-green-950/25 px-5 py-5"
                                >
                                    <div className="flex items-start gap-3">
                                        <ShieldCheck
                                            size={20}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-green-300"
                                        />

                                        <div>
                                            <p className="text-sm font-medium text-green-100">
                                                Reset instructions sent
                                            </p>

                                            <p className="mt-2 break-all text-sm leading-6 text-green-100/75">
                                                Check the inbox and spam folder for:
                                                <br />
                                                <span className="text-green-100">{email}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setEmailSent(false);
                                        setError("");
                                    }}
                                    className="auth-submit-button mt-6 rounded-xl px-5 py-4 text-xs font-semibold uppercase tracking-[0.18em]"
                                >
                                    Send Another Email
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                <div>
                                    <label
                                        htmlFor="recovery-email"
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
                                            id="recovery-email"
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

                                    {loading ? "Sending..." : "Send Reset Link"}
                                </button>
                            </form>
                        )}

                        <div className="mt-7 border-t border-[#C77D96]/15 pt-6 text-center">
                            <Link
                                href="/login"
                                className="inline-flex items-center gap-2 text-sm text-[#C77D96] transition-colors duration-300 hover:text-[#F0D5DE]"
                            >
                                <ArrowLeft size={15} strokeWidth={1.5} />
                                Return to sign in
                            </Link>
                        </div>
                    </div>
                </section>

                <div className="mt-6 flex items-center justify-center gap-2 text-center text-[9px] uppercase tracking-[0.2em] text-[#BDA7B0]/75">
                    <ShieldCheck
                        size={13}
                        strokeWidth={1.4}
                        className="text-[#C77D96]"
                    />

                    Secure account recovery
                </div>
            </div>
        </main>
    );
}