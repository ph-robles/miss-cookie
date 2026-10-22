"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const contactMethods = [
  {
    title: "iMessage",
    description: "For a direct and personal conversation.",
    icon: MessageCircle,
  },
  {
    title: "Telegram",
    description: "For convenient private communication.",
    icon: Send,
  },
  {
    title: "Email",
    description: "For detailed inquiries and arrangements.",
    icon: Mail,
  },
];

const durations = [
  "One hour",
  "Ninety minutes",
  "Two hours",
  "Extended",
  "Travel arrangement",
  "Not sure yet",
];

const inputClass =
  "w-full rounded-xl border border-[#C77D96]/20 bg-[#090809]/70 px-4 py-4 text-sm text-[#F0D5DE] outline-none transition duration-300 placeholder:text-[#F0D5DE]/35 hover:border-[#C77D96]/45 focus:border-[#C77D96] focus:ring-2 focus:ring-[#C77D96]/15";

const labelClass =
  "mb-2.5 block text-[10px] font-medium uppercase tracking-[0.22em] text-[#F0D5DE]/75";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Interface demonstration only.
    // Connect an API, email service or Supabase to deliver inquiries.
    setSubmitted(true);
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090809] px-4 pb-24 pt-28 text-[#F0D5DE] sm:px-6 md:px-10 md:pb-32 md:pt-36 lg:px-14">
      {/* Ambient rose lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[420px] w-[420px] rounded-full bg-[#C77D96]/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[38rem] h-[500px] w-[500px] rounded-full bg-[#C77D96]/10 blur-[150px]"
      />

      <div className="relative mx-auto max-w-[1240px]">
        {/* HERO */}
        <header className="grid gap-8 border-b border-[#C77D96]/20 pb-12 md:pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C77D96]/35 bg-[#24151D]/70 px-4 py-2">
              <Sparkles
                size={13}
                strokeWidth={1.5}
                className="text-[#C77D96]"
              />
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#F0D5DE]">
                Private inquiries
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Let&apos;s make
              <br />
              <span className="italic text-[#C77D96]">
                it personal.
              </span>
            </h1>
          </div>

          <div className="max-w-lg lg:justify-self-end">
            <p className="text-sm leading-7 text-[#F0D5DE]/70 md:text-base md:leading-8">
              Every memorable experience begins with a conversation.
              Share your plans, preferred date and destination, and
              let&apos;s explore the possibilities together.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-10 bg-[#C77D96]" />
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#C77D96]">
                United States &amp; International
              </span>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)] lg:items-start lg:gap-10">
          {/* FORM CARD */}
          <div className="overflow-hidden rounded-3xl border border-[#C77D96]/30 bg-gradient-to-br from-[#321D29] via-[#24151D] to-[#160F14] shadow-[0_20px_80px_rgba(199,125,150,0.08)]">
            <div className="border-b border-[#C77D96]/20 px-5 py-7 sm:px-8 sm:py-9 md:px-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C77D96]/35 bg-[#C77D96]/15 text-[#F0D5DE]">
                  <Mail size={21} strokeWidth={1.4} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                    Your private inquiry
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
                    Tell me about
                    <br />
                    <span className="italic text-[#C77D96]">
                      your plans.
                    </span>
                  </h2>
                  <p className="mt-3 max-w-md text-xs leading-6 text-[#F0D5DE]/60">
                    Complete the details below to outline the
                    experience you have in mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-8 md:p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="space-y-7"
                  >
                    {/* PERSONAL DETAILS */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="text-[10px] tracking-[0.2em] text-[#C77D96]">
                          01
                        </span>
                        <h3 className="text-xs font-medium uppercase tracking-[0.2em]">
                          Your details
                        </h3>
                        <div className="h-px flex-1 bg-[#C77D96]/20" />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Your name" htmlFor="name">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Your full name"
                            className={inputClass}
                          />
                        </Field>

                        <Field label="Email address" htmlFor="email">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={inputClass}
                          />
                        </Field>
                      </div>

                      <div className="mt-5">
                        <Field
                          label="Preferred contact"
                          htmlFor="phone"
                        >
                          <input
                            id="phone"
                            name="phone"
                            type="text"
                            autoComplete="tel"
                            placeholder="Phone number or messaging contact"
                            className={inputClass}
                          />
                        </Field>
                      </div>
                    </div>

                    {/* ARRANGEMENT DETAILS */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="text-[10px] tracking-[0.2em] text-[#C77D96]">
                          02
                        </span>
                        <h3 className="text-xs font-medium uppercase tracking-[0.2em]">
                          Your plans
                        </h3>
                        <div className="h-px flex-1 bg-[#C77D96]/20" />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <Field
                          label="Preferred date"
                          htmlFor="date"
                        >
                          <div className="relative">
                            <CalendarDays
                              size={17}
                              strokeWidth={1.5}
                              aria-hidden="true"
                              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C77D96]"
                            />
                            <input
                              id="date"
                              name="date"
                              type="date"
                              className={`${inputClass} pr-11`}
                            />
                          </div>
                        </Field>

                        <Field label="Destination" htmlFor="location">
                          <div className="relative">
                            <MapPin
                              size={17}
                              strokeWidth={1.5}
                              aria-hidden="true"
                              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C77D96]"
                            />
                            <input
                              id="location"
                              name="location"
                              type="text"
                              placeholder="City or destination"
                              className={`${inputClass} pr-11`}
                            />
                          </div>
                        </Field>
                      </div>

                      <div className="mt-5">
                        <Field
                          label="Preferred arrangement"
                          htmlFor="duration"
                        >
                          <div className="relative">
                            <Clock3
                              size={17}
                              strokeWidth={1.5}
                              aria-hidden="true"
                              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#C77D96]"
                            />
                            <select
                              id="duration"
                              name="duration"
                              defaultValue=""
                              className={`${inputClass} appearance-none pr-11`}
                            >
                              <option
                                value=""
                                disabled
                                className="bg-[#24151D]"
                              >
                                Select an option
                              </option>
                              {durations.map((duration) => (
                                <option
                                  key={duration}
                                  value={duration}
                                  className="bg-[#24151D]"
                                >
                                  {duration}
                                </option>
                              ))}
                            </select>
                          </div>
                        </Field>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <span className="text-[10px] tracking-[0.2em] text-[#C77D96]">
                          03
                        </span>
                        <h3 className="text-xs font-medium uppercase tracking-[0.2em]">
                          A little more
                        </h3>
                        <div className="h-px flex-1 bg-[#C77D96]/20" />
                      </div>

                      <Field label="Your message" htmlFor="message">
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Share any details that would help me understand your plans..."
                          className={`${inputClass} min-h-36 resize-y leading-7`}
                        />
                      </Field>
                    </div>

                    {/* SUBMIT */}
                    <div className="border-t border-[#C77D96]/20 pt-6">
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#C77D96] via-[#E3A7BC] to-[#C77D96] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#190D13] shadow-[0_8px_30px_rgba(199,125,150,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(199,125,150,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0D5DE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#24151D]"
                      >
                        Prepare inquiry
                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </button>

                      <p className="mt-4 text-center text-[10px] leading-5 text-[#F0D5DE]/50">
                        Availability and arrangements are confirmed
                        separately. Please share only the details
                        necessary for your inquiry.
                      </p>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    role="status"
                    aria-live="polite"
                    className="py-8 text-center sm:py-12"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C77D96]/50 bg-[#C77D96]/15 text-[#F0D5DE]">
                      <Check size={27} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-7 font-[family-name:var(--font-display)] text-4xl">
                      Inquiry prepared.
                    </h3>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#F0D5DE]/65">
                      The form interaction is complete, but this
                      website is not yet connected to a message
                      delivery service. Your inquiry has not been
                      sent.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 rounded-xl border border-[#C77D96]/40 px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#C77D96]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C77D96]"
                    >
                      Return to form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CONTACT SIDEBAR */}
          <aside className="space-y-6">
            {/* CONTACT OPTIONS */}
            <div className="rounded-3xl border border-[#C77D96]/35 bg-[#24151D]/80 p-5 sm:p-7">
              <div className="mb-6">
                <p className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
                  Get in touch
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
                  Let&apos;s connect.
                </h2>
                <p className="mt-2 text-xs leading-6 text-[#F0D5DE]/55">
                  Choose your preferred way to communicate.
                </p>
              </div>

              <div className="space-y-3">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <div
                      key={method.title}
                      className="group rounded-2xl border border-[#C77D96]/20 bg-[#090809]/55 p-4 transition duration-300 hover:border-[#C77D96]/55 hover:bg-[#C77D96]/[0.07]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#C77D96]/30 bg-[#C77D96]/10 text-[#C77D96] transition-colors group-hover:bg-[#C77D96]/20">
                          <Icon size={19} strokeWidth={1.5} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-medium text-[#F0D5DE]">
                            {method.title}
                          </h3>
                          <p className="mt-1 text-[11px] leading-5 text-[#F0D5DE]/55">
                            {method.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={16}
                          strokeWidth={1.5}
                          aria-hidden="true"
                          className="shrink-0 text-[#C77D96]/70"
                        />
                      </div>

                      <p className="mt-3 pl-[60px] text-[9px] uppercase tracking-[0.14em] text-[#C77D96]/80">
                        Contact details coming soon
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PRIVACY CARD */}
            <div className="relative overflow-hidden rounded-3xl border border-[#C77D96]/40 bg-gradient-to-br from-[#492737] via-[#321D29] to-[#24151D] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#E3A7BC]/15 blur-3xl"
              />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#F0D5DE]/25 bg-[#F0D5DE]/10 text-[#F0D5DE]">
                  <ShieldCheck size={22} strokeWidth={1.4} />
                </div>

                <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-[#E3A7BC]">
                  A personal note
                </p>

                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight">
                  Your privacy
                  <br />
                  <span className="italic text-[#E3A7BC]">
                    comes first.
                  </span>
                </h3>

                <p className="mt-4 text-xs leading-7 text-[#F0D5DE]/75">
                  Share only what is necessary to describe your
                  inquiry. Additional details can be discussed
                  through an agreed communication channel.
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-[#C77D96]/70 to-transparent" />

                <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-[#F0D5DE]/60">
                  Discretion · Elegance · Personal attention
                </p>
              </div>
            </div>
          </aside>
        </div>

        {/* BOTTOM SIGNATURE */}
        <footer className="mt-14 border-t border-[#C77D96]/25 pt-8 sm:mt-20 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
              United States &amp; International
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl text-[#F0D5DE]/90 sm:text-2xl">
              Private experiences, thoughtfully arranged.
            </p>
          </div>

          <div className="mt-5 flex items-center gap-2 sm:mt-0">
            <div className="h-px w-7 bg-[#C77D96]" />
            <span className="text-[9px] uppercase
tracking-[0.28em] text-[#C77D96]">
              Miss Cookie
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}