import type { Metadata } from "next";
import { DualSplitPanel } from "@/components/splits/DualSplitPanel";

export const metadata: Metadata = {
  title: "Skid Power | Conexões Dupla-Anilha & Selagem industrial",
  description:
    "Soluções industriais Skid Power: conexões Dupla-Anilha em aço inox 316L e selagem oficial INPRO-SEAL. ISO 9001.",
};

export default function HomePage() {
  return (
    <DualSplitPanel
      left={{
        href: "/fittings",
        eyebrow: "Industrial Fittings",
        title: (
          <>
            Conexões
            <br />
            Dupla-Anilha
          </>
        ),
        subtitle:
          "Conexões, válvulas, tubings, flanges e skid solutions usinados em aço inox AISI 316L com identificação gravada a laser.",
        cta: "Explorar catálogo",
        imageSrc: "/images/fittings.png",
        imageAlt:
          "Linha de conexões e válvulas Skid Power em aço inox sobre fundo escuro",
      }}
      right={{
        href: "/selagem",
        eyebrow: "Sealing solutions",
        title: "Selagem industrial",
        subtitle:
          "Selos mecânicos e bearing isolators para equipamentos rotativos críticos. Distribuidor oficial INPRO-SEAL no Brasil.",
        cta: "Conhecer linha",
        imageSrc: "/images/selagem.webp",
        imageAlt: "Selos mecânicos industriais sobre fundo escuro",
        badge: {
          logoSrc: "/images/inpro.svg",
          alt: "INPRO-SEAL",
          label: "Distribuidor oficial",
        },
      }}
    />
  );
}
