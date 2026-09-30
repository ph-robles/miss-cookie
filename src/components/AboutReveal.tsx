"use client";

import { useState } from "react";

function CookieMark() {
    return (
        <span aria-hidden="true" className="cookie-mark about-reveal-cookie">
            <span className="cookie-chip cookie-chip--1" />
            <span className="cookie-chip cookie-chip--2" />
            <span className="cookie-chip cookie-chip--3" />
            <span className="cookie-chip cookie-chip--4" />
        </span>
    );
}

export default function AboutReveal() {
    const [revealed, setRevealed] = useState(false);

    return (
        <div className="about-reveal">
            {/* FOTO */}
            <div
                className={`about-reveal-image ${revealed ? "about-reveal-image--visible" : ""
                    }`}
            >
                <img
                    src="/images/about.jpg"
                    alt="Miss Cookie"
                    className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/60 via-transparent to-black/10" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                        <span className="block text-[8px] uppercase tracking-[0.4em] text-[#F3EEE6]/60">
                            Miss Cookie
                        </span>
                        <span className="mt-2 block text-xs tracking-wide text-[#F3EEE6]">
                            Private · Refined · Personal
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={() => setRevealed(false)}
                        className="about-reveal-close"
                        aria-label="Close image"
                    >
                        Close
                    </button>
                </div>
            </div>

            {/* COOKIE / REVEAL */}
            <button
                type="button"
                onClick={() => setRevealed(true)}
                className={`about-reveal-trigger ${revealed ? "about-reveal-trigger--hidden" : ""
                    }`}
                aria-label="Reveal photo"
            >
                <span className="about-reveal-glow" />

                <CookieMark />

                <span className="about-reveal-label">
                    <span className="about-reveal-line" />
                    Discover the moment
                </span>
            </button>

            {/* DECORATIVE TEXT */}
            <div
                className={`about-reveal-corner ${revealed ? "about-reveal-corner--hidden" : ""
                    }`}
            >
                <span>01</span>
                <span className="h-px w-8 bg-[#C7B18A]/30" />
                <span>ABOUT</span>
            </div>
        </div>
    );
}
