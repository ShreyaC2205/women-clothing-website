import '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss =  false;

import { Inter, Albert_Sans, Bodoni_Moda} from "next/font/google";
import "./globals.css";

const albert_Sans = Albert_Sans({
  subsets: ['latin'],
  weight: "500",
  variable: "--font-albert_Sans"
})

const bodoni_Moda = Bodoni_Moda({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-bodoni_Moda"
})



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${albert_Sans.variable} ${bodoni_Moda.variable}`}>{children}</body>
    </html>
  );
}
