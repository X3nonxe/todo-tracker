import { ReactNode } from 'react';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadat: Metadata = {
  title: 'TodoTracker - Kelola Tugas Anda',
  description: 'Aplikasi manajemen tugas yang beautiful dan produktif',
  icons: {
    icon: [
      { url: '/favicon.ico' },
    ]
  }
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" className={montserrat.variable}>
      <body className="text-black font-sans">{children}</body>
    </html>
  );
}
