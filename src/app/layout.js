import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloudboost | Ferramenta de E-mail Marketing",
  description: "Aproveite o potencial do e-mail marketing para ganhar vendas e fortalecer seu relacionamento com clientes. Cloudboost é a ferramenta de e-mail marketing perfeita para sua empresa!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
