import type { Metadata } from 'next';
import '@styles/global.scss';
import '@styles/fonts.scss';
import { ConfigProvider } from 'antd';
import { Provider } from '@/components/ui/provider';

export const metadata: Metadata = {
  title: {
    template: 'УЮТ AR | %s',
    default: 'УЮТ AR',
  },
  description: 'Ваш помощник в дизайне интерьера',
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
