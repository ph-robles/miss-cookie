"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const experiences = [
    {
        number: "01",
        title: "Private Evenings",
        eyebrow: "Private",
        description:
            "Thoughtfully planned private time in an elegant and relaxed atmosphere.",
        image: "/images/experience-01.jpg",
    },
    {
        number: "02",
        title: "Dinner & Social",
        eyebrow: "Social",
        description:
            "Good conversation, beautiful surroundings and an evening designed to feel effortless.",
        image: "/images/experience-02.jpg",
    },
    {
        number: "03",
        title: "Special Occasions",
        eyebrow: "Occasions",
        description:
            "A refined presence for celebrations, events and memorable occasions.",
        image: "/images/experience-03.jpg",
    },
    {
        number: "04",
        title: "Travel",
        eyebrow: "Beyond Orlando",
        description:
            "Available for select travel arrangements beyond Orlando by prior agreement.",
        image: "/images/experience-04.jpg",
    },
];

export default function Experience() {
    const [activeExperience, setActiveExperience] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="experience-page overflow-hidden bg-[#0A0908]">
            {/* =========================================================
          HERO
      ========================================================= */}

            <section className="relative flex min-h-screen items-end overflow-hidden">
                {/* HERO IMAGE */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/experience-hero.jpg"
                        alt="Miss Cookie"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    {/* Cinematic image treatment */}
                    <div className="absolute inset-0 bg-[#0A0908]/30" />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/45 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/20" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(199,177,138,0.08),transparent_35%)]" />
                </div>


                {/* Decorative vertical line */}
                <div className="absolute right-8 top-32 hidden h-[48vh] w-px bg-[#F3EEE6]/[0.08] lg:right-14 lg:block" />

                {/* Hero content */}
                <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 md:px-10 md:pb-24 lg:px-14 lg:pb-28">
                    <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
                        <div>
                            <div className="mb-9 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#C7B18A]/70" />

                                <span className="text-[9px] uppercase tracking-[0.42em] text-[#A99F94]">
                                    The Experience
                                </span>
                            </div>

                            <h1 className="max-w-[1100px] text-[clamp(4rem,10vw,10rem)] font-normal leading-[0.82] tracking-[-0.055em] text-[#F3EEE6]">
                                Moments
                                <br />
                                <span className="italic text-[#C7B18A]">
                                    around you.
                                </span>
                            </h1>

                            <p className="mt-10 max-w-lg text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                                An experience shaped by atmosphere, conversation and
                                attention to detail. Nothing rushed. Nothing unnecessary.
                                Simply time designed to feel natural.
                            </p>
                        </div>

                        <div className="hidden pb-2 lg:block">
                            <div className="flex flex-col items-end gap-3 text-right">
                                <span className="text-[8px] uppercase tracking-[0.38em] text-[#A99F94]/60">
                                    Orlando
                                </span>

                                <span className="text-[8px] uppercase tracking-[0.38em] text-[#A99F94]/60">
                                    Florida
                                </span>

                                <span className="mt-3 h-10 w-px bg-[#C7B18A]/30" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div
                    className={`absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 transition-opacity duration-500 md:flex ${scrolled ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                        Discover
                    </span>

                    <span className="h-10 w-px bg-gradient-to-b from-[#C7B18A]/60 to-transparent" />
                </div>
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.7fr_1.3fr] lg:px-14 lg:py-40">
                    <div>
                        <span className="text-[9px] uppercase tracking-[0.42em] text-[#C7B18A]">
                            A considered approach
                        </span>
                    </div>

                    <div className="max-w-4xl">
                        <h2 className="text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-[#F3EEE6] md:text-5xl lg:text-6xl">
                            The best moments are often the ones that feel{" "}
                            <span className="italic text-[#C7B18A]">effortless.</span>
                        </h2>

                        <div className="mt-10 grid gap-8 md:grid-cols-2">
                            <p className="text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                                Every experience begins with a conversation. Understanding
                                the occasion, the setting and the atmosphere allows the
                                details to be considered before anything is arranged.
                            </p>

                            <p className="text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                                The intention is simple: create an environment where
                                everything feels comfortable, polished and natural from
                                beginning to end.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          EXPERIENCE SHOWCASE
      ========================================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                    {/* Section heading */}
                    <div className="mb-16 flex items-end justify-between gap-8 md:mb-20">
                        <div>
                            <span className="text-[9px] uppercase tracking-[0.42em] text-[#C7B18A]">
                                Possibilities
                            </span>

                            <h2 className="mt-5 text-4xl font-normal leading-none tracking-[-0.03em] md:text-6xl">
                                Choose the setting.
                            </h2>
                        </div>

                        <div className="hidden items-center gap-3 md:flex">
                            <span className="text-[9px] tracking-[0.25em] text-[#A99F94]/60">
                                0{activeExperience + 1}
                            </span>

                            <span className="h-px w-12 bg-[#C7B18A]/30" />

                            <span className="text-[9px] tracking-[0.25em] text-[#A99F94]/40">
                                04
                            </span>
                        </div>
                    </div>

                    {/* Desktop editorial list */}
                    <div className="hidden lg:block">
                        <div className="grid grid-cols-[0.55fr_1.45fr] gap-10">
                            {/* Navigation */}
                            <div className="sticky top-32 self-start">
                                <div className="border-t border-[#F3EEE6]/10">
                                    {experiences.map((experience, index) => {
                                        const active = activeExperience === index;

                                        return (
                                            <button
                                                key={experience.number}
                                                type="button"
                                                onClick={() => setActiveExperience(index)}
                                                className={`group flex w-full items-start gap-6 border-b border-[#F3EEE6]/10 py-7 text-left transition-all duration-500 ${active ? "pl-4" : "pl-0"
                                                    }`}
                                            >
                                                <span
                                                    className={`pt-1 text-[9px] tracking-[0.3em] transition-colors duration-300 ${active
                                                        ? "text-[#C7B18A]"
                                                        : "text-[#A99F94]/50"
                                                        }`}
                                                >
                                                    {experience.number}
                                                </span>

                                                <span
                                                    className={`font-[family-name:var(--font-display)] text-3xl leading-none transition-all duration-500 ${active
                                                        ? "text-[#F3EEE6]"
                                                        : "text-[#A99F94]/55 group-hover:text-[#F3EEE6]"
                                                        }`}
                                                >
                                                    {experience.title}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-10 max-w-xs">
                                    <p className="text-[10px] uppercase leading-5 tracking-[0.2em] text-[#A99F94]/50">
                                        Each arrangement is discussed privately and confirmed
                                        according to availability.
                                    </p>
                                </div>
                            </div>

                            {/* Active experience */}
                            <div className="relative min-h-[720px]">
                                {experiences.map((experience, index) => {
                                    const active = activeExperience === index;

                                    return (
                                        <div
                                            key={experience.number}
                                            className={`absolute inset-0 transition-all duration-700 ${active
                                                ? "pointer-events-auto translate-y-0 opacity-100"
                                                : "pointer-events-none translate-y-4 opacity-0"
                                                }`}
                                        >
                                            <div className="relative h-[720px] overflow-hidden bg-[#151311]">
                                                <Image
                                                    src={experience.image}
                                                    alt={experience.title}
                                                    fill
                                                    priority={index === 0}
                                                    sizes="(max-width: 1280px) 65vw, 900px"
                                                    className={`object-cover transition-transform duration-[1400ms] ${active ? "scale-100" : "scale-105"
                                                        }`}
                                                />

                                                {/* Image treatment */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/95 via-[#0A0908]/15 to-[#0A0908]/5" />

                                                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-14">
                                                    <div className="flex max-w-3xl items-end justify-between gap-10">
                                                        <div>
                                                            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                                                {experience.eyebrow}
                                                            </span>

                                                            <h3 className="mt-5 text-4xl font-normal leading-[0.95] tracking-[-0.025em] text-[#F3EEE6] md:text-6xl">
                                                                {experience.title}
                                                            </h3>

                                                            <p className="mt-6 max-w-md text-sm leading-7 text-[#F3EEE6]/65">
                                                                {experience.description}
                                                            </p>
                                                        </div>

                                                        <span className="hidden text-[8px] uppercase tracking-[0.3em] text-[#F3EEE6]/50 md:block">
                                                            Explore
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Image index */}
                                                <div className="absolute right-8 top-8 md:right-12 md:top-12">
                                                    <span className="text-[9px] tracking-[0.3em] text-[#F3EEE6]/60">
                                                        {experience.number} / 04
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Mobile / tablet editorial cards */}
                    <div className="space-y-5 lg:hidden">
                        {experiences.map((experience) => (
                            <article
                                key={experience.number}
                                className="group relative overflow-hidden"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden bg-[#151311]">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 80vw"
                                        className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/20 to-transparent" />

                                    <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                                        <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                            {experience.number}
                                        </span>

                                        <span className="text-[8px] uppercase tracking-[0.3em] text-[#F3EEE6]/50">
                                            {experience.eyebrow}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                        <h3 className="text-4xl leading-none tracking-[-0.025em] text-[#F3EEE6] md:text-5xl">
                                            {experience.title}
                                        </h3>

                                        <p className="mt-5 max-w-lg text-sm leading-7 text-[#F3EEE6]/65">
                                            {experience.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          THE DIFFERENCE
      ========================================================= */}

            <section className="bg-[#0D0C0A]">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:px-14 lg:py-40">
                    <div>
                        <span className="text-[9px] uppercase tracking-[0.42em] text-[#C7B18A]">
                            The Difference
                        </span>

                        <h2 className="mt-6 max-w-lg text-4xl leading-[1.02] tracking-[-0.025em] md:text-6xl">
                            It is not about doing more.
                            <br />
                            <span className="italic text-[#C7B18A]">
                                It is about doing it well.
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
                        <div className="border-t border-[#F3EEE6]/10 pt-6">
                            <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                01
                            </span>

                            <h3 className="mt-5 text-2xl">Thoughtful planning</h3>

                            <p className="mt-4 text-sm leading-7 text-[#A99F94]">
                                Clear communication before the experience allows every
                                important detail to be understood without unnecessary
                                complications.
                            </p>
                        </div>

                        <div className="border-t border-[#F3EEE6]/10 pt-6">
                            <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                02
                            </span>

                            <h3 className="mt-5 text-2xl">Natural atmosphere</h3>

                            <p className="mt-4 text-sm leading-7 text-[#A99F94]">
                                The intention is never to make an experience feel
                                rehearsed. Comfort and authenticity remain at the center.
                            </p>
                        </div>

                        <div className="border-t border-[#F3EEE6]/10 pt-6">
                            <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                03
                            </span>

                            <h3 className="mt-5 text-2xl">Privacy</h3>

                            <p className="mt-4 text-sm leading-7 text-[#A99F94]">
                                Discretion and respectful communication are considered
                                throughout the entire process.
                            </p>
                        </div>

                        <div className="border-t border-[#F3EEE6]/10 pt-6">
                            <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                04
                            </span>

                            <h3 className="mt-5 text-2xl">Attention to detail</h3>

                            <p className="mt-4 text-sm leading-7 text-[#A99F94]">
                                From location to timing, the small decisions are what help
                                transform a plan into something memorable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          TRAVEL
      ========================================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                    <div className="relative overflow-hidden border border-[#F3EEE6]/10 bg-[#11100E]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(199,177,138,0.08),transparent_30%)]" />

                        <div className="relative grid gap-14 p-8 md:p-12 lg:grid-cols-[1fr_0.7fr] lg:p-16">
                            <div>
                                <span className="text-[9px] uppercase tracking-[0.42em] text-[#C7B18A]">
                                    Beyond Orlando
                                </span>

                                <h2 className="mt-6 max-w-2xl text-4xl leading-[1] tracking-[-0.03em] md:text-6xl">
                                    Some moments are worth
                                    <br />
                                    <span className="italic text-[#C7B18A]">
                                        going farther for.
                                    </span>
                                </h2>

                                <p className="mt-8 max-w-xl text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                                    Select travel arrangements may be considered beyond
                                    Orlando with advance planning. Availability, destination
                                    and details are discussed privately.
                                </p>

                                <Link
                                    href="/contact"
                                    className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-8 py-4 text-[10px] uppercase tracking-[0.28em]"
                                >
                                    <span>Discuss Travel</span>
                                </Link>
                            </div>

                            <div className="flex items-end justify-start lg:justify-end">
                                <div className="max-w-xs border-l border-[#C7B18A]/30 pl-6">
                                    <span className="block text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                                        Available by arrangement
                                    </span>

                                    <span className="mt-4 block font-[family-name:var(--font-display)] text-2xl italic text-[#F3EEE6]/80">
                                        Orlando · Beyond
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

                    <h2 className="mx-auto mt-7 max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                        Start with a
                        <br />
                        <span className="italic text-[#C7B18A]">
                            conversation.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                        Tell us what you have in mind. Availability, location and
                        additional details can be discussed privately.
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