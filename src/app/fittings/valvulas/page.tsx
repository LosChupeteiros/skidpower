import type { Metadata } from "next";
import { ComingSoon } from "@/components/splits/ComingSoon";

export const metadata: Metadata = { title: "Válvulas | Skid Power" };

export default function ValvulasPage() {
  return (
    <ComingSoon
      title="Válvulas industriais"
      description="Linha de válvulas esfera, agulha e shut-off em aço inox AISI 316L para instrumentação e processo. Catálogo completo em desenvolvimento — fale com nosso time para especificação imediata."
      imageSrc="/images/valves.png"
      imageAlt="Válvulas industriais Skid Power"
    />
  );
}
