import type { Metadata } from "next";
import "./globals.css";
import local from 'next/font/local';
import Header from "../components/Header";
import { Inter } from 'next/font/google';

// Подключаем шрифт CabinetGrotesk
const cabinetGrotesk = local({
  src: [
    {
      path: '../../public/fonts/CabinetGrotesk-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/CabinetGrotesk-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-cabinet-grotesk',
});

// Подключаем шрифт Inter
export const inter = Inter({ subsets: ['latin'] });

// Экспортируем метаданные
export const metadata: Metadata = {
  title: "DoWidth",
  description: "Manage your money efficiently with DoWidth",
};

// Основная функция Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cabinetGrotesk.className} antialiased`}>
        <Header />
        <main className="relative flex flex-col">
          <div className="flex-grow flex-1">
            {children}
          </div>   
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
