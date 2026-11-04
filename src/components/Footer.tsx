"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Images, LogIn, UserRound } from "lucide-react";
import type { User } from "@supabase/supabase-js";

import SignOutButton from "./SignOutButton";
import { createSupabaseBrowserClient } from "../lib/supabase/browser";

const navigation = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
    { label: "Travel", href: "/travel" },
    { label: "Rates", href: "/rates" },
    { label: "Contact", href: "/contact" },
    { label: "Etiquette", href: "/etiquette" },
];

export default function Footer() {
    const [user, setUser] = useState<User | null>(null);
    const [checkingSession, setCheckingSession] = useState(true);

    useEffect(() => {
        const supabase = createSupabaseBrowserClient();
        let mounted = true;

        async function loadUser() {
            try {
                const {
                    data: { user: authenticatedUser },
                } = await supabase.auth.getUser();

                if (mounted) {
                    setUser(authenticatedUser);
                }
            } catch (error) {
                console.error("Unable to load the authenticated user:", error);

                if (mounted) {
                    setUser(null);
                }
            } finally {
                if (mounted) {
                    setCheckingSession(false);
                }
            }
        }

        void loadUser();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!mounted) {
                return;
            }

            setUser(session?.user ?? null);
            setCheckingSession(false);
        });

        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, []);

    return (
        <footer className="relative overflow-hidden border-t border-[#C77D96]/10 bg-[#090809] px-6 pb-8 pt-20 md:px-10 md:pt-28 lg:px-14">
            {/* SUBTLE ROSE LIGHT */}
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#C77D96]/[0.045] blur-[120px]" />

            <div className="relative mx-auto max-w-[1400px]">
                {/* TOP */}
                <div className="grid gap-14 border-b border-[#F0D5DE]/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.8fr_1fr] lg:pb-20">
                    {/* BRAND */}
                    <div>
                        <Link href="/" className="group inline-flex items-center gap-2">
                            <span className="font-sans text-[11px] font-semibold tracking-[0.35em] text-[#F0D5DE]">
                                MISS
                            </span>

                            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[#F0D5DE] transition-colors duration-300 group-hover:text-[#C77D96]">
                                COOKIE
                            </span>
                        </Link>

                        <p className="mt-7 max-w-sm text-sm leading-7 text-[#BDA7B0]">
                            Private experiences in USA, thoughtfully arranged with elegance,
                            discretion and genuine connection.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <div className="h-px w-10 bg-[#C77D96]/70" />

                            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                                USA & Beyond
                            </span>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#C77D96]">
                            Explore
                        </p>

                        <nav
                            aria-label="Footer navigation"
                            className="grid grid-cols-2 gap-x-8 gap-y-4"
                        >
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="w-fit text-xs text-[#BDA7B0] transition-colors duration-300 hover:text-[#F0D5DE]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* MEMBER AREA */}
                    <div>
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#C77D96]">
                            Member Access
                        </p>

                        {checkingSession ? (
                            <p className="text-xs text-[#BDA7B0]">
                                Checking your session...
                            </p>
                        ) : user ? (
                            <div className="space-y-3">
                                <p className="mb-5 break-all text-xs leading-6 text-[#BDA7B0]">
                                    Signed in as{" "}
                                    <span className="text-[#F0D5DE]">{user.email}</span>
                                </p>

                                <Link
                                    href="/private-gallery"
                                    className="group flex w-full items-center justify-between rounded-lg bg-[#C77D96] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#090809] transition-colors duration-300 hover:bg-[#F0D5DE]"
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <Images size={15} strokeWidth={1.5} />
                                        Private Gallery
                                    </span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.3}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>

                                <Link
                                    href="/account"
                                    className="group flex w-full items-center justify-between rounded-lg border border-[#C77D96]/30 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F0D5DE] transition-colors duration-300 hover:bg-[#C77D96]/10"
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <UserRound size={15} strokeWidth={1.5} />
                                        My Account
                                    </span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.3}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>

                                <SignOutButton className="w-full rounded-lg border border-[#F0D5DE]/15 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#BDA7B0] transition-colors duration-300 hover:border-red-300/30 hover:bg-red-500/10 hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-50" />
                            </div>
                        ) : (
                            <div>
                                <p className="mb-5 text-sm leading-6 text-[#BDA7B0]">
                                    Sign in to access your account and private gallery.
                                </p>

                                <Link
                                    href="/login?next=/private-gallery"
                                    className="group flex w-full items-center justify-between rounded-lg border border-[#C77D96]/40 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F0D5DE] transition-colors duration-300 hover:bg-[#C77D96]/10"
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <LogIn size={15} strokeWidth={1.5} />
                                        Member Sign In
                                    </span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.3}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* CONTACT */}
                    <div>
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#C77D96]">
                            Private Inquiries
                        </p>

                        <p className="max-w-xs text-sm leading-6 text-[#BDA7B0]">
                            For availability and private arrangements, please get in touch.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F0D5DE] transition-colors duration-300 hover:text-[#C77D96]"
                        >
                            Get in touch

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.3}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col gap-5 py-7 text-[9px] uppercase tracking-[0.25em] text-[#BDA7B0] md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Miss Cookie. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link
                            href="/privacy"
                            className="transition-colors duration-300 hover:text-[#F0D5DE]"
                        >
                            Privacy
                        </Link>

                        <span>Discretion</span>

                        {user && (
                            <Link
                                href="/private-gallery"
                                className="transition-colors duration-300 hover:text-[#F0D5DE]"
                            >
                                Private Gallery
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}