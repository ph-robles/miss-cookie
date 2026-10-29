
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "../../lib/supabase/server";
import SignOutButton from "./SignOutButton";

export default async function AccountPage() {
    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
        redirect("/login?next=/account");
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#090809] px-5 py-16 text-[#F0D5DE]">
            <section className="w-full max-w-xl rounded-2xl border border-[#C77D96]/25 bg-[#24151D]/70 p-8 text-center shadow-2xl sm:p-10">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C77D96]">
                    Miss Cookie
                </p>

                <h1 className="mb-4 font-serif text-3xl">
                    Your Account
                </h1>

                <p className="mb-3 text-sm leading-6 text-[#BDA7B0]">
                    Your email has been confirmed and you are signed in.
                </p>

                <p className="mb-8 break-all text-sm">
                    {data.user.email}
                </p>

                <Link
                    href="/subscribe"
                    className="block w-full rounded-lg bg-[#C77D96] px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#090809] transition hover:bg-[#F0D5DE]"
                >
                    Explore Membership
                </Link>

                <div className="mt-5">
                    <SignOutButton />
                </div>

                <Link
                    href="/"
                    className="mt-6 inline-block text-sm text-[#BDA7B0] transition hover:text-[#F0D5DE]"
                >
                    Back to Home
                </Link>
            </section>
        </main>
    );
}
