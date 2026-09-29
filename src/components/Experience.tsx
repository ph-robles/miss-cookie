import Image from "next/image";

const experiences = [
    {
        number: "01",
        title: "Private Evenings",
        description:
            "Thoughtfully planned private time in an elegant and relaxed atmosphere.",
        image: "/images/experience-01.jpg",
    },
    {
        number: "02",
        title: "Dinner & Social",
        description:
            "Good conversation, beautiful surroundings and an evening designed to feel effortless.",
        image: "/images/experience-02.jpg",
    },
    {
        number: "03",
        title: "Special Occasions",
        description:
            "A refined presence for celebrations, events and memorable occasions.",
        image: "/images/experience-03.jpg",
    },
    {
        number: "04",
        title: "Travel",
        description:
            "Available for select travel arrangements beyond Orlando by prior agreement.",
        image: "/images/experience-04.jpg",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-[#0A0908] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
        >
            <div className="mx-auto max-w-[1400px]">
                {/* Section heading */}
                <div className="mb-16 max-w-2xl md:mb-24">
                    <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                        The Experience
                    </p>

                    <h2 className="text-5xl leading-[0.95] tracking-[-0.02em] text-[#F3EEE6] md:text-7xl">
                        Moments designed
                        <br />
                        <span className="italic">around you.</span>
                    </h2>
                </div>

                {/* Experience list */}
                <div className="border-t border-[#F3EEE6]/10">
                    {experiences.map((experience) => (
                        <article
                            key={experience.number}
                            className="group grid border-b border-[#F3EEE6]/10 py-10 md:grid-cols-[80px_1fr_1.2fr] md:items-center md:gap-10 md:py-14"
                        >
                            {/* Number */}
                            <span className="mb-5 text-[10px] tracking-[0.3em] text-[#C7B18A] md:mb-0">
                                {experience.number}
                            </span>

                            {/* Title */}
                            <div>
                                <h3 className="text-4xl text-[#F3EEE6] transition-colors duration-300 group-hover:text-[#C7B18A] md:text-5xl">
                                    {experience.title}
                                </h3>
                            </div>

                            {/* Image + Description */}
                            <div className="mt-6 grid gap-6 sm:grid-cols-[180px_1fr] sm:items-center md:mt-0">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={experience.image}
                                        alt={experience.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 180px"
                                        className="object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <p className="max-w-sm text-sm leading-6 text-[#A99F94]">
                                    {experience.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
