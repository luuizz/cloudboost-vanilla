import { Inter, Space_Grotesk } from "next/font/google";
import './app.css'
import './globals.css'
import Header from "@/components/Header";

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

export const metadata = {
  title: "Cloudboost | Ferramenta de E-mail Marketing",
  description: "Aproveite o potencial do e-mail marketing para ganhar vendas e fortalecer seu relacionamento com clientes. Cloudboost é a ferramenta de e-mail marketing perfeita para sua empresa!",
};

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
