import type { Metadata } from "next";
import { ComingSoon } from "@/components/splits/ComingSoon";

export const metadata: Metadata = { title: "Flanges | Skid Power" };

export default function FlangePage() {
  return (
    <ComingSoon
      title="Flanges industriais"
      description="Flanges usinados conforme normas ANSI, DIN e ASME para conexões em sistemas hidráulicos, óleo & gás e processos petroquímicos. Sob medida e em estoque."
      imageSrc="/images/flange.png"
      imageAlt="Flanges Skid Power"
    />
  );
}
