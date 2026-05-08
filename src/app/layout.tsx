import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CartProvider } from "@/components/cart/CartProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skid Power",
  description:
    "Conexões industriais Skid Power em aço inox AISI 316L com acabamento premium, usinagem precisa e identificação gravada a laser.",
  keywords: [
    "Skid Power",
    "União Macho",
    "S68",
    "conexão dupla anilha",
    "aço inox 316L",
    "instrumentação industrial",
  ],
  authors: [{ name: "Skid Power" }],
  icons: {
    icon: "/images/marcadagua.png",
    shortcut: "/images/marcadagua.png",
    apple: "/images/marcadagua.png",
  },
  openGraph: {
    title: "Skid Power",
    description:
      "A Skid Power desenvolve conexões, válvulas e tubings no Brasil, em parceria com a Inpro-Seal para levar tecnologia de selagem a equipamentos rotativos.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
