"use client";

import { Cookie, Settings2, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "miss-cookie-cookie-notice";

export default function CookieNotice() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const noticeAccepted = window.localStorage.getItem(STORAGE_KEY);

        if (!noticeAccepted) {
            setVisible(true);
        }
    }, []);

    function acknowledgeNotice() {
        window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({
                acknowledged: true,
                date: new Date().toISOString(),
                version: "2026-11-04",
            })
        );

        setVisible(false);
    }

    if (!visible) {
        return null;
    }

    return (
        <aside
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-notice-title"
            className="fixed inset-x-4 bottom-4 z-[200] mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#C77D96]/30 bg-[#160E12]/95 shadow-[0_30px_100px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6"
        >
            <div className="relative flex flex-col gap-6 p-5 sm:p-6 md:flex-row md:items-center md:justify-between">
                <button
                    type="button"
                    onClick={acknowledgeNotice}
                    aria-label="Close cookie notice"
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#BDA7B0] transition hover:bg-[#C77D96]/10 hover:text-[#F0D5DE] md:hidden"
                >
                    <X size={16} strokeWidth={1.4} />
                </button>

                <div className="flex max-w-2xl items-start gap-4 pr-8 md:pr-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                        <Cookie
                            size={19}
                            strokeWidth={1.4}
                            className="text-[#C77D96]"
                        />
                    </div>

                    <div>
                        <h2
                            id="cookie-notice-title"
                            className="font-[family-name:var(--font-display)] text-xl text-[#F0D5DE]"
                        >
                            Essential cookies
                        </h2>

                        <p className="mt-2 text-xs leading-6 text-[#BDA7B0] sm:text-sm">
                            This website uses essential cookies for secure login,
                            account sessions and private gallery access. Optional
                            advertising cookies are not currently enabled.
                        </p>

                        <div className="mt-3 flex flex-wrap gap-4 text-xs">
                            <Link
                                href="/cookies"
                                className="inline-flex items-center gap-2 text-[#C77D96] transition hover:text-[#F0D5DE]"
                            >
                                <Settings2 size={13} strokeWidth={1.4} />
                                Cookie Policy
                            </Link>

                            <Link
                                href="/privacy"
                                className="text-[#BDA7B0] transition hover:text-[#F0D5DE]"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={acknowledgeNotice}
                    className="shrink-0 rounded-xl border border-[#C77D96] bg-[#C77D96] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#090809] transition hover:border-[#F0D5DE] hover:bg-[#F0D5DE]"
                >
                    Understood
                </button>
            </div>
        </aside>
    );
}