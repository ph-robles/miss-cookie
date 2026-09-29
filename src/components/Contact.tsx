"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    CalendarDays,
    Check,
    Clock3,
    Mail,
    MapPin,
    MessageCircle,
    Send,
} from "lucide-react";

const contactMethods = [
    {
        title: "iMessage",
        description: "For direct and private communication.",
        icon: MessageCircle,
        value: "Contact details coming soon",
        href: "#",
    },
    {
        title: "Telegram",
        description: "A convenient way to discuss your inquiry.",
        icon: Send,
        value: "Contact details coming soon",
        href: "#",
    },
    {
        title: "Email",
        description: "For detailed inquiries and arrangements.",
        icon: Mail,
        value: "Contact details coming soon",
        href: "#",
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

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Future integration:
        // Supabase / API / email service

        setSubmitted(true);
    }

    return (
        <section className="min-h-screen bg-[#0A0908] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-14 lg:pb-40">
            <div className="mx-auto max-w-[1400px]">
                {/* HERO */}
                <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-24">
                    <div>
                        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-[#C7B18A]">
                            Private Inquiries
                        </p>

                        <h1 className="max-w-4xl text-6xl leading-[0.88] tracking-[-0.03em] text-[#F3EEE6] md:text-8xl lg:text-9xl">
                            Let&apos;s make
                            <br />
                            <span className="italic">it personal.</span>
                        </h1>
                    </div>

                    <div>
                        <p className="max-w-md text-sm leading-7 text-[#A99F94]">
                            To inquire about availability, please share a few details about
                            your preferred date, location and type of arrangement. Every
                            inquiry is handled privately and thoughtfully.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-px w-10 bg-[#C7B18A]/60" />

                            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C7B18A]">
                                Orlando · Florida
                            </span>
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="mt-20 grid gap-16 lg:mt-28 lg:grid-cols-[1fr_0.72fr] lg:gap-24">
                    {/* FORM */}
                    <div>
                        <div className="mb-10">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C7B18A]">
                                Send an inquiry
                            </p>

                            <h2 className="mt-4 text-4xl text-[#F3EEE6] md:text-5xl">
                                Tell me a little
                                <br />
                                <span className="italic">about your plans.</span>
                            </h2>
                        </div>

                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    {/* NAME */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                        >
                                            Your name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            placeholder="Your name"
                                            className="w-full border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 text-sm text-[#F3EEE6] outline-none transition-colors placeholder:text-[#A99F94]/45 focus:border-[#C7B18A]"
                                        />
                                    </div>

                                    {/* EMAIL */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="Your email address"
                                            className="w-full border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 text-sm text-[#F3EEE6] outline-none transition-colors placeholder:text-[#A99F94]/45 focus:border-[#C7B18A]"
                                        />
                                    </div>

                                    {/* PHONE / MESSAGING */}
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                        >
                                            Preferred contact
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            autoComplete="tel"
                                            placeholder="Phone number or messaging contact"
                                            className="w-full border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 text-sm text-[#F3EEE6] outline-none transition-colors placeholder:text-[#A99F94]/45 focus:border-[#C7B18A]"
                                        />
                                    </div>

                                    {/* DATE + LOCATION */}
                                    <div className="grid gap-8 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="date"
                                                className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                            >
                                                Preferred date
                                            </label>

                                            <div className="relative">
                                                <CalendarDays
                                                    size={17}
                                                    strokeWidth={1.2}
                                                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#A99F94]"
                                                />

                                                <input
                                                    id="date"
                                                    name="date"
                                                    type="date"
                                                    className="w-full border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 pr-8 text-sm text-[#F3EEE6] outline-none transition-colors focus:border-[#C7B18A]"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="location"
                                                className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                            >
                                                Location
                                            </label>

                                            <div className="relative">
                                                <MapPin
                                                    size={17}
                                                    strokeWidth={1.2}
                                                    className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#A99F94]"
                                                />

                                                <input
                                                    id="location"
                                                    name="location"
                                                    type="text"
                                                    placeholder="Orlando / hotel / city"
                                                    className="w-full border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 pr-8 text-sm text-[#F3EEE6] outline-none transition-colors placeholder:text-[#A99F94]/45 focus:border-[#C7B18A]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* DURATION */}
                                    <div>
                                        <label
                                            htmlFor="duration"
                                            className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                        >
                                            Preferred arrangement
                                        </label>

                                        <div className="relative">
                                            <Clock3
                                                size={17}
                                                strokeWidth={1.2}
                                                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#A99F94]"
                                            />

                                            <select
                                                id="duration"
                                                name="duration"
                                                defaultValue=""
                                                className="w-full appearance-none border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 pr-8 text-sm text-[#F3EEE6] outline-none transition-colors focus:border-[#C7B18A]"
                                            >
                                                <option value="" disabled className="bg-[#151311]">
                                                    Select an option
                                                </option>

                                                {durations.map((duration) => (
                                                    <option
                                                        key={duration}
                                                        value={duration}
                                                        className="bg-[#151311]"
                                                    >
                                                        {duration}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* MESSAGE */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-3 block text-[9px] font-medium uppercase tracking-[0.3em] text-[#A99F94]"
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="Tell me anything that would be helpful to know about your plans..."
                                            className="w-full resize-none border-b border-[#F3EEE6]/15 bg-transparent px-0 py-4 text-sm leading-7 text-[#F3EEE6] outline-none transition-colors placeholder:text-[#A99F94]/45 focus:border-[#C7B18A]"
                                        />
                                    </div>

                                    {/* SUBMIT */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="group inline-flex items-center gap-5 bg-[#F3EEE6] px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0A0908] transition-all duration-300 hover:bg-[#C7B18A]"
                                        >
                                            Send inquiry

                                            <Send
                                                size={15}
                                                strokeWidth={1.5}
                                                className="transition-transform duration-300 group-hover:translate-x-1"
                                            />
                                        </button>
                                    </div>

                                    <p className="max-w-xl text-[10px] leading-5 text-[#A99F94]/65">
                                        By submitting this form, you are simply sending an inquiry.
                                        Availability and arrangements are confirmed separately.
                                    </p>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="border border-[#C7B18A]/20 bg-[#151311] p-8 md:p-12"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center border border-[#C7B18A]/40 text-[#C7B18A]">
                                        <Check size={21} strokeWidth={1.3} />
                                    </div>

                                    <h3 className="mt-8 text-4xl text-[#F3EEE6] md:text-5xl">
                                        Inquiry received.
                                    </h3>

                                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#A99F94]">
                                        Thank you for reaching out. Your inquiry has been prepared
                                        successfully. A response can be provided through the
                                        contact information you submitted.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-8 border border-[#F3EEE6]/15 px-6 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#F3EEE6] transition-colors hover:border-[#C7B18A] hover:text-[#C7B18A]"
                                    >
                                        Send another inquiry
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* CONTACT METHODS */}
                    <aside>
                        <div className="border-t border-[#F3EEE6]/10">
                            {contactMethods.map((method) => {
                                const Icon = method.icon;

                                return (
                                    <div
                                        key={method.title}
                                        className="border-b border-[#F3EEE6]/10 py-8"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#F3EEE6]/10 text-[#C7B18A]">
                                                <Icon size={19} strokeWidth={1.2} />
                                            </div>

                                            <div>
                                                <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#F3EEE6]">
                                                    {method.title}
                                                </h3>

                                                <p className="mt-2 text-xs leading-5 text-[#A99F94]">
                                                    {method.description}
                                                </p>

                                                <a
                                                    href={method.href}
                                                    className="mt-4 inline-block text-[9px] uppercase tracking-[0.2em] text-[#C7B18A] transition-colors hover:text-[#F3EEE6]"
                                                >
                                                    {method.value}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* PRIVATE NOTE */}
                        <div className="mt-10 bg-[#151311] p-7 md:p-9">
                            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#C7B18A]">
                                Discretion
                            </p>

                            <h3 className="mt-4 text-3xl leading-tight text-[#F3EEE6]">
                                Your privacy matters.
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-[#A99F94]">
                                Please share only the information necessary for your inquiry.
                                Further details can be discussed privately once communication
                                has been established.
                            </p>
                        </div>
                    </aside>
                </div>

                {/* BOTTOM CTA */}
                <div className="mt-24 border-t border-[#F3EEE6]/10 pt-10 md:mt-32 md:flex md:items-center md:justify-between">
                    <div>
                        <p className="text-[9px] uppercase tracking-[0.35em] text-[#A99F94]">
                            Orlando · Florida
                        </p>

                        <p className="mt-2 font-[family-name:var(--font-display)] text-2xl text-[#F3EEE6]">
                            Private experiences, thoughtfully arranged.
                        </p>
                    </div>

                    <div className="mt-6 flex items-center gap-3 md:mt-0">
                        <div className="h-px w-8 bg-[#C7B18A]/50" />

                        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C7B18A]">
                            Miss Cookie
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}