import { Inter } from "next/font/google";
import local from "next/font/local";


export const inter = Inter({ subsets: ['latin'] });

export const cabinetGrotesk = local({
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
  