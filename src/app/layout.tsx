import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CartProvider } from "@/components/cart/CartProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skid Power | União Macho dupla anilha — S68",
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
  openGraph: {
    title: "Skid Power | União Macho dupla anilha — S68",
    description:
      "Visualize a conexão em desenho técnico e foto realista no slider interativo.",
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
