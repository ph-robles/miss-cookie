"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "../lib/supabase/browser";

type SignOutButtonProps = {
    className?: string;
};

export default function SignOutButton({
    className = "",
}: SignOutButtonProps) {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSignOut() {
        if (loading) {
            return;
        }

        setLoading(true);
        setError("");

        try {
            const supabase = createSupabaseBrowserClient();

            const { error: signOutError } = await supabase.auth.signOut();

            if (signOutError) {
                throw signOutError;
            }

            router.replace("/login");
            router.refresh();
        } catch (signOutError) {
            setError(
                signOutError instanceof Error
                    ? signOutError.message
                    : "Não foi possível encerrar a sessão."
            );

            setLoading(false);
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleSignOut}
                disabled={loading}
                className={
                    className ||
                    "rounded-lg border border-[#C77D96]/40 px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#F0D5DE] transition hover:bg-[#C77D96]/10 disabled:cursor-not-allowed disabled:opacity-50"
                }
            >
                {loading ? "Signing out..." : "Sign Out"}
            </button>

            {error && (
                <p
                    role="alert"
                    className="mt-3 max-w-xs text-sm leading-6 text-red-300"
                >
                    {error}
                </p>
            )}
        </div>
    );
}