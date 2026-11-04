import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://themisscookie.com";

    return {
        rules: {
            userAgent: "*",
            allow: [
                "/",
                "/about",
                "/experience",
                "/gallery",
                "/travel",
                "/rates",
                "/contact",
                "/etiquette",
                "/privacy",
                "/cookies",
                "/subscribe",
            ],
            disallow: [
                "/admin",
                "/account",
                "/private-gallery",
                "/login",
                "/forgot-password",
                "/reset-password",
                "/auth",
                "/api",
                
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}