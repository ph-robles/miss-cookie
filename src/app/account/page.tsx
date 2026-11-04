import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Clock3,
    LockKeyhole,
    Settings,
    ShieldCheck,
    UserRound,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "../../lib/supabase/server";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AccountPage() {
    const supabase = await createSupabaseServerClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect("/login?next=/account");
    }

    const [
        { data: galleryAccess, error: galleryAccessError },
        { data: administrator, error: administratorError },
    ] = await Promise.all([
        supabase
            .from("gallery_access")
            .select("active, created_at, updated_at")
            .eq("user_id", user.id)
            .maybeSingle(),

        supabase
            .from("admin_users")
            .select("user_id")
            .eq("user_id", user.id)
            .maybeSingle(),
    ]);

    if (galleryAccessError) {
        console.error(
            "Unable to verify private gallery access:",
            galleryAccessError.message
        );
    }

    if (administratorError) {
        console.error(
            "Unable to verify administrator access:",
            administratorError.message
        );
    }

    const hasGalleryAccess =
        !galleryAccessError && galleryAccess?.active === true;

    const isAdministrator =
        !administratorError && Boolean(administrator);

    const displayEmail = user.email ?? "Email unavailable";

    const memberSince = user.created_at
        ? new Intl.DateTimeFormat("en-US", {
            month: "long",
            year: "numeric",
        }).format(new Date(user.created_at))
        : null;

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#090809] px-5 py-12 text-[#F0D5DE] sm:px-8 sm:py-16">
            {/* BACKGROUND */}
            <div
                className="pointer-events-none fixed inset-0 overflow-hidden"
                aria-hidden="true"
            >
                <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#C77D96]/[0.055] blur-[130px]" />

                <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#A94F70]/[0.05] blur-[140px]" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-5xl">
                {/* TOP NAVIGATION */}
                <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <Link
                        href="/"
                        aria-label="Return to Miss Cookie website"
                        className="group inline-flex items-center gap-2"
                    >
                        <span className="text-[10px] font-semibold tracking-[0.35em] text-[#F0D5DE]">
                            MISS
                        </span>

                        <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#F0D5DE] transition-colors duration-300 group-hover:text-[#C77D96]">
                            COOKIE
                        </span>
                    </Link>

                    <div className="flex flex-wrap items-center gap-3">
                        {isAdministrator && (
                            <Link
                                href="/admin"
                                className="inline-flex items-center gap-2 rounded-lg border border-[#C77D96]/30 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F0D5DE] transition duration-300 hover:bg-[#C77D96]/10"
                            >
                                <Settings
                                    size={14}
                                    strokeWidth={1.5}
                                    aria-hidden="true"
                                />

                                Admin
                            </Link>
                        )}

                        <SignOutButton />
                    </div>
                </header>

                {/* ACCOUNT HERO */}
                <section className="relative overflow-hidden rounded-2xl border border-[#C77D96]/20 bg-gradient-to-br from-[#2B1721]/95 via-[#190F14]/95 to-[#090809] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] sm:p-9 lg:p-12">
                    <div
                        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C77D96]/10 blur-[100px]"
                        aria-hidden="true"
                    />

                    <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        {/* ACCOUNT DETAILS */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10 px-3 py-1.5">
                                <ShieldCheck
                                    size={13}
                                    strokeWidth={1.5}
                                    className="text-[#C77D96]"
                                    aria-hidden="true"
                                />

                                <span className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
                                    Secure Member Account
                                </span>
                            </div>

                            <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">
                                Welcome to your
                                <br />

                                <span className="italic text-[#C77D96]">
                                    private account.
                                </span>
                            </h1>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#BDA7B0]">
                                Manage your private gallery access and securely navigate
                                your Miss Cookie membership.
                            </p>

                            <div className="mt-8 flex items-start gap-4 rounded-xl border border-[#C77D96]/15 bg-[#090809]/40 p-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                    <UserRound
                                        size={18}
                                        strokeWidth={1.4}
                                        className="text-[#C77D96]"
                                        aria-hidden="true"
                                    />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-[#BDA7B0]">
                                        Signed in as
                                    </p>

                                    <p className="mt-2 break-all text-sm text-[#F0D5DE]">
                                        {displayEmail}
                                    </p>

                                    {memberSince && (
                                        <p className="mt-2 text-xs text-[#BDA7B0]/70">
                                            Member since {memberSince}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ACCESS STATUS */}
                        <div className="rounded-2xl border border-[#C77D96]/20 bg-[#090809]/55 p-6 backdrop-blur-sm sm:p-8">
                            <div className="flex items-center justify-between gap-5">
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
                                        Gallery Status
                                    </p>

                                    <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl">
                                        {hasGalleryAccess
                                            ? "Access Active"
                                            : "Approval Pending"}
                                    </h2>
                                </div>

                                <div
                                    className={
                                        hasGalleryAccess
                                            ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green-400/25 bg-green-500/10"
                                            : "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400/25 bg-amber-500/10"
                                    }
                                >
                                    {hasGalleryAccess ? (
                                        <CheckCircle2
                                            size={22}
                                            strokeWidth={1.4}
                                            className="text-green-300"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Clock3
                                            size={22}
                                            strokeWidth={1.4}
                                            className="text-amber-300"
                                            aria-hidden="true"
                                        />
                                    )}
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-7 text-[#BDA7B0]">
                                {hasGalleryAccess
                                    ? "Your account is authorized to view the private collection."
                                    : "Your account is active, but private gallery access must be approved separately."}
                            </p>

                            {hasGalleryAccess ? (
                                <Link
                                    href="/private-gallery"
                                    className="group mt-7 flex w-full items-center justify-between gap-4 rounded-xl border border-[#C77D96] bg-[#C77D96] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#090809] shadow-[0_14px_40px_rgba(199,125,150,0.22)] transition duration-300 hover:border-[#F0D5DE] hover:bg-[#F0D5DE]"
                                >
                                    <span className="inline-flex items-center gap-3">
                                        <LockKeyhole
                                            size={15}
                                            strokeWidth={1.5}
                                            aria-hidden="true"
                                        />

                                        Open Private Gallery
                                    </span>

                                    <ArrowUpRight
                                        size={16}
                                        strokeWidth={1.4}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        aria-hidden="true"
                                    />
                                </Link>
                            ) : (
                                <div className="mt-7 space-y-3">
                                    <Link
                                        href="/subscribe"
                                        className="group flex w-full items-center justify-between gap-4 rounded-xl border border-[#C77D96] bg-[#C77D96] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#090809] shadow-[0_14px_40px_rgba(199,125,150,0.22)] transition duration-300 hover:border-[#F0D5DE] hover:bg-[#F0D5DE]"
                                    >
                                        Explore Membership

                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.4}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                            aria-hidden="true"
                                        />
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-xl border border-[#C77D96]/30 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0D5DE] transition duration-300 hover:bg-[#C77D96]/10"
                                    >
                                        Contact Miss Cookie
                                    </Link>
                                </div>
                            )}

                            {isAdministrator && (
                                <Link
                                    href="/admin"
                                    className="mt-4 flex w-full items-center justify-between rounded-xl border border-[#C77D96]/20 px-5 py-3.5 text-[9px] uppercase tracking-[0.18em] text-[#BDA7B0] transition duration-300 hover:border-[#C77D96]/40 hover:bg-[#C77D96]/10 hover:text-[#F0D5DE]"
                                >
                                    Manage Gallery Access

                                    <Settings
                                        size={14}
                                        strokeWidth={1.4}
                                        aria-hidden="true"
                                    />
                                </Link>
                            )}
                        </div>
                    </div>
                </section>

                {/* ACCOUNT INFORMATION */}
                <section className="mt-6 grid gap-4 sm:grid-cols-3">
                    <article className="rounded-xl border border-[#C77D96]/15 bg-[#24151D]/35 p-5">
                        <ShieldCheck
                            size={18}
                            strokeWidth={1.4}
                            className="text-[#C77D96]"
                            aria-hidden="true"
                        />

                        <h2 className="mt-4 text-sm font-medium text-[#F0D5DE]">
                            Confirmed account
                        </h2>

                        <p className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                            Your email address has been authenticated and confirmed.
                        </p>
                    </article>

                    <article className="rounded-xl border border-[#C77D96]/15 bg-[#24151D]/35 p-5">
                        <LockKeyhole
                            size={18}
                            strokeWidth={1.4}
                            className="text-[#C77D96]"
                            aria-hidden="true"
                        />

                        <h2 className="mt-4 text-sm font-medium text-[#F0D5DE]">
                            Private access
                        </h2>

                        <p className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                            Gallery access is controlled individually for each
                            authenticated member.
                        </p>
                    </article>

                    <article className="rounded-xl border border-[#C77D96]/15 bg-[#24151D]/35 p-5">
                        <UserRound
                            size={18}
                            strokeWidth={1.4}
                            className="text-[#C77D96]"
                            aria-hidden="true"
                        />

                        <h2 className="mt-4 text-sm font-medium text-[#F0D5DE]">
                            Account assistance
                        </h2>

                        <p className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                            Contact Miss Cookie if you need help with your account or
                            gallery access.
                        </p>
                    </article>
                </section>

                {/* BOTTOM NAVIGATION */}
                <footer className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-[#C77D96]/15 py-7 text-center sm:flex-row sm:text-left">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#BDA7B0] transition duration-300 hover:text-[#F0D5DE]"
                    >
                        <ArrowLeft
                            size={14}
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />

                        Back to Home
                    </Link>

                    <p className="text-[9px] uppercase tracking-[0.22em] text-[#BDA7B0]/60">
                        Secure member account
                    </p>
                </footer>
            </div>
        </main>
    );
}