import Image from "next/image";
import { Award, Handshake, ShieldCheck, Stamp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QUALITY_BADGES } from "@/lib/specs";

const ICONS = {
  iso9001: Award,
  iso8434: Stamp,
  aisi316l: ShieldCheck,
  inpro: Handshake,
} as const;

export function QualityBadges() {
  return (
    <section className="bg-paper text-ink-900 py-24 md:py-32 border-t border-paper-line">
      <Container>
        <SectionHeading
          eyebrow="Qualidade & certificações"
          title="Padrões que sustentam nossa engenharia"
          description="Cada peça que sai da Skid Power passa por controle de qualidade rastreável e atende aos padrões internacionais que a indústria exige."
        />

        <div className="mt-14 grid gap-px bg-paper-line rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {QUALITY_BADGES.map((badge) => {
            const Icon = ICONS[badge.key as keyof typeof ICONS];
            return (
              <article
                key={badge.key}
                className="bg-white p-7 md:p-8 hover:bg-zinc-50 transition-colors flex flex-col gap-4"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/8 text-brand-blue border border-brand-blue/15 shrink-0">
                  {badge.key === "inpro" ? (
                    <Image
                      src="/images/inpro.svg"
                      alt="INPRO-SEAL"
                      width={36}
                      height={20}
                      className="h-5 w-auto"
                    />
                  ) : (
                    <Icon size={20} strokeWidth={1.75} />
                  )}
                </span>
                <div>
                  <h3 className="font-bold text-base md:text-lg tracking-tight text-ink-900 mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {badge.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
