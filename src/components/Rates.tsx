"use client";

import Image from "next/image";
import Link from "next/link";

const arrangements = [
    {
        number: "01",
        duration: "1 hr",
        title: "First Impression",
        description:
            "A beautifully paced introduction with enough time to settle into the atmosphere, enjoy the conversation and let the evening unfold naturally.",
        price: "$1,200",
    },
    {
        number: "02",
        duration: "90 min",
        title: "The Unhurried Hour",
        description:
            "A little more room to slow down. Settle into the surroundings, enjoy good conversation and allow the experience to develop without watching the clock.",
        price: "$1,800",
    },
    {
        number: "03",
        duration: "2 hrs",
        title: "The Evening",
        description:
            "Two hours creates space for a more relaxed experience — thoughtful conversation, an elegant setting and time to simply be present.",
        price: "$2,200",
    },
    {
        number: "04",
        duration: "3 hrs",
        title: "Extended Evening",
        description:
            "An unhurried arrangement designed for those who prefer more time to enjoy the atmosphere, conversation and company.",
        price: "$3,000",
    },
    {
        number: "05",
        duration: "4 hrs",
        title: "A Longer Evening",
        description:
            "Dinner, music, conversation and an evening allowed to unfold at its own pace. Four hours without unnecessary rush.",
        price: "$4,000",
    },
    {
        number: "06",
        duration: "6 hrs",
        title: "The Long Evening",
        description:
            "A substantial stretch of time with nowhere else to be. Designed for an evening that feels relaxed, spontaneous and entirely removed from the ordinary.",
        price: "$5,500",
    },
    {
        number: "07",
        duration: "12 hrs",
        title: "Stay Awhile",
        description:
            "An extended arrangement allowing an evening and morning to become part of one continuous experience, thoughtfully planned around your time.",
        price: "$9,500",
    },
    {
        number: "08",
        duration: "24 hrs",
        title: "A Full Day",
        description:
            "A complete day shaped around atmosphere, spontaneity and exceptional company. A more immersive arrangement for those seeking something beyond a traditional evening.",
        price: "$17,000",
    },
];

export default function Rates() {
    return (
        <div className="rates-page overflow-hidden bg-[#0A0908]">
            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative min-h-screen overflow-hidden">
                {/* Hero image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/rates-hero.jpg"
                        alt="Miss Cookie"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[#0A0908]/35" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/45 to-[#0A0908]/20" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/30" />
                </div>

                {/* Decorative vertical line */}
                <div className="absolute right-8 top-32 hidden h-[45vh] w-px bg-[#F3EEE6]/10 lg:right-14 lg:block" />

                {/* Hero content */}
                <div className="relative z-10 flex min-h-screen items-end">
                    <div className="mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 md:px-10 md:pb-28 lg:px-14">
                        <div className="max-w-5xl">
                            <div className="mb-9 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#C7B18A]/70" />

                                <span className="text-[9px] uppercase tracking-[0.45em] text-[#F3EEE6]/65">
                                    Private Arrangements
                                </span>
                            </div>

                            <h1 className="text-[clamp(4rem,10vw,9.5rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[#F3EEE6]">
                                Time,
                                <br />
                                <span className="italic text-[#C7B18A]">
                                    beautifully spent.
                                </span>
                            </h1>

                            <p className="mt-10 max-w-xl text-sm leading-7 text-[#F3EEE6]/70 md:text-base md:leading-8">
                                Every arrangement is created with the same intention:
                                thoughtful planning, genuine presence and an atmosphere
                                where time can move a little more slowly.
                            </p>
                        </div>

                        <div className="mt-16 flex items-center gap-4">
                            <span className="text-[8px] uppercase tracking-[0.35em] text-[#F3EEE6]/45">
                                Orlando · Florida
                            </span>

                            <span className="h-px w-10 bg-[#C7B18A]/40" />

                            <span className="text-[8px] uppercase tracking-[0.35em] text-[#F3EEE6]/45">
                                By arrangement
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.7fr_1.3fr] lg:px-14 lg:py-40">
                    <div>
                        <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                            The philosophy
                        </span>

                        <h2 className="mt-6 max-w-md text-4xl font-normal leading-[1.02] tracking-[-0.025em] md:text-5xl">
                            Luxury is often found in the way time feels.
                        </h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-base leading-8 text-[#C9C0B7] md:text-lg md:leading-9">
                            There is something different about an evening when there is no
                            need to rush through it. The surroundings become more
                            meaningful, conversation becomes easier and the smallest
                            details begin to matter.
                        </p>

                        <p className="mt-7 text-sm leading-8 text-[#A99F94] md:text-base md:leading-8">
                            Each arrangement is intended to feel personal, comfortable
                            and considered. The duration simply determines how much room
                            there is for the experience to unfold.
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#C7B18A]/50" />

                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A99F94]">
                                Discretion · Elegance · Presence
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          RATES
      ========================================================= */}

            <section className="bg-[#0D0C0A]">
                <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                    <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
                        <div>
                            <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                                Private Rates
                            </span>

                            <h2 className="mt-6 text-4xl font-normal leading-none tracking-[-0.03em] md:text-6xl">
                                Choose your time.
                            </h2>
                        </div>

                        <p className="max-w-xs text-xs leading-6 text-[#A99F94]">
                            All arrangements are private and subject to availability.
                            Additional details can be discussed directly.
                        </p>
                    </div>

                    <div className="border-t border-[#F3EEE6]/10">
                        {arrangements.map((arrangement) => (
                            <article
                                key={arrangement.number}
                                className="group grid gap-7 border-b border-[#F3EEE6]/10 py-10 transition-colors duration-500 hover:bg-[#151311]/50 md:grid-cols-[70px_0.8fr_1.2fr_150px] md:items-center md:gap-8 md:py-12"
                            >
                                {/* Number */}
                                <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                    {arrangement.number}
                                </span>

                                {/* Duration + title */}
                                <div>
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#A99F94]/60">
                                        {arrangement.duration}
                                    </span>

                                    <h3 className="mt-3 text-3xl font-normal leading-none tracking-[-0.02em] text-[#F3EEE6] transition-colors duration-300 group-hover:text-[#C7B18A] md:text-4xl">
                                        {arrangement.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="max-w-xl text-sm leading-7 text-[#A99F94]">
                                    {arrangement.description}
                                </p>

                                {/* Price */}
                                <div className="md:text-right">
                                    <span className="text-xl font-normal tracking-[-0.02em] text-[#F3EEE6]">
                                        {arrangement.price}
                                    </span>

                                    <span className="mt-2 block text-[8px] uppercase tracking-[0.25em] text-[#A99F94]/50">
                                        Private arrangement
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          BESPOKE
      ========================================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_0.8fr] lg:px-14 lg:py-40">
                    <div>
                        <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                            Beyond the standard
                        </span>

                        <h2 className="mt-6 max-w-3xl text-4xl font-normal leading-[1] tracking-[-0.03em] md:text-6xl">
                            Some occasions call for something{" "}
                            <span className="italic text-[#C7B18A]">
                                entirely their own.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-sm leading-8 text-[#A99F94] md:text-base">
                            For extended arrangements, destination escapes, private
                            travel or time curated around a particular occasion, bespoke
                            possibilities may be considered privately.
                        </p>

                        <p className="mt-6 max-w-2xl text-sm leading-8 text-[#A99F94] md:text-base">
                            These arrangements are intentionally limited and are planned
                            according to destination, dates, duration and individual
                            requirements.
                        </p>

                        <Link
                            href="/contact"
                            className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-8 py-4 text-[10px] uppercase tracking-[0.28em]"
                        >
                            <span>Discuss a Bespoke Arrangement</span>
                        </Link>
                    </div>

                    <div className="flex items-end lg:justify-end">
                        <div className="max-w-sm border-l border-[#C7B18A]/30 pl-7">
                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#C7B18A]">
                                Select availability
                            </span>

                            <p className="mt-5 text-sm leading-7 text-[#A99F94]">
                                Discretion, emotional intelligence, generosity and genuine
                                compatibility are valued above everything else.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#A99F94]">
                                Bespoke arrangements are discussed personally upon request.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          TRAVEL
      ========================================================= */}

            <section className="bg-[#11100E]">
                <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                    <div className="relative overflow-hidden border border-[#F3EEE6]/10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(199,177,138,0.07),transparent_32%)]" />

                        <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1fr_0.6fr] lg:p-16">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                                    Travel
                                </span>

                                <h2 className="mt-6 max-w-2xl text-4xl font-normal leading-[1] tracking-[-0.03em] md:text-6xl">
                                    When the destination becomes part of the experience.
                                </h2>

                                <p className="mt-8 max-w-xl text-sm leading-8 text-[#A99F94] md:text-base">
                                    Select travel arrangements beyond Orlando may be
                                    considered with advance planning. Destination, dates,
                                    duration and logistics are discussed privately.
                                </p>

                                <Link
                                    href="/contact"
                                    className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-8 py-4 text-[10px] uppercase tracking-[0.28em]"
                                >
                                    <span>Inquire About Travel</span>
                                </Link>
                            </div>

                            <div className="flex items-end lg:justify-end">
                                <div className="border-l border-[#C7B18A]/30 pl-6">
                                    <span className="block text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                                        Orlando
                                    </span>

                                    <span className="mt-3 block text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                                        United States
                                    </span>

                                    <span className="mt-6 block font-[family-name:var(--font-display)] text-2xl italic text-[#F3EEE6]/70">
                                        By prior arrangement
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          FINAL CTA
      ========================================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto max-w-[1100px] px-6 py-28 text-center md:px-10 md:py-40">
                    <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                        Private Inquiry
                    </span>

                    <h2 className="mx-auto mt-7 max-w-4xl text-5xl font-normal leading-[0.94] tracking-[-0.04em] md:text-7xl">
                        The right amount of time
                        <br />
                        <span className="italic text-[#C7B18A]">
                            changes everything.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                        For availability, bespoke arrangements or additional
                        information, begin with a private conversation.
                    </p>

                    <Link
                        href="/contact"
                        className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-9 py-4 text-[10px] uppercase tracking-[0.3em]"
                    >
                        <span>Private Inquiry</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}