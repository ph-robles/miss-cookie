
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    LockKeyhole,
    Sparkles,
} from "lucide-react";

const benefits = [
    "Access to the exclusive members gallery",
    "Private photographs while membership is active",
    "New content as it becomes available",
    "Secure access to your private collection",
];

export default function SubscribePage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#090809] text-[#F0D5DE]">
            {/* Header */}
            <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 md:px-10">
                <Link
                    href="/"
                    className="text-[10px] uppercase tracking-[0.3em] text-[#F0D5DE]/70 transition-colors hover:text-[#C77D96]"
                >
                    Miss Cookie
                </Link>

                <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#F0D5DE]/60 transition-colors hover:text-[#C77D96]"
                >
                    <ArrowLeft size={13} aria-hidden="true" />
                    Gallery
                </Link>
            </header>

            {/* Hero */}
            <section className="relative px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
                <div
                    className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C77D96]/[0.08] blur-3xl"
                    aria-hidden="true"
                />

                <div className="relative mx-auto max-w-4xl text-center">
                    <div className="mb-8 inline-flex items-center gap-3 border border-[#C77D96]/30 px-4 py-3">
                        <Sparkles
                            size={14}
                            className="text-[#C77D96]"
                            aria-hidden="true"
                        />
                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                            A private experience
                        </span>
                    </div>

                    <h1 className="text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl">
                        Beyond the
                        <br />
                        <span className="font-light italic text-[#C77D96]">
                            public gallery.
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#F0D5DE]/65 md:text-base">
                        Enter a more personal collection of photographs,
                        curated for members who appreciate elegance,
                        atmosphere and the beauty of every detail.
                    </p>
                </div>
            </section>

            {/* Membership card */}
            <section className="px-6 pb-24 md:px-10 md:pb-32">
                <div className="mx-auto grid max-w-5xl overflow-hidden border border-[#C77D96]/25 md:grid-cols-2">
                    <div className="relative flex flex-col justify-between bg-[#24151D] p-8 sm:p-12">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.35em] text-[#C77D96]">
                                Membership
                            </p>

                            <h2 className="mt-5 text-4xl tracking-[-0.04em] sm:text-5xl">
                                The Private
                                <br />
                                <span className="italic text-[#C77D96]">
                                    Collection
                                </span>
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-[#F0D5DE]/65">
                                Your personal access to the exclusive
                                members gallery, available for as long
                                as your subscription remains active.
                            </p>
                        </div>

                        <div className="mt-12 flex items-center gap-3 border-t border-[#F0D5DE]/10 pt-6">
                            <LockKeyhole
                                size={17}
                                strokeWidth={1.2}
                                className="text-[#C77D96]"
                                aria-hidden="true"
                            />
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#F0D5DE]/60">
                                Private members access
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#0D0B0D] p-8 sm:p-12">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                            Your membership includes
                        </p>

                        <ul className="mt-8 space-y-5">
                            {benefits.map((benefit) => (
                                <li
                                    key={benefit}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-[#C77D96]/40">
                                        <Check
                                            size={12}
                                            className="text-[#C77D96]"
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <span className="text-sm leading-6 text-[#F0D5DE]/75">
                                        {benefit}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 border-t border-[#F0D5DE]/10 pt-7">
                            <p className="text-[9px] uppercase tracking-[0.25em] text-[#F0D5DE]/45">
                                Monthly subscription
                            </p>

                            <p className="mt-3 text-sm leading-6 text-[#F0D5DE]/65">
                                Membership pricing and payment options
                                will be presented at checkout.
                            </p>

                            <Link
                                href="/contact"
                                className="group mt-7 inline-flex w-full items-center justify-between gap-4 bg-[#C77D96] px-5 py-4 text-[9px] uppercase tracking-[0.2em] text-[#090809] transition-colors hover:bg-[#F0D5DE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                            >
                                Inquire about membership
                                <ArrowRight
                                    size={16}
                                    className="transition-transform group-hover:translate-x-1"
                                    aria-hidden="true"
                                />
                            </Link>

                            <p className="mt-4 text-center text-[10px] leading-5 text-[#F0D5DE]/35">
                                Secure checkout will be available once
                                payments are configured.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer note */}
            <footer className="border-t border-[#F0D5DE]/10 px-6 py-8 text-center">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#F0D5DE]/35">
                    Miss Cookie · Private Collection
                </p>

                <Link
                    href="/"
                    className="mt-4 inline-block text-xs text-[#C77D96] transition-colors hover:text-[#F0D5DE]"
                >
                    Return to the main website
                </Link>
            </footer>
        </main>
    );
}
