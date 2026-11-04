"use client";

import {
    ArrowUpRight,
    Images,
    LoaderCircle,
    LockKeyhole,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { createSupabaseBrowserClient } from "../lib/supabase/browser";

type AccessStatus = "loading" | "anonymous" | "pending" | "authorized";

export default function PrivateGalleryAccessCard() {
    const [status, setStatus] = useState<AccessStatus>("loading");

    useEffect(() => {
        let mounted = true;

        async function checkAccess() {
            try {
                const response = await fetch("/api/private-gallery", {
                    method: "GET",
                    cache: "no-store",
                    credentials: "include",
                });

                if (!mounted) {
                    return;
                }

                if (response.status === 401) {
                    setStatus("anonymous");
                    return;
                }

                if (response.status === 403) {
                    setStatus("pending");
                    return;
                }

                if (response.ok) {
                    setStatus("authorized");
                    return;
                }

                const supabase = createSupabaseBrowserClient();

                const {
                    data: { user },
                } = await supabase.auth.getUser();

                setStatus(user ? "pending" : "anonymous");
            } catch {
                if (mounted) {
                    setStatus("anonymous");
                }
            }
        }

        void checkAccess();

        return () => {
            mounted = false;
        };
    }, []);

    const isAuthorized = status === "authorized";
    const isPending = status === "pending";

    const destination =
        status === "anonymous"
            ? "/login?next=/private-gallery"
            : "/private-gallery";

    return (
        <section className="relative overflow-hidden border-y border-[#C77D96]/15 bg-[#24151D]/50 px-6 py-14 md:px-10 md:py-20 lg:px-14">
            <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C77D96]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-[1400px]">
                <div className="overflow-hidden rounded-2xl border border-[#C77D96]/25 bg-gradient-to-br from-[#2E1823] via-[#1A1015] to-[#090809] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                    <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
                        <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10 px-3 py-1.5">
                                <LockKeyhole
                                    size={13}
                                    strokeWidth={1.5}
                                    className="text-[#C77D96]"
                                />

                                <span className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
                                    Members Only
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-display)] text-4xl leading-tight text-[#F0D5DE] sm:text-5xl">
                                A more intimate private collection
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#BDA7B0] sm:text-base">
                                A curated selection reserved for approved members, shared
                                through secure and temporary access.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.2em] text-[#BDA7B0]">
                                <span className="inline-flex items-center gap-2">
                                    <ShieldCheck
                                        size={14}
                                        strokeWidth={1.5}
                                        className="text-[#C77D96]"
                                    />
                                    Secure access
                                </span>

                                <span className="inline-flex items-center gap-2">
                                    <Images
                                        size={14}
                                        strokeWidth={1.5}
                                        className="text-[#C77D96]"
                                    />
                                    Exclusive content
                                </span>
                            </div>

                            <div className="mt-9">
                                {status === "loading" ? (
                                    <div className="inline-flex items-center gap-3 rounded-xl border border-[#C77D96]/25 px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#BDA7B0]">
                                        <LoaderCircle
                                            size={16}
                                            strokeWidth={1.6}
                                            className="animate-spin text-[#C77D96]"
                                        />
                                        Checking access
                                    </div>
                                ) : (
                                    <Link
                                        href={destination}
                                        className="group inline-flex items-center gap-3 rounded-xl border border-[#C77D96] bg-[#C77D96] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#090809] shadow-[0_14px_40px_rgba(199,125,150,0.22)] transition duration-300 hover:border-[#F0D5DE] hover:bg-[#F0D5DE]"
                                    >
                                        {isAuthorized
                                            ? "Open Private Gallery"
                                            : isPending
                                                ? "View Access Status"
                                                : "Member Sign In"}

                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </Link>
                                )}
                            </div>

                            {isAuthorized && (
                                <p className="mt-4 text-xs text-green-300">
                                    Your private gallery access is active.
                                </p>
                            )}

                            {isPending && (
                                <p className="mt-4 text-xs leading-6 text-amber-200">
                                    Your account is active, but private gallery approval is
                                    still pending.
                                </p>
                            )}
                        </div>

                        <div className="relative hidden min-h-[420px] border-l border-[#C77D96]/15 bg-[#090809] lg:flex lg:items-center lg:justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,125,150,0.16),transparent_64%)]" />

                            <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/[0.06]">
                                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C77D96]/20 bg-[#090809]/70 shadow-[0_0_60px_rgba(199,125,150,0.14)]">
                                    <LockKeyhole
                                        size={38}
                                        strokeWidth={1.1}
                                        className="text-[#C77D96]"
                                    />
                                </div>
                            </div>

                            <p className="absolute bottom-10 text-[9px] uppercase tracking-[0.3em] text-[#BDA7B0]">
                                Private member experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}