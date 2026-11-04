"use client";

import {
    ChevronLeft,
    ChevronRight,
    Grid2X2,
    Heart,
    Images,
    LockKeyhole,
    Maximize2,
    ShieldCheck,
    Sparkles,
    UserRound,
    X,
} from "lucide-react";
import Link from "next/link";
import {
    KeyboardEvent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from "react";

import SignOutButton from "../../components/SignOutButton";

type GalleryImage = {
    name: string;
    url: string;
};

type GalleryResponse = {
    images?: GalleryImage[];
    error?: string;
};

const FAVORITES_STORAGE_KEY = "miss-cookie-private-gallery-favorites";

function GallerySkeleton() {
    return (
        <section
            aria-label="Loading private gallery"
            className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="aspect-[3/4] animate-pulse rounded-xl border border-[#C77D96]/10 bg-[#24151D]/60"
                />
            ))}
        </section>
    );
}

export default function PrivateGalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [message, setMessage] = useState(
        "Loading your private collection..."
    );
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

    const selectedImage =
        selectedIndex !== null ? images[selectedIndex] : null;

    const visibleImages = useMemo(() => {
        if (!showFavoritesOnly) {
            return images;
        }

        return images.filter((image) => favorites.includes(image.name));
    }, [favorites, images, showFavoritesOnly]);

    const loadGallery = useCallback(async () => {
        setLoading(true);
        setMessage("Loading your private collection...");

        try {
            const response = await fetch("/api/private-gallery", {
                method: "GET",
                cache: "no-store",
                credentials: "include",
            });

            const contentType = response.headers.get("content-type");

            if (!contentType?.includes("application/json")) {
                throw new Error(
                    "The private gallery returned an invalid response."
                );
            }

            const result = (await response.json()) as GalleryResponse;

            if (response.status === 401) {
                window.location.href = "/login?next=/private-gallery";
                return;
            }

            if (response.status === 403) {
                setImages([]);
                setHasAccess(false);
                setMessage(
                    result.error ??
                    "Your private gallery access has not been activated yet."
                );
                return;
            }

            if (!response.ok) {
                setImages([]);
                setHasAccess(false);
                setMessage(
                    result.error ?? "Unable to load the private gallery."
                );
                return;
            }

            const receivedImages = result.images ?? [];

            setImages(receivedImages);
            setHasAccess(true);
            setMessage(
                receivedImages.length
                    ? ""
                    : "Your private collection is being prepared."
            );
        } catch (error) {
            console.error("Unable to load private gallery:", error);

            setImages([]);
            setHasAccess(false);
            setMessage(
                error instanceof Error
                    ? error.message
                    : "Connection error. Please try again."
            );
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void loadGallery();
    }, [loadGallery]);

    useEffect(() => {
        try {
            const storedFavorites = window.localStorage.getItem(
                FAVORITES_STORAGE_KEY
            );

            if (!storedFavorites) {
                return;
            }

            const parsedFavorites = JSON.parse(storedFavorites);

            if (Array.isArray(parsedFavorites)) {
                setFavorites(
                    parsedFavorites.filter(
                        (favorite): favorite is string =>
                            typeof favorite === "string"
                    )
                );
            }
        } catch (error) {
            console.error("Unable to load gallery favorites:", error);
        }
    }, []);

    useEffect(() => {
        try {
            window.localStorage.setItem(
                FAVORITES_STORAGE_KEY,
                JSON.stringify(favorites)
            );
        } catch (error) {
            console.error("Unable to save gallery favorites:", error);
        }
    }, [favorites]);

    useEffect(() => {
        if (selectedIndex === null) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        function handleKeyboardNavigation(event: globalThis.KeyboardEvent) {
            if (event.key === "Escape") {
                setSelectedIndex(null);
            }

            if (event.key === "ArrowLeft") {
                showPreviousImage();
            }

            if (event.key === "ArrowRight") {
                showNextImage();
            }
        }

        window.addEventListener("keydown", handleKeyboardNavigation);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyboardNavigation);
        };
    }, [selectedIndex, images.length]);

    function toggleFavorite(imageName: string) {
        setFavorites((currentFavorites) => {
            if (currentFavorites.includes(imageName)) {
                return currentFavorites.filter(
                    (favorite) => favorite !== imageName
                );
            }

            return [...currentFavorites, imageName];
        });
    }

    function openImage(image: GalleryImage) {
        const originalIndex = images.findIndex(
            (galleryImage) => galleryImage.name === image.name
        );

        if (originalIndex >= 0) {
            setSelectedIndex(originalIndex);
        }
    }

    function showPreviousImage() {
        if (selectedIndex === null || images.length === 0) {
            return;
        }

        setSelectedIndex(
            selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
        );
    }

    function showNextImage() {
        if (selectedIndex === null || images.length === 0) {
            return;
        }

        setSelectedIndex(
            selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
        );
    }

    function handleCardKeyboard(
        event: KeyboardEvent<HTMLElement>,
        image: GalleryImage
    ) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openImage(image);
        }
    }

    return (
        <main className="min-h-screen overflow-hidden bg-[#090809] text-[#F0D5DE]">
            {/* BACKGROUND */}
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#C77D96]/[0.06] blur-[120px]" />
                <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#C77D96]/[0.05] blur-[140px]" />
            </div>

            {/* MEMBER HEADER */}
            <header className="relative z-20 border-b border-[#C77D96]/10 bg-[#090809]/90 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12">
                <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2"
                    >
                        <span className="text-[10px] font-semibold tracking-[0.32em] text-[#F0D5DE]">
                            MISS
                        </span>

                        <span className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-[#F0D5DE] transition group-hover:text-[#C77D96]">
                            COOKIE
                        </span>
                    </Link>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <Link
                            href="/account"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#C77D96]/25 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F0D5DE] transition hover:bg-[#C77D96]/10 sm:px-4"
                        >
                            <UserRound size={14} strokeWidth={1.5} />

                            <span className="hidden sm:inline">My Account</span>
                        </Link>

                        <SignOutButton className="rounded-lg border border-[#F0D5DE]/15 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#BDA7B0] transition hover:border-red-300/30 hover:bg-red-500/10 hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-50 sm:px-4" />
                    </div>
                </div>
            </header>

            <div className="relative z-10 mx-auto max-w-[1500px] px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
                {/* HERO */}
                <section className="relative overflow-hidden rounded-2xl border border-[#C77D96]/15 bg-gradient-to-br from-[#24151D]/90 via-[#160E12]/90 to-[#090809] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
                    <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#C77D96]/10 blur-[100px]" />

                    <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C77D96]/20 bg-[#C77D96]/[0.07] px-3 py-1.5">
                                <LockKeyhole
                                    size={12}
                                    strokeWidth={1.5}
                                    className="text-[#C77D96]"
                                />

                                <span className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
                                    Members Only
                                </span>
                            </div>

                            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[#F0D5DE] sm:text-5xl lg:text-6xl">
                                Private Gallery
                            </h1>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#BDA7B0] sm:text-base">
                                A curated private collection reserved for approved
                                members. Every image is shared with discretion and
                                available through secure, temporary access.
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[#BDA7B0]">
                                <span className="inline-flex items-center gap-2">
                                    <ShieldCheck
                                        size={15}
                                        strokeWidth={1.5}
                                        className="text-[#C77D96]"
                                    />
                                    Secure access
                                </span>

                                <span className="h-1 w-1 rounded-full bg-[#C77D96]/60" />

                                <span className="inline-flex items-center gap-2">
                                    <Images
                                        size={15}
                                        strokeWidth={1.5}
                                        className="text-[#C77D96]"
                                    />
                                    {images.length}{" "}
                                    {images.length === 1 ? "photograph" : "photographs"}
                                </span>
                            </div>
                        </div>

                        {hasAccess && images.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowFavoritesOnly(false)}
                                    aria-pressed={!showFavoritesOnly}
                                    className={
                                        !showFavoritesOnly
                                            ? "inline-flex items-center gap-2 rounded-lg bg-[#C77D96] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#090809] transition hover:bg-[#F0D5DE]"
                                            : "inline-flex items-center gap-2 rounded-lg border border-[#C77D96]/25 px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-[#BDA7B0] transition hover:bg-[#C77D96]/10 hover:text-[#F0D5DE]"
                                    }
                                >
                                    <Grid2X2 size={14} strokeWidth={1.5} />
                                    All
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowFavoritesOnly(true)}
                                    aria-pressed={showFavoritesOnly}
                                    className={
                                        showFavoritesOnly
                                            ? "inline-flex items-center gap-2 rounded-lg bg-[#C77D96] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#090809] transition hover:bg-[#F0D5DE]"
                                            : "inline-flex items-center gap-2 rounded-lg border border-[#C77D96]/25 px-4 py-3 text-[10px] uppercase tracking-[0.16em] text-[#BDA7B0] transition hover:bg-[#C77D96]/10 hover:text-[#F0D5DE]"
                                    }
                                >
                                    <Heart
                                        size={14}
                                        strokeWidth={1.5}
                                        fill={showFavoritesOnly ? "currentColor" : "none"}
                                    />
                                    Favorites
                                    {favorites.length > 0 && (
                                        <span className="rounded-full bg-[#090809]/20 px-2 py-0.5">
                                            {favorites.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* PRIVATE CONTENT NOTICE */}
                {hasAccess && (
                    <section className="my-6 flex items-start gap-3 rounded-xl border border-[#C77D96]/10 bg-[#24151D]/40 px-4 py-4 sm:items-center sm:px-5">
                        <ShieldCheck
                            size={18}
                            strokeWidth={1.4}
                            className="mt-0.5 shrink-0 text-[#C77D96] sm:mt-0"
                        />

                        <p className="text-xs leading-6 text-[#BDA7B0]">
                            This private collection is intended only for the authorized
                            account holder. Copying, recording, redistribution or
                            unauthorized use is prohibited.
                        </p>
                    </section>
                )}

                {/* CONTENT */}
                <section className="mt-8">
                    {loading ? (
                        <GallerySkeleton />
                    ) : !hasAccess ? (
                        <div className="mx-auto max-w-xl rounded-2xl border border-[#C77D96]/20 bg-[#24151D]/60 px-6 py-12 text-center sm:px-10">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C77D96]/25 bg-[#C77D96]/10">
                                <LockKeyhole
                                    size={24}
                                    strokeWidth={1.3}
                                    className="text-[#C77D96]"
                                />
                            </div>

                            <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-[#C77D96]">
                                Private access
                            </p>

                            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl">
                                Access pending
                            </h2>

                            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#BDA7B0]">
                                {message}
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                                <Link
                                    href="/account"
                                    className="rounded-lg bg-[#C77D96] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#090809] transition hover:bg-[#F0D5DE]"
                                >
                                    My Account
                                </Link>

                                <Link
                                    href="/contact"
                                    className="rounded-lg border border-[#C77D96]/30 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:bg-[#C77D96]/10"
                                >
                                    Contact Miss Cookie
                                </Link>
                            </div>
                        </div>
                    ) : images.length === 0 ? (
                        <div className="rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/40 px-6 py-16 text-center">
                            <Sparkles
                                size={30}
                                strokeWidth={1.2}
                                className="mx-auto text-[#C77D96]"
                            />

                            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                                Coming soon
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-[#BDA7B0]">
                                {message}
                            </p>
                        </div>
                    ) : showFavoritesOnly && visibleImages.length === 0 ? (
                        <div className="rounded-2xl border border-[#C77D96]/15 bg-[#24151D]/40 px-6 py-16 text-center">
                            <Heart
                                size={30}
                                strokeWidth={1.2}
                                className="mx-auto text-[#C77D96]"
                            />

                            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl">
                                No favorites yet
                            </h2>

                            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#BDA7B0]">
                                Select the heart on any photograph to save it to your
                                private favorites.
                            </p>

                            <button
                                type="button"
                                onClick={() => setShowFavoritesOnly(false)}
                                className="mt-7 rounded-lg border border-[#C77D96]/30 px-6 py-3 text-[10px] uppercase tracking-[0.18em] transition hover:bg-[#C77D96]/10"
                            >
                                View all photographs
                            </button>
                        </div>
                    ) : (
                        <section
                            aria-label="Private photo collection"
                            className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            {visibleImages.map((image, index) => {
                                const isFavorite = favorites.includes(image.name);

                                return (
                                    <article
                                        key={image.name}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`Open private photograph ${index + 1}`}
                                        onClick={() => openImage(image)}
                                        onKeyDown={(event) =>
                                            handleCardKeyboard(event, image)
                                        }
                                        onContextMenu={(event) => event.preventDefault()}
                                        className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#C77D96]/15 bg-[#24151D]/50 outline-none transition duration-500 hover:-translate-y-1 hover:border-[#C77D96]/40 hover:shadow-[0_24px_70px_rgba(199,125,150,0.12)] focus-visible:ring-2 focus-visible:ring-[#C77D96]"
                                    >
                                        <img
                                            src={image.url}
                                            alt={`Private gallery photograph ${index + 1}`}
                                            loading="lazy"
                                            draggable={false}
                                            className="aspect-[3/4] w-full select-none object-cover transition duration-700 group-hover:scale-[1.035]"
                                        />

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090809]/80 via-transparent to-[#090809]/10 opacity-70 transition duration-500 group-hover:opacity-100" />

                                        {/* WATERMARK */}
                                        <div className="pointer-events-none absolute bottom-3 left-3 select-none text-[8px] uppercase tracking-[0.22em] text-white/45 sm:bottom-4 sm:left-4">
                                            Miss Cookie • Private
                                        </div>

                                        {/* FAVORITE */}
                                        <button
                                            type="button"
                                            aria-label={
                                                isFavorite
                                                    ? "Remove from favorites"
                                                    : "Add to favorites"
                                            }
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                toggleFavorite(image.name);
                                            }}
                                            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#090809]/55 text-white backdrop-blur-md transition hover:scale-105 hover:bg-[#C77D96] hover:text-[#090809] sm:right-4 sm:top-4"
                                        >
                                            <Heart
                                                size={16}
                                                strokeWidth={1.5}
                                                fill={isFavorite ? "currentColor" : "none"}
                                                className={
                                                    isFavorite
                                                        ? "text-[#F0D5DE]"
                                                        : "text-white"
                                                }
                                            />
                                        </button>

                                        {/* OPEN ICON */}
                                        <div className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/15 bg-[#090809]/55 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:bottom-4 sm:right-4">
                                            <Maximize2 size={15} strokeWidth={1.5} />
                                        </div>
                                    </article>
                                );
                            })}
                        </section>
                    )}
                </section>

                {/* FOOTER */}
                <footer className="mt-16 border-t border-[#C77D96]/15 py-8">
                    <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.28em] text-[#C77D96]">
                                Private members area
                            </p>

                            <p className="mt-2 text-xs leading-6 text-[#BDA7B0]">
                                Secure access reserved for authorized members.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/account"
                                className="rounded-lg border border-[#C77D96]/30 px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition hover:bg-[#C77D96]/10"
                            >
                                My Account
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-lg border border-[#C77D96]/30 px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition hover:bg-[#C77D96]/10"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>

            {/* LIGHTBOX */}
            {selectedImage && selectedIndex !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Private photograph preview"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[#090809]/95 p-3 backdrop-blur-xl sm:p-6"
                    onClick={() => setSelectedIndex(null)}
                    onContextMenu={(event) => event.preventDefault()}
                >
                    <button
                        type="button"
                        aria-label="Close photograph"
                        onClick={() => setSelectedIndex(null)}
                        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-[#C77D96] hover:text-[#090809] sm:right-7 sm:top-7"
                    >
                        <X size={20} strokeWidth={1.4} />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous photograph"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    showPreviousImage();
                                }}
                                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition hover:bg-[#C77D96] hover:text-[#090809] sm:left-7"
                            >
                                <ChevronLeft size={23} strokeWidth={1.4} />
                            </button>

                            <button
                                type="button"
                                aria-label="Next photograph"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    showNextImage();
                                }}
                                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md transition hover:bg-[#C77D96] hover:text-[#090809] sm:right-7"
                            >
                                <ChevronRight size={23} strokeWidth={1.4} />
                            </button>
                        </>
                    )}

                    <figure
                        className="relative flex h-full max-h-[92vh] w-full max-w-6xl items-center justify-center overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            src={selectedImage.url}
                            alt={`Private gallery photograph ${selectedIndex + 1}`}
                            draggable={false}
                            className="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl"
                        />

                        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 select-none whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[8px] uppercase tracking-[0.24em] text-white/60 backdrop-blur-md">
                            Miss Cookie • Private Collection
                        </div>
                    </figure>

                    <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3 sm:bottom-7 sm:right-7">
                        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-[9px] tracking-[0.18em] text-white/70 backdrop-blur-md">
                            {selectedIndex + 1} / {images.length}
                        </span>

                        <button
                            type="button"
                            aria-label={
                                favorites.includes(selectedImage.name)
                                    ? "Remove from favorites"
                                    : "Add to favorites"
                            }
                            onClick={(event) => {
                                event.stopPropagation();
                                toggleFavorite(selectedImage.name);
                            }}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-md transition hover:bg-[#C77D96] hover:text-[#090809]"
                        >
                            <Heart
                                size={18}
                                strokeWidth={1.5}
                                fill={
                                    favorites.includes(selectedImage.name)
                                        ? "currentColor"
                                        : "none"
                                }
                            />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}