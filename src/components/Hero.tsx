"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="top"
            className="relative flex min-h-screen items-end overflow-hidden bg-[#0A0908]"
        >
            <div className="absolute inset-0">
                <Image
                    src="/images/hero.jpg"
                    alt="Miss Cookie in Orlando, Florida"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/45 to-black/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/10" />
            </div>

            <div className="relative z-10 w-full px-6 pb-14 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
                <div className="mx-auto max-w-[1600px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            Orlando · Florida
                        </p>

                        <h1 className="text-7xl leading-[0.82] tracking-[-0.03em] text-[#F3EEE6] sm:text-8xl md:text-[9rem] lg:text-[11rem]">
                            Miss
                            <br />
                            <span className="italic">Cookie</span>
                        </h1>

                        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
                            <p className="max-w-sm text-sm leading-6 text-[#A99F94]">
                                Private experiences, thoughtfully curated with elegance,
                                discretion and genuine connection.
                            </p>

                            <div className="flex gap-3">
                                <a
                                    href="/experience"
                                    className="inline-flex items-center justify-center bg-[#F3EEE6] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] !text-[#0A0908] transition-all duration-300 hover:bg-[#C7B18A]"
                                >
                                    Discover
                                </a>

                                <a
                                    href="/contact"
                                    className="border border-[#F3EEE6]/30 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F3EEE6] transition-all duration-300 hover:border-[#C7B18A] hover:text-[#C7B18A]"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.a
                        href="#introduction"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4, duration: 1 }}
                        className="mt-16 flex items-center gap-4 text-[#A99F94]"
                    >
                        <span className="text-[9px] uppercase tracking-[0.35em]">
                            Scroll to explore
                        </span>

                        <ArrowDown size={15} strokeWidth={1} />
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
