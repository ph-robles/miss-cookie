import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Reset Password",
    description: "Secure password update for Miss Cookie members.",

    robots: {
        index: false,
        follow: false,
        noarchive: true,
        nocache: true,
        noimageindex: true,

        googleBot: {
            index: false,
            follow: false,
            noarchive: true,
            noimageindex: true,
        },
    },
};

type ResetPasswordLayoutProps = {
    children: ReactNode;
};

export default function ResetPasswordLayout({
    children,
}: ResetPasswordLayoutProps) {
    return <>{children}</>;
}