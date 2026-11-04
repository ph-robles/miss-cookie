import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
    Database,
    ExternalLink,
    LockKeyhole,
    Mail,
    ShieldCheck,
    UserRound,
} from "lucide-react";
import Link from "next/link";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export const metadata: Metadata = {
    title: "Privacy Policy | Miss Cookie",
    description:
        "Learn how Miss Cookie collects, uses, stores and protects personal information.",
};

const lastUpdated = "November 4, 2026";

const navigationSections = [
    {
        id: "information-we-collect",
        number: "01",
        title: "Information We Collect",
    },
    {
        id: "how-we-use-information",
        number: "02",
        title: "How We Use Information",
    },
    {
        id: "service-providers",
        number: "03",
        title: "Service Providers",
    },
    {
        id: "private-gallery",
        number: "04",
        title: "Private Gallery",
    },
    {
        id: "cookies",
        number: "05",
        title: "Cookies",
    },
    {
        id: "retention",
        number: "06",
        title: "Data Retention",
    },
    {
        id: "rights",
        number: "07",
        title: "Your Privacy Rights",
    },
    {
        id: "security",
        number: "08",
        title: "Security",
    },
    {
        id: "children",
        number: "09",
        title: "Age Restrictions",
    },
    {
        id: "policy-changes",
        number: "10",
        title: "Policy Changes",
    },
    {
        id: "contact",
        number: "11",
        title: "Contact",
    },
];

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#090809] text-[#F0D5DE]">
            <Header />

            {/* HERO */}
            <section className="relative overflow-hidden border-b border-[#C77D96]/15 px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-48 lg:px-14">
                <div
                    className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#C77D96]/[0.07] blur-[130px]"
                    aria-hidden="true"
                />

                <div
                    className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#A94F70]/[0.05] blur-[140px]"
                    aria-hidden="true"
                />

                <div className="relative mx-auto max-w-[1400px]">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-10 bg-[#C77D96]" />

                        <p className="text-[9px] uppercase tracking-[0.4em] text-[#C77D96]">
                            Legal &amp; Privacy
                        </p>
                    </div>

                    <h1 className="mt-7 max-w-5xl font-[family-name:var(--font-display)] text-6xl leading-[0.9] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                        Privacy
                        <br />

                        <span className="italic text-[#C77D96]">
                            with discretion.
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-sm leading-7 text-[#BDA7B0] md:text-base">
                        This Privacy Policy explains how Miss Cookie collects, uses,
                        stores and protects personal information when you visit the
                        website, contact us or use the private members area.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[9px] uppercase tracking-[0.22em] text-[#BDA7B0]">
                        <span>Effective: {lastUpdated}</span>
                        <span>Orlando · Florida · United States</span>
                    </div>
                </div>
            </section>

            {/* POLICY CONTENT */}
            <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
                <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                    {/* SIDE NAVIGATION */}
                    <aside className="lg:sticky lg:top-28 lg:h-fit">
                        <div className="rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/40 p-6">
                            <p className="mb-5 text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                                On this page
                            </p>

                            <nav
                                aria-label="Privacy policy sections"
                                className="space-y-1"
                            >
                                {navigationSections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-[#BDA7B0] transition duration-300 hover:bg-[#C77D96]/10 hover:text-[#F0D5DE]"
                                    >
                                        <span className="text-[9px] text-[#C77D96]/60">
                                            {section.number}
                                        </span>

                                        <span>{section.title}</span>
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-6 border-t border-[#C77D96]/15 pt-6">
                                <Link
                                    href="/cookies"
                                    className="inline-flex items-center gap-2 text-xs text-[#C77D96] transition duration-300 hover:text-[#F0D5DE]"
                                >
                                    View Cookie Policy

                                    <ExternalLink
                                        size={13}
                                        strokeWidth={1.4}
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* MAIN ARTICLE */}
                    <article className="min-w-0">
                        {/* HIGHLIGHTS */}
                        <div className="mb-14 grid gap-4 sm:grid-cols-3">
                            <PolicyHighlight
                                icon={LockKeyhole}
                                title="Private by design"
                                description="Member access is protected through authenticated sessions."
                            />

                            <PolicyHighlight
                                icon={Database}
                                title="Limited collection"
                                description="We collect information needed to provide and secure the service."
                            />

                            <PolicyHighlight
                                icon={ShieldCheck}
                                title="Secure providers"
                                description="Account and email functions use established service providers."
                            />
                        </div>

                        <PolicySection
                            id="information-we-collect"
                            number="01"
                            title="Information We Collect"
                        >
                            <p>
                                We may collect information that you provide directly,
                                including your name, email address, telephone number,
                                preferences, inquiry details and other information
                                included in communications sent through the website or by
                                email.
                            </p>

                            <p>
                                When you create a members account, we collect your email
                                address, encrypted authentication information, account
                                identifier, confirmation status, gallery access status and
                                account activity such as registration and last sign-in
                                timestamps.
                            </p>

                            <p>
                                We may also receive limited technical information,
                                including IP address, browser type, device information,
                                request logs, authentication events and security-related
                                records.
                            </p>

                            <p>
                                Please do not submit Social Security numbers, financial
                                account credentials, medical records or other information
                                that is not reasonably required for an inquiry or
                                arrangement.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="how-we-use-information"
                            number="02"
                            title="How We Use Information"
                        >
                            <p>Personal information may be used to:</p>

                            <PolicyList
                                items={[
                                    "Respond to inquiries and communicate about availability or arrangements.",
                                    "Create, authenticate and maintain member accounts.",
                                    "Confirm email addresses and process password recovery requests.",
                                    "Approve, restrict or revoke access to the private gallery.",
                                    "Protect the website, accounts and private content against misuse.",
                                    "Diagnose technical problems and maintain website reliability.",
                                    "Comply with legal obligations and enforce applicable terms.",
                                ]}
                            />

                            <p>
                                We do not use personal information for undisclosed
                                purposes that are materially incompatible with the
                                purpose for which the information was collected.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="service-providers"
                            number="03"
                            title="Service Providers"
                        >
                            <p>
                                We use service providers that process limited information
                                on our behalf to operate and protect the website.
                            </p>

                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                <ProviderCard
                                    name="Supabase"
                                    purpose="Authentication, account records, gallery access permissions and private image storage."
                                />

                                <ProviderCard
                                    name="Resend"
                                    purpose="Account confirmation, password recovery and transactional email delivery."
                                />

                                <ProviderCard
                                    name="Vercel"
                                    purpose="Website hosting, deployment, security and request processing."
                                />

                                <ProviderCard
                                    name="Hostinger"
                                    purpose="Domain and DNS management for themisscookie.com."
                                />
                            </div>

                            <p>
                                Providers may process information in the United States or
                                other jurisdictions where their infrastructure operates.
                                Each provider maintains independent terms and privacy
                                practices.
                            </p>

                            <p>
                                We may also disclose information when legally required,
                                to protect rights or safety, investigate fraud or respond
                                to valid legal process.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="private-gallery"
                            number="04"
                            title="Private Gallery"
                        >
                            <p>
                                Access to the private gallery requires an authenticated
                                account and separate approval. Creating an account does
                                not automatically grant gallery access.
                            </p>

                            <p>
                                Gallery files are stored in private storage and displayed
                                through temporary signed links. Gallery access may be
                                activated, suspended or revoked through the
                                administrative area.
                            </p>

                            <p>
                                Private content is intended only for the approved account
                                holder. Downloading, recording, redistributing or
                                publishing private material without authorization may
                                violate the applicable terms and intellectual property
                                rights.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="cookies"
                            number="05"
                            title="Cookies and Similar Technologies"
                        >
                            <p>
                                The website uses strictly necessary cookies and browser
                                storage to maintain secure authentication sessions,
                                remember essential account state and protect private
                                pages.
                            </p>

                            <p>
                                The private gallery may use local browser storage to
                                remember interface preferences, such as photographs
                                marked as favorites. This information normally remains
                                within the browser unless removed by the user.
                            </p>

                            <p>
                                We do not currently use advertising cookies for
                                cross-site behavioral advertising. If analytics,
                                advertising pixels or additional tracking services are
                                introduced, this Policy and the Cookie Policy will be
                                updated and appropriate controls will be provided.
                            </p>

                            <Link
                                href="/cookies"
                                className="mt-3 inline-flex items-center gap-2 text-sm text-[#C77D96] transition duration-300 hover:text-[#F0D5DE]"
                            >
                                Read the complete Cookie Policy

                                <ExternalLink
                                    size={14}
                                    strokeWidth={1.4}
                                    aria-hidden="true"
                                />
                            </Link>
                        </PolicySection>

                        <PolicySection
                            id="retention"
                            number="06"
                            title="Data Retention"
                        >
                            <p>
                                We retain personal information only for as long as
                                reasonably necessary to provide the service, respond to
                                inquiries, maintain account security, resolve disputes
                                and satisfy legal or operational requirements.
                            </p>

                            <p>
                                Account data may remain stored while an account is active.
                                When an account is deleted, related gallery access records
                                are designed to be deleted with the account. Some
                                security, transactional or backup records may remain for
                                a limited period where reasonably necessary.
                            </p>

                            <p>
                                Contact communications may be retained for a reasonable
                                business period, depending on the nature of the inquiry
                                and any resulting arrangement.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="rights"
                            number="07"
                            title="Your Privacy Rights"
                        >
                            <p>
                                Depending on your location and applicable law, you may
                                have the right to request:
                            </p>

                            <PolicyList
                                items={[
                                    "Confirmation of whether personal information is processed.",
                                    "Access to certain personal information maintained about you.",
                                    "Correction of inaccurate personal information.",
                                    "Deletion of personal information, subject to legal exceptions.",
                                    "A portable copy of eligible personal information.",
                                    "Withdrawal of consent where processing depends on consent.",
                                    "Opt-out from certain sales, sharing or targeted advertising, if applicable.",
                                    "Non-discriminatory treatment for exercising applicable privacy rights.",
                                ]}
                            />

                            <p>
                                Certain privacy laws may provide qualifying consumers with
                                additional rights to know, correct or delete personal
                                information and to opt out of certain sale, sharing or
                                targeted advertising activities.
                            </p>

                            <p>
                                Miss Cookie does not currently sell personal information
                                or intentionally share personal information for
                                cross-context behavioral advertising.
                            </p>

                            <p>
                                To submit a privacy request, email{" "}
                                <a
                                    href="mailto:bookings@themisscookie.com"
                                    className="text-[#C77D96] transition duration-300 hover:text-[#F0D5DE]"
                                >
                                    bookings@themisscookie.com
                                </a>
                                . We may need to confirm your identity before completing
                                a request.
                            </p>
                        </PolicySection>

                        <PolicySection id="security" number="08" title="Security">
                            <p>
                                We use reasonable administrative and technical safeguards
                                designed to protect information. These include encrypted
                                HTTPS connections, authenticated sessions, private
                                storage, row-level access controls, temporary signed
                                image links and restricted administrative credentials.
                            </p>

                            <p>
                                No online service can guarantee absolute security.
                                Account holders are responsible for choosing a strong,
                                unique password and protecting access to their devices
                                and email accounts.
                            </p>

                            <p>
                                If you believe an account or private material has been
                                accessed without authorization, contact us immediately.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="children"
                            number="09"
                            title="Age Restrictions"
                        >
                            <p>
                                This website and its services are intended exclusively
                                for adults aged 18 or older. We do not knowingly collect
                                personal information from minors.
                            </p>

                            <p>
                                If we learn that information from a minor was submitted,
                                we may delete the information and terminate the related
                                account. Parents or guardians who believe a minor
                                submitted information should contact us immediately.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="policy-changes"
                            number="10"
                            title="Changes to This Policy"
                        >
                            <p>
                                This Privacy Policy may be updated when the website,
                                service providers, legal requirements or data practices
                                change.
                            </p>

                            <p>
                                The effective date at the top of the page will be updated
                                when material revisions are published. Continued use of
                                the website after an update is subject to the revised
                                Policy.
                            </p>
                        </PolicySection>

                        <PolicySection id="contact" number="11" title="Contact">
                            <div className="rounded-2xl border border-[#C77D96]/20 bg-[#24151D]/50 p-6 sm:p-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                        <Mail
                                            size={18}
                                            strokeWidth={1.4}
                                            className="text-[#C77D96]"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#F0D5DE]">
                                            Privacy inquiries
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-[#BDA7B0]">
                                            For privacy questions, account deletion or a data
                                            request, contact:
                                        </p>

                                        <a
                                            href="mailto:bookings@themisscookie.com"
                                            className="mt-4 inline-block text-sm text-[#C77D96] transition duration-300 hover:text-[#F0D5DE]"
                                        >
                                            bookings@themisscookie.com
                                        </a>

                                        <p className="mt-3 text-xs text-[#BDA7B0]/70">
                                            Miss Cookie · Orlando, Florida · United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </PolicySection>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}

type PolicyHighlightProps = {
    icon: typeof ShieldCheck;
    title: string;
    description: string;
};

function PolicyHighlight({
    icon: Icon,
    title,
    description,
}: PolicyHighlightProps) {
    return (
        <section className="rounded-xl border border-[#C77D96]/15 bg-[#24151D]/35 p-5">
            <Icon
                size={18}
                strokeWidth={1.4}
                className="text-[#C77D96]"
                aria-hidden="true"
            />

            <h2 className="mt-4 text-sm font-medium text-[#F0D5DE]">
                {title}
            </h2>

            <p className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                {description}
            </p>
        </section>
    );
}

type PolicySectionProps = {
    id: string;
    number: string;
    title: string;
    children: ReactNode;
};

function PolicySection({
    id,
    number,
    title,
    children,
}: PolicySectionProps) {
    return (
        <section
            id={id}
            className="scroll-mt-32 border-b border-[#C77D96]/15 py-12 first:pt-0"
        >
            <div className="flex gap-5">
                <span className="pt-2 text-[9px] tracking-[0.25em] text-[#C77D96]">
                    {number}
                </span>

                <div className="min-w-0 flex-1">
                    <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-[-0.03em] text-[#F0D5DE] sm:text-4xl">
                        {title}
                    </h2>

                    <div className="mt-6 space-y-5 text-sm leading-7 text-[#BDA7B0] sm:text-[15px] sm:leading-8">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

type PolicyListProps = {
    items: string[];
};

function PolicyList({ items }: PolicyListProps) {
    return (
        <ul className="space-y-3">
            {items.map((item) => (
                <li key={item} className="flex gap-3">
                    <ShieldCheck
                        size={15}
                        strokeWidth={1.4}
                        className="mt-1.5 shrink-0 text-[#C77D96]"
                        aria-hidden="true"
                    />

                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

type ProviderCardProps = {
    name: string;
    purpose: string;
};

function ProviderCard({ name, purpose }: ProviderCardProps) {
    return (
        <section className="rounded-xl border border-[#C77D96]/15 bg-[#090809]/45 p-5">
            <div className="flex items-center gap-3">
                <UserRound
                    size={16}
                    strokeWidth={1.4}
                    className="text-[#C77D96]"
                    aria-hidden="true"
                />

                <h3 className="text-sm font-medium text-[#F0D5DE]">
                    {name}
                </h3>
            </div>

            <p className="mt-3 text-xs leading-6 text-[#BDA7B0]">
                {purpose}
            </p>
        </section>
    );
}