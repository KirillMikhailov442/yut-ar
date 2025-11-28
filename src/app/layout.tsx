import type { Metadata } from 'next';
import '@styles/global.scss';
import '@styles/fonts.scss';
import { ConfigProvider } from 'antd';
import {
  PUBLISHED,
  SITE_DESCRIPTION,
  SITE_KEY_WORDS,
  SITE_NAME,
} from '@/configs/seo';

export const metadata: Metadata = {
  title: {
    template: `${SITE_NAME} | %s`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEY_WORDS,
  publisher: PUBLISHED,
  themeColor: '#efbc18',

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: SITE_NAME,
    title: SITE_DESCRIPTION,
    images: [
      {
        url: '/icons/192x192.png',
        width: 192,
        height: 192,
        alt: SITE_NAME,
      },
      {
        url: '/icons/512x512.png',
        width: 512,
        height: 512,
        alt: SITE_NAME,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Bureau, sans-serif',
        },
      }}>
      <html lang="ru">
        <body>{children}</body>
      </html>
    </ConfigProvider>
  );
}
