import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "../../../lib/supabase/server";

function getSafeDestination(next: string | null) {
    if (next?.startsWith("/") && !next.startsWith("//")) {
        return next;
    }

    return "/private-gallery";
}

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);

    const tokenHash = requestUrl.searchParams.get("token_hash");
    const type = requestUrl.searchParams.get("type") as EmailOtpType | null;
    const destination = getSafeDestination(
        requestUrl.searchParams.get("next")
    );

    if (!tokenHash || !type) {
        const errorUrl = new URL("/login", requestUrl.origin);
        errorUrl.searchParams.set("error", "invalid_confirmation_link");

        return NextResponse.redirect(errorUrl);
    }

    try {
        const supabase = await createSupabaseServerClient();

        const { error } = await supabase.auth.verifyOtp({
            token_hash: tokenHash,
            type,
        });

        if (error) {
            console.error("Erro ao confirmar e-mail:", error.message);

            const errorUrl = new URL("/login", requestUrl.origin);
            errorUrl.searchParams.set("error", "confirmation_failed");

            return NextResponse.redirect(errorUrl);
        }

        return NextResponse.redirect(
            new URL(destination, requestUrl.origin)
        );
    } catch (error) {
        console.error("Erro inesperado na confirmação:", error);

        const errorUrl = new URL("/login", requestUrl.origin);
        errorUrl.searchParams.set("error", "confirmation_failed");

        return NextResponse.redirect(errorUrl);
    }
}