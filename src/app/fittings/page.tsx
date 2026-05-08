import type { Metadata } from "next";
import { MultiSplitPanel, type MultiPanel } from "@/components/splits/MultiSplitPanel";

export const metadata: Metadata = {
  title: "Industrial Fittings | Skid Power",
  description:
    "Conexões, válvulas, tubings, flanges e skid solutions — soluções industriais Skid Power.",
};

const PANELS: MultiPanel[] = [
  {
    href: "/fittings/conexoes",
    number: "01",
    title: "Conexões",
    subtitle: "Industrial Fittings — Dupla-Anilha. Catálogo completo S68.",
    imageSrc: "/images/connectors.png",
  },
  {
    href: "/fittings/valvulas",
    number: "02",
    title: "Válvulas",
    subtitle: "Esfera, agulha e shut-off para instrumentação industrial.",
    imageSrc: "/images/valves.png",
  },
  {
    href: "/fittings/tubings",
    number: "03",
    title: "Tubings",
    subtitle: "Tubos sem costura em aço inox AISI 316L de alta precisão.",
    imageSrc: "/images/tubings.png",
  },
  {
    href: "/fittings/flange",
    number: "04",
    title: "Flange",
    subtitle: "Flanges industriais usinados conforme normas internacionais.",
    imageSrc: "/images/flange.png",
  },
  {
    href: "/fittings/skid-solutions",
    number: "05",
    title: "Skid Solutions",
    subtitle: "Dobra, corte e montagem de painéis hidráulicos completos.",
    imageSrc: "/images/solutions.png",
  },
];

export default function FittingsHubPage() {
  return <MultiSplitPanel panels={PANELS} />;
}
