import type { Metadata } from "next";
import { ComingSoon } from "@/components/splits/ComingSoon";

export const metadata: Metadata = { title: "Skid Solutions | Skid Power" };

export default function SkidSolutionsPage() {
  return (
    <ComingSoon
      title="Skid Solutions"
      description="Dobra e corte CNC de tubos inox, montagem de painéis hidráulicos e skids completos sob projeto. Engenharia de aplicação e fabricação integradas."
      imageSrc="/images/solutions.png"
      imageAlt="Skid Solutions Skid Power"
    />
  );
}
