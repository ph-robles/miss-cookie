import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Member Sign In",
    description: "Secure member sign-in for Miss Cookie.",

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

type LoginLayoutProps = {
    children: ReactNode;
};

export default function LoginLayout({
    children,
}: LoginLayoutProps) {
    return <>{children}</>;
}