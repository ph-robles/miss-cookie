
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { CSSProperties } from "react";

const champagneDrops = Array.from({ length: 55 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    delay: `${-((index * 7) % 90) / 10}s`,
}));

export default function Hero() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="top"
            className="relative flex min-h-screen items-end overflow-hidden bg-[#090809]"
        >
            {/* Fotografia de fundo */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Miss Cookie in USA"
                    fill
                    priority
                    className="object-cover object-center md:object-[center_45%] lg:object-[center_35%]"
                />
                {/* Camadas de contraste para manter o texto legível */}
                <div className="absolute inset-0 bg-[#090809]/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090809] via-[#090809]/45 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/10" />

                {/* Iluminação rosa sutil */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#C77D96]/[0.08] blur-[100px]"
                />
            </div>

            {/* Chuva de champanhe */}
            {!shouldReduceMotion && (
                <div className="champagne-rain" aria-hidden="true">
                    <div className="champagne-glow" />

                    {champagneDrops.map((drop) => (
                        <span
                            key={drop.id}
                            className="champagne-drop"
                            style={
                                {
                                    "--drop-left": drop.left,
                                    "--drop-delay": drop.delay,
                                } as CSSProperties
                            }
                        />
                    ))}
                </div>
            )}

            {/* Conteúdo principal */}
            <div className="relative z-10 w-full px-6 pb-14 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
                <div className="mx-auto max-w-[1600px]">
                    <motion.div
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: shouldReduceMotion ? 0 : 1,
                            ease: "easeOut",
                        }}
                        className="max-w-4xl"
                    >
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C77D96]">
                            Orlando · Florida
                        </p>

                        <h1 className="text-7xl leading-[0.82] tracking-[-0.03em] text-[#F0D5DE] sm:text-8xl md:text-[9rem] lg:text-[11rem]">
                            Miss
                            <br />
                            <span className="italic">Cookie</span>
                        </h1>

                        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                            <p className="max-w-sm text-sm leading-6 text-[#F0D5DE]/75">
                                Private experiences, thoughtfully curated with elegance,
                                discretion and genuine connection.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="/experience"
                                    className="inline-flex items-center justify-center bg-[#F0D5DE] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#090809] transition-colors duration-300 hover:bg-[#C77D96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                                >
                                    Discover
                                </a>

                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center border border-[#F0D5DE]/30 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0D5DE] transition-colors duration-300 hover:border-[#C77D96] hover:text-[#C77D96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.a
                        href="#introduction"
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: shouldReduceMotion ? 0 : 1.4,
                            duration: shouldReduceMotion ? 0 : 1,
                        }}
                        className="mt-16 inline-flex items-center gap-4 text-[#F0D5DE]/70 transition-colors hover:text-[#C77D96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                    >
                        <span className="text-[9px] uppercase tracking-[0.35em]">
                            Scroll to explore
                        </span>
                        <ArrowDown size={15} strokeWidth={1} aria-hidden="true" />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
