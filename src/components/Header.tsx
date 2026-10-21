
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
    { label: "Travel", href: "/travel" },
    { label: "Rates", href: "/rates" },
];

function CookieMark({ small = false }: { small?: boolean }) {
    return (
        <span
            aria-hidden="true"
            className={`cookie-mark ${small ? "cookie-mark--small" : ""}`}
        >
            <span className="cookie-chip cookie-chip--1" />
            <span className="cookie-chip cookie-chip--2" />
            <span className="cookie-chip cookie-chip--3" />
            <span className="cookie-chip cookie-chip--4" />
        </span>
    );
}

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="absolute inset-0 border-b border-[#C77D96]/[0.08] bg-[#090809]/65 backdrop-blur-xl" />

            <div className="relative mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
                {/* BRAND */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-2.5"
                    aria-label="Miss Cookie home"
                >
                    <span className="font-sans text-[10px] font-semibold tracking-[0.35em] text-[#F0D5DE]/90">
                        MISS
                    </span>

                    <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#F0D5DE] transition-colors duration-300 group-hover:text-[#C77D96] md:text-3xl">
                        COOKIE
                    </span>

                    <CookieMark small />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="nav-link text-[10px] font-medium uppercase tracking-[0.22em] text-[#F0D5DE]/75"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="private-inquiry-button ml-3 border border-[#C77D96]/50 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#F0D5DE]"
                    >
                        <span>Private Inquiry</span>
                    </Link>
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="relative z-[60] flex h-11 w-11 items-center justify-center text-[#F0D5DE] transition-colors hover:text-[#C77D96] lg:hidden"
                >
                    {menuOpen ? (
                        <X size={25} strokeWidth={1.25} />
                    ) : (
                        <Menu size={25} strokeWidth={1.25} />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-40 bg-[#090809] transition-all duration-500 lg:hidden ${menuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
            >
                <div
                    className={`relative flex h-full flex-col items-center justify-center overflow-hidden px-8 transition-transform duration-500 ${menuOpen ? "translate-y-0" : "translate-y-3"
                        }`}
                >
                    {/* ROSE LIGHTING */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(199,125,150,0.13),transparent_52%)]" />

                    <div className="absolute left-10 top-32 opacity-40">
                        <CookieMark />
                    </div>

                    <div className="absolute bottom-36 right-10 opacity-25">
                        <CookieMark small />
                    </div>

                    <p className="relative mb-10 text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                        Private Experiences
                    </p>

                    <nav className="relative flex flex-col items-center gap-6">
                        {navigation.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                                }}
                                className={`mobile-nav-link font-[family-name:var(--font-display)] text-[2.35rem] leading-none text-[#F0D5DE] transition-all duration-500 hover:text-[#C77D96] ${menuOpen
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-3 opacity-0"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="private-inquiry-button mt-6 border border-[#C77D96]/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#F0D5DE]"
                        >
                            <span>Private Inquiry</span>
                        </Link>
                    </nav>

                    {/* LANGUAGE */}
                    <div className="absolute bottom-8 flex gap-7 text-[9px] uppercase tracking-[0.3em] text-[#BDA7B0]">
                        <button
                            type="button"
                            className="transition-colors duration-300 hover:text-[#C77D96]"
                        >
                            EN
                        </button>

                        <button
                            type="button"
                            className="transition-colors duration-300 hover:text-[#C77D96]"
                        >
                            PT
                        </button>
                    </div>

                    {/* SIGNATURE */}
                    <div className="absolute bottom-8 right-8 hidden items-center gap-2 sm:flex">
                        <span className="h-px w-8 bg-[#C77D96]/40" />
                        <span className="text-[8px] uppercase tracking-[0.3em] text-[#BDA7B0]/60">
                            MC
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
