"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, ShieldCheck, Clock3, Heart, LockKeyhole } from "lucide-react";

const etiquetteItems = [
    {
        number: "01",
        title: "Communication",
        icon: MessageCircle,
        content:
            "Clear and respectful communication helps create a smooth experience from the first message. Please include your preferred date, approximate duration and location when making an inquiry.",
    },
    {
        number: "02",
        title: "Punctuality",
        icon: Clock3,
        content:
            "Time is valuable on both sides. Please arrive at the agreed time and communicate as early as possible if your plans change.",
    },
    {
        number: "03",
        title: "Respect",
        icon: Heart,
        content:
            "Mutual respect is essential. Thoughtful communication, appropriate behavior and consideration for personal boundaries are expected throughout every interaction.",
    },
    {
        number: "04",
        title: "Privacy",
        icon: LockKeyhole,
        content:
            "Discretion and privacy are important. Personal information and private conversations should be treated with the same consideration and respect expected in return.",
    },
    {
        number: "05",
        title: "Screening",
        icon: ShieldCheck,
        content:
            "For certain arrangements, additional information may be requested before details are confirmed. This process is handled privately and respectfully.",
    },
];

export default function Etiquette() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    function toggleItem(index: number) {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section className="min-h-screen bg-[#0A0908] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-14 lg:pb-40">
            <div className="mx-auto max-w-[1200px]">
                {/* INTRO */}
                <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:gap-24">
                    <div>
                        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            Before We Meet
                        </p>

                        <h1 className="max-w-3xl text-6xl leading-[0.9] tracking-[-0.03em] text-[#F3EEE6] md:text-8xl">
                            A little
                            <br />
                            <span className="italic">consideration.</span>
                        </h1>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-md text-sm leading-7 text-[#A99F94]">
                            Every private experience begins with mutual respect,
                            communication and consideration. These simple guidelines help
                            keep the experience comfortable, discreet and enjoyable for
                            everyone involved.
                        </p>
                    </div>
                </div>

                {/* ETIQUETTE ACCORDION */}
                <div className="mt-20 border-t border-[#F3EEE6]/10 md:mt-28">
                    {etiquetteItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.number}
                                className="border-b border-[#F3EEE6]/10"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={isOpen}
                                    className="group flex w-full items-center gap-5 py-7 text-left md:gap-8 md:py-9"
                                >
                                    {/* NUMBER */}
                                    <span className="w-8 shrink-0 text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                        {item.number}
                                    </span>

                                    {/* ICON */}
                                    <span
                                        className={`hidden shrink-0 transition-colors duration-300 sm:flex ${isOpen ? "text-[#C7B18A]" : "text-[#A99F94]/60"
                                            }`}
                                    >
                                        <Icon size={19} strokeWidth={1.2} />
                                    </span>

                                    {/* TITLE */}
                                    <span
                                        className={`flex-1 font-[family-name:var(--font-display)] text-3xl transition-colors duration-300 md:text-5xl ${isOpen
                                                ? "text-[#F3EEE6]"
                                                : "text-[#F3EEE6]/75 group-hover:text-[#F3EEE6]"
                                            }`}
                                    >
                                        {item.title}
                                    </span>

                                    {/* ARROW */}
                                    <span
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center border border-[#F3EEE6]/10 transition-all duration-300 ${isOpen
                                                ? "border-[#C7B18A]/50 text-[#C7B18A]"
                                                : "text-[#A99F94] group-hover:border-[#C7B18A]/30"
                                            }`}
                                    >
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={18} strokeWidth={1.2} />
                                        </motion.span>
                                    </span>
                                </button>

                                {/* CONTENT */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                height: {
                                                    duration: 0.35,
                                                    ease: [0.4, 0, 0.2, 1],
                                                },
                                                opacity: {
                                                    duration: 0.25,
                                                },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-9 pl-8 sm:pl-[84px] md:pb-12 md:pl-[112px]">
                                                <p className="max-w-2xl text-sm leading-7 text-[#A99F94] md:text-[15px]">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* NOTE */}
                <div className="mt-16 grid gap-8 border border-[#F3EEE6]/10 bg-[#151311] p-8 md:mt-20 md:grid-cols-[1fr_auto] md:items-center md:p-10">
                    <div>
                        <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#C7B18A]">
                            A simple principle
                        </p>

                        <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-[#F3EEE6] md:text-4xl">
                            Good communication makes everything{" "}
                            <span className="italic">effortless.</span>
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A99F94]">
                            If you have questions about an arrangement, simply reach out.
                            Details can be discussed privately before anything is confirmed.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="inline-flex w-fit items-center justify-center bg-[#F3EEE6] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0908] transition-all duration-300 hover:bg-[#C7B18A]"
                    >
                        Get in touch
                    </a>
                </div>

                {/* FOOTNOTE */}
                <div className="mt-12 flex items-center gap-4">
                    <div className="h-px w-10 bg-[#C7B18A]/50" />

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#A99F94]">
                        Orlando · Florida
                    </p>
                </div>
            </div>
        </section>
    );
}
