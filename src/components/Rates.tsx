"use client";

import Image from "next/image";
import Link from "next/link";

const arrangements = [
    {
        number: "01",
        category: "Hourly",
        title: "The Hourly Experience",
        description:
            "An elegant, unhurried experience with time for conversation, a considered setting and genuine connection.",
        price: "$800",
        unit: "per hour",
        note: "2-hour minimum · $1,600",
    },
    {
        number: "02",
        category: "Evening",
        title: "The Dinner Date",
        description:
            "Four hours to enjoy a beautiful dinner, thoughtful conversation and an evening that unfolds naturally.",
        price: "$3,200",
        unit: "4 hours",
        note: "An evening by arrangement",
    },
    {
        number: "03",
        category: "Executive",
        title: "Overnight / 24-Hour",
        description:
            "An extended private arrangement, thoughtfully planned around your schedule, destination and individual preferences.",
        price: "$8,000",
        unit: "per arrangement",
        note: "Overnight or 24-hour · By arrangement",
    },
];

const bookingRules = [
    {
        number: "01",
        title: "Client Screening",
        description:
            "For safety and discretion, all first-time clients must complete a brief verification process before any deposit is paid.",
        detail:
            "Verification may include a professional LinkedIn profile, work email or professional reference.",
    },
    {
        number: "02",
        title: "Deposit Requirements",
        description:
            "Local bookings require a 50% non-refundable deposit at the time of booking to secure the requested date and time.",
        detail:
            "For travel and fly-out arrangements, a 50% booking deposit plus flight and hotel costs must be finalized at least 72 hours in advance.",
    },
    {
        number: "03",
        title: "Rescheduling",
        description:
            "One rescheduling is permitted for local dates when at least 48 hours' notice is provided.",
        detail:
            "Rescheduling within this notice period preserves the original deposit, subject to availability.",
    },
    {
        number: "04",
        title: "Cancellations",
        description: "All deposits are non-refundable.",
        detail:
            "Local cancellations made less than 24 hours before the scheduled date, or travel cancellations made less than 48 hours before departure, will be billed for the full booking amount.",
    },
];

function SectionLabel({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C77D96]/60" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                {children}
            </span>
        </div>
    );
}

export default function Rates() {
    return (
        <div className="rates-page overflow-hidden bg-[#090809] text-[#F0D5DE]">
            {/* HERO */}
            <section className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-screen">
                <div className="absolute inset-0">
                    <Image
                        src="/images/rates-hero.jpg"
                        alt="Miss Cookie — private arrangements"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#090809]/35" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#090809]/90 via-[#090809]/55 to-[#090809]/15" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090809] via-[#090809]/20 to-[#090809]/35" />
                </div>

                <div className="absolute right-8 top-32 hidden h-[42vh] w-px bg-[#F0D5DE]/15 lg:right-14 lg:block" />

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 pt-36 md:px-10 md:pb-28 lg:px-14 lg:pb-32">
                    <div className="max-w-5xl">
                        <SectionLabel>Private Arrangements</SectionLabel>

                        <h1 className="text-[clamp(3.6rem,9vw,9rem)] font-normal leading-[0.87] tracking-[-0.055em]">
                            Time,
                            <br />
                            <span className="italic text-[#C77D96]">
                                beautifully spent.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-[#F0D5DE]/80 md:mt-10 md:text-base md:leading-8">
                            Considered arrangements, transparent rates and a
                            thoughtful approach to every detail. Choose the time
                            that suits you and begin with a private conversation.
                        </p>

                        <Link
                            href="#arrangements"
                            className="private-inquiry-button mt-10 inline-flex items-center gap-5 border border-[#C77D96]/50 px-7 py-4 text-[9px] uppercase tracking-[0.28em] transition-colors duration-300 hover:bg-[#C77D96] hover:text-[#090809] md:mt-12"
                        >
                            <span>Explore Arrangements</span>
                            <span aria-hidden="true">↘</span>
                        </Link>
                    </div>

                    <div className="mt-16 flex flex-wrap items-center gap-x-5 gap-y-3">
                        <span className="text-[8px] uppercase tracking-[0.35em] text-[#F0D5DE]/55">
                            United States & International
                        </span>
                        <span className="h-px w-8 bg-[#C77D96]/40" />
                        <span className="text-[8px] uppercase tracking-[0.35em] text-[#F0D5DE]/55">
                            By prior arrangement
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-12 right-14 hidden flex-col items-center gap-3 lg:flex">
                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#F0D5DE]/45 [writing-mode:vertical-rl]">
                        Private Rates
                    </span>
                    <span className="h-12 w-px bg-[#C77D96]/40" />
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="border-t border-[#F0D5DE]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-14 lg:py-36">
                    <div>
                        <SectionLabel>The Philosophy</SectionLabel>
                        <h2 className="max-w-lg text-4xl font-normal leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-6xl">
                            Luxury begins with knowing your time is valued.
                        </h2>
                    </div>

                    <div className="max-w-2xl lg:pt-10">
                        <p className="text-base leading-8 text-[#F0D5DE]/80 md:text-lg md:leading-9">
                            Every arrangement begins with clear communication
                            and thoughtful planning. The intention is to make
                            the experience feel comfortable, considered and
                            free from unnecessary complications.
                        </p>

                        <p className="mt-7 text-sm leading-8 text-[#F0D5DE]/65 md:text-base md:leading-8">
                            Rates are outlined in advance, while availability,
                            scheduling and any additional travel arrangements
                            are discussed privately before a booking is confirmed.
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#C77D96]/50" />
                            <span className="text-[8px] uppercase tracking-[0.3em] text-[#F0D5DE]/65 md:text-[9px] md:tracking-[0.35em]">
                                Discretion · Clarity · Consideration
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARRANGEMENTS */}
            <section id="arrangements" className="scroll-mt-24 bg-[#090809]">
                <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                    <div className="mb-14 flex flex-col gap-7 md:mb-20 md:flex-row md:items-end md:justify-between">
                        <div>
                            <SectionLabel>Rates & Arrangements</SectionLabel>
                            <h2 className="text-4xl font-normal leading-none tracking-[-0.04em] md:text-6xl">
                                Choose your time.
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-[#F0D5DE]/65">
                            Straightforward rates for each arrangement. All
                            bookings are subject to availability and prior
                            confirmation.
                        </p>
                    </div>

                    <div className="grid gap-px border border-[#F0D5DE]/10 bg-[#F0D5DE]/10 md:grid-cols-2 lg:grid-cols-3">
                        {arrangements.map((arrangement) => (
                            <article
                                key={arrangement.number}
                                className="group relative flex min-h-[390px] flex-col bg-[#090809] p-7 transition-colors duration-500 hover:bg-[#24151D] md:min-h-[430px] md:p-9 lg:p-10"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] tracking-[0.3em] text-[#C77D96]">
                                        {arrangement.number}
                                    </span>
                                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#F0D5DE]/60">
                                        {arrangement.category}
                                    </span>
                                </div>

                                <div className="mt-12">
                                    <h3 className="max-w-xs text-3xl font-normal leading-tight tracking-[-0.025em] text-[#F0D5DE] transition-colors duration-300 group-hover:text-[#C77D96] md:text-4xl">
                                        {arrangement.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-[#F0D5DE]/65">
                                        {arrangement.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-12">
                                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                        <span className="text-4xl font-normal tracking-[-0.045em] text-[#C77D96] md:text-5xl">
                                            {arrangement.price}
                                        </span>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#F0D5DE]/60">
                                            {arrangement.unit}
                                        </span>
                                    </div>

                                    <div className="mt-5 border-t border-[#F0D5DE]/10 pt-4">
                                        <p className="text-[9px] leading-5 tracking-[0.08em] text-[#F0D5DE]/60">
                                            {arrangement.note}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className="mt-7 text-xs leading-6 text-[#F0D5DE]/60">
                        The hourly rate is $800, with a two-hour minimum.
                        The minimum booking total is $1,600. Rates are in
                        US dollars.
                    </p>
                </div>
            </section>

            {/* BOOKING PROCESS */}
            <section className="border-t border-[#F0D5DE]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24 lg:px-14 lg:py-40">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <SectionLabel>Before We Confirm</SectionLabel>

                        <h2 className="max-w-lg text-4xl font-normal leading-[1.02] tracking-[-0.035em] md:text-6xl">
                            A thoughtful process.
                            <br />
                            <span className="italic text-[#C77D96]">
                                Clear expectations.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-md text-sm leading-8 text-[#F0D5DE]/65 md:text-base">
                            Every booking follows a clear process designed
                            to support safety, privacy and reliable planning
                            for both parties.
                        </p>

                        <div className="mt-10 border-l border-[#C77D96]/35 pl-6">
                            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                                Please note
                            </span>
                            <p className="mt-4 text-sm leading-7 text-[#F0D5DE]/65">
                                A date is secured only after the required
                                verification, deposit and booking arrangements
                                have been completed.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-[#F0D5DE]/10">
                        {bookingRules.map((rule) => (
                            <article
                                key={rule.number}
                                className="grid gap-5 border-b border-[#F0D5DE]/10 py-8 md:grid-cols-[54px_1fr] md:gap-7 md:py-10"
                            >
                                <span className="pt-1 text-[9px] tracking-[0.3em] text-[#C77D96]">
                                    {rule.number}
                                </span>

                                <div>
                                    <h3 className="text-2xl font-normal tracking-[-0.02em] md:text-3xl">
                                        {rule.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-[#F0D5DE]/80 md:text-base md:leading-8">
                                        {rule.description}
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-[#F0D5DE]/65">
                                        {rule.detail}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* DEPOSIT SUMMARY */}
            <section className="bg-[#24151D]">
                <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
                    <div className="relative overflow-hidden border border-[#C77D96]/20">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(199,125,150,0.09),transparent_55%)]" />

                        <div className="relative grid gap-10 p-7 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-16">
                            <div>
                                <SectionLabel>Deposit & Booking Rules</SectionLabel>

                                <h2 className="max-w-xl text-3xl font-normal leading-tight tracking-[-0.03em] md:text-5xl">
                                    Good planning starts before the date.
                                </h2>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-[#F0D5DE]/65 md:text-base md:leading-8">
                                    Please review the deposit and cancellation
                                    conditions before requesting a reservation.
                                    This helps ensure that scheduling and travel
                                    arrangements are agreed upon in advance.
                                </p>
                            </div>

                            <div className="grid content-start gap-0">
                                <div className="flex items-start justify-between gap-5 border-b border-[#F0D5DE]/10 py-5">
                                    <div>
                                        <p className="text-sm text-[#F0D5DE]">
                                            Local booking deposit
                                        </p>
                                        <p className="mt-2 text-xs leading-6 text-[#F0D5DE]/60">
                                            Required to secure the date
                                        </p>
                                    </div>
                                    <span className="text-2xl text-[#C77D96]">
                                        50%
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-5 border-b border-[#F0D5DE]/10 py-5">
                                    <div>
                                        <p className="text-sm text-[#F0D5DE]">
                                            Travel arrangements
                                        </p>
                                        <p className="mt-2 max-w-xs text-xs leading-6 text-[#F0D5DE]/60">
                                            Deposit plus flight and hotel costs
                                        </p>
                                    </div>
                                    <span className="text-sm text-[#C77D96]">
                                        72 hours
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-5 border-b border-[#F0D5DE]/10 py-5">
                                    <div>
                                        <p className="text-sm text-[#F0D5DE]">
                                            Local rescheduling
                                        </p>
                                        <p className="mt-2 text-xs leading-6 text-[#F0D5DE]/60">
                                            One reschedule, subject to availability
                                        </p>
                                    </div>
                                    <span className="text-sm text-[#C77D96]">
                                        48 hours
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-5 py-5">
                                    <div>
                                        <p className="text-sm text-[#F0D5DE]">
                                            Local cancellation
                                        </p>
                                        <p className="mt-2 max-w-xs text-xs leading-6 text-[#F0D5DE]/60">
                                            Full booking amount applies within the
                                            stated cancellation window
                                        </p>
                                    </div>
                                    <span className="text-sm text-[#C77D96]">
                                        24 hours
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-6 text-xs leading-6 text-[#F0D5DE]/55">
                        Travel cancellation terms differ from local bookings.
                        Cancellations within 48 hours of travel departure
                        are subject to the full booking amount. All deposits
                        are non-refundable.
                    </p>
                </div>
            </section>

            {/* BESPOKE TRAVEL */}
            <section className="border-t border-[#F0D5DE]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_0.7fr] lg:gap-24 lg:px-14 lg:py-36">
                    <div>
                        <SectionLabel>Travel Without Boundaries</SectionLabel>

                        <h2 className="max-w-3xl text-4xl font-normal leading-[1.03] tracking-[-0.035em] md:text-6xl">
                            Some arrangements call for
                            <span className="italic text-[#C77D96]">
                                {" "}a different destination.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-sm leading-8 text-[#F0D5DE]/65 md:text-base">
                            Travel and fly-out requests throughout the United
                            States and internationally may be considered with
                            advance planning. Destination, dates, duration,
                            flights, accommodation and logistics must be
                            discussed and confirmed privately.
                        </p>

                        <Link
                            href="/contact"
                            className="private-inquiry-button mt-9 inline-flex items-center gap-5 border border-[#C77D96]/50 px-7 py-4 text-[9px] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-[#C77D96] hover:text-[#090809] md:mt-10"
                        >
                            <span>Discuss Travel</span>
                            <span aria-hidden="true">↗</span>
                        </Link>
                    </div>

                    <div className="relative flex min-h-[240px] items-end overflow-hidden border border-[#F0D5DE]/10 bg-[#090809] p-7 md:min-h-[300px] md:p-10">
                        <div className="absolute right-[-20px] top-[-45px] h-56 w-56 rounded-full border border-[#C77D96]/10 md:h-72 md:w-72" />
                        <div className="absolute right-8 top-8 h-36 w-36 rounded-full border border-[#C77D96]/10 md:right-12 md:top-12 md:h-48 md:w-48" />

                        <div className="relative">
                            <span className="text-[8px] uppercase tracking-[0.4em] text-[#F0D5DE]/60">
                                United States & Worldwide
                            </span>

                            <p className="mt-5 text-3xl italic text-[#C77D96] md:text-4xl">
                                By prior arrangement
                            </p>

                            <span className="mt-5 block h-px w-12 bg-[#C77D96]/50" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden border-t border-[#F0D5DE]/[0.08]">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C77D96]/[0.05] blur-[100px]" />

                <div className="relative mx-auto max-w-[1100px] px-6 py-28 text-center md:px-10 md:py-40">
                    <div className="flex items-center justify-center">
                        <SectionLabel>Private Inquiry</SectionLabel>
                    </div>

                    <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-normal leading-[0.95] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                        The right amount of time.
                        <br />
                        <span className="italic text-[#C77D96]">
                            Thoughtfully arranged.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#F0D5DE]/65 md:text-base md:leading-8">
                        For availability, booking questions or travel
                        arrangements, begin with a private inquiry.
                    </p>

                    <Link
                        href="/contact"
                        className="private-inquiry-button mt-10 inline-flex items-center gap-5 border border-[#C77D96]/50 px-9 py-4 text-[9px] uppercase tracking-[0.3em] transition-colors duration-300 hover:bg-[#C77D96] hover:text-[#090809]"
                    >
                        <span>Private Inquiry</span>
                        <span aria-hidden="true">↗</span>
                    </Link>

                    <p className="mt-10 text-[8px] uppercase tracking-[0.3em] text-[#F0D5DE]/40">
                        Miss Cookie · By Prior Arrangement
                    </p>
                </div>
            </section>
        </div>
    );
}
