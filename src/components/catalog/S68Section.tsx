"use client";

import { useCallback, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CatalogEntry } from "@/lib/specs";
import { S68Hero } from "./S68Hero";
import { S68Catalog } from "./S68Catalog";

export function S68Section() {
  const [preselected, setPreselected] = useState<CatalogEntry | null>(null);

  const onSelect = useCallback((entry: CatalogEntry) => {
    setPreselected(entry);
    if (typeof window !== "undefined") {
      const heroTop = document.getElementById("s68-hero")?.offsetTop ?? 0;
      window.scrollTo({ top: Math.max(0, heroTop - 60), behavior: "smooth" });
    }
  }, []);

  const clearPreselect = useCallback(() => setPreselected(null), []);

  return (
    <>
      <div id="s68-hero">
        <S68Hero preselected={preselected} onClearPreselect={clearPreselect} />
      </div>

      <section
        id="especificacoes"
        className="bg-paper text-ink-900 py-24 md:py-32 border-t border-paper-line"
      >
        <Container>
          <div className="grid gap-10 md:gap-14 lg:grid-cols-[5fr_7fr] items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Catálogo · 28 SKUs"
                title="Cotas de engenharia"
                description="Clique em qualquer linha da tabela para pré-popular o configurador acima. As cotas D, W, N, L e I seguem a tabela técnica oficial em milímetros."
              />
              <div className="hidden lg:flex flex-col gap-3 pt-4">
                <div className="rounded-lg border border-paper-line bg-white p-4">
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-zinc-500 mb-2">
                    Legenda das cotas
                  </div>
                  <ul className="space-y-1.5 text-sm text-zinc-700">
                    <Legend code="D" label="Diâmetro interno do tubo" />
                    <Legend code="W" label="Largura entre chaves" />
                    <Legend code="N" label="Comprimento do corpo" />
                    <Legend code="L" label="Comprimento total" />
                    <Legend code="I" label="Profundidade de inserção" />
                  </ul>
                </div>
              </div>
            </div>

            <S68Catalog
              activeSku={preselected?.sku ?? null}
              onSelect={onSelect}
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function Legend({ code, label }: { code: string; label: string }) {
  return (
    <li className="flex items-center gap-3">
      <span className="inline-grid h-7 w-7 place-items-center rounded-md bg-brand-blue/8 text-brand-blue font-mono font-bold text-sm">
        {code}
      </span>
      <span>{label}</span>
    </li>
  );
}
