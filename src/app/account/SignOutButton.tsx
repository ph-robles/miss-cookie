
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "../../lib/supabase/browser";

export default function SignOutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSignOut() {
        setLoading(true);
        setError("");

        const supabase = createSupabaseBrowserClient();
        const { error: signOutError } = await supabase.auth.signOut();

        if (signOutError) {
            setError("Unable to sign out. Please try again.");
            setLoading(false);
            return;
        }

        router.replace("/login");
        router.refresh();
    }

    return (
        <div>
            <button
                type="button"
                onClick={handleSignOut}
                disabled={loading}
                className="rounded-lg border border-[#C77D96]/30 px-5 py-3 text-xs uppercase tracking-[0.2em] text-[#F0D5DE] transition hover:border-[#C77D96] disabled:opacity-60"
            >
                {loading ? "Signing out..." : "Sign Out"}
            </button>

            {error && (
                <p role="alert" className="mt-3 text-sm text-red-300">
                    {error}
                </p>
            )}
        </div>
    );
}
