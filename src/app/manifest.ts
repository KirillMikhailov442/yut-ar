import { SITE_DESCRIPTION, SITE_NAME } from '@/configs/seo';
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#efbc18',
    icons: [
      {
        src: '/icons/192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
