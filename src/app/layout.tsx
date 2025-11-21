import type { Metadata } from 'next';
import '@styles/global.scss';
import '@styles/fonts.scss';

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
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
