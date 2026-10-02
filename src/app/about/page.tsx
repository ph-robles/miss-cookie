import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutReveal from "../../components/AboutReveal";

function CookieMark() {
    return (
        <span
            aria-hidden="true"
            className="cookie-mark cookie-mark--small"
        >
            <span className="cookie-chip cookie-chip--1" />
            <span className="cookie-chip cookie-chip--2" />
            <span className="cookie-chip cookie-chip--3" />
            <span className="cookie-chip cookie-chip--4" />
        </span>
    );
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#0A0908] text-[#F3EEE6]">
            <Header />

            {/* HERO */}
            <section className="relative flex min-h-[78vh] items-end overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#151311] via-[#0A0908] to-[#0A0908]" />

                <div className="absolute left-[12%] top-[28%] h-64 w-64 rounded-full bg-[#C7B18A]/[0.035] blur-3xl" />

                <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-40 md:px-10 md:pb-24 lg:px-14">
                    <div className="max-w-4xl">
                        <div className="mb-8 flex items-center gap-3">
                            <span className="h-px w-10 bg-[#C7B18A]/60" />

                            <span className="text-[9px] uppercase tracking-[0.4em] text-[#A99F94]">
                                About Miss Cookie
                            </span>

                            <CookieMark />
                        </div>

                        <h1 className="max-w-4xl text-5xl leading-[0.95] tracking-[-0.02em] text-[#F3EEE6] sm:text-6xl md:text-7xl lg:text-[7.2rem]">
                            A presence
                            <br />
                            worth remembering.
                        </h1>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-[#A99F94] md:text-base md:leading-8">
                            Miss Cookie is built around discretion, elegance and genuine
                            connection. Every detail is intentionally considered to create
                            an experience that feels personal, effortless and memorable.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-8 right-6 hidden items-center gap-3 md:flex lg:right-14">
                    <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
                        Orlando · Florida
                    </span>

                    <span className="h-px w-10 bg-[#C7B18A]/30" />
                </div>
            </section>

            {/* INTRO */}
            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:px-14">
                    <div>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            The Philosophy
                        </span>

                        <h2 className="mt-6 max-w-md text-4xl leading-tight md:text-5xl">
                            More than an appointment.
                        </h2>
                    </div>

                    <div className="max-w-2xl">
                        <p className="text-base leading-8 text-[#C9C0B7] md:text-lg md:leading-9">
                            The idea behind Miss Cookie is simple: quality comes from
                            attention to detail. From the first conversation to the final
                            goodbye, the experience is designed to feel natural, polished
                            and comfortable.
                        </p>

                        <p className="mt-7 text-base leading-8 text-[#A99F94] md:text-lg md:leading-9">
                            Privacy, respect and clear communication are at the heart of
                            every interaction. Whether you are visiting Orlando or planning
                            ahead, the goal is to make every moment feel considered rather
                            than complicated.
                        </p>

                        <div className="mt-10 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#C7B18A]/50" />

                            <span className="text-[9px] uppercase tracking-[0.35em] text-[#A99F94]">
                                Discretion · Elegance · Connection
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="bg-[#0D0C0A]">
                <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
                    <div className="mb-16 max-w-xl">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            What Matters
                        </span>

                        <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
                            The details make the difference.
                        </h2>
                    </div>

                    <div className="grid border-l border-t border-[#F3EEE6]/[0.08] md:grid-cols-3">
                        <article className="border-b border-r border-[#F3EEE6]/[0.08] p-8 md:p-10">
                            <span className="text-[10px] tracking-[0.25em] text-[#C7B18A]">
                                01
                            </span>

                            <h3 className="mt-10 text-3xl">Discretion</h3>

                            <p className="mt-5 text-sm leading-7 text-[#A99F94]">
                                Privacy and thoughtful communication are essential from the
                                first inquiry onward.
                            </p>
                        </article>

                        <article className="border-b border-r border-[#F3EEE6]/[0.08] p-8 md:p-10">
                            <span className="text-[10px] tracking-[0.25em] text-[#C7B18A]">
                                02
                            </span>

                            <h3 className="mt-10 text-3xl">Elegance</h3>

                            <p className="mt-5 text-sm leading-7 text-[#A99F94]">
                                A refined atmosphere, attention to detail and a calm,
                                effortless approach define the experience.
                            </p>
                        </article>

                        <article className="border-b border-r border-[#F3EEE6]/[0.08] p-8 md:p-10">
                            <span className="text-[10px] tracking-[0.25em] text-[#C7B18A]">
                                03
                            </span>

                            <h3 className="mt-10 text-3xl">Connection</h3>

                            <p className="mt-5 text-sm leading-7 text-[#A99F94]">
                                Genuine conversation, mutual respect and a comfortable
                                environment come first.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* EXPERIENCE PREVIEW */}
            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
                    <div>
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            The Experience
                        </span>

                        <h2 className="mt-6 max-w-2xl text-4xl leading-tight md:text-6xl">
                            Designed around the moment.
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-8 text-[#A99F94] md:text-base">
                            Every experience begins with communication. Tell us what you
                            have in mind, when you are available and where you will be.
                            From there, the details can be discussed privately and clearly.
                        </p>

                        <Link
                            href="/experience"
                            className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-7 py-4 text-[10px] uppercase tracking-[0.25em]"
                        >
                            <span>Explore Experience</span>
                        </Link>
                    </div>

                    <AboutReveal />
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-[#F3EEE6]/[0.08]">
                <div className="mx-auto max-w-[1000px] px-6 py-28 text-center md:px-10 md:py-36">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                        Begin the conversation
                    </span>

                    <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-tight md:text-6xl">
                        Let's create something worth remembering.
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#A99F94]">
                        For private inquiries, availability and additional information,
                        please get in touch directly.
                    </p>

                    <Link
                        href="/contact"
                        className="private-inquiry-button mt-10 inline-block border border-[#C7B18A]/50 px-8 py-4 text-[10px] uppercase tracking-[0.28em]"
                    >
                        <span>Private Inquiry</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
