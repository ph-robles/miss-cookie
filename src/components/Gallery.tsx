"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    LockKeyhole,
    Sparkles,
} from "lucide-react";

const previewImages = [
    {
        src: "/images/gallery-01.jpg",
        alt: "Miss Cookie — editorial preview 01",
        number: "01",
    },
    {
        src: "/images/gallery-02.jpg",
        alt: "Miss Cookie — editorial preview 02",
        number: "02",
    },
    {
        src: "/images/gallery-03.jpg",
        alt: "Miss Cookie — editorial preview 03",
        number: "03",
    },
    {
        src: "/images/gallery-04.jpg",
        alt: "Miss Cookie — editorial preview 04",
        number: "04",
    },
];

const reveal = {
    hidden: { opacity: 0, y: 26 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Gallery() {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.4], ["0%", "12%"]);

    return (
        <div className="overflow-hidden bg-[#090809] text-[#F0D5DE]">
            {/* Scroll progress */}
            <motion.div
                className="fixed left-0 top-0 z-[100] h-px origin-left bg-[#C77D96]"
                style={{ scaleX: scrollYProgress }}
                aria-hidden="true"
            />

            {/* Editorial hero */}
            <section className="relative flex min-h-[82svh] items-end overflow-hidden md:min-h-[90svh]">
                <motion.div
                    className="absolute inset-[-5%]"
                    style={{ y: heroY }}
                    aria-hidden="true"
                >
                    <Image
                        src="/images/gallery-01.jpg"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#090809]/90 via-[#090809]/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090809] via-transparent to-[#090809]/20" />

                <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-16 pt-36 md:px-10 md:pb-24 lg:px-14">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={reveal}
                        className="max-w-4xl"
                    >
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#C77D96]" />
                            <p className="text-[9px] uppercase tracking-[0.42em] text-[#C77D96]">
                                The Members Collection
                            </p>
                        </div>

                        <h1 className="text-[4.2rem] leading-[0.86] tracking-[-0.055em] sm:text-8xl md:text-[9rem] lg:text-[10rem]">
                            Beyond
                            <br />
                            <span className="font-light italic text-[#F0D5DE]">
                                the ordinary.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-lg text-sm leading-7 text-[#F0D5DE]/75 md:text-[15px]">
                            A more personal collection, created for those who
                            appreciate the beauty of details, atmosphere and
                            moments beyond the public gallery.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                document
                                    .getElementById("membership")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="group mt-10 inline-flex items-center gap-4 border border-[#F0D5DE]/25 px-6 py-4 text-[9px] uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#C77D96]/70 hover:text-[#C77D96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                        >
                            Discover membership
                            <ArrowDown
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-y-1"
                                aria-hidden="true"
                            />
                        </button>
                    </motion.div>

                    <div className="absolute bottom-8 right-8 hidden items-center gap-3 md:flex lg:right-14">
                        <LockKeyhole
                            size={13}
                            strokeWidth={1.2}
                            className="text-[#C77D96]"
                            aria-hidden="true"
                        />
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white/65">
                            Members access
                        </span>
                    </div>
                </div>
            </section>

            {/* Public preview */}
            <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={reveal}
                    className="mx-auto max-w-[1500px]"
                >
                    <div className="grid gap-8 border-b border-[#F0D5DE]/10 pb-10 md:grid-cols-[1fr_auto] md:items-end md:pb-12">
                        <div>
                            <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                                A glimpse into the collection
                            </p>
                            <h2 className="text-4xl leading-[0.95] tracking-[-0.04em] md:text-6xl lg:text-7xl">
                                A study in
                                <span className="italic text-[#C77D96]">
                                    {" "}presence.
                                </span>
                            </h2>
                            <p className="mt-6 max-w-xl text-sm leading-7 text-[#F0D5DE]/60">
                                Four selected photographs offer a glimpse of
                                the visual style. The members collection is
                                reserved for active subscribers.
                            </p>
                        </div>

                        <div className="flex items-center gap-3 md:pb-1">
                            <span className="font-[family-name:var(--font-display)] text-4xl text-[#C77D96]">
                                04
                            </span>
                            <div>
                                <p className="text-[9px] uppercase tracking-[0.25em]">
                                    Public previews
                                </p>
                                <p className="mt-1 text-xs text-[#F0D5DE]/50">
                                    Selected moments
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
                        {previewImages.map((image, index) => (
                            <motion.div
                                key={image.src}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1] as const,
                                }}
                                className="group relative aspect-[3/4] overflow-hidden bg-[#24151D]"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-5">
                                    <div>
                                        <span className="block text-[8px] uppercase tracking-[0.3em] text-white/65">
                                            Miss Cookie
                                        </span>
                                        <span className="mt-1 block font-[family-name:var(--font-display)] text-xl text-white sm:text-2xl">
                                            {image.number}
                                        </span>
                                    </div>

                                    <span className="flex h-8 w-8 items-center justify-center border border-white/40 text-white">
                                        <ArrowUpRight
                                            size={14}
                                            strokeWidth={1.2}
                                            aria-hidden="true"
                                        />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <p className="mt-6 text-[9px] uppercase tracking-[0.22em] text-[#F0D5DE]/40">
                        Public preview · Four selected photographs
                    </p>
                </motion.div>
            </section>

            {/* Membership presentation */}
            <section
                id="membership"
                className="relative scroll-mt-20 overflow-hidden border-y border-[#F0D5DE]/10 bg-[#24151D] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
            >
                <div
                    className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C77D96]/[0.09] blur-3xl"
                    aria-hidden="true"
                />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={reveal}
                    className="relative mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center"
                >
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <Sparkles
                                size={15}
                                strokeWidth={1.3}
                                className="text-[#C77D96]"
                                aria-hidden="true"
                            />
                            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                                The private experience
                            </p>
                        </div>

                        <h2 className="text-5xl leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-8xl">
                            A little
                            <br />
                            <span className="italic text-[#C77D96]">
                                more personal.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-lg text-sm leading-7 text-[#F0D5DE]/65">
                            The members gallery is designed as a private
                            destination for subscribers. Membership details
                            and access arrangements are available by inquiry.
                        </p>
                    </div>

                    <div className="border border-[#C77D96]/25 bg-[#090809]/35 p-7 sm:p-9">
                        <div className="flex h-12 w-12 items-center justify-center border border-[#C77D96]/40 text-[#C77D96]">
                            <LockKeyhole
                                size={20}
                                strokeWidth={1.2}
                                aria-hidden="true"
                            />
                        </div>

                        <p className="mt-7 text-[9px] uppercase tracking-[0.35em] text-[#C77D96]">
                            Members only
                        </p>

                        <h3 className="mt-3 text-3xl tracking-[-0.03em]">
                            Private Gallery
                        </h3>

                        <p className="mt-4 text-sm leading-7 text-[#F0D5DE]/60">
                            Interested in membership? Get in touch for
                            information about subscription availability,
                            pricing and access.
                        </p>

                        <Link
                            href="/contact"
                            className="group mt-8 inline-flex w-full items-center justify-between gap-4 border border-[#C77D96]/55 px-5 py-4 text-[9px] uppercase tracking-[0.22em] text-[#C77D96] transition-colors duration-300 hover:bg-[#C77D96] hover:text-[#090809] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                        >
                            Ask about membership
                            <ArrowRight
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            />
                        </Link>

                        <p className="mt-4 text-[10px] leading-5 text-[#F0D5DE]/35">
                            Membership access and subscription payments must
                            be activated separately.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Closing statement */}
            <section className="px-6 py-20 text-center md:px-10 md:py-28">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reveal}
                    className="mx-auto max-w-3xl"
                >
                    <p className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                        Beyond the frame
                    </p>

                    <h2 className="mt-6 text-4xl leading-tight tracking-[-0.04em] md:text-6xl">
                        Some moments are
                        <br />
                        <span className="italic text-[#C77D96]">
                            meant to be discovered.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-[#F0D5DE]/55">
                        For private inquiries and further information,
                        you are welcome to get in touch directly.
                    </p>

                    <Link
                        href="/contact"
                        className="group mt-8 inline-flex items-center gap-4 border border-[#F0D5DE]/20 px-7 py-4 text-[9px] uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#C77D96]/60 hover:text-[#C77D96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C77D96]"
                    >
                        Private inquiry
                        <ArrowRight
                            size={15}
                            strokeWidth={1.2}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        />
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
