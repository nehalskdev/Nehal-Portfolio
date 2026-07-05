import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nehal-web-portfolio.vercel.app/",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
