import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Mail } from "lucide-react";

export function CtaQuote() {
  return (
    <section
      id="contato"
      className="relative bg-ink-900 text-paper py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 80% at 75% 50%, rgba(255, 199, 44, 0.18), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brand-yellow font-semibold mb-5">
              <span className="h-px w-6 bg-brand-yellow" />
              Próximo passo
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-paper mb-6">
              Pronto para especificar a{" "}
              <span className="whitespace-nowrap">Dupla-Anilha</span>{" "}
              <span className="font-mono text-brand-yellow">S68</span> no seu
              projeto?
            </h2>
            <p className="text-base md:text-lg text-zinc-300 max-w-xl leading-relaxed">
              Nossa equipe de engenharia de aplicação ajuda a dimensionar a
              conexão correta para cada sistema, com prazos e quantidades sob
              medida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-stretch">
            <Link
              href="/cotacao"
              className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full bg-brand-yellow text-ink-900 font-semibold text-base hover:bg-[#ffd34d] transition-all shadow-[0_4px_20px_rgba(255,199,44,0.25)] hover:shadow-[0_6px_28px_rgba(255,199,44,0.35)] active:translate-y-px"
            >
              Solicitar cotação
              <ArrowRight size={18} strokeWidth={2.25} />
            </Link>
            <a
              href="mailto:vendas@skidpower.com?subject=Cat%C3%A1logo%20Skid%20Power%20S68"
              className="inline-flex items-center justify-center gap-2 h-13 px-7 rounded-full border border-paper/25 text-paper font-semibold text-base hover:border-paper/60 hover:bg-paper/5 transition-all"
            >
              <Mail size={18} strokeWidth={2.25} />
              Falar com vendas
            </a>
            <div className="lg:mt-2 pt-4 lg:border-t lg:border-white/10 flex flex-col gap-1 text-sm text-zinc-400">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                Atendimento técnico
              </span>
              <a
                href="mailto:vendas@skidpower.com"
                className="text-paper hover:text-brand-yellow transition-colors"
              >
                vendas@skidpower.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
