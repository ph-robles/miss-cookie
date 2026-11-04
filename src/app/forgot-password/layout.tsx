import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Password Recovery",
    description: "Secure password recovery for Miss Cookie members.",

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

type ForgotPasswordLayoutProps = {
    children: ReactNode;
};

export default function ForgotPasswordLayout({
    children,
}: ForgotPasswordLayoutProps) {
    return <>{children}</>;
}