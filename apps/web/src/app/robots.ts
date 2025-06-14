import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/config';

const baseUrl = getBaseUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
