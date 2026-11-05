"use client";

import {
    LockKeyhole,
    Menu,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    useEffect,
    useState,
} from "react";

const navigation = [
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Experience",
        href: "/experience",
    },
    {
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Travel",
        href: "/travel",
    },
    {
        label: "Rates",
        href: "/rates",
    },
];

function CookieMark({
    small = false,
}: {
    small?: boolean;
}) {
    return (
        <span
            aria-hidden="true"
            className={`cookie-mark ${small ? "cookie-mark--small" : ""
                }`}
        >
            <span className="cookie-chip cookie-chip--1" />
            <span className="cookie-chip cookie-chip--2" />
            <span className="cookie-chip cookie-chip--3" />
            <span className="cookie-chip cookie-chip--4" />
        </span>
    );
}

export default function Header() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setMenuOpen(false);
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [menuOpen]);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    function closeMenu() {
        setMenuOpen(false);
    }

    function isActiveRoute(href: string) {
        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* BACKGROUND */}
            <div
                className="absolute inset-0 border-b border-[#C77D96]/[0.08] bg-[#090809]/70 backdrop-blur-xl"
                aria-hidden="true"
            />

            <div className="relative mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
                {/* BRAND */}
                <Link
                    href="/"
                    onClick={closeMenu}
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

                {/* DESKTOP NAVIGATION */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-7 lg:flex"
                >
                    {navigation.map((item) => {
                        const active = isActiveRoute(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                aria-current={
                                    active ? "page" : undefined
                                }
                                className={`nav-link text-[10px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${active
                                        ? "text-[#F0D5DE]"
                                        : "text-[#F0D5DE]/75"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}

                    {/* PRIVATE GALLERY BUTTON */}
                    <Link
                        href="/login"
                        aria-label="Discover Private Gallery membership"
                        className="private-inquiry-button group ml-3 min-h-12 px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em]"
                    >
                        <span>Private Gallery</span>

                        <LockKeyhole
                            size={14}
                            strokeWidth={1.4}
                            className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                            aria-hidden="true"
                        />
                    </Link>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    aria-label={
                        menuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() =>
                        setMenuOpen((currentValue) => !currentValue)
                    }
                    className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-transparent bg-transparent text-[#F0D5DE] transition duration-300 hover:border-[#C77D96]/20 hover:bg-[#C77D96]/10 hover:text-[#C77D96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D96] lg:hidden"
                >
                    {menuOpen ? (
                        <X
                            size={25}
                            strokeWidth={1.25}
                            aria-hidden="true"
                        />
                    ) : (
                        <Menu
                            size={25}
                            strokeWidth={1.25}
                            aria-hidden="true"
                        />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            <div
                id="mobile-navigation"
                aria-hidden={!menuOpen}
                className={`fixed inset-0 z-40 bg-[#090809] transition-all duration-500 lg:hidden ${menuOpen
                        ? "pointer-events-auto visible opacity-100"
                        : "pointer-events-none invisible opacity-0"
                    }`}
            >
                <div
                    className={`relative flex h-full flex-col items-center justify-center overflow-y-auto px-8 pb-24 pt-28 transition-transform duration-500 ${menuOpen
                            ? "translate-y-0"
                            : "translate-y-3"
                        }`}
                >
                    {/* ROSE LIGHTING */}
                    <div
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(199,125,150,0.13),transparent_52%)]"
                        aria-hidden="true"
                    />

                    <div
                        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#C77D96]/[0.06] blur-[100px]"
                        aria-hidden="true"
                    />

                    <div className="absolute left-10 top-32 opacity-40">
                        <CookieMark />
                    </div>

                    <div className="absolute bottom-36 right-10 opacity-25">
                        <CookieMark small />
                    </div>

                    <p className="relative mb-9 text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                        Private Experiences
                    </p>

                    <nav
                        aria-label="Mobile navigation"
                        className="relative flex w-full max-w-sm flex-col items-center gap-5"
                    >
                        {navigation.map((item, index) => {
                            const active = isActiveRoute(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMenu}
                                    aria-current={
                                        active ? "page" : undefined
                                    }
                                    style={{
                                        transitionDelay: menuOpen
                                            ? `${index * 35}ms`
                                            : "0ms",
                                    }}
                                    className={`mobile-nav-link font-[family-name:var(--font-display)] text-[2.35rem] leading-none transition-all duration-500 ${active
                                            ? "text-[#C77D96]"
                                            : "text-[#F0D5DE] hover:text-[#C77D96]"
                                        } ${menuOpen
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-3 opacity-0"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}

                        {/* MOBILE PRIVATE GALLERY BUTTON */}
                        <Link
                            href="/login"
                            onClick={closeMenu}
                            className={`private-inquiry-button group mt-6 w-full max-w-xs px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${menuOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-3 opacity-0"
                                }`}
                            style={{
                                transitionDelay: menuOpen
                                    ? `${navigation.length * 35 + 50}ms`
                                    : "0ms",
                            }}
                        >
                            <span>Private Gallery</span>

                            <LockKeyhole
                                size={15}
                                strokeWidth={1.4}
                                className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                                aria-hidden="true"
                            />
                        </Link>

                        <p className="mt-1 max-w-xs text-center text-[10px] leading-5 text-[#BDA7B0]/65">
                            Discover exclusive members-only access and
                            private gallery information.
                        </p>
                    </nav>

                    {/* CONTACT LINK */}
                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="relative mt-8 inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#BDA7B0] transition-colors duration-300 hover:text-[#C77D96]"
                    >
                        Private inquiry

                        <span
                            className="h-px w-8 bg-[#C77D96]/55"
                            aria-hidden="true"
                        />
                    </Link>

                    {/* LANGUAGE DISPLAY */}
                    <div className="absolute bottom-8 left-8 flex gap-7 text-[9px] uppercase tracking-[0.3em] text-[#BDA7B0]">
                        <span className="text-[#C77D96]">
                            EN
                        </span>
                    </div>

                    {/* SIGNATURE */}
                    <div className="absolute bottom-8 right-8 flex items-center gap-2">
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