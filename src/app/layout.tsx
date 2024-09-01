import type { Metadata } from "next";
import "./globals.css";
import local from 'next/font/local';
import Header from "../components/Header";
import { Inter } from 'next/font/google';
import { cabinetGrotesk } from "./fonts";

export const metadata: Metadata = {
  title: "DoWidth",
  description: "Manage your money efficiently with DoWidth",
};

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
