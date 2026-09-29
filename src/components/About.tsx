import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#151311] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
        >
            <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2 lg:gap-24">

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                        src="/images/about.jpg"
                        alt="Miss Cookie"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="max-w-xl">
                    <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                        About
                    </p>

                    <h2 className="text-5xl leading-[0.95] tracking-[-0.02em] text-[#F3EEE6] md:text-7xl">
                        A more personal
                        <br />
                        <span className="italic">kind of luxury.</span>
                    </h2>

                    <div className="mt-10 space-y-6 text-sm leading-7 text-[#A99F94]">
                        <p>
                            Based in Orlando, Florida, Miss Cookie offers private experiences
                            defined by elegance, discretion and genuine connection.
                        </p>

                        <p>
                            Every meeting is approached with attention to detail, thoughtful
                            conversation and an appreciation for the little things that make
                            an experience memorable.
                        </p>

                        <p>
                            Whether in Orlando or traveling beyond, the intention is simple:
                            to create a refined experience that feels personal from beginning
                            to end.
                        </p>
                    </div>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-px w-12 bg-[#C7B18A]/60" />

                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C7B18A]">
                            Orlando · Florida
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
