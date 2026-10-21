"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronDown,
    Globe2,
    Plane,
    ShieldCheck,
    Sparkles,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

const travelTerms = [
    {
        number: "01",
        title: "Air Travel",
        subtitle: "A considered journey",
        description:
            "Commercial Business Class or First Class airfare, or a private charter, must be arranged and covered before departure.",
        icon: Plane,
    },
    {
        number: "02",
        title: "Accommodation",
        subtitle: "Comfort and privacy",
        description:
            "Four- or five-star hotel accommodation with a private room is required for travel engagements.",
        icon: Sparkles,
    },
    {
        number: "03",
        title: "Ground Transportation",
        subtitle: "Seamless connections",
        description:
            "Chauffeured transportation, airport transfers and agreed daily incidentals are covered by the client.",
        icon: ArrowUpRight,
    },
];

const travelSteps = [
    {
        number: "01",
        title: "Share your itinerary",
        description:
            "Send your destination, proposed dates, duration and the nature of your planned engagement.",
    },
    {
        number: "02",
        title: "Review availability",
        description:
            "Travel dates, the minimum commitment, logistics and the complete arrangement are discussed privately.",
    },
    {
        number: "03",
        title: "Confirm the details",
        description:
            "Once availability and terms have been agreed, travel logistics are arranged before departure.",
    },
];

const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Travel() {
    const [showTravelNote, setShowTravelNote] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!showTravelNote) return;

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setShowTravelNote(false);
        }

        window.addEventListener("keydown", handleEscape);

        return () => window.removeEventListener("keydown", handleEscape);
    }, [showTravelNote]);

    const animationProps = prefersReducedMotion
        ? {}
        : {
            initial: "hidden" as const,
            whileInView: "visible" as const,
            viewport: { once: true, amount: 0.18 },
            variants: reveal,
        };

    return (
        <div className="overflow-hidden bg-[#0A0908] text-[#F3EEE6]">
            {/* HERO */}
            <section className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-screen">
                <div className="absolute inset-0">
                    <Image
                        src="/images/travel.jpg"
                        alt="An elegant destination setting for private travel"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/85 via-[#0A0908]/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/20" />

                <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-36 md:px-10 md:pb-24 lg:px-14">
                    <motion.div
                        initial={prefersReducedMotion ? false : "hidden"}
                        animate="visible"
                        variants={reveal}
                        className="max-w-5xl"
                    >
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#C7B18A]" />
                            <p className="text-[9px] uppercase tracking-[0.42em] text-[#C7B18A]">
                                Travel · Without Boundaries
                            </p>
                        </div>

                        <h1 className="text-[4.1rem] leading-[0.86] tracking-[-0.055em] sm:text-8xl md:text-[9rem] lg:text-[10rem]">
                            Beyond
                            <br />
                            <span className="italic text-[#D8C7A9]">the familiar.</span>
                        </h1>

                        <p className="mt-8 max-w-lg text-sm leading-7 text-[#F3EEE6]/75 md:text-base">
                            From international destinations to carefully planned
                            executive itineraries, every journey begins with a private
                            conversation and thoughtful preparation.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/contact"
                                className="group inline-flex w-fit items-center justify-center gap-5 border border-[#C7B18A]/60 px-7 py-4 text-[9px] uppercase tracking-[0.24em] text-[#F3EEE6] transition-colors duration-300 hover:bg-[#C7B18A] hover:text-[#0A0908]"
                            >
                                Discuss Your Travel Plans
                                <ArrowRight
                                    size={15}
                                    strokeWidth={1.2}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>

                            <button
                                type="button"
                                onClick={() =>
                                    document.getElementById("travel-policy")?.scrollIntoView({
                                        behavior: prefersReducedMotion ? "auto" : "smooth",
                                    })
                                }
                                className="inline-flex w-fit items-center gap-3 px-2 py-4 text-[9px] uppercase tracking-[0.24em] text-white/65 transition-colors hover:text-[#C7B18A]"
                            >
                                Explore Travel Terms
                                <ArrowDown size={14} strokeWidth={1.2} />
                            </button>
                        </div>
                    </motion.div>

                    <div className="absolute bottom-8 right-8 hidden items-center gap-3 md:flex lg:right-14">
                        <Globe2 size={14} strokeWidth={1.2} className="text-[#C7B18A]" />
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                            Domestic & International
                        </span>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <motion.div
                    {...animationProps}
                    className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-28"
                >
                    <div>
                        <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Location & Availability
                        </p>

                        <h2 className="text-5xl leading-[0.93] tracking-[-0.035em] md:text-7xl">
                            A world of
                            <br />
                            <span className="italic text-[#C7B18A]">possibilities.</span>
                        </h2>

                        <div className="mt-10 flex items-center gap-4 border-t border-[#F3EEE6]/10 pt-6">
                            <span className="flex h-11 w-11 items-center justify-center border border-[#C7B18A]/30 text-[#C7B18A]">
                                <Globe2 size={19} strokeWidth={1.2} />
                            </span>
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.24em] text-[#F3EEE6]">
                                    Worldwide availability
                                </p>
                                <p className="mt-1 text-xs text-[#A99F94]">
                                    Subject to confirmation and agreed arrangements
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center gap-6 text-sm leading-7 text-[#A99F94] md:text-[15px]">
                        <p>
                            Travel is available for select domestic and international
                            engagements, including corporate conferences, executive
                            retreats, dinner dates and extended itineraries.
                        </p>

                        <p>
                            Each request is considered individually, with availability,
                            destination, timing and the details of the proposed itinerary
                            discussed in advance.
                        </p>

                        <p>
                            For engagements outside the local area, a minimum commitment
                            of 24 hours, or the applicable day rate, is required in
                            addition to fully covered travel logistics.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-2 inline-flex w-fit items-center gap-4 border-b border-[#C7B18A]/50 pb-3 text-[9px] uppercase tracking-[0.25em] text-[#C7B18A] transition-colors hover:border-[#C7B18A] hover:text-[#F3EEE6]"
                        >
                            Make a private inquiry
                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* DESTINATION IMAGE BREAK */}
            <section className="relative min-h-[50svh] overflow-hidden md:min-h-[68svh]">
                <Image
                    src="/images/airplane.jpg"
                    alt="An atmospheric destination for a considered travel arrangement"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[#0A0908]/35" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/75 via-transparent to-[#0A0908]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/80 via-transparent to-[#0A0908]/20" />

                <motion.div
                    {...animationProps}
                    className="absolute inset-x-0 bottom-0 mx-auto max-w-[1500px] px-6 pb-10 md:px-10 md:pb-16 lg:px-14"
                >
                    <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#D8C7A9]">
                        The Art of Getting Away
                    </p>
                    <h2 className="max-w-3xl text-4xl leading-[0.98] md:text-6xl lg:text-7xl">
                        New places.
                        <br />
                        <span className="italic">A different perspective.</span>
                    </h2>
                </motion.div>
            </section>

            {/* EXECUTIVE TRAVEL POLICY */}
            <section
                id="travel-policy"
                className="scroll-mt-24 border-y border-[#F3EEE6]/10 px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
            >
                <div className="mx-auto max-w-[1300px]">
                    <motion.div {...animationProps} className="mb-14 md:mb-20">
                        <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Executive Travel Policy
                        </p>

                        <h2 className="max-w-4xl text-4xl leading-[0.98] tracking-[-0.035em] md:text-6xl lg:text-7xl">
                            Every detail,
                            <br />
                            <span className="italic text-[#C7B18A]">considered.</span>
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-[#A99F94]">
                            For travel outside the local area, the following arrangements
                            are required to ensure a smooth and properly coordinated
                            itinerary.
                        </p>
                    </motion.div>

                    <div className="border-t border-[#F3EEE6]/10">
                        {travelTerms.map((term, index) => {
                            const Icon = term.icon;

                            return (
                                <motion.article
                                    key={term.number}
                                    {...animationProps}
                                    transition={
                                        prefersReducedMotion
                                            ? { duration: 0 }
                                            : {
                                                duration: 0.65,
                                                delay: index * 0.07,
                                                ease: [0.22, 1, 0.36, 1] as const,
                                            }
                                    }
                                    className="group grid gap-5 border-b border-[#F3EEE6]/10 py-8 md:grid-cols-[70px_1fr_1.1fr] md:items-center md:gap-10 md:py-11"
                                >
                                    <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                        {term.number}
                                    </span>

                                    <div className="flex items-start gap-5">
                                        <span className="mt-1 text-[#C7B18A]/70 transition-colors duration-300 group-hover:text-[#C7B18A]">
                                            <Icon size={21} strokeWidth={1.15} />
                                        </span>

                                        <div>
                                            <h3 className="text-3xl tracking-[-0.02em] md:text-4xl">
                                                {term.title}
                                            </h3>
                                            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8F877F]">
                                                {term.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="max-w-xl text-sm leading-7 text-[#A99F94] md:pl-4">
                                        {term.description}
                                    </p>
                                </motion.article>
                            );
                        })}
                    </div>

                    <motion.div
                        {...animationProps}
                        className="mt-8 flex items-start gap-4 border border-[#C7B18A]/20 bg-[#11100E] p-5 md:p-7"
                    >
                        <ShieldCheck
                            size={20}
                            strokeWidth={1.2}
                            className="mt-0.5 shrink-0 text-[#C7B18A]"
                        />
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-[#F3EEE6]">
                                Before departure
                            </p>
                            <p className="mt-2 text-sm leading-7 text-[#A99F94]">
                                Travel costs, accommodation, transfers and other agreed
                                expenses must be confirmed in advance. Multi-day and
                                international itineraries are individually arranged
                                according to the schedule and destination.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EXTENDED TRAVEL */}
            <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <motion.div
                    {...animationProps}
                    className="mx-auto grid max-w-[1300px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-24"
                >
                    <div>
                        <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Extended Itineraries
                        </p>

                        <h2 className="text-5xl leading-[0.95] tracking-[-0.035em] md:text-6xl">
                            More time.
                            <br />
                            <span className="italic text-[#C7B18A]">More possibilities.</span>
                        </h2>

                        <p className="mt-7 max-w-md text-sm leading-7 text-[#A99F94]">
                            Longer stays and international travel call for a more
                            considered approach to timing, logistics and planning.
                        </p>
                    </div>

                    <div className="border-y border-[#F3EEE6]/10">
                        {travelSteps.map((step) => (
                            <div
                                key={step.number}
                                className="grid gap-4 border-b border-[#F3EEE6]/10 py-7 last:border-b-0 sm:grid-cols-[60px_1fr] sm:gap-7 md:py-9"
                            >
                                <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                    {step.number}
                                </span>

                                <div>
                                    <h3 className="text-2xl md:text-3xl">{step.title}</h3>
                                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#A99F94]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* PRIVATE TRAVEL STATEMENT */}
            <section className="relative overflow-hidden border-y border-[#C7B18A]/15 bg-[#11100E] px-6 py-24 text-center md:px-10 md:py-32 lg:py-40">
                <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#C7B18A]/[0.06] blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#C7B18A]/[0.035] blur-3xl" />

                <motion.div
                    {...animationProps}
                    className="relative mx-auto max-w-4xl"
                >
                    <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                        A Journey, Thoughtfully Planned
                    </p>

                    <h2 className="text-4xl leading-[1.02] tracking-[-0.035em] md:text-6xl lg:text-7xl">
                        The destination is only
                        <br />
                        <span className="italic text-[#C7B18A]">part of the story.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#A99F94]">
                        Every request begins with a conversation. Share your proposed
                        itinerary and discover whether the dates and arrangements
                        can be accommodated.
                    </p>

                    <Link
                        href="/contact"
                        className="group mt-9 inline-flex items-center gap-5 bg-[#C7B18A] px-7 py-4 text-[9px] uppercase tracking-[0.22em] text-[#0A0908] transition-colors duration-300 hover:bg-[#F3EEE6]"
                    >
                        Start a Private Inquiry
                        <ArrowRight
                            size={15}
                            strokeWidth={1.2}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </motion.div>
            </section>

            {/* CLOSING */}
            <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
                <div className="mx-auto flex max-w-[1300px] flex-col gap-7 border-b border-[#F3EEE6]/10 pb-12 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="mb-4 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Wherever life takes you
                        </p>

                        <h2 className="text-4xl leading-tight md:text-5xl">
                            Let us discuss
                            <br />
                            <span className="italic">your next destination.</span>
                        </h2>
                    </div>

                    <Link
                        href="/contact"
                        className="group inline-flex w-fit items-center gap-4 pb-2 text-[9px] uppercase tracking-[0.25em] text-[#C7B18A]"
                    >
                        Get in touch
                        <ArrowUpRight
                            size={16}
                            strokeWidth={1.2}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>

                <p className="mx-auto mt-7 max-w-[1300px] text-[8px] uppercase tracking-[0.25em] text-[#A99F94]/50">
                    Domestic & International Travel · By Prior Arrangement
                </p>
            </section>

            {/* FLOATING PRIVATE NOTE */}
            <AnimatePresence>
                {showTravelNote && (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close travel note"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowTravelNote(false)}
                            className="fixed inset-0 z-[80] cursor-default bg-black/40 backdrop-blur-[2px]"
                        />

                        <motion.aside
                            initial={{ opacity: 0, y: 18, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.25 }}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Private travel note"
                            className="fixed bottom-24 right-5 z-[90] w-[calc(100vw-2.5rem)] max-w-sm border border-[#C7B18A]/25 bg-[#11100E] p-7 shadow-2xl sm:right-7 sm:p-8"
                        >
                            <div className="mb-5 flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#C7B18A]">
                                        A Private Note
                                    </p>
                                    <h3 className="mt-3 text-2xl">Planning a journey?</h3>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => setShowTravelNote(false)}
                                    aria-label="Close note"
                                    className="flex h-9 w-9 items-center justify-center text-[#A99F94] transition-colors hover:text-[#C7B18A]"
                                >
                                    <X size={19} strokeWidth={1.2} />
                                </button>
                            </div>

                            <p className="text-sm leading-7 text-[#A99F94]">
                                Share your destination, dates and intended duration.
                                Travel requirements and availability can be discussed
                                privately before any arrangements are confirmed.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-[#C7B18A]">
                                <Check size={14} />
                                By prior arrangement
                            </div>

                            <Link
                                href="/contact"
                                onClick={() => setShowTravelNote(false)}
                                className="mt-7 flex items-center justify-between border border-[#C7B18A]/40 px-5 py-4 text-[9px] uppercase tracking-[0.2em] text-[#C7B18A] transition-colors hover:bg-[#C7B18A] hover:text-[#0A0908]"
                            >
                                Discuss Your Itinerary
                                <ArrowRight size={15} strokeWidth={1.2} />
                            </Link>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <button
                type="button"
                aria-label={showTravelNote ? "Close travel note" : "Open travel note"}
                aria-expanded={showTravelNote}
                onClick={() => setShowTravelNote((current) => !current)}
                className="fixed bottom-6 right-6 z-[85] flex h-14 w-14 items-center justify-center rounded-full border border-[#C7B18A]/45 bg-[#11100E]/95 text-[#C7B18A] shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-[#C7B18A] md:bottom-7 md:right-7"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {showTravelNote ? (
                        <motion.span
                            key="close"
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 45 }}
                        >
                            <X size={20} strokeWidth={1.2} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="globe"
                            initial={{ opacity: 0, rotate: 45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -45 }}
                        >
                            <Globe2 size={21} strokeWidth={1.2} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
