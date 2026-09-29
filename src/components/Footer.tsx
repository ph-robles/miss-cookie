import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
    { label: "Travel", href: "/travel" },
    { label: "Rates", href: "/rates" },
    { label: "Etiquette", href: "/etiquette" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0A0908] px-6 pb-8 pt-20 md:px-10 md:pt-28 lg:px-14">
            <div className="mx-auto max-w-[1400px]">
                {/* TOP */}
                <div className="grid gap-14 border-b border-[#F3EEE6]/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:pb-20">
                    {/* BRAND */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2"
                        >
                            <span className="font-sans text-[11px] font-semibold tracking-[0.35em] text-[#F3EEE6]">
                                MISS
                            </span>

                            <span className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-[#F3EEE6]">
                                COOKIE
                            </span>
                        </Link>

                        <p className="mt-7 max-w-sm text-sm leading-7 text-[#A99F94]">
                            Private experiences in Orlando, Florida, thoughtfully arranged
                            with elegance, discretion and genuine connection.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <div className="h-px w-10 bg-[#C7B18A]/60" />

                            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C7B18A]">
                                Orlando · Florida
                            </span>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#C7B18A]">
                            Explore
                        </p>

                        <nav className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-xs text-[#A99F94] transition-colors duration-300 hover:text-[#F3EEE6]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.35em] text-[#C7B18A]">
                            Private Inquiries
                        </p>

                        <p className="max-w-xs text-sm leading-6 text-[#A99F94]">
                            For availability and private arrangements, please get in touch.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F3EEE6]"
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
                <div className="flex flex-col gap-5 py-7 text-[9px] uppercase tracking-[0.25em] text-[#A99F94] md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Miss Cookie. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <span>Privacy</span>
                        <span>Discretion</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
