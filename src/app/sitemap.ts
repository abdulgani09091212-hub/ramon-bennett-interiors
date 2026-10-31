import { MetadataRoute } from "next";
import { PROJECTS_DATA, JOURNAL_ESSAYS } from "@/data/studioData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ramonbennettinteriors.com";
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/studio",
    "/founder",
    "/services",
    "/journal",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.85,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const journalRoutes: MetadataRoute.Sitemap = JOURNAL_ESSAYS.map((e) => ({
    url: `${baseUrl}/journal/${e.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
