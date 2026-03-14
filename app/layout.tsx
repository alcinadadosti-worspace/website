import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alcina - Rede de Franquias de Cosméticos e Beleza",
  description: "Rede de franquias de cosméticos e beleza com origem em Alagoas, operando as melhores marcas do mercado.",
  keywords: ["cosméticos", "beleza", "franquias", "O Boticário", "Eudora", "Quem Disse Berenice", "Alagoas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
