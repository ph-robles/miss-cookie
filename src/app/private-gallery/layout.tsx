import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Private Gallery",
    description: "Restricted private gallery for authorized members.",

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

type PrivateGalleryLayoutProps = {
    children: ReactNode;
};

export default function PrivateGalleryLayout({
    children,
}: PrivateGalleryLayoutProps) {
    return <>{children}</>;
}