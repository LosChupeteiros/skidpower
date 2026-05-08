import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCT } from "@/lib/specs";
import { CheckCircle2 } from "lucide-react";

const HIGHLIGHTS = [
  "Vedação dupla-anilha cônica de alta performance",
  "Usinagem CNC com tolerâncias de instrumentação",
  "Identificação permanente gravada a laser",
  "27 SKUs disponíveis — OD 5/32\" a 1\", roscas 1/8\" a 1\"",
];

export function ProductIntro() {
  return (
    <section
      id="produto"
      className="relative bg-paper text-ink-900 py-24 md:py-32 overflow-hidden"
    >
      {/* Marca d'água sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[55%] aspect-square opacity-[0.05]"
        style={{
          backgroundImage: "url(/images/marcadagua.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center right",
          filter: "blur(1px)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start">
          <SectionHeading
            eyebrow={`${PRODUCT.family} · ${PRODUCT.code}`}
            title={PRODUCT.fullName.replace("Industrial Fittings — ", "")}
            description="Conexão de instrumentação industrial para sistemas hidráulicos, pneumáticos e químicos. Projetada para garantir vedação confiável, montagem rápida e durabilidade em ambientes críticos."
          />

          <div>
            <ul className="space-y-4">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base md:text-lg text-zinc-700"
                >
                  <CheckCircle2
                    size={22}
                    className="text-brand-blue shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
              <KV label="Material" value={PRODUCT.material} />
              <KV label="Acabamento" value={PRODUCT.finish} />
              <KV label="Norma" value={PRODUCT.standard} />
              <KV label="Identificação" value="Laser" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-ink-900">{value}</dd>
    </div>
  );
}
