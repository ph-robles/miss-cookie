import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="about-page bg-[#0A0908] text-[#F3EEE6]">

            {/* =========================================
          HERO
      ========================================= */}

            <section className="about-hero relative flex min-h-[92vh] items-end overflow-hidden">

                <div className="about-hero-image absolute inset-0">
                    <Image
                        src="/images/about-hero.jpg"
                        alt="Elegant silhouette in a refined interior"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </div>

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/25 to-black/20" />

                {/* Champagne glow */}
                <div className="absolute left-[12%] top-[28%] h-64 w-64 rounded-full bg-[#C7B18A]/[0.06] blur-[100px]" />

                {/* HERO CONTENT */}
                <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 md:px-10 md:pb-24 lg:px-14 lg:pb-28">

                    <div className="max-w-4xl">

                        <div className="mb-7 flex items-center gap-4">

                            <span className="h-px w-12 bg-[#C7B18A]/70" />

                            <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                                About Miss Cookie
                            </span>

                        </div>

                        <h1 className="max-w-4xl text-6xl leading-[0.9] tracking-[-0.035em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                            A more personal
                            <br />
                            <span className="italic text-[#D8C8AD]">
                                kind of luxury.
                            </span>
                        </h1>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-[#D0C8BE] md:text-base md:leading-8">
                            A refined presence, meaningful connection and carefully
                            considered moments — created for those who appreciate
                            discretion and quality.
                        </p>

                    </div>

                </div>

                {/* HERO LOCATION */}

                <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 md:flex lg:right-14">

                    <span className="text-[8px] uppercase tracking-[0.4em] text-[#A99F94]">
                        Orlando · Florida
                    </span>

                    <span className="h-px w-10 bg-[#C7B18A]/40" />

                </div>

                {/* Scroll indicator */}

                <div className="absolute bottom-8 left-6 z-10 hidden items-center gap-3 md:flex lg:left-14">

                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                        Discover
                    </span>

                    <span className="h-px w-8 bg-[#C7B18A]/30" />

                </div>

            </section>


            {/* =========================================
          INTRODUCTION
      ========================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">

                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:px-14">

                    <div>

                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            The woman behind the name
                        </span>

                        <h2 className="mt-6 max-w-md text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                            Presence is felt in the details.
                        </h2>

                    </div>


                    <div className="max-w-2xl space-y-7">

                        <p className="text-base leading-8 text-[#C9C0B7] md:text-lg md:leading-9">
                            I have always been drawn to experiences that feel effortless.
                            Beautiful surroundings, intimate dinners, soft lighting and
                            meaningful conversations that never feel rushed.
                        </p>

                        <p className="text-base leading-8 text-[#A99F94] md:text-lg md:leading-9">
                            I believe the most memorable moments are rarely the loudest
                            ones. They happen quietly — through chemistry, a shared
                            glance, genuine laughter, or simply feeling completely
                            comfortable in someone's company.
                        </p>

                        <p className="text-base leading-8 text-[#A99F94] md:text-lg md:leading-9">
                            I value confidence, discretion, curiosity and authenticity.
                            To me, genuine connection is what transforms a moment into
                            something worth remembering.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
          PERSONAL PHOTO
      ========================================= */}

            <section className="bg-[#0D0C0A]">

                <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:gap-24">

                    {/* IMAGE */}

                    <div className="about-personal-image group relative aspect-[4/5] overflow-hidden">

                        <Image
                            src="/images/about.jpg"
                            alt="Miss Cookie"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/50 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6">

                            <span className="text-[8px] uppercase tracking-[0.4em] text-[#F3EEE6]/60">
                                Miss Cookie
                            </span>

                        </div>

                    </div>


                    {/* TEXT */}

                    <div className="max-w-xl">

                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            A little more
                        </span>

                        <h2 className="mt-6 text-4xl leading-tight md:text-6xl">
                            Nothing should feel
                            <br />
                            <span className="italic text-[#C7B18A]">
                                forced.
                            </span>
                        </h2>

                        <div className="mt-9 space-y-6 text-sm leading-8 text-[#A99F94] md:text-base">

                            <p>
                                The time we share should feel natural, elegant and relaxed.
                                A moment you can simply enjoy without overthinking it.
                            </p>

                            <p>
                                I appreciate the details that often go unnoticed — a
                                lingering glance, a subtle smile, the quiet change in a
                                conversation when two people begin to feel completely at ease.
                            </p>

                            <p>
                                I believe intimacy is found in the little things. In paying
                                attention. In the atmosphere. In the pauses between words
                                and the gestures that do not need an explanation.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
          PROFILE
      ========================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">

                <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mb-14 flex items-end justify-between gap-8">

                        <div>

                            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                                The Profile
                            </span>

                            <h2 className="mt-5 text-4xl md:text-6xl">
                                Miss Cookie
                            </h2>

                        </div>

                        <span className="hidden text-[9px] uppercase tracking-[0.35em] text-[#A99F94]/50 md:block">
                            01 — 05
                        </span>

                    </div>


                    <div className="grid border-l border-t border-[#F3EEE6]/[0.08] sm:grid-cols-2 lg:grid-cols-5">

                        <div className="border-b border-r border-[#F3EEE6]/[0.08] p-7 md:p-8">

                            <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                                Origin
                            </span>

                            <p className="mt-6 text-xl">
                                Brazilian
                            </p>

                        </div>


                        <div className="border-b border-r border-[#F3EEE6]/[0.08] p-7 md:p-8">

                            <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                                Height
                            </span>

                            <p className="mt-6 text-xl">
                                5'6"
                            </p>

                        </div>


                        <div className="border-b border-r border-[#F3EEE6]/[0.08] p-7 md:p-8">

                            <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                                Style
                            </span>

                            <p className="mt-6 text-xl">
                                Elegant
                            </p>

                        </div>


                        <div className="border-b border-r border-[#F3EEE6]/[0.08] p-7 md:p-8">

                            <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                                Hair
                            </span>

                            <p className="mt-6 text-xl">
                                Blonde
                            </p>

                        </div>


                        <div className="border-b border-r border-[#F3EEE6]/[0.08] p-7 md:p-8">

                            <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                                Eyes
                            </span>

                            <p className="mt-6 text-xl">
                                Hazel
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
          PHILOSOPHY
      ========================================= */}

            <section className="relative overflow-hidden bg-[#151311]">

                <div className="absolute right-[-10%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C7B18A]/[0.035] blur-[100px]" />

                <div className="relative mx-auto max-w-[1000px] px-6 py-28 text-center md:px-10 md:py-36">

                    <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                        Philosophy
                    </span>

                    <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-tight md:text-6xl">
                        The beauty is in what
                        <br />
                        <span className="italic text-[#C7B18A]">
                            remains.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#A99F94] md:text-base">
                        Perhaps that is where my presence is felt most. Not loudly.
                        Not by demanding attention. But quietly, in a way that remains
                        with you long after the moment has passed.
                    </p>

                    <div className="mx-auto mt-10 flex items-center justify-center gap-4">

                        <span className="h-px w-10 bg-[#C7B18A]/40" />

                        <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]">
                            Discretion · Connection · Elegance
                        </span>

                        <span className="h-px w-10 bg-[#C7B18A]/40" />

                    </div>

                </div>

            </section>


            {/* =========================================
          FINAL CTA
      ========================================= */}

            <section className="border-t border-[#F3EEE6]/[0.08]">

                <div className="mx-auto max-w-[1000px] px-6 py-28 text-center md:px-10 md:py-36">

                    <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
                        Private inquiries
                    </span>

                    <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-tight md:text-6xl">
                        Some moments are better
                        <br />
                        <span className="italic">
                            experienced.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#A99F94]">
                        For availability, travel details and private inquiries,
                        communication begins with a simple conversation.
                    </p>

                    <Link
                        href="/contact"
                        className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-8 py-4 text-[10px] uppercase tracking-[0.28em]"
                    >
                        <span>Private Inquiry</span>
                    </Link>

                </div>

            </section>

        </main>
    );
}
