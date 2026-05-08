import type { Metadata } from "next";
import { S68Section } from "@/components/catalog/S68Section";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { MaterialsFinish } from "@/components/sections/MaterialsFinish";
import { QualityBadges } from "@/components/sections/QualityBadges";
import { Applications } from "@/components/sections/Applications";
import { CtaQuote } from "@/components/sections/CtaQuote";

export const metadata: Metadata = {
  title: "Industrial Fittings — Dupla-Anilha S68 | Skid Power",
  description:
    "Catálogo completo do conector Dupla-Anilha S68 com 28 SKUs, cotas de engenharia, configurador de medidas e adição direta à lista de cotação.",
};

export default function ConexoesPage() {
  return (
    <>
      <S68Section />
      <ProductIntro />
      <MaterialsFinish />
      <QualityBadges />
      <Applications />
      <CtaQuote />
    </>
  );
}
