import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/work",
    "/process",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  const projectRoutes = projects.map((p) => `/work/${p.slug}`);
  const articleRoutes = articles.map((a) => `/insights/${a.slug}`);

  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...articleRoutes,
  ];

  return allRoutes.map((path) => ({
    url: site.url + path,
    lastModified: new Date(),
  }));
}
