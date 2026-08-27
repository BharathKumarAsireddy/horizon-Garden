import type { MetadataRoute } from "next";

const BASE_URL = "https://horizonsgardens.com";

const PRODUCT_SLUGS = [
  "landscape-plants",
  "flowers",
  "annuals",
  "topiaries",
  "mulch",
  "soils-and-sands",
  "aggregate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...PRODUCT_SLUGS.map((slug) => ({
      url: `${BASE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
