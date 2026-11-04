import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "My Account",
    description: "Private member account area for Miss Cookie.",

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

type AccountLayoutProps = {
    children: ReactNode;
};

export default function AccountLayout({
    children,
}: AccountLayoutProps) {
    return <>{children}</>;
}