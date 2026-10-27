import { MetadataRoute } from 'next';
import { FRAGRANCES } from '@/data/fragrances';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thenoireparfums.com';

  const fragranceUrls: MetadataRoute.Sitemap = FRAGRANCES.map((fragrance) => ({
    url: `${baseUrl}/fragrances/${fragrance.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/philosophy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shipping-returns`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...fragranceUrls,
  ];
}
