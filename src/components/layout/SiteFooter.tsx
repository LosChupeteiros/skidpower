import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

const CHIPS = [
  "ISO 9001 certificado",
  "ISO 8434-1 conforme",
  "AISI 316L",
  "Distribuidor INPRO-SEAL",
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-900 border-t border-white/5 py-14 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 md:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block mb-5"
              aria-label="Skid Power - início"
            >
              <Image
                src="/images/logo.png"
                alt="Skid Power"
                width={200}
                height={54}
                className="h-10 w-auto"
                style={{
                  filter:
                    "brightness(0) invert(1) drop-shadow(0 1px 6px rgba(0,0,0,0.4))",
                }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              Conexões industriais usinadas em aço inox AISI 316L para sistemas
              críticos de instrumentação, processo e medição.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:gap-16 text-sm">
            <div>
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand-yellow mb-4">
                Catálogo
              </h4>
              <ul className="space-y-2.5 text-zinc-300">
                <li><Link href="/fittings/conexoes" className="hover:text-paper transition-colors">Conexões S68</Link></li>
                <li><Link href="/fittings/valvulas" className="hover:text-paper transition-colors">Válvulas</Link></li>
                <li><Link href="/fittings/tubings" className="hover:text-paper transition-colors">Tubings</Link></li>
                <li><Link href="/fittings/flange" className="hover:text-paper transition-colors">Flanges</Link></li>
                <li><Link href="/fittings/skid-solutions" className="hover:text-paper transition-colors">Skid Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-brand-yellow mb-4">
                Empresa
              </h4>
              <ul className="space-y-2.5 text-zinc-300">
                <li><Link href="/selagem" className="hover:text-paper transition-colors">Selagem INPRO-SEAL</Link></li>
                <li><Link href="/cotacao" className="hover:text-paper transition-colors">Solicitar cotação</Link></li>
                <li>
                  <a
                    href="mailto:vendas@skidpower.com"
                    className="hover:text-paper transition-colors"
                  >
                    vendas@skidpower.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-white/5 flex flex-wrap gap-3">
          {CHIPS.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/12 bg-white/[0.03] font-mono text-[0.6rem] uppercase tracking-[0.18em] text-zinc-300"
            >
              <Check size={11} className="text-brand-yellow" strokeWidth={2.5} />
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Skid Power. Todos os direitos reservados.</span>
          <span className="font-mono uppercase tracking-[0.18em]">
            Made for industrial precision.
          </span>
        </div>
      </Container>
    </footer>
  );
}
