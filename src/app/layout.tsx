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
        url: '/favicon-128x128.png',
        width: 128,
        height: 128,
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
