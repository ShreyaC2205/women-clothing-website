import '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss =  false;

import { Inter, Albert_Sans, Bodoni_Moda, Antonio, Alexandria, Bricolage_Grotesque, Anek_Tamil, Libre_Bodoni, Red_Rose, Tourney, Monoton, Anton, Big_Shoulders_Display, Cabin, Nunito_Sans, Outfit} from "next/font/google";
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
  weight: "700",
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

const tourney = Tourney({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-tourney"
})

const monoton = Monoton({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-monoton"
})

const anton = Anton({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-anton"
})

const big_Shoulders_Display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-big_Shoulders_Display"
})

const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-cabin"
})

const nunito_Sans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['500', '800'],
  variable: "--font-nunito_Sans"
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '800'],
  variable: "--font-outfit"
})









const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${albert_Sans.variable} ${bodoni_Moda.variable} ${antonio.variable} ${alexandria.variable} ${bricolage_Grotesque.variable} ${anek_Tamil.variable}  ${libre_Bodoni.variable} ${red_Rose.variable} ${tourney.variable} ${monoton.variable} ${anton.variable} ${big_Shoulders_Display.variable} ${cabin.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
