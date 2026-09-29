"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    MapPin,
    Sparkles,
} from "lucide-react";

const experiences = [
    {
        number: "01",
        title: "Private Evenings",
        image: "/images/experience-01.jpg",
    },
    {
        number: "02",
        title: "Dinner & Social",
        image: "/images/experience-02.jpg",
    },
    {
        number: "03",
        title: "Special Occasions",
        image: "/images/experience-03.jpg",
    },
];

const galleryPreview = [
    "/images/gallery-01.jpg",
    "/images/gallery-02.jpg",
    "/images/gallery-03.jpg",
    "/images/gallery-04.jpg",
];

export default function HomeContent() {
    return (
        <>
            {/* =========================================================
          INTRODUCTION
      ========================================================= */}
            <section
                id="introduction"
                className="bg-[#0A0908] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
            >
                <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Orlando · Florida
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-4xl text-4xl leading-[1] tracking-[-0.02em] text-[#F3EEE6] md:text-6xl lg:text-7xl">
                            A private experience should feel{" "}
                            <span className="italic">effortless.</span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-sm leading-7 text-[#A99F94] md:text-base">
                            Thoughtful conversation, beautiful surroundings and genuine
                            connection. Every detail is approached with elegance,
                            discretion and attention to the person behind the occasion.
                        </p>

                        <Link
                            href="/about"
                            className="group mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F3EEE6]"
                        >
                            Discover more

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================================================
          EDITORIAL ABOUT
      ========================================================= */}
            <section className="bg-[#151311] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] overflow-hidden"
                    >
                        <Image
                            src="/images/about.jpg"
                            alt="Miss Cookie"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                        <div className="absolute bottom-6 left-6">
                            <span className="border border-white/20 bg-black/20 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
                                Miss Cookie
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            The Person Behind the Experience
                        </p>

                        <h2 className="max-w-2xl text-5xl leading-[0.93] tracking-[-0.02em] text-[#F3EEE6] md:text-7xl">
                            More than a
                            <br />
                            <span className="italic">moment.</span>
                        </h2>

                        <div className="mt-9 max-w-xl space-y-5 text-sm leading-7 text-[#A99F94]">
                            <p>
                                Based in Orlando, Florida, Miss Cookie creates private
                                experiences centered around presence, conversation and
                                thoughtful attention.
                            </p>

                            <p>
                                Whether it is an evening in the city, a special occasion or a
                                carefully arranged trip, the intention is always the same:
                                creating something personal and memorable.
                            </p>
                        </div>

                        <Link
                            href="/about"
                            className="group mt-9 inline-flex items-center gap-4 border-b border-[#C7B18A]/40 pb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C7B18A]"
                        >
                            About Miss Cookie

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          EXPERIENCE
      ========================================================= */}
            <section className="bg-[#0A0908] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
                        <div>
                            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                The Experience
                            </p>

                            <h2 className="max-w-3xl text-5xl leading-[0.92] text-[#F3EEE6] md:text-7xl">
                                Designed around
                                <br />
                                <span className="italic">the moment.</span>
                            </h2>
                        </div>

                        <Link
                            href="/experience"
                            className="group inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C7B18A]"
                        >
                            Explore experiences

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.number}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                }}
                                className="group"
                            >
                                <Link href="/experience">
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={experience.image}
                                            alt={experience.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                        <div className="absolute left-5 top-5">
                                            <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                                {experience.number}
                                            </span>
                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h3 className="font-[family-name:var(--font-display)] text-3xl text-[#F3EEE6] md:text-4xl">
                                                {experience.title}
                                            </h3>

                                            <div className="mt-4 h-px w-0 bg-[#C7B18A] transition-all duration-500 group-hover:w-12" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          EDITORIAL STATEMENT
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#151311] px-6 py-28 md:px-10 md:py-40 lg:px-14">
                <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#C7B18A]/5 blur-3xl" />

                <div className="relative mx-auto max-w-[1100px] text-center">
                    <Sparkles
                        size={22}
                        strokeWidth={1}
                        className="mx-auto mb-8 text-[#C7B18A]"
                    />

                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#A99F94]">
                        A different kind of evening
                    </p>

                    <blockquote className="mt-8 font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-[-0.02em] text-[#F3EEE6] md:text-6xl lg:text-7xl">
                        &ldquo;The most memorable experiences are rarely about where you
                        are. They are about{" "}
                        <span className="italic text-[#C7B18A]">
                            how the moment feels.
                        </span>
                        &rdquo;
                    </blockquote>
                </div>
            </section>

            {/* =========================================================
          TRAVEL
      ========================================================= */}
            <section className="bg-[#0A0908]">
                <div className="relative min-h-[75vh] overflow-hidden">
                    <Image
                        src="/images/travel.jpg"
                        alt="Travel experience"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-black/20 to-transparent" />

                    <div className="relative z-10 flex min-h-[75vh] items-end px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
                        <div className="mx-auto w-full max-w-[1400px]">
                            <div className="max-w-3xl">
                                <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                    Beyond Orlando
                                </p>

                                <h2 className="text-6xl leading-[0.88] text-[#F3EEE6] md:text-8xl">
                                    Sometimes the
                                    <br />
                                    <span className="italic">setting changes.</span>
                                </h2>

                                <p className="mt-8 max-w-lg text-sm leading-7 text-[#F3EEE6]/65">
                                    Select travel arrangements can be discussed privately in
                                    advance, depending on destination, dates and arrangements.
                                </p>

                                <Link
                                    href="/travel"
                                    className="group mt-8 inline-flex items-center gap-4 border border-[#F3EEE6]/30 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F3EEE6] transition-all duration-300 hover:border-[#C7B18A] hover:text-[#C7B18A]"
                                >
                                    Explore travel

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.2}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
          GALLERY PREVIEW
      ========================================================= */}
            <section className="bg-[#151311] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
                        <div>
                            <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                A Glimpse
                            </p>

                            <h2 className="text-5xl leading-[0.92] text-[#F3EEE6] md:text-7xl">
                                A few moments,
                                <br />
                                <span className="italic">captured.</span>
                            </h2>
                        </div>

                        <Link
                            href="/gallery"
                            className="group inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C7B18A]"
                        >
                            View full gallery

                            <ArrowUpRight
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                        {galleryPreview.map((image, index) => (
                            <motion.div
                                key={image}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className={`relative overflow-hidden ${index === 1 || index === 3
                                    ? "aspect-[4/5] md:mt-12"
                                    : "aspect-[4/5]"
                                    }`}
                            >
                                <Link href="/gallery">
                                    <Image
                                        src={image}
                                        alt="Miss Cookie"
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-1000 hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 hover:bg-black/15" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
          PRIVATE ARRANGEMENTS
      ========================================================= */}
            <section className="bg-[#0A0908] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                    <div>
                        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Private Arrangements
                        </p>

                        <h2 className="text-5xl leading-[0.92] text-[#F3EEE6] md:text-7xl">
                            Your time,
                            <br />
                            <span className="italic">your experience.</span>
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-xl text-sm leading-7 text-[#A99F94]">
                            Every arrangement is discussed privately and thoughtfully.
                            Availability, duration, location and travel details can be
                            considered according to the occasion.
                        </p>

                        <div className="mt-10 grid gap-0 border-t border-[#F3EEE6]/10">
                            {[
                                "Private evenings",
                                "Dinner & social",
                                "Special occasions",
                                "Travel arrangements",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between border-b border-[#F3EEE6]/10 py-5"
                                >
                                    <span className="text-sm text-[#F3EEE6]">{item}</span>

                                    <span className="text-[9px] tracking-[0.3em] text-[#C7B18A]">
                                        0{index + 1}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/rates"
                            className="inline-flex items-center justify-center bg-[#F3EEE6] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] !text-[#0A0908] transition-all duration-300 hover:bg-[#C7B18A]"
                        >
                            View Arrangements
                        </Link>
                    </div>
                </div>
            </section>

            {/* =========================================================
          CONTACT CTA
      ========================================================= */}
            <section className="relative overflow-hidden bg-[#151311] px-6 py-28 md:px-10 md:py-40 lg:px-14">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7B18A]/5 blur-3xl" />

                <div className="relative mx-auto max-w-[1000px] text-center">
                    <MapPin
                        size={20}
                        strokeWidth={1}
                        className="mx-auto mb-7 text-[#C7B18A]"
                    />

                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#A99F94]">
                        Orlando · Florida
                    </p>

                    <h2 className="mt-7 text-6xl leading-[0.88] text-[#F3EEE6] md:text-8xl">
                        Ready to create
                        <br />
                        <span className="italic">your moment?</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#A99F94]">
                        For availability and private arrangements, get in touch with your
                        preferred date, location and any details you would like to share.
                    </p>

                    <Link
                        href="/contact"
                        className="group mt-9 inline-flex items-center gap-5 bg-[#F3EEE6] px-9 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0A0908] transition-all duration-300 hover:bg-[#C7B18A]"
                    >
                        Private inquiry

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.2}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>
            </section>

            {/* =========================================================
          FINAL MARK
      ========================================================= */}
            <section className="bg-[#0A0908] px-6 py-16 md:px-10 md:py-20 lg:px-14">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between">
                    <div className="h-px flex-1 bg-[#F3EEE6]/10" />

                    <span className="px-6 font-[family-name:var(--font-display)] text-2xl italic text-[#C7B18A]">
                        MC
                    </span>

                    <div className="h-px flex-1 bg-[#F3EEE6]/10" />
                </div>
            </section>
        </>
    );
}