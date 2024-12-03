import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/common/Header";
import { cabinetGrotesk } from "./fonts";
import Cta from "@/components/common/PrimaryCta";
import Footer from "@/components/common/Footer";

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
            <Cta />
          </div>   
        </main>
        <Footer />
      </body>
    </html>
  );
}
