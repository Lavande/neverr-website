import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://neverr.app';
  const lastModified = new Date();

  // Define all pages with their locales
  const routes = [
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en/privacy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/zh/privacy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return routes;
}
