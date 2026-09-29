"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    {
        src: "/images/gallery-01.jpg",
        alt: "Miss Cookie",
        className: "md:col-span-1 md:row-span-2",
    },
    {
        src: "/images/gallery-02.jpg",
        alt: "Miss Cookie",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/gallery-03.jpg",
        alt: "Miss Cookie",
        className: "md:col-span-1 md:row-span-2",
    },
    {
        src: "/images/gallery-04.jpg",
        alt: "Miss Cookie",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/gallery-05.jpg",
        alt: "Miss Cookie",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        src: "/images/gallery-06.jpg",
        alt: "Miss Cookie",
        className: "md:col-span-1 md:row-span-2",
    },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const selectedImage =
        selectedIndex !== null ? images[selectedIndex] : null;

    function closeGallery() {
        setSelectedIndex(null);
    }

    function previousImage() {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0 ? images.length - 1 : selectedIndex - 1,
        );
    }

    function nextImage() {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === images.length - 1 ? 0 : selectedIndex + 1,
        );
    }

    return (
        <>
            <section
                id="gallery"
                className="bg-[#151311] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
            >
                <div className="mx-auto max-w-[1400px]">
                    {/* Heading */}
                    <div className="mb-14 max-w-2xl md:mb-20">
                        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            A Glimpse
                        </p>

                        <h1 className="text-5xl leading-[0.95] tracking-[-0.02em] text-[#F3EEE6] md:text-7xl">
                            Moments worth
                            <br />
                            <span className="italic">remembering.</span>
                        </h1>
                    </div>

                    {/* Gallery */}
                    <div className="grid auto-rows-[260px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[220px]">
                        {images.map((image, index) => (
                            <button
                                key={image.src}
                                type="button"
                                onClick={() => setSelectedIndex(index)}
                                className={`group relative overflow-hidden text-left ${image.className}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <span className="border border-white/50 px-5 py-3 text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                                        View
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && selectedIndex !== null && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4">
                    {/* Close */}
                    <button
                        type="button"
                        onClick={closeGallery}
                        aria-label="Close gallery"
                        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center text-white/80 transition-colors hover:text-[#C7B18A]"
                    >
                        <X size={28} strokeWidth={1.2} />
                    </button>

                    {/* Previous */}
                    <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-[#C7B18A]"
                    >
                        <ChevronLeft size={32} strokeWidth={1.2} />
                    </button>

                    {/* Image */}
                    <div className="relative h-[82vh] w-[90vw] max-w-5xl">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            sizes="90vw"
                            className="object-contain"
                        />
                    </div>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/70 transition-colors hover:text-[#C7B18A]"
                    >
                        <ChevronRight size={32} strokeWidth={1.2} />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/50">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}
