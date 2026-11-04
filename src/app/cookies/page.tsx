import type { Metadata } from "next";
import {
    Cookie,
    Database,
    KeyRound,
    Settings2,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata: Metadata = {
    title: "Cookie Policy | Miss Cookie",
    description:
        "Learn how Miss Cookie uses essential cookies and browser storage.",
};

const cookieCategories = [
    {
        icon: KeyRound,
        title: "Strictly Necessary",
        required: true,
        description:
            "Required for secure login, account authentication, session renewal and access to protected pages.",
        examples:
            "Supabase authentication cookies, session tokens and PKCE verification cookies.",
        duration:
            "Session-based or retained for the authentication period configured by the provider.",
    },
    {
        icon: Database,
        title: "Functional Storage",
        required: false,
        description:
            "Used to remember optional interface preferences within the browser.",
        examples:
            "Private gallery favorites saved in localStorage on the user's device.",
        duration:
            "Remains until removed by the user, cleared by the browser or changed by the website.",
    },
    {
        icon: Settings2,
        title: "Analytics",
        required: false,
        description:
            "Would be used to understand website performance and aggregate visitor behavior.",
        examples:
            "No optional analytics cookies are currently intentionally enabled.",
        duration: "Not currently applicable.",
    },
    {
        icon: Cookie,
        title: "Advertising",
        required: false,
        description:
            "Would be used for cross-site advertising, retargeting or behavioral profiles.",
        examples:
            "No advertising cookies or pixels are currently intentionally enabled.",
        duration: "Not currently applicable.",
    },
];

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-[#090809] text-[#F0D5DE]">
            <Header />

            <section className="relative overflow-hidden border-b border-[#C77D96]/15 px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48 lg:px-14">
                <div
                    className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C77D96]/[0.07] blur-[130px]"
                    aria-hidden="true"
                />

                <div className="relative mx-auto max-w-[1400px]">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-10 bg-[#C77D96]" />

                        <p className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                            Cookies & Browser Storage
                        </p>
                    </div>

                    <h1 className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                        Clear choices.
                        <br />

                        <span className="italic text-[#C77D96]">
                            Private experience.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-sm leading-7 text-[#BDA7B0] md:text-base">
                        This Cookie Policy explains how themisscookie.com uses
                        cookies, local browser storage and similar technologies.
                    </p>

                    <p className="mt-5 text-[9px] uppercase tracking-[0.22em] text-[#BDA7B0]">
                        Last updated November 4, 2026
                    </p>
                </div>
            </section>

            <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
                <div className="mx-auto max-w-[1200px]">
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                        <aside>
                            <div className="sticky top-28 rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/40 p-7">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                    <Cookie
                                        size={21}
                                        strokeWidth={1.4}
                                        className="text-[#C77D96]"
                                    />
                                </div>

                                <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl">
                                    What is a cookie?
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-[#BDA7B0]">
                                    A cookie is a small piece of data stored by a browser.
                                    Cookies can maintain a login session, remember a choice
                                    or provide information about how a website is used.
                                </p>

                                <Link
                                    href="/privacy"
                                    className="mt-6 inline-block text-sm text-[#C77D96] transition hover:text-[#F0D5DE]"
                                >
                                    View Privacy Policy
                                </Link>
                            </div>
                        </aside>

                        <article>
                            <h2 className="font-[family-name:var(--font-display)] text-4xl tracking-[-0.035em] sm:text-5xl">
                                Cookies used by this website
                            </h2>

                            <p className="mt-6 text-sm leading-7 text-[#BDA7B0]">
                                The website currently uses technologies required for
                                authentication, account security and requested
                                functionality. The exact technical cookie names may
                                change when the authentication provider updates its
                                session format.
                            </p>

                            <div className="mt-10 space-y-5">
                                {cookieCategories.map((category) => {
                                    const Icon = category.icon;

                                    return (
                                        <section
                                            key={category.title}
                                            className="rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/35 p-6 sm:p-8"
                                        >
                                            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                                        <Icon
                                                            size={18}
                                                            strokeWidth={1.4}
                                                            className="text-[#C77D96]"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h3 className="font-[family-name:var(--font-display)] text-2xl">
                                                            {category.title}
                                                        </h3>

                                                        <span
                                                            className={
                                                                category.required
                                                                    ? "mt-1 inline-block text-[9px] uppercase tracking-[0.2em] text-green-300"
                                                                    : "mt-1 inline-block text-[9px] uppercase tracking-[0.2em] text-[#BDA7B0]"
                                                            }
                                                        >
                                                            {category.required
                                                                ? "Always active"
                                                                : "Optional or not currently used"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="mt-6 text-sm leading-7 text-[#BDA7B0]">
                                                {category.description}
                                            </p>

                                            <dl className="mt-6 grid gap-5 border-t border-[#C77D96]/15 pt-6 sm:grid-cols-2">
                                                <div>
                                                    <dt className="text-[9px] uppercase tracking-[0.22em] text-[#C77D96]">
                                                        Examples
                                                    </dt>

                                                    <dd className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                                                        {category.examples}
                                                    </dd>
                                                </div>

                                                <div>
                                                    <dt className="text-[9px] uppercase tracking-[0.22em] text-[#C77D96]">
                                                        Duration
                                                    </dt>

                                                    <dd className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                                                        {category.duration}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </section>
                                    );
                                })}
                            </div>

                            <section className="mt-14 border-t border-[#C77D96]/15 pt-12">
                                <h2 className="font-[family-name:var(--font-display)] text-3xl">
                                    Managing cookies
                                </h2>

                                <p className="mt-5 text-sm leading-7 text-[#BDA7B0]">
                                    Browser settings can be used to inspect, block or
                                    remove cookies and local storage. Blocking strictly
                                    necessary authentication cookies may prevent login,
                                    session renewal and access to the private gallery.
                                </p>

                                <p className="mt-5 text-sm leading-7 text-[#BDA7B0]">
                                    To remove locally stored gallery favorites, clear the
                                    website data for themisscookie.com through the browser
                                    settings.
                                </p>
                            </section>

                            <section className="mt-14 rounded-2xl border border-[#C77D96]/20 bg-gradient-to-br from-[#2B1721] to-[#120B0F] p-7 sm:p-9">
                                <ShieldCheck
                                    size={23}
                                    strokeWidth={1.3}
                                    className="text-[#C77D96]"
                                />

                                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                                    Future technologies
                                </h2>

                                <p className="mt-4 text-sm leading-7 text-[#BDA7B0]">
                                    If analytics, advertising pixels, embedded media or
                                    other optional tracking technologies are added later,
                                    this Cookie Policy and the consent interface will be
                                    updated before those technologies are intentionally
                                    activated.
                                </p>
                            </section>
                        </article>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}