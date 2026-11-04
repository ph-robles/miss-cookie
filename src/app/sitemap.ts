import type { MetadataRoute } from "next";

const baseUrl = "https://themisscookie.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/experience`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/subscribe`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/travel`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/rates`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/etiquette`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/cookies`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.3,
        },


    ];
}