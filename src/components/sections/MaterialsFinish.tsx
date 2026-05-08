import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MATERIALS } from "@/lib/specs";
import { Award, Layers, Scan, Shield } from "lucide-react";

const ICONS = [Shield, Award, Scan, Layers];

export function MaterialsFinish() {
  return (
    <section className="bg-ink-900 text-paper py-24 md:py-32 relative overflow-hidden">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Materiais & acabamento"
          title="Engenharia que se vê e se sente"
          description="Cada conexão é usinada e tratada para entregar precisão dimensional, resistência química e apresentação digna de catálogo industrial premium."
          tone="light"
        />

        <div className="mt-14 md:mt-20 grid gap-px bg-white/10 rounded-2xl overflow-hidden md:grid-cols-2">
          {MATERIALS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article
                key={item.title}
                className="group p-7 md:p-9 bg-ink-900 hover:bg-ink-800 transition-colors"
              >
                <div className="flex items-start gap-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-brand-yellow/30 bg-brand-yellow/5 text-brand-yellow shrink-0 group-hover:bg-brand-yellow/10 transition-colors">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-paper mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
