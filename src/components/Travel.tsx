"use client";

import Image from "next/image";
import { useState } from "react";

export default function Travel() {
    const [showTravelNote, setShowTravelNote] = useState(false);

    return (
        <section className="bg-[#0A0908] text-[#F3EEE6]">
            {/* =========================================================
          HERO
      ========================================================= */}
            <div className="relative flex min-h-[72vh] items-end overflow-hidden">
                <Image
                    src="/images/travel.jpg"
                    alt="Travel experiences"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Dark overlays */}
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/25 to-transparent" />

                {/* Hero content */}
                <div className="relative z-10 w-full px-6 pb-16 md:px-10 md:pb-20 lg:px-14 lg:pb-24">
                    <div className="mx-auto max-w-[1400px]">
                        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            Beyond Orlando
                        </p>

                        <h1 className="max-w-4xl text-6xl leading-[0.9] tracking-[-0.03em] text-[#F3EEE6] md:text-8xl">
                            Wherever the
                            <br />
                            <span className="italic">moment takes you.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-[#D0C7BD] md:text-base">
                            Select travel arrangements beyond Orlando, thoughtfully
                            planned around your destination, dates and private preferences.
                        </p>
                    </div>
                </div>
            </div>

            {/* =========================================================
          INTRODUCTION
      ========================================================= */}
            <div className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Travel Arrangements
                        </p>

                        <h2 className="text-5xl leading-[0.95] tracking-[-0.02em] text-[#F3EEE6] md:text-6xl">
                            A change of
                            <br />
                            <span className="italic">scenery.</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-sm leading-7 text-[#A99F94]">
                        <p>
                            Based in Orlando, Florida, Miss Cookie is available for select
                            travel arrangements outside the area.
                        </p>

                        <p>
                            Every arrangement is discussed privately in advance. Dates,
                            destination, duration and travel details are considered
                            individually.
                        </p>

                        <p>
                            Whether it is a short escape or a destination farther away,
                            arrangements can be discussed around your preferred plans.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-flex border border-[#C7B18A]/50 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7B18A] transition-all duration-500 hover:bg-[#C7B18A] hover:text-[#0A0908]"
                        >
                            Inquire About Travel
                        </a>
                    </div>
                </div>
            </div>

            {/* =========================================================
          DESTINATIONS
      ========================================================= */}
            <div className="border-y border-white/[0.06] px-6 py-24 md:px-10 md:py-32 lg:px-14">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mb-16 max-w-2xl">
                        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Destination
                        </p>

                        <h2 className="text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
                            From familiar places
                            <br />
                            <span className="italic">to somewhere new.</span>
                        </h2>
                    </div>

                    <div className="grid gap-px overflow-hidden border border-white/[0.06] bg-white/[0.06] md:grid-cols-3">
                        {/* Card 01 */}
                        <div className="group bg-[#0A0908] p-8 transition-colors duration-500 hover:bg-[#11100E] md:p-10">
                            <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                01
                            </span>

                            <h3 className="mt-14 text-2xl text-[#F3EEE6]">
                                Florida
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#8F877F]">
                                Arrangements around Orlando and select destinations throughout
                                Florida.
                            </p>
                        </div>

                        {/* Card 02 */}
                        <div className="group bg-[#0A0908] p-8 transition-colors duration-500 hover:bg-[#11100E] md:p-10">
                            <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                02
                            </span>

                            <h3 className="mt-14 text-2xl text-[#F3EEE6]">
                                U.S. Destinations
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#8F877F]">
                                Travel arrangements outside the local area may be considered
                                privately depending on dates and destination.
                            </p>
                        </div>

                        {/* Card 03 */}
                        <div className="group bg-[#0A0908] p-8 transition-colors duration-500 hover:bg-[#11100E] md:p-10">
                            <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                03
                            </span>

                            <h3 className="mt-14 text-2xl text-[#F3EEE6]">
                                Further Away
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#8F877F]">
                                For destinations farther away, availability and travel
                                arrangements are discussed individually.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
            <div className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
                <div className="mx-auto max-w-[1200px]">
                    <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
                        <div>
                            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                The Process
                            </p>

                            <h2 className="text-4xl leading-[1] md:text-5xl">
                                Simple.
                                <br />
                                <span className="italic">Private.</span>
                                <br />
                                Personal.
                            </h2>
                        </div>

                        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
                            {/* Step 01 */}
                            <div className="grid gap-5 py-8 sm:grid-cols-[80px_1fr]">
                                <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                    01
                                </span>

                                <div>
                                    <h3 className="text-lg text-[#F3EEE6]">
                                        Share your plans
                                    </h3>

                                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#8F877F]">
                                        Send your preferred destination and approximate dates
                                        through the private inquiry page.
                                    </p>
                                </div>
                            </div>

                            {/* Step 02 */}
                            <div className="grid gap-5 py-8 sm:grid-cols-[80px_1fr]">
                                <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                    02
                                </span>

                                <div>
                                    <h3 className="text-lg text-[#F3EEE6]">
                                        Discuss the details
                                    </h3>

                                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#8F877F]">
                                        Availability, destination and travel arrangements are
                                        discussed privately before anything is confirmed.
                                    </p>
                                </div>
                            </div>

                            {/* Step 03 */}
                            <div className="grid gap-5 py-8 sm:grid-cols-[80px_1fr]">
                                <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                    03
                                </span>

                                <div>
                                    <h3 className="text-lg text-[#F3EEE6]">
                                        Plan the experience
                                    </h3>

                                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#8F877F]">
                                        Once the details are aligned, the remaining arrangements
                                        can be planned around the agreed itinerary.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================================================
          PRIVATE TRAVEL NOTE
      ========================================================= */}
            <div className="relative overflow-hidden border-y border-[#C7B18A]/10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908] via-[#15120E] to-[#0A0908]" />

                <div className="relative mx-auto max-w-[1000px] px-6 py-24 text-center md:px-10 md:py-32">
                    <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                        A little further
                    </p>

                    <h2 className="mx-auto max-w-3xl text-4xl leading-tight tracking-[-0.02em] md:text-6xl">
                        Sometimes the best memories
                        <br />
                        <span className="italic">require a little distance.</span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#8F877F]">
                        Travel arrangements are handled privately and individually.
                        Availability outside Orlando is subject to dates and destination.
                    </p>

                    <a
                        href="/contact"
                        className="mt-10 inline-flex border border-[#C7B18A]/50 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7B18A] transition-all duration-500 hover:bg-[#C7B18A] hover:text-[#0A0908]"
                    >
                        Start A Private Inquiry
                    </a>
                </div>
            </div>

            {/* =========================================================
          FINAL CTA
      ========================================================= */}
            <div className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
                <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-10 border-b border-white/[0.08] pb-16 md:flex-row md:items-end">
                    <div>
                        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Ready when you are
                        </p>

                        <h2 className="max-w-2xl text-4xl leading-tight md:text-5xl">
                            Tell me where
                            <br />
                            <span className="italic">you'd like to go.</span>
                        </h2>
                    </div>

                    <a
                        href="/contact"
                        className="group inline-flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7B18A]"
                    >
                        Private Inquiry
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                            →
                        </span>
                    </a>
                </div>
            </div>

            {/* =========================================================
          ELEGANT COOKIE INTERACTION
      ========================================================= */}

            {/* Subtle floating glow */}
            <div className="pointer-events-none fixed bottom-8 right-8 z-40 hidden h-20 w-20 rounded-full bg-[#C7B18A]/5 blur-2xl md:block" />

            {/* Cookie button */}
            <button
                type="button"
                aria-label="Open private travel note"
                onClick={() => setShowTravelNote(!showTravelNote)}
                className="group fixed bottom-7 right-7 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-[#C7B18A]/40 bg-[#0E0C0A]/95 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-[#C7B18A]/80"
            >
                {/* Elegant cookie seal */}
                <span
                    className={`relative block h-8 w-8 rounded-full border border-[#C7B18A]/70 bg-[#B89B6A]/20 transition-transform duration-700 ${showTravelNote ? "rotate-[180deg]" : "group-hover:rotate-12"
                        }`}
                >
                    {/* cookie details */}
                    <span className="absolute left-[7px] top-[6px] h-[3px] w-[3px] rounded-full bg-[#C7B18A]" />
                    <span className="absolute right-[6px] top-[9px] h-[3px] w-[3px] rounded-full bg-[#C7B18A]" />
                    <span className="absolute bottom-[6px] left-[9px] h-[3px] w-[3px] rounded-full bg-[#C7B18A]" />
                    <span className="absolute bottom-[9px] right-[8px] h-[3px] w-[3px] rounded-full bg-[#C7B18A]" />

                    {/* center */}
                    <span className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7B18A]/70" />
                </span>
            </button>

            {/* Private note popup */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm origin-bottom-right transition-all duration-500 md:right-7 ${showTravelNote
                        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                        : "pointer-events-none translate-y-4 scale-95 opacity-0"
                    }`}
            >
                <div className="border border-[#C7B18A]/20 bg-[#11100E]/95 p-7 shadow-2xl backdrop-blur-xl">
                    <div className="mb-5 flex items-start justify-between">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.35em] text-[#C7B18A]">
                                Private Note
                            </p>

                            <h3 className="mt-2 text-xl text-[#F3EEE6]">
                                A little travel secret.
                            </h3>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowTravelNote(false)}
                            aria-label="Close travel note"
                            className="text-xl font-light text-[#8F877F] transition-colors hover:text-[#C7B18A]"
                        >
                            ×
                        </button>
                    </div>

                    <p className="text-sm leading-7 text-[#9B9289]">
                        Thinking about somewhere beyond Orlando? Send the destination and
                        preferred dates. Travel arrangements can be discussed privately
                        based on availability.
                    </p>

                    <a
                        href="/contact"
                        onClick={() => setShowTravelNote(false)}
                        className="mt-6 inline-flex border border-[#C7B18A]/40 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#C7B18A] transition-all duration-300 hover:bg-[#C7B18A] hover:text-[#0A0908]"
                    >
                        Make An Inquiry
                    </a>
                </div>
            </div>

            {/* =========================================================
          ANIMATION STYLES
      ========================================================= */}
            <style jsx>{`
        @keyframes subtleFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
        </section>
    );
}