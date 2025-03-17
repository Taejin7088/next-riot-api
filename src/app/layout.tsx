import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.css';
import AppHeader from '@/components/layout/AppHeader';
import { BG_COLORS } from '@/constants/uiConstants';
import Providers from './providers';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '리그오브레전드 정보 사이트',
  description: '리그오브레전드의 아이템정보와 챔피언 정보를 표시합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full w-full'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full ${BG_COLORS.DARK}`}
      >
        <AppHeader />
        <main className={`${BG_COLORS.DARK} top-[60px] w-full h-full`}>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
