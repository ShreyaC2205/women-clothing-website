import '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss =  false;

import { Inter, Albert_Sans, Bodoni_Moda, Antonio, Alexandria, Bricolage_Grotesque, Anek_Tamil, Libre_Bodoni, Red_Rose} from "next/font/google";
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

const antonio = Antonio({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-antonio"
})

const alexandria = Alexandria({
  subsets: ['latin'],
  weight: "600",
  variable: "--font-alexandria"
})

const bricolage_Grotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: "600",
  variable: "--font-bricolage_Grotesque"
})

const anek_Tamil = Anek_Tamil({
  subsets: ['latin'],
  weight: "800",
  variable: "--font-anek_Tamil"
})

const libre_Bodoni = Libre_Bodoni({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-libre_Bodoni"
})

const red_Rose = Red_Rose({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-red_Rose"
})






const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${albert_Sans.variable} ${bodoni_Moda.variable} ${antonio.variable} ${alexandria.variable} ${bricolage_Grotesque.variable} ${anek_Tamil.variable}  ${libre_Bodoni.variable} ${red_Rose.variable}`}>{children}</body>
    </html>
  );
}
