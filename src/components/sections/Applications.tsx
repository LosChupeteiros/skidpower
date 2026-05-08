import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Fuel,
  FlaskConical,
  Wheat,
  Ship,
  Leaf,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { APPLICATIONS } from "@/lib/specs";

const ICON_MAP: Record<string, LucideIcon> = {
  fuel: Fuel,
  "flask-conical": FlaskConical,
  wheat: Wheat,
  ship: Ship,
  leaf: Leaf,
  trees: Trees,
};

export function Applications() {
  return (
    <section id="aplicacoes" className="bg-paper text-ink-900 py-24 md:py-32 border-t border-paper-line">
      <Container>
        <SectionHeading
          eyebrow="Aplicações industriais"
          title="Onde a S68 trabalha"
          description="Setores que exigem rastreabilidade, vedação confiável e compatibilidade química — onde uma conexão genérica não é suficiente."
        />

        <div className="mt-14 md:mt-20 grid gap-px bg-paper-line rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((app) => {
            const Icon = ICON_MAP[app.iconKey] ?? Fuel;
            return (
              <article
                key={app.name}
                className="group p-8 md:p-10 bg-white hover:bg-zinc-50 transition-colors flex items-center gap-5"
              >
                <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-blue/5 border border-brand-blue/15 text-brand-blue shrink-0 group-hover:bg-brand-blue/8 transition-colors">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-ink-900 tracking-tight">
                    {app.name}
                  </h3>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500">
                    Setor industrial
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
