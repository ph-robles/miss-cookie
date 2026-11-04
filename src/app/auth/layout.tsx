import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Account Verification",
    description: "Secure authentication process for Miss Cookie members.",

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

type AuthLayoutProps = {
    children: ReactNode;
};

export default function AuthLayout({
    children,
}: AuthLayoutProps) {
    return <>{children}</>;
}