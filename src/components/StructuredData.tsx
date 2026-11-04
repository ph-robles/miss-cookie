export default function StructuredData() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://themisscookie.com/#organization",
        name: "Miss Cookie",
        url: "https://themisscookie.com",
        email: "bookings@themisscookie.com",
        description:
            "Private experiences in Orlando and beyond, thoughtfully arranged with elegance, discretion and genuine connection.",
        areaServed: [
            {
                "@type": "City",
                name: "Orlando",
                containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                },
            },
            {
                "@type": "State",
                name: "Florida",
            },
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: "bookings@themisscookie.com",
            contactType: "customer inquiries",
            availableLanguage: ["English"],
            areaServed: "US",
        },
    };

    const websiteData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://themisscookie.com/#website",
        name: "Miss Cookie",
        url: "https://themisscookie.com",
        description:
            "Private experiences in Orlando and beyond, thoughtfully arranged with elegance, discretion and genuine connection.",
        publisher: {
            "@id": "https://themisscookie.com/#organization",
        },
        inLanguage: "en-US",
    };

    const structuredData = [organizationData, websiteData];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData).replace(
                    /</g,
                    "\\u003c"
                ),
            }}
        />
    );
}