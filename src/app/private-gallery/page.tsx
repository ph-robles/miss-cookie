
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type GalleryImage = {
    name: string;
    url: string;
};

export default function PrivateGalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [message, setMessage] = useState("Loading your private gallery...");
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);

    useEffect(() => {
        let cancelled = false;

        async function loadGallery() {
            try {
                const response = await fetch("/api/private-gallery", {
                    method: "GET",
                    cache: "no-store",
                });

                const result = await response.json();

                if (cancelled) return;

                if (response.status === 401) {
                    window.location.href = "/login?next=/private-gallery";
                    return;
                }

                if (response.status === 403) {
                    setHasAccess(false);
                    setMessage(
                        result.error ??
                        "Your gallery access has not been activated yet."
                    );
                    return;
                }

                if (!response.ok) {
                    setMessage(result.error ?? "Unable to load the gallery.");
                    return;
                }

                setImages(result.images ?? []);
                setHasAccess(true);
                setMessage(
                    result.images?.length
                        ? ""
                        : "Your private gallery is being prepared."
                );
            } catch {
                if (!cancelled) {
                    setMessage("Connection error. Please try again.");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadGallery();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <main className="min-h-screen bg-[#090809] px-5 py-16 text-[#F0D5DE] sm:px-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-12 text-center">
                    <Link
                        href="/"
                        className="text-xs uppercase tracking-[0.35em] text-[#C77D96] transition hover:text-[#F0D5DE]"
                    >
                        Miss Cookie
                    </Link>

                    <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-[#C77D96]">
                        Members only
                    </p>

                    <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
                        Private Gallery
                    </h1>

                    <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#BDA7B0]">
                        A private collection, reserved for authorized members.
                    </p>

                    <div className="mx-auto mt-6 h-px w-16 bg-[#C77D96]/60" />
                </header>

                {loading ? (
                    <p className="py-16 text-center text-sm text-[#BDA7B0]">
                        {message}
                    </p>
                ) : !hasAccess ? (
                    <section className="mx-auto max-w-lg rounded-2xl border border-[#C77D96]/25 bg-[#24151D]/60 p-8 text-center sm:p-10">
                        <p className="text-xs uppercase tracking-[0.25em] text-[#C77D96]">
                            Private access
                        </p>

                        <h2 className="mt-4 font-serif text-2xl">
                            This space is reserved
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[#BDA7B0]">
                            {message}
                        </p>

                        <Link
                            href="/"
                            className="mt-7 inline-block rounded-lg border border-[#C77D96]/40 px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-[#C77D96]/10"
                        >
                            Return to website
                        </Link>
                    </section>
                ) : images.length === 0 ? (
                    <p className="py-16 text-center text-sm text-[#BDA7B0]">
                        {message}
                    </p>
                ) : (
                    <section
                        aria-label="Private photo collection"
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {images.map((image) => (
                            <figure
                                key={image.name}
                                className="group overflow-hidden rounded-xl border border-[#C77D96]/20 bg-[#24151D]/50"
                            >
                                <img
                                    src={image.url}
                                    alt="Private gallery photograph"
                                    loading="lazy"
                                    className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                                />
                            </figure>
                        ))}
                    </section>
                )}

                <footer className="mt-16 border-t border-[#C77D96]/15 pt-6 text-center">
                    <Link
                        href="/account"
                        className="text-xs uppercase tracking-[0.2em] text-[#BDA7B0] transition hover:text-[#F0D5DE]"
                    >
                        My Account
                    </Link>
                </footer>
            </div>
        </main>
    );
}
