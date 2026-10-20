"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Expand,
    X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const images = Array.from({ length: 22 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
        src: `/images/gallery-${number}.jpg`,
        alt: `Miss Cookie — editorial portrait ${number}`,
        number,
    };
});

const reveal = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function imageLayout(index: number) {
    const layouts = [
        "col-span-12 md:col-span-7 aspect-[4/5] md:aspect-[0.91/1]",
        "col-span-6 md:col-span-5 aspect-[3/4] md:aspect-[0.78/1] md:mt-24",
        "col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[0.83/1]",
        "col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[0.83/1] md:mt-16",
        "col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[0.83/1]",
        "col-span-12 md:col-span-8 aspect-[4/3] md:aspect-[1.2/1] md:mt-16",
        "col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[0.8/1]",
        "col-span-6 md:col-span-4 aspect-[3/4] md:aspect-[0.8/1] md:mt-20",
    ];

    return layouts[index % layouts.length];
}

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [loadedImages, setLoadedImages] = useState<number[]>([]);
    const { scrollYProgress } = useScroll();

    const heroY = useTransform(scrollYProgress, [0, 0.35], ["0%", "15%"]);

    const closeGallery = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const previousImage = useCallback(() => {
        setSelectedIndex((current) =>
            current === null
                ? null
                : (current - 1 + images.length) % images.length
        );
    }, []);

    const nextImage = useCallback(() => {
        setSelectedIndex((current) =>
            current === null ? null : (current + 1) % images.length
        );
    }, []);

    useEffect(() => {
        if (selectedIndex === null) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") closeGallery();
            if (event.key === "ArrowLeft") previousImage();
            if (event.key === "ArrowRight") nextImage();
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, closeGallery, previousImage, nextImage]);

    return (
        <div className="overflow-hidden bg-[#0A0908] text-[#F3EEE6]">
            {/* SCROLL PROGRESS */}
            <motion.div
                className="fixed left-0 top-0 z-[100] h-px origin-left bg-[#C7B18A]"
                style={{ scaleX: scrollYProgress }}
            />

            {/* =====================================================
          HERO
      ===================================================== */}
            <section className="relative flex min-h-[88svh] items-end overflow-hidden md:min-h-screen">
                <motion.div
                    className="absolute inset-[-6%]"
                    style={{ y: heroY }}
                >
                    <Image
                        src="/images/gallery-01.jpg"
                        alt="Miss Cookie — private editorial collection"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-black/25" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/90 via-[#0A0908]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/25" />

                <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-36 md:px-10 md:pb-24 lg:px-14">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={reveal}
                        className="max-w-4xl"
                    >
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-px w-10 bg-[#C7B18A]" />
                            <p className="text-[9px] uppercase tracking-[0.42em] text-[#C7B18A]">
                                The Visual Collection
                            </p>
                        </div>

                        <h1 className="text-[4.5rem] leading-[0.85] tracking-[-0.055em] sm:text-8xl md:text-[9rem] lg:text-[11rem]">
                            Beyond
                            <br />
                            <span className="italic text-[#D8C7A9]">the ordinary.</span>
                        </h1>

                        <p className="mt-8 max-w-md text-sm leading-7 text-[#F3EEE6]/75 md:text-[15px]">
                            A personal collection shaped by atmosphere, elegance and
                            the beauty of the details that make each moment distinctive.
                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                document.getElementById("visual-collection")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="group mt-10 inline-flex items-center gap-4 border border-[#F3EEE6]/25 px-6 py-4 text-[9px] uppercase tracking-[0.25em] transition-colors duration-300 hover:border-[#C7B18A]/70 hover:text-[#C7B18A]"
                        >
                            Explore the collection
                            <ArrowDown
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-y-1"
                            />
                        </button>
                    </motion.div>

                    <div className="absolute bottom-8 right-8 hidden items-center gap-3 md:flex lg:right-14">
                        <span className="text-[8px] uppercase tracking-[0.3em] text-white/50">
                            Private Collection
                        </span>
                        <span className="h-px w-8 bg-[#C7B18A]/50" />
                        <span className="text-[9px] tracking-[0.2em] text-[#C7B18A]">
                            01 — 22
                        </span>
                    </div>
                </div>
            </section>

            {/* =====================================================
          INTRO
      ===================================================== */}
            <section
                id="visual-collection"
                className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reveal}
                    className="mx-auto grid max-w-[1500px] gap-8 border-b border-[#F3EEE6]/10 pb-10 md:grid-cols-[1fr_auto] md:items-end md:pb-12"
                >
                    <div>
                        <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            An intimate perspective
                        </p>

                        <h2 className="text-4xl leading-[0.95] tracking-[-0.035em] md:text-6xl lg:text-7xl">
                            A study in
                            <span className="italic text-[#C7B18A]"> presence.</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 md:pb-1">
                        <span className="font-[family-name:var(--font-display)] text-4xl text-[#C7B18A]">
                            22
                        </span>
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.25em] text-[#F3EEE6]">
                                Photographs
                            </p>
                            <p className="mt-1 text-xs text-[#A99F94]">
                                The complete collection
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* ===================================================
            EDITORIAL GALLERY
        =================================================== */}
                <div className="mx-auto mt-12 grid max-w-[1500px] grid-cols-12 items-start gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-12 md:gap-x-6 md:gap-y-20">
                    {images.map((image, index) => (
                        <motion.button
                            key={image.src}
                            type="button"
                            onClick={() => setSelectedIndex(index)}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.08 }}
                            transition={{
                                duration: 0.65,
                                delay: (index % 3) * 0.07,
                                ease: [0.22, 1, 0.36, 1] as const,
                            }}
                            aria-label={`Open photograph ${index + 1} of ${images.length}`}
                            className={`group relative block w-full overflow-hidden bg-[#151311] text-left ${imageLayout(index)}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 40vw"
                                className={`object-cover transition-[transform,opacity,filter] duration-700 ease-out group-hover:scale-[1.035] ${loadedImages.includes(index)
                                        ? "opacity-100"
                                        : "opacity-0"
                                    }`}
                                onLoad={() =>
                                    setLoadedImages((current) =>
                                        current.includes(index) ? current : [...current, index]
                                    )
                                }
                            />

                            {/* Image placeholder */}
                            {!loadedImages.includes(index) && (
                                <div className="absolute inset-0 animate-pulse bg-[#191613]" />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 sm:p-5 md:p-6">
                                <div>
                                    <span className="block text-[8px] uppercase tracking-[0.3em] text-white/60">
                                        Miss Cookie
                                    </span>
                                    <span className="mt-1 block font-[family-name:var(--font-display)] text-xl text-white sm:text-2xl">
                                        {image.number}
                                    </span>
                                </div>

                                <span className="flex h-9 w-9 translate-y-2 items-center justify-center border border-white/40 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-sm:hidden">
                                    <Expand size={14} strokeWidth={1.2} />
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center border border-white/40 text-white sm:hidden">
                                    <ArrowUpRight size={14} strokeWidth={1.2} />
                                </span>
                            </div>

                            <span className="absolute left-3 top-3 text-[8px] tracking-[0.2em] text-white/70 sm:left-5 sm:top-5">
                                MC / {image.number}
                            </span>
                        </motion.button>
                    ))}
                </div>

                <div className="mx-auto mt-16 flex max-w-[1500px] items-center justify-between border-t border-[#F3EEE6]/10 pt-6 md:mt-24">
                    <p className="text-[8px] uppercase tracking-[0.25em] text-[#A99F94]/60">
                        End of collection
                    </p>
                    <p className="text-[8px] uppercase tracking-[0.25em] text-[#A99F94]/60">
                        22 photographs
                    </p>
                </div>
            </section>

            {/* =====================================================
          CLOSING STATEMENT
      ===================================================== */}
            <section className="relative overflow-hidden border-y border-[#F3EEE6]/10 bg-[#11100E] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C7B18A]/[0.035] blur-3xl" />

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reveal}
                    className="relative mx-auto max-w-[1200px]"
                >
                    <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                        Beyond the frame
                    </p>

                    <h2 className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
                        Some things are
                        <br />
                        best experienced
                        <br />
                        <span className="italic text-[#C7B18A]">in person.</span>
                    </h2>

                    <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                        <p className="max-w-md text-sm leading-7 text-[#A99F94]">
                            For private inquiries and further details, you are welcome
                            to get in touch directly.
                        </p>

                        <Link
                            href="/contact"
                            className="group inline-flex w-fit items-center gap-5 border border-[#C7B18A]/50 px-7 py-4 text-[9px] uppercase tracking-[0.25em] text-[#C7B18A] transition-colors duration-300 hover:bg-[#C7B18A] hover:text-[#0A0908]"
                        >
                            Private Inquiry
                            <ArrowRight
                                size={15}
                                strokeWidth={1.2}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* =====================================================
          IMMERSIVE LIGHTBOX
      ===================================================== */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        key="gallery-lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Photograph viewer"
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-[#080706]/[0.98] p-4 backdrop-blur-xl sm:p-8"
                        onClick={closeGallery}
                    >
                        {/* Top controls */}
                        <div
                            className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div>
                                <p className="text-[8px] uppercase tracking-[0.35em] text-[#C7B18A]">
                                    Miss Cookie
                                </p>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/50">
                                    Private Collection
                                </p>
                            </div>

                            <div className="flex items-center gap-5">
                                <span className="font-[family-name:var(--font-display)] text-lg text-white">
                                    {String(selectedIndex + 1).padStart(2, "0")}
                                    <span className="mx-2 text-white/25">/</span>
                                    <span className="text-white/40">
                                        {String(images.length).padStart(2, "0")}
                                    </span>
                                </span>

                                <button
                                    type="button"
                                    onClick={closeGallery}
                                    aria-label="Close gallery"
                                    className="flex h-11 w-11 items-center justify-center border border-white/15 text-white transition-colors hover:border-[#C7B18A]/60 hover:text-[#C7B18A]"
                                >
                                    <X size={20} strokeWidth={1.2} />
                                </button>
                            </div>
                        </div>

                        {/* Previous */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                previousImage();
                            }}
                            aria-label="Previous photograph"
                            className="absolute left-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/65 transition-colors hover:text-[#C7B18A] sm:left-5 sm:h-14 sm:w-14"
                        >
                            <ChevronLeft size={30} strokeWidth={1} />
                        </button>

                        {/* Active image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={images[selectedIndex].src}
                                initial={{ opacity: 0, scale: 0.985 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.985 }}
                                transition={{ duration: 0.25 }}
                                className="relative h-[72svh] w-full max-w-6xl sm:h-[78svh]"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <Image
                                    src={images[selectedIndex].src}
                                    alt={images[selectedIndex].alt}
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Next */}
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                nextImage();
                            }}
                            aria-label="Next photograph"
                            className="absolute right-1 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-white/65 transition-colors hover:text-[#C7B18A] sm:right-5 sm:h-14 sm:w-14"
                        >
                            <ChevronRight size={30} strokeWidth={1} />
                        </button>

                        {/* Bottom controls */}
                        <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-5 py-6 sm:px-8 sm:py-8">
                            <button
                                type="button"
                                onClick={previousImage}
                                className="flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-[#C7B18A]"
                            >
                                <ArrowLeft size={14} strokeWidth={1.2} />
                                Previous
                            </button>

                            <div className="flex max-w-[45%] items-center gap-1.5 overflow-hidden">
                                {images.map((image, index) => (
                                    <button
                                        key={image.src}
                                        type="button"
                                        onClick={() => setSelectedIndex(index)}
                                        aria-label={`Go to photograph ${index + 1}`}
                                        className={`h-[2px] shrink-0 transition-all duration-300 ${index === selectedIndex
                                                ? "w-5 bg-[#C7B18A]"
                                                : "w-1.5 bg-white/25 hover:bg-white/60"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={nextImage}
                                className="flex items-center gap-3 text-[8px] uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-[#C7B18A]"
                            >
                                Next
                                <ArrowRight size={14} strokeWidth={1.2} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}