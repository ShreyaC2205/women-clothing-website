import '@fortawesome/fontawesome-svg-core';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss =  false;

import { Inter, Albert_Sans, Playfair_Display_SC, Antonio, Alexandria, Raleway, Anek_Tamil, Libre_Bodoni, Red_Rose, Tourney, Monoton, Anton, Big_Shoulders_Display, Cabin, Poppins, Outfit} from "next/font/google";
import "./globals.css";

const albert_Sans = Albert_Sans({
  subsets: ['latin'],
  weight: "500",
  variable: "--font-albert_Sans"
})

const playfair_Display_SC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: "400",
  variable: "--font-playfair_Display_SC"
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

const raleway = Raleway({
  subsets: ['latin'],
  weight: "700",
  variable: "--font-raleway"
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '800'],
  variable: "--font-poppins_Sans"
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
      <body className={`${inter.className} ${albert_Sans.variable} ${playfair_Display_SC.variable} ${antonio.variable} ${alexandria.variable} ${raleway.variable} ${anek_Tamil.variable}  ${libre_Bodoni.variable} ${red_Rose.variable} ${tourney.variable} ${monoton.variable} ${anton.variable} ${big_Shoulders_Display.variable} ${cabin.variable} ${outfit.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
