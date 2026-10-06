"use client";

import { useState } from "react";
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    ChevronDown,
    Clock3,
    Heart,
    LockKeyhole,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const etiquetteItems = [
    {
        number: "01",
        title: "Conduct",
        eyebrow: "The atmosphere",
        icon: Heart,
        content:
            "Courtesy sets the tone for everything that follows. The most memorable encounters are usually the ones where both people arrive relaxed, attentive and genuinely present. Kindness, confidence and emotional awareness are always appreciated.",
    },
    {
        number: "02",
        title: "Discretion",
        eyebrow: "A shared understanding",
        icon: LockKeyhole,
        content:
            "Privacy should feel natural, never complicated. Conversations, personal details and time shared together are treated with care, and the same consideration is expected in return. Discretion is not simply a guideline — it is part of the experience.",
    },
    {
        number: "03",
        title: "Presentation",
        eyebrow: "Attention to detail",
        icon: ShieldCheck,
        content:
            "Taking pride in how you present yourself makes a meaningful difference. Cleanliness, composure, attentiveness and a thoughtful approach create an atmosphere that feels effortless. True refinement is often expressed in the details.",
    },
    {
        number: "04",
        title: "Time",
        eyebrow: "A considered pace",
        icon: Clock3,
        content:
            "Punctuality and clear communication are deeply appreciated. I value arrangements that feel intentional rather than hurried, with enough room for the experience to unfold naturally. Respecting each other's time creates a much better atmosphere for everyone.",
    },
    {
        number: "05",
        title: "Screening",
        eyebrow: "Before we meet",
        icon: MessageCircle,
        content:
            "A thoughtful introduction helps establish comfort on both sides. Depending on the arrangement, additional information may be requested before details are confirmed. The process is handled privately, discreetly and with mutual consideration.",
    },
];

const reveal = {
    hidden: {
        opacity: 0,
        y: 28,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Etiquette() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const { scrollYProgress } = useScroll();

    const heroImageY = useTransform(
        scrollYProgress,
        [0, 0.35],
        ["0%", "12%"]
    );

    const heroTextY = useTransform(
        scrollYProgress,
        [0, 0.3],
        ["0%", "-18%"]
    );

    function toggleItem(index: number) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <div className="etiquette-page overflow-hidden bg-[#0A0908] text-[#F3EEE6]">
            {/* SCROLL PROGRESS */}
            <motion.div
                className="fixed left-0 top-0 z-[100] h-[1px] origin-left bg-[#C7B18A]"
                style={{ scaleX: scrollYProgress }}
            />

            {/* =========================================================
          HERO
      ========================================================= */}
            <section className="relative min-h-[92vh] overflow-hidden md:min-h-screen">
                <motion.div
                    style={{ y: heroImageY }}
                    className="absolute inset-[-8%] will-change-transform"
                >
                    <Image
                        src="/images/etiquette-hero.jpg"
                        alt="Miss Cookie"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                {/* cinematic overlays */}
                <div className="absolute inset-0 bg-[#0A0908]/25" />

                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908] via-[#0A0908]/70 to-[#0A0908]/10" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/30" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(199,177,138,0.10),transparent_35%)]" />

                <motion.div
                    style={{ y: heroTextY }}
                    className="relative z-10 flex min-h-[92vh] items-end px-6 pb-20 md:min-h-screen md:px-10 md:pb-24 lg:px-14 lg:pb-28"
                >
                    <div className="mx-auto w-full max-w-[1500px]">
                        <div className="max-w-4xl">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                className="mb-7 flex items-center gap-4"
                            >
                                <span className="h-px w-10 bg-[#C7B18A]" />

                                <span className="text-[9px] font-medium uppercase tracking-[0.42em] text-[#C7B18A]">
                                    Before We Meet
                                </span>
                            </motion.div>

                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0, y: 35 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            delay: 0.12,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },
                                }}
                                className="max-w-4xl text-[4rem] leading-[0.88] tracking-[-0.045em] text-[#F3EEE6] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem]"
                            >
                                The art of
                                <br />
                                <span className="italic text-[#D8C7A9]">
                                    consideration.
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.35,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="mt-8 max-w-xl text-sm leading-7 text-[#F3EEE6]/70 md:text-[15px]"
                            >
                                Ease, discretion and mutual respect create the foundation
                                for an experience that feels natural, comfortable and
                                genuinely enjoyable.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="mt-14 flex items-center gap-4"
                        >
                            <span className="text-[8px] uppercase tracking-[0.35em] text-[#F3EEE6]/45">
                                Scroll to explore
                            </span>

                            <span className="h-px w-16 bg-[#F3EEE6]/20" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* editorial index */}
                <div className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex lg:right-14">
                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#F3EEE6]/45">
                        Etiquette
                    </span>
                    <span className="h-px w-8 bg-[#C7B18A]/40" />
                    <span className="text-[8px] tracking-[0.25em] text-[#C7B18A]">
                        05
                    </span>
                </div>
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}
            <section className="relative px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
                <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-28">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={reveal}
                    >
                        <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            A quiet standard
                        </p>

                        <h2 className="max-w-3xl text-5xl leading-[0.95] tracking-[-0.035em] md:text-7xl lg:text-[6.2rem]">
                            Refinement is
                            <br />
                            <span className="italic text-[#C7B18A]">
                                felt in the details.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={reveal}
                        className="flex items-end lg:pb-2"
                    >
                        <div className="max-w-xl">
                            <p className="text-base leading-8 text-[#A99F94]">
                                The best experiences rarely need complicated rules. They
                                begin with two people who understand the value of presence,
                                good communication and consideration.
                            </p>

                            <p className="mt-6 text-base leading-8 text-[#A99F94]">
                                These principles simply help create the kind of atmosphere
                                where both sides can feel comfortable, respected and at ease.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
          ACCORDION
      ========================================================= */}
            <section className="px-6 pb-28 md:px-10 md:pb-36 lg:px-14 lg:pb-44">
                <div className="mx-auto max-w-[1300px]">
                    <div className="mb-10 flex items-end justify-between border-b border-[#F3EEE6]/10 pb-6">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                The essentials
                            </p>

                            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl md:text-4xl">
                                A few things worth knowing.
                            </h2>
                        </div>

                        <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#A99F94]/50 sm:block">
                            05 principles
                        </span>
                    </div>

                    <div>
                        {etiquetteItems.map((item, index) => {
                            const isOpen = openIndex === index;
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.number}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: index * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="border-b border-[#F3EEE6]/10"
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggleItem(index)}
                                        aria-expanded={isOpen}
                                        className="group flex w-full items-center gap-4 py-7 text-left md:gap-8 md:py-9"
                                    >
                                        {/* NUMBER */}
                                        <span className="w-7 shrink-0 text-[9px] tracking-[0.3em] text-[#C7B18A] md:w-10">
                                            {item.number}
                                        </span>

                                        {/* ICON */}
                                        <span
                                            className={`hidden h-10 w-10 shrink-0 items-center justify-center border transition-all duration-500 sm:flex ${isOpen
                                                    ? "border-[#C7B18A]/40 bg-[#C7B18A]/5 text-[#C7B18A]"
                                                    : "border-[#F3EEE6]/10 text-[#A99F94]/50 group-hover:border-[#C7B18A]/30 group-hover:text-[#C7B18A]"
                                                }`}
                                        >
                                            <Icon size={17} strokeWidth={1.15} />
                                        </span>

                                        {/* TITLE AREA */}
                                        <span className="flex-1">
                                            <span
                                                className={`block text-[9px] uppercase tracking-[0.3em] transition-colors duration-300 ${isOpen
                                                        ? "text-[#C7B18A]"
                                                        : "text-[#A99F94]/45"
                                                    }`}
                                            >
                                                {item.eyebrow}
                                            </span>

                                            <span
                                                className={`mt-1 block font-[family-name:var(--font-display)] text-3xl tracking-[-0.015em] transition-all duration-500 md:text-5xl ${isOpen
                                                        ? "translate-x-1 text-[#F3EEE6]"
                                                        : "text-[#F3EEE6]/65 group-hover:text-[#F3EEE6]"
                                                    }`}
                                            >
                                                {item.title}
                                            </span>
                                        </span>

                                        {/* ARROW */}
                                        <span
                                            className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-500 ${isOpen
                                                    ? "border-[#C7B18A]/50 bg-[#C7B18A]/5 text-[#C7B18A]"
                                                    : "border-[#F3EEE6]/10 text-[#A99F94] group-hover:border-[#C7B18A]/30"
                                                }`}
                                        >
                                            <motion.span
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                            >
                                                <ChevronDown size={17} strokeWidth={1.15} />
                                            </motion.span>
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
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
                                                <div className="grid gap-8 pb-10 pl-7 sm:pl-[7.5rem] md:grid-cols-[120px_1fr] md:gap-10 md:pb-14">
                                                    <span className="hidden pt-1 text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/40 md:block">
                                                        Principle
                                                    </span>

                                                    <p className="max-w-2xl text-sm leading-7 text-[#A99F94] md:text-[15px] md:leading-8">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================
          QUOTE / STATEMENT
      ========================================================= */}
            <section className="relative overflow-hidden border-y border-[#F3EEE6]/10 bg-[#11100E] px-6 py-28 md:px-10 md:py-36 lg:px-14">
                <div className="absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#C7B18A]/[0.035] blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="relative mx-auto max-w-[1100px] text-center"
                >
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                        The principle
                    </span>

                    <blockquote className="mt-8 font-[family-name:var(--font-display)] text-4xl leading-[1.05] tracking-[-0.025em] text-[#F3EEE6] md:text-6xl lg:text-7xl">
                        “The right energy tends to reveal itself
                        <span className="italic text-[#C7B18A]">
                            {" "}
                            naturally.
                        </span>
                        ”
                    </blockquote>

                    <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-[#A99F94]">
                        There is no need to force a dynamic. Thoughtfulness,
                        maturity and genuine consideration usually make the right
                        connection clear from the beginning.
                    </p>
                </motion.div>
            </section>

            {/* =========================================================
          CTA
      ========================================================= */}
            <section className="px-6 py-28 md:px-10 md:py-36 lg:px-14 lg:py-44">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto grid max-w-[1300px] items-end gap-12 border-b border-[#F3EEE6]/10 pb-16 md:grid-cols-[1fr_auto] md:pb-20"
                >
                    <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            Private Inquiry
                        </p>

                        <h2 className="mt-5 max-w-3xl text-5xl leading-[0.95] tracking-[-0.035em] md:text-7xl">
                            When everything feels
                            <br />
                            <span className="italic text-[#C7B18A]">
                                effortless.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-[#A99F94]">
                            If you have any questions before making an arrangement,
                            you are welcome to reach out. Details can be discussed
                            privately and with complete discretion.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="group relative inline-flex w-fit items-center gap-5 overflow-hidden border border-[#C7B18A]/50 px-7 py-4 text-[9px] font-medium uppercase tracking-[0.25em] text-[#C7B18A] transition-colors duration-500 hover:text-[#0A0908]"
                    >
                        <span className="absolute inset-0 -translate-y-full bg-[#C7B18A] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />

                        <span className="relative z-10">
                            Get in touch
                        </span>

                        <span className="relative z-10 h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
                    </Link>
                </motion.div>

                <div className="mx-auto mt-10 flex max-w-[1300px] items-center gap-4">
                    <span className="h-px w-10 bg-[#C7B18A]/50" />

                    <p className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                        Orlando · Florida
                    </p>
                </div>
            </section>
        </div>
    );
}