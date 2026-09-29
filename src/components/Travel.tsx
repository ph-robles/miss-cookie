import Image from "next/image";

export default function Travel() {
    return (
        <section className="bg-[#0A0908]">
            {/* Hero */}
            <div className="relative flex min-h-[70vh] items-end overflow-hidden">
                <Image
                    src="/images/travel.jpg"
                    alt="Travel experiences"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/30 to-transparent" />

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
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
                <div className="mx-auto grid max-w-[1200px] gap-16 md:grid-cols-2 md:gap-24">
                    <div>
                        <p className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#C7B18A]">
                            Travel Arrangements
                        </p>

                        <h2 className="text-5xl leading-[0.95] text-[#F3EEE6] md:text-6xl">
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
                            Travel details, availability and arrangements are discussed
                            privately in advance, allowing every detail to be considered
                            thoughtfully.
                        </p>

                        <p>
                            For destinations beyond Orlando, please get in touch with the
                            preferred dates and location.
                        </p>

                        <a
                            href="/contact"
                            className="mt-6 inline-block border border-[#C7B18A]/50 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C7B18A] transition-all duration-300 hover:bg-[#C7B18A] hover:text-[#0A0908]"
                        >
                            Inquire About Travel
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
