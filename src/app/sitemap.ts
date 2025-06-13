import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viannusamandiri.com";

  const portfolioItems = [
    { id: 1, title: "Renovasi Kantor Modern", lastModified: "2024-06-13" },
    {
      id: 2,
      title: "Perawatan AC Gedung Perkantoran",
      lastModified: "2024-06-13",
    },
    { id: 3, title: "Pengadaan Furniture Kantor", lastModified: "2024-06-13" },
    { id: 4, title: "Konsultasi Desain Interior", lastModified: "2024-06-13" },
  ];

  const servicesItems = [
    { id: 1, title: "Jasa Konstruksi", lastModified: "2024-06-13" },
    { id: 2, title: "Perawatan Gedung", lastModified: "2024-06-13" },
    { id: 3, title: "Pengadaan Barang", lastModified: "2024-06-13" },
  ];

  const routes = [
    { route: "/", priority: 1.0 },
    { route: "/portfolio", priority: 0.8 },
    { route: "/services", priority: 0.8 },
    { route: "/about", priority: 0.7 },
    { route: "/contact", priority: 0.6 },
  ];

  const sitemapRoutes: MetadataRoute.Sitemap = [
    ...routes.map((route) => ({
      url: `${baseUrl}${route.route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route.priority,
    })),
    ...portfolioItems.map((item) => ({
      url: `${baseUrl}/portfolio/${item.id}`,
      lastModified: new Date(item.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...servicesItems.map((item) => ({
      url: `${baseUrl}/services/${item.id}`,
      lastModified: new Date(item.lastModified),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return sitemapRoutes;
}
