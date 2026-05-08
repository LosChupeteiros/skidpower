import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Solicitar cotação | Skid Power",
};

export default function CotacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="pt-20">{children}</main>
      <SiteFooter />
    </>
  );
}
