import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import CookieNotice from "../components/CookieNotice";
import StructuredData from "../components/StructuredData";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://themisscookie.com"),

  title: {
    default: "Miss Cookie | Private Experiences in Orlando",
    template: "%s | Miss Cookie",
  },

  description:
    "Private experiences in Orlando and beyond, thoughtfully arranged with elegance, discretion and genuine connection.",

  applicationName: "Miss Cookie",

  keywords: [
    "Miss Cookie",
    "private experiences Orlando",
    "private companion Orlando",
    "luxury companion Orlando",
    "Orlando Florida",
    "private gallery",
    "available for travel",
  ],

  authors: [
    {
      name: "Miss Cookie",
      url: "https://themisscookie.com",
    },
  ],

  creator: "Miss Cookie",
  publisher: "Miss Cookie",

  category: "Lifestyle",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://themisscookie.com",
    siteName: "Miss Cookie",
    title: "Miss Cookie | Private Experiences in Orlando",
    description:
      "Private experiences in Orlando and beyond, thoughtfully arranged with elegance, discretion and genuine connection.",
    images: [
      {
        url: "/images/og-miss-cookie.jpg",
        width: 1200,
        height: 630,
        alt: "Miss Cookie private experiences in Orlando",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Miss Cookie | Private Experiences in Orlando",
    description:
      "Private experiences in Orlando and beyond, thoughtfully arranged with elegance, discretion and genuine connection.",
    images: ["/images/og-miss-cookie.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false,
    noimageindex: false,

    googleBot: {
      index: true,
      follow: true,
      noarchive: false,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090809",
  colorScheme: "dark",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${manrope.variable} min-h-screen bg-[#090809] font-[family-name:var(--font-body)] text-[#F0D5DE] antialiased`}
      >
        <StructuredData />

        {children}

        <CookieNotice />
      </body>
    </html>
  );
}