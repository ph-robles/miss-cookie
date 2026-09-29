const arrangements = [
    {
        duration: "01",
        title: "One Hour",
        description:
            "A private arrangement thoughtfully planned around your time and preferences.",
        price: null,
    },
    {
        duration: "02",
        title: "Ninety Minutes",
        description:
            "More time to slow down, connect and enjoy the experience without rushing.",
        price: null,
    },
    {
        duration: "03",
        title: "Two Hours",
        description:
            "An extended private experience designed for a relaxed and unhurried evening.",
        price: null,
    },
    {
        duration: "04",
        title: "Extended",
        description:
            "For longer arrangements, special occasions and select travel requests.",
        price: null,
    },
];

export default function Rates() {
    return (
        <section className="bg-[#0A0908] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
            <div className="mx-auto max-w-[1200px]">
                {/* Header */}
                <div className="max-w-3xl">
                    <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                        Private Arrangements
                    </p>

                    <h1 className="text-6xl leading-[0.9] tracking-[-0.03em] text-[#F3EEE6] md:text-8xl">
                        Your time,
                        <br />
                        <span className="italic">your experience.</span>
                    </h1>

                    <p className="mt-8 max-w-xl text-sm leading-7 text-[#A99F94]">
                        Every arrangement is approached with discretion, attention to
                        detail and respect for your time.
                    </p>
                </div>

                {/* Rates */}
                <div className="mt-16 border-t border-[#F3EEE6]/10 md:mt-24">
                    {arrangements.map((arrangement) => (
                        <div
                            key={arrangement.duration}
                            className="grid gap-6 border-b border-[#F3EEE6]/10 py-10 md:grid-cols-[80px_1fr_1.2fr_120px] md:items-center md:gap-8 md:py-12"
                        >
                            <span className="text-[10px] tracking-[0.3em] text-[#C7B18A]">
                                {arrangement.duration}
                            </span>

                            <h2 className="text-4xl text-[#F3EEE6] md:text-5xl">
                                {arrangement.title}
                            </h2>

                            <p className="max-w-md text-sm leading-6 text-[#A99F94]">
                                {arrangement.description}
                            </p>

                            <div className="text-left md:text-right">
                                {arrangement.price ? (
                                    <span className="text-sm text-[#C7B18A]">
                                        {arrangement.price}
                                    </span>
                                ) : (
                                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#A99F94]">
                                        Inquire
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Travel note */}
                <div className="mt-16 border border-[#F3EEE6]/10 bg-[#151311] p-8 md:mt-20 md:p-12">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#C7B18A]">
                        Travel
                    </p>

                    <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[#F3EEE6] md:text-4xl">
                        Traveling beyond Orlando?
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-[#A99F94]">
                        Travel arrangements are available by prior agreement. Please get
                        in touch to discuss destination, dates and arrangements.
                    </p>

                    <a
                        href="/contact"
                        className="mt-7 inline-block bg-[#F3EEE6] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0A0908] transition-colors duration-300 hover:bg-[#C7B18A]"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </section>
    );
}
