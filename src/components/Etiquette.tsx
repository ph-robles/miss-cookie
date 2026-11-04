"use client";

import {
    AnimatePresence,
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    ChevronDown,
    Clock3,
    Heart,
    LockKeyhole,
    MessageCircle,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const etiquetteItems = [
    {
        number: "01",
        title: "Conduct",
        eyebrow: "The atmosphere",
        icon: Heart,
        summary: "Courtesy, kindness and genuine presence.",
        content:
            "Courtesy sets the tone for everything that follows. The most memorable encounters are usually the ones where both people arrive relaxed, attentive and genuinely present. Kindness, confidence and emotional awareness are always appreciated.",
    },
    {
        number: "02",
        title: "Discretion",
        eyebrow: "A shared understanding",
        icon: LockKeyhole,
        summary: "Privacy is considered part of the experience.",
        content:
            "Privacy should feel natural, never complicated. Conversations, personal details and time shared together are treated with care, and the same consideration is expected in return. Discretion is not simply a guideline. It is part of the experience.",
    },
    {
        number: "03",
        title: "Presentation",
        eyebrow: "Attention to detail",
        icon: ShieldCheck,
        summary: "Cleanliness, composure and thoughtful presentation.",
        content:
            "Taking pride in how you present yourself makes a meaningful difference. Cleanliness, composure, attentiveness and a thoughtful approach create an atmosphere that feels effortless. True refinement is often expressed in the details.",
    },
    {
        number: "04",
        title: "Time",
        eyebrow: "A considered pace",
        icon: Clock3,
        summary: "Punctuality and clear communication matter.",
        content:
            "Punctuality and clear communication are deeply appreciated. I value arrangements that feel intentional rather than hurried, with enough room for the experience to unfold naturally. Respecting each other's time creates a much better atmosphere for everyone.",
    },
    {
        number: "05",
        title: "Screening",
        eyebrow: "Before we meet",
        icon: MessageCircle,
        summary: "A private introduction creates comfort on both sides.",
        content:
            "A thoughtful introduction helps establish comfort on both sides. Depending on the arrangement, additional information may be requested before details are confirmed. The process is handled privately, discreetly and with mutual consideration.",
    },
];

const quickPrinciples = [
    {
        title: "Mutual respect",
        description:
            "Every arrangement begins with courtesy, clear expectations and consideration on both sides.",
        icon: Heart,
    },
    {
        title: "Complete discretion",
        description:
            "Personal details, conversations and shared time remain treated with privacy and care.",
        icon: LockKeyhole,
    },
    {
        title: "Clear communication",
        description:
            "Thoughtful introductions and timely updates help every arrangement feel natural and organized.",
        icon: MessageCircle,
    },
];

const reveal = {
    hidden: {
        opacity: 0,
        y: 32,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Etiquette() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 24,
        mass: 0.25,
    });

    const heroImageY = useTransform(
        scrollYProgress,
        [0, 0.35],
        reduceMotion ? ["0%", "0%"] : ["0%", "12%"]
    );

    const heroImageScale = useTransform(
        scrollYProgress,
        [0, 0.35],
        reduceMotion ? [1, 1] : [1.04, 1.1]
    );

    const heroTextY = useTransform(
        scrollYProgress,
        [0, 0.3],
        reduceMotion ? ["0%", "0%"] : ["0%", "-14%"]
    );

    const heroTextOpacity = useTransform(
        scrollYProgress,
        [0, 0.28],
        [1, 0.36]
    );

    function toggleItem(index: number) {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    }

    function scrollToPrinciples() {
        document
            .getElementById("etiquette-principles")
            ?.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start",
            });
    }

    return (
        <div className="overflow-hidden bg-[#090809] text-[#F0D5DE]">
            {/* SCROLL PROGRESS */}
            <motion.div
                className="fixed left-0 top-0 z-[100] h-px w-full origin-left bg-[#C77D96]"
                style={{ scaleX: smoothProgress }}
                aria-hidden="true"
            />

            {/* HERO */}
            <section className="relative flex min-h-[90svh] items-end overflow-hidden md:min-h-screen">
                <motion.div
                    className="absolute inset-[-7%] will-change-transform"
                    style={{
                        y: heroImageY,
                        scale: heroImageScale,
                    }}
                    aria-hidden="true"
                >
                    <Image
                        src="/images/etiquette-hero.jpg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                <div
                    className="absolute inset-0 bg-[#090809]/30"
                    aria-hidden="true"
                />

                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#090809] via-[#090809]/75 to-[#090809]/10"
                    aria-hidden="true"
                />

                <div
                    className="absolute inset-0 bg-gradient-to-t from-[#090809] via-transparent to-[#090809]/30"
                    aria-hidden="true"
                />

                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(199,125,150,0.16),transparent_32%)]"
                    aria-hidden="true"
                />

                <motion.div
                    style={{
                        y: heroTextY,
                        opacity: heroTextOpacity,
                    }}
                    className="relative z-10 flex min-h-[90svh] w-full items-end px-6 pb-16 pt-36 md:min-h-screen md:px-10 md:pb-24 lg:px-14 lg:pb-28"
                >
                    <div className="mx-auto w-full max-w-[1500px]">
                        <div className="max-w-5xl">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                className="mb-7 flex items-center gap-4"
                            >
                                <span className="h-px w-10 bg-[#C77D96]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.42em] text-[#C77D96]">
                                    Before We Meet
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 38,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="max-w-5xl font-[family-name:var(--font-display)] text-[4rem] leading-[0.88] tracking-[-0.05em] text-[#F0D5DE] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem]"
                            >
                                The art of
                                <br />

                                <span className="font-light italic text-[#C77D96]">
                                    consideration.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="mt-8 max-w-xl text-sm leading-7 text-[#F0D5DE]/70 md:text-[15px]"
                            >
                                Ease, discretion and mutual respect create the
                                foundation for an experience that feels natural,
                                comfortable and genuinely enjoyable.
                            </motion.p>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 16,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.55,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="mt-10 flex flex-wrap items-center gap-4"
                            >
                                <button
                                    type="button"
                                    onClick={scrollToPrinciples}
                                    className="group inline-flex items-center gap-4 border border-[#C77D96]/55 bg-[#C77D96] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#090809] shadow-[0_15px_45px_rgba(199,125,150,0.18)] transition duration-300 hover:border-[#F0D5DE] hover:bg-[#F0D5DE]"
                                >
                                    Explore etiquette

                                    <ArrowDown
                                        size={15}
                                        strokeWidth={1.3}
                                        className="transition-transform duration-300 group-hover:translate-y-1"
                                        aria-hidden="true"
                                    />
                                </button>

                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 border border-[#F0D5DE]/20 px-6 py-4 text-[9px] uppercase tracking-[0.25em] text-[#F0D5DE] transition duration-300 hover:border-[#C77D96]/60 hover:text-[#C77D96]"
                                >
                                    Private inquiry

                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={1.3}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-8 right-8 z-20 hidden items-center gap-3 md:flex lg:right-14">
                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#F0D5DE]/45">
                        Etiquette
                    </span>

                    <span className="h-px w-8 bg-[#C77D96]/50" />

                    <span className="text-[8px] tracking-[0.25em] text-[#C77D96]">
                        05
                    </span>
                </div>
            </section>

            {/* QUICK PRINCIPLES */}
            <section
                id="etiquette-principles"
                className="scroll-mt-20 border-b border-[#F0D5DE]/10 bg-[#110B0E] px-6 py-20 md:px-10 md:py-28 lg:px-14"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    variants={staggerContainer}
                    className="mx-auto max-w-[1400px]"
                >
                    <motion.div
                        variants={reveal}
                        className="mb-10 grid gap-6 border-b border-[#C77D96]/15 pb-8 md:grid-cols-[1fr_auto] md:items-end"
                    >
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                                The foundation
                            </p>

                            <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-[0.98] tracking-[-0.04em] md:text-6xl">
                                A thoughtful experience begins
                                <span className="italic text-[#C77D96]">
                                    {" "}
                                    before we meet.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-[#BDA7B0] md:text-right">
                            Simple principles that create clarity, comfort and a
                            natural sense of connection.
                        </p>
                    </motion.div>

                    <div className="grid gap-4 lg:grid-cols-3">
                        {quickPrinciples.map((principle, index) => {
                            const Icon = principle.icon;

                            return (
                                <motion.article
                                    key={principle.title}
                                    variants={reveal}
                                    className="group relative overflow-hidden rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/45 p-7 transition duration-500 hover:-translate-y-1 hover:border-[#C77D96]/35 hover:bg-[#24151D]/70 hover:shadow-[0_24px_80px_rgba(199,125,150,0.08)] sm:p-8"
                                >
                                    <div
                                        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#C77D96]/[0.07] blur-[70px]"
                                        aria-hidden="true"
                                    />

                                    <div className="relative">
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10 text-[#C77D96]">
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.25}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <span className="font-[family-name:var(--font-display)] text-4xl text-[#C77D96]/25">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <h3 className="mt-8 font-[family-name:var(--font-display)] text-3xl tracking-[-0.025em] text-[#F0D5DE]">
                                            {principle.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-[#BDA7B0]">
                                            {principle.description}
                                        </p>

                                        <div className="mt-7 flex items-center gap-3 text-[8px] uppercase tracking-[0.26em] text-[#C77D96]">
                                            <Check size={13} strokeWidth={1.5} />
                                            Essential principle
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* INTRO */}
            <section className="relative px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div
                    className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C77D96]/[0.055] blur-[130px]"
                    aria-hidden="true"
                />

                <div className="relative mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-28">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={reveal}
                    >
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.4em] text-[#C77D96]">
                            A quiet standard
                        </p>

                        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.2rem]">
                            Refinement is
                            <br />

                            <span className="italic text-[#C77D96]">
                                felt in the details.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={reveal}
                        className="flex items-end lg:pb-2"
                    >
                        <div className="max-w-xl">
                            <p className="text-base leading-8 text-[#BDA7B0]">
                                The best experiences rarely need complicated rules.
                                They begin with two people who understand the value of
                                presence, good communication and consideration.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#BDA7B0]">
                                These principles help create an atmosphere where both
                                sides can feel comfortable, respected and completely at
                                ease.
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <span className="h-px w-12 bg-[#C77D96]/60" />

                                <span className="text-[8px] uppercase tracking-[0.3em] text-[#C77D96]">
                                    Mutual comfort · Mutual respect
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ETIQUETTE ACCORDION */}
            <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-14 lg:pb-40">
                <div className="mx-auto max-w-[1300px]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={reveal}
                        className="mb-8 flex items-end justify-between border-b border-[#F0D5DE]/10 pb-7"
                    >
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                                The essentials
                            </p>

                            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-[-0.025em] md:text-5xl">
                                A few things worth knowing.
                            </h2>
                        </div>

                        <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#BDA7B0]/50 sm:block">
                            05 principles
                        </span>
                    </motion.div>

                    <div className="overflow-hidden rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/20">
                        {etiquetteItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            const Icon = item.icon;
                            const panelId = `etiquette-panel-${index}`;
                            const buttonId = `etiquette-button-${index}`;

                            return (
                                <motion.article
                                    key={item.number}
                                    initial={{
                                        opacity: 0,
                                        y: 18,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.12,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.045,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={
                                        index < etiquetteItems.length - 1
                                            ? "border-b border-[#F0D5DE]/10"
                                            : ""
                                    }
                                >
                                    <button
                                        id={buttonId}
                                        type="button"
                                        onClick={() => toggleItem(index)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className={`group flex w-full items-center gap-4 px-5 py-7 text-left transition duration-500 sm:px-7 md:gap-8 md:px-9 md:py-9 ${isOpen
                                                ? "bg-[#C77D96]/[0.055]"
                                                : "bg-transparent hover:bg-[#C77D96]/[0.035]"
                                            }`}
                                    >
                                        <span className="w-7 shrink-0 text-[9px] tracking-[0.3em] text-[#C77D96] md:w-10">
                                            {item.number}
                                        </span>

                                        <span
                                            className={`hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:flex ${isOpen
                                                    ? "border-[#C77D96]/50 bg-[#C77D96]/10 text-[#C77D96]"
                                                    : "border-[#F0D5DE]/10 text-[#BDA7B0]/60 group-hover:border-[#C77D96]/30 group-hover:text-[#C77D96]"
                                                }`}
                                        >
                                            <Icon
                                                size={18}
                                                strokeWidth={1.2}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <span className="min-w-0 flex-1">
                                            <span
                                                className={`block text-[8px] uppercase tracking-[0.28em] transition-colors duration-300 sm:text-[9px] ${isOpen
                                                        ? "text-[#C77D96]"
                                                        : "text-[#BDA7B0]/50"
                                                    }`}
                                            >
                                                {item.eyebrow}
                                            </span>

                                            <span
                                                className={`mt-1 block font-[family-name:var(--font-display)] text-3xl tracking-[-0.025em] transition-all duration-500 md:text-5xl ${isOpen
                                                        ? "translate-x-1 text-[#F0D5DE]"
                                                        : "text-[#F0D5DE]/70 group-hover:text-[#F0D5DE]"
                                                    }`}
                                            >
                                                {item.title}
                                            </span>

                                            <span className="mt-2 hidden text-xs leading-6 text-[#BDA7B0]/60 md:block">
                                                {item.summary}
                                            </span>
                                        </span>

                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen
                                                    ? "border-[#C77D96]/50 bg-[#C77D96] text-[#090809]"
                                                    : "border-[#F0D5DE]/10 text-[#BDA7B0] group-hover:border-[#C77D96]/30 group-hover:text-[#C77D96]"
                                                }`}
                                        >
                                            <motion.span
                                                animate={{
                                                    rotate: isOpen ? 180 : 0,
                                                }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                            >
                                                <ChevronDown
                                                    size={17}
                                                    strokeWidth={1.2}
                                                    aria-hidden="true"
                                                />
                                            </motion.span>
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                id={panelId}
                                                role="region"
                                                aria-labelledby={buttonId}
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    height: {
                                                        duration: 0.45,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    },
                                                    opacity: {
                                                        duration: 0.25,
                                                    },
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid gap-6 px-5 pb-9 pl-12 sm:px-7 sm:pl-[7.5rem] md:grid-cols-[120px_1fr] md:gap-10 md:px-9 md:pb-12 md:pl-[9.5rem]">
                                                    <span className="hidden pt-1 text-[8px] uppercase tracking-[0.35em] text-[#BDA7B0]/40 md:block">
                                                        Principle
                                                    </span>

                                                    <div>
                                                        <p className="max-w-2xl text-sm leading-7 text-[#BDA7B0] md:text-[15px] md:leading-8">
                                                            {item.content}
                                                        </p>

                                                        <div className="mt-6 flex items-center gap-3 text-[8px] uppercase tracking-[0.26em] text-[#C77D96]">
                                                            <ShieldCheck
                                                                size={13}
                                                                strokeWidth={1.4}
                                                                aria-hidden="true"
                                                            />

                                                            Shared consideration
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* EDITORIAL STATEMENT */}
            <section className="relative overflow-hidden border-y border-[#F0D5DE]/10 bg-[#120B0F] px-6 py-24 md:px-10 md:py-36 lg:px-14">
                <div
                    className="pointer-events-none absolute -right-28 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#C77D96]/[0.07] blur-[120px]"
                    aria-hidden="true"
                />

                <div
                    className="pointer-events-none absolute -left-32 bottom-[-180px] h-80 w-80 rounded-full bg-[#A94F70]/[0.05] blur-[100px]"
                    aria-hidden="true"
                />

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mx-auto max-w-[1100px] text-center"
                >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10 text-[#C77D96]">
                        <Sparkles
                            size={19}
                            strokeWidth={1.25}
                            aria-hidden="true"
                        />
                    </div>

                    <p className="mt-6 text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                        The principle
                    </p>

                    <blockquote className="mt-8 font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-[-0.035em] text-[#F0D5DE] md:text-6xl lg:text-7xl">
                        “The right energy tends to reveal itself
                        <span className="italic text-[#C77D96]">
                            {" "}
                            naturally.
                        </span>
                        ”
                    </blockquote>

                    <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-[#BDA7B0]">
                        There is no need to force a dynamic. Thoughtfulness,
                        maturity and genuine consideration usually make the right
                        connection clear from the beginning.
                    </p>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="px-6 py-24 md:px-10 md:py-36 lg:px-14 lg:py-40">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mx-auto max-w-[1300px] overflow-hidden rounded-2xl border border-[#C77D96]/20 bg-gradient-to-br from-[#2B1721] via-[#190F14] to-[#090809] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:px-10 sm:py-16 lg:px-14"
                >
                    <div
                        className="pointer-events-none absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C77D96]/10 blur-[110px]"
                        aria-hidden="true"
                    />

                    <div className="relative grid items-end gap-12 md:grid-cols-[1fr_auto]">
                        <div>
                            <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#C77D96]">
                                Private Inquiry
                            </p>

                            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                                When everything feels
                                <br />

                                <span className="italic text-[#C77D96]">
                                    effortless.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-sm leading-7 text-[#BDA7B0]">
                                If you have any questions before making an arrangement,
                                you are welcome to reach out. Details can be discussed
                                privately and with complete discretion.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex w-fit items-center gap-5 rounded-xl border border-[#C77D96] bg-[#C77D96] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#090809] shadow-[0_14px_40px_rgba(199,125,150,0.2)] transition duration-300 hover:border-[#F0D5DE] hover:bg-[#F0D5DE]"
                        >
                            Get in touch

                            <ArrowRight
                                size={15}
                                strokeWidth={1.3}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    <div className="relative mt-12 flex flex-wrap items-center gap-4 border-t border-[#C77D96]/15 pt-7">
                        <span className="h-px w-10 bg-[#C77D96]/60" />

                        <p className="text-[8px] uppercase tracking-[0.35em] text-[#BDA7B0]/70">
                            United States · Available for travel
                        </p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}