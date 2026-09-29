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
    { label: "Etiquette", href: "/etiquette" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />

            <div className="relative mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
                {/* LOGO */}
                <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center gap-2"
                >
                    <span className="font-sans text-[10px] font-semibold tracking-[0.35em] text-[#F3EEE6]">
                        MISS
                    </span>

                    <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#F3EEE6] md:text-3xl">
                        COOKIE
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#F3EEE6]/80 transition-colors duration-300 hover:text-[#C7B18A]"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="ml-3 border border-[#F3EEE6]/30 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#F3EEE6] transition-all duration-300 hover:border-[#C7B18A] hover:text-[#C7B18A]"
                    >
                        Get in touch
                    </Link>
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="relative z-50 flex h-11 w-11 items-center justify-center text-[#F3EEE6] lg:hidden"
                >
                    {menuOpen ? (
                        <X size={24} strokeWidth={1.5} />
                    ) : (
                        <Menu size={24} strokeWidth={1.5} />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`fixed inset-0 z-40 bg-[#0A0908] transition-all duration-500 lg:hidden ${menuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                    }`}
            >
                <div className="flex h-full flex-col items-center justify-center px-8">
                    <p className="mb-10 text-[9px] uppercase tracking-[0.4em] text-[#A99F94]">
                        Private Experiences
                    </p>

                    <nav className="flex flex-col items-center gap-7">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="font-[family-name:var(--font-display)] text-4xl text-[#F3EEE6] transition-colors hover:text-[#C7B18A]"
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-5 border border-[#C7B18A]/50 px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-[#C7B18A]"
                        >
                            Get in touch
                        </Link>
                    </nav>

                    <div className="absolute bottom-8 flex gap-6 text-[9px] uppercase tracking-[0.3em] text-[#A99F94]">
                        <span>EN</span>
                        <span>PT</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
