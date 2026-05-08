import type { Metadata } from "next";
import { ComingSoon } from "@/components/splits/ComingSoon";

export const metadata: Metadata = { title: "Tubings | Skid Power" };

export default function TubingsPage() {
  return (
    <ComingSoon
      title="Tubings de alta precisão"
      description={`Tubos sem costura em aço inox 316L com tolerâncias controladas para instrumentação industrial. Diâmetros de 1/8" a 1", conformidade ASTM A269 / A213.`}
      imageSrc="/images/tubings.png"
      imageAlt="Tubings inox Skid Power"
    />
  );
}
