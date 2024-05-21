import type { Metadata } from "next";
import "./globals.css";
import local from 'next/font/local';
import Header from "../components/Header";

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

export const metadata: Metadata = {
  title: "DoWidth",
  description: "Manage your money efficiently with DoWhith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabinetGrotesk.className} antialiased`}>
        <Header />
        <main className="relative flex flex-col">
          <div className="flex-grow flex-1">
          {children}
          </div>   
        </main> 
      </body>
    </html>
  );
}
