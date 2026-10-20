"use client";

import Image from "next/image";
import Link from "next/link";
import AboutReveal from "./AboutReveal";

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

const values = [
  {
    number: "01",
    title: "Discretion",
    description:
      "Privacy and thoughtful communication are essential from the first inquiry onward.",
  },
  {
    number: "02",
    title: "Elegance",
    description:
      "A refined atmosphere, attention to detail and a calm, effortless approach define the experience.",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "Genuine conversation, mutual respect and a comfortable environment always come first.",
  },
];

const profile = [
  { label: "Origin", value: "Brazilian" },
  { label: "Height", value: "5'6\"" },
  { label: "Style", value: "Elegant" },
  { label: "Hair", value: "Blonde" },
  { label: "Eyes", value: "Hazel" },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-page bg-[#0A0908] text-[#F3EEE6]"
    >
      {/* HERO */}
      <div className="about-hero relative flex min-h-[82vh] items-end overflow-hidden md:min-h-[88vh]">
        <div className="about-hero-image absolute inset-0">
          <Image
            src="/imagens/about.jpg"
            alt="Miss Cookie — personal editorial portrait"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/35 via-transparent to-transparent" />

        <div className="absolute left-[8%] top-[25%] h-72 w-72 rounded-full bg-[#C7B18A]/[0.05] blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 pb-20 pt-40 md:px-10 md:pb-28 lg:px-14">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C7B18A]/70" />

              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                About Miss Cookie
              </span>

              <CookieMark />
            </div>

            <h1 className="text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl md:text-8xl lg:text-[8rem]">
              A more personal
              <br />
              <span className="italic text-[#D8C8AD]">
                kind of luxury.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#D0C8BE] md:text-base md:leading-8">
              Poised, articulate, and effortlessly adaptable,
              I specialize in providing enganging, high-level
              companionship for discerning gentlemen. Whether 
              accompanying you to an intimate bussines dinner,
              an exclusive gala, or a weekend executive retreat,
              I bring warmth, quick intellect , and flawless
              social etiquette to every setting.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/experience"
                className="private-inquiry-button inline-block border border-[#C7B18A]/50 px-6 py-4 text-[9px] uppercase tracking-[0.25em] md:px-8"
              >
                <span>Discover the Experience</span>
              </Link>

              <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]/70">
                Private · Refined · Personal
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 md:flex lg:right-14">
          <span className="text-[8px] uppercase tracking-[0.4em] text-[#A99F94]">
            Orlando · Florida
          </span>
          <span className="h-px w-10 bg-[#C7B18A]/40" />
        </div>

        <div className="absolute bottom-8 left-6 z-10 hidden items-center gap-3 md:flex lg:left-14">
          <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]/60">
            Discover
          </span>
          <span className="h-px w-8 bg-[#C7B18A]/30" />
        </div>
      </div>

      {/* PERSONAL INTRODUCTION */}
      <div className="border-t border-[#F3EEE6]/[0.08]">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:gap-16 md:px-10 md:py-32 lg:grid-cols-[0.75fr_1.25fr] lg:px-14">
          <div>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
              The woman behind the name
            </span>

            <h2 className="mt-6 max-w-md text-4xl leading-[1.05] tracking-[-0.025em] md:text-5xl">
              Presence is felt in the details.
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C7B18A]/50" />
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                A personal philosophy
              </span>
            </div>
          </div>

          <div className="max-w-2xl space-y-7">
            <p className="text-base leading-8 text-[#C9C0B7] md:text-lg md:leading-9">
              I have always been drawn to experiences that feel
              effortless. Beautiful surroundings, intimate dinners,
              soft lighting and meaningful conversations that never
              feel rushed.
            </p>

            <p className="text-base leading-8 text-[#A99F94] md:text-lg md:leading-9">
              I believe the most memorable moments are rarely the
              loudest ones. They happen quietly — through chemistry,
              a shared glance, genuine laughter, or simply feeling
              completely comfortable in someones company.
            </p>

            <p className="text-base leading-8 text-[#A99F94] md:text-lg md:leading-9">
              Fluent in English, Spanish, and Portuguese

              Interests/Hobbies: Golf, fine dining, 
              Comteporany art, and Sunsets
            </p>
          </div>
        </div>
      </div>

      {/* PHOTO AND STORY */}
      <div className="bg-[#0D0C0A]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-14">
          <div className="min-w-0">
            <AboutReveal />
          </div>

          <div className="max-w-xl">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
              A little more
            </span>

            <h2 className="mt-6 text-4xl leading-[1.05] tracking-[-0.025em] md:text-6xl">
              Nothing should feel
              <br />
              <span className="italic text-[#C7B18A]">
                forced.
              </span>
            </h2>

            <div className="mt-9 space-y-6 text-sm leading-8 text-[#A99F94] md:text-base">
              <p>
                The time we share should feel natural, elegant and
                relaxed. A moment you can simply enjoy without
                overthinking it.
              </p>

              <p>
                I appreciate the details that often go unnoticed —
                a lingering glance, a subtle smile, the quiet change
                in a conversation when two people begin to feel
                completely at ease.
              </p>

              <p>
                I believe intimacy is found in the little things.
                In paying attention. In the atmosphere. In the pauses
                between words and the gestures that do not need an
                explanation.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C7B18A]/50" />
              <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]">
                Private · Refined · Personal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PROFILE */}
      <div className="border-t border-[#F3EEE6]/[0.08]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mb-14 flex items-end justify-between gap-8">
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
                The Profile
              </span>

              <h2 className="mt-5 text-4xl tracking-[-0.025em] md:text-6xl">
                Miss Cookie
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#A99F94]">
                A few details that offer a glimpse into my personal
                style and identity.
              </p>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.35em] text-[#A99F94]/50 md:block">
              01 — 05
            </span>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-[#F3EEE6]/[0.08] sm:grid-cols-3 lg:grid-cols-5">
            {profile.map((item) => (
              <article
                key={item.label}
                className="about-profile-card border-b border-r border-[#F3EEE6]/[0.08] p-6 md:p-8"
              >
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#A99F94]">
                  {item.label}
                </span>

                <p className="mt-5 text-xl text-[#F3EEE6] md:text-2xl">
                  {item.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div className="bg-[#0D0C0A]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mb-14 max-w-xl md:mb-16">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C7B18A]">
              What Matters
            </span>

            <h2 className="mt-6 text-4xl leading-tight tracking-[-0.025em] md:text-5xl">
              The details make the difference.
            </h2>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#F3EEE6]/[0.08] md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.number}
                className="about-profile-card group border-b border-r border-[#F3EEE6]/[0.08] p-7 md:p-9 lg:p-10"
              >
                <span className="text-[10px] tracking-[0.25em] text-[#C7B18A]">
                  {value.number}
                </span>

                <h3 className="mt-9 text-3xl tracking-[-0.02em] md:mt-12">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#A99F94]">
                  {value.description}
                </p>

                <div className="mt-9 h-px w-8 bg-[#C7B18A]/40 transition-all duration-500 group-hover:w-14" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="relative overflow-hidden border-t border-[#F3EEE6]/[0.08] bg-[#151311]">
        <div className="absolute right-[-10%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#C7B18A]/[0.035] blur-[100px]" />

        <div className="relative mx-auto max-w-[1000px] px-6 py-28 text-center md:px-10 md:py-36">
          <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
            Philosophy
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-tight tracking-[-0.025em] md:text-6xl">
            The beauty is in what
            <br />
            <span className="italic text-[#C7B18A]">
              remains.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#A99F94] md:text-base">
            Perhaps that is where my presence is felt most. Not
            loudly. Not by demanding attention. But quietly, in a
            way that remains with you long after the moment has
            passed.
          </p>

          <div className="mx-auto mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C7B18A]/40" />

            <span className="text-[8px] uppercase tracking-[0.35em] text-[#A99F94]">
              Discretion · Connection · Elegance
            </span>

            <span className="h-px w-10 bg-[#C7B18A]/40" />
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="border-t border-[#F3EEE6]/[0.08]">
        <div className="mx-auto max-w-[1000px] px-6 py-28 text-center md:px-10 md:py-36">
          <span className="text-[9px] uppercase tracking-[0.45em] text-[#C7B18A]">
            Private inquiries
          </span>

          <h2 className="mx-auto mt-7 max-w-3xl text-4xl leading-tight tracking-[-0.025em] md:text-6xl">
            Some moments are better
            <br />
            <span className="italic text-[#D8C8AD]">
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

          <div className="mt-14 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C7B18A]/30" />
            <CookieMark />
            <span className="h-px w-8 bg-[#C7B18A]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
