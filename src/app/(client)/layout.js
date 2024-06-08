import { Inter, Space_Grotesk } from "next/font/google";
import './app.css'
import './globals.css'
import Header from "@/components/Header";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback:  false,
  variable: "--font-texts",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  adjustFontFallback:  false,
  variable: "--font-title",
})

export async function generateMetadata() {
  const settings = await client.fetch(`*[_type == "settings"]`);
  const data = settings[0];
  return {
    title: data.title || 'Cloudboost',
    description: data.metaDescription || 'Descrição interessante!',
    openGraph: {
      images: [`${urlForImage(data.seoImage.asset)}` || ""],
    },
    twitter: {
      title: data.title || 'Cloudboost',
      images: [`${urlForImage(data.seoImage.asset)}` || ""],
    }
  }


}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
