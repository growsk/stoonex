import type { MetadataRoute } from "next";
import { site, services, serviceAreas } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url;

  const staticPages = ["", "/services", "/portfolio", "/about", "/contact", "/service-areas"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1.0 : 0.8,
    })
  );

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaPages = serviceAreas.map((a) => ({
    url: `${base}/service-areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
