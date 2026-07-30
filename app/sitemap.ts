import type { MetadataRoute } from "next";

const BASE_URL = "https://przytulanka.com.pl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/#o-nas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/#oferta`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/#kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/polityka-prywatnosci`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
