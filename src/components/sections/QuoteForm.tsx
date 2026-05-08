"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Mail, ShoppingCart, Trash2, Minus, Plus, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useCart } from "@/components/cart/CartProvider";
import { formatQuoteEmail } from "@/lib/mailto";
import type { ClientData } from "@/lib/cart-types";

const EMPTY: ClientData = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  mensagem: "",
};

export function QuoteForm() {
  const { items, count, remove, updateQty, clear } = useCart();
  const [data, setData] = useState<ClientData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = items.length === 0;
  const canSubmit =
    !isEmpty &&
    data.nome.trim().length > 1 &&
    data.empresa.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(data.email) &&
    data.telefone.trim().length > 5;

  const update = (key: keyof ClientData, value: string) =>
    setData((d) => ({ ...d, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    const url = formatQuoteEmail(items, data);
    window.location.href = url;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-paper text-ink-900 min-h-[80vh] py-24">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <span className="grid mx-auto h-16 w-16 place-items-center rounded-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30 mb-6">
              <CheckCircle2 size={32} strokeWidth={1.75} />
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Cotação enviada
            </h1>
            <p className="text-zinc-600 leading-relaxed mb-8">
              Seu cliente de email deve ter aberto com a cotação preenchida. Se
              não abriu automaticamente, verifique seu cliente padrão de email
              ou entre em contato direto pelo{" "}
              <a
                className="text-brand-blue underline"
                href="mailto:vendas@skidpower.com"
              >
                vendas@skidpower.com
              </a>
              .
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/fittings/conexoes"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-yellow px-5 text-sm font-semibold text-ink-900 hover:bg-[#ffd34d] transition-colors"
              >
                <ArrowLeft size={16} /> Voltar ao catálogo
              </Link>
              <button
                type="button"
                onClick={() => {
                  clear();
                  setSubmitted(false);
                  setData(EMPTY);
                }}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-ink-900/15 px-5 text-sm font-medium hover:bg-ink-900/5 transition-colors"
              >
                Nova cotação
              </button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-paper text-ink-900 min-h-[80vh] py-16 md:py-24">
      <Container>
        <header className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-brand-blue font-semibold mb-4">
            <span className="h-px w-6 bg-brand-blue" />
            Solicitação de cotação
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            Revise os itens e nos envie sua solicitação
          </h1>
          <p className="mt-5 text-base md:text-lg text-zinc-600 leading-relaxed">
            Sua cotação será enviada por email para nossa equipe de vendas. O
            retorno costuma sair em até 24 horas úteis.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          {/* Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-zinc-500">
                Itens da cotação · {count}
              </h2>
              {!isEmpty && (
                <button
                  type="button"
                  onClick={clear}
                  className="text-xs font-medium text-zinc-500 hover:text-rose-500 transition-colors"
                >
                  Esvaziar lista
                </button>
              )}
            </div>

            {isEmpty ? (
              <div className="rounded-xl border border-paper-line bg-white p-10 text-center">
                <span className="grid mx-auto h-14 w-14 place-items-center rounded-full bg-zinc-50 text-zinc-400 mb-4">
                  <ShoppingCart size={20} strokeWidth={1.5} />
                </span>
                <p className="text-base font-semibold text-ink-900 mb-1">
                  Sua lista está vazia
                </p>
                <p className="text-sm text-zinc-500 mb-6">
                  Configure tamanhos no catálogo e adicione itens à cotação.
                </p>
                <Link
                  href="/fittings/conexoes"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-ink-900 px-5 text-sm font-semibold text-paper hover:bg-ink-700 transition-colors"
                >
                  Ir para o catálogo S68
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <ul className="rounded-xl border border-paper-line bg-white divide-y divide-paper-line">
                {items.map((item, idx) => (
                  <li key={`${item.sku}-${idx}`} className="p-4 md:p-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <div className="flex-1 min-w-[180px]">
                      <div className="font-mono font-bold text-base text-ink-900">
                        {item.sku}
                      </div>
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-zinc-500 mt-1">
                        OD {item.tuboOd} · {item.threadType} {item.rosca}
                      </div>
                    </div>
                    <span className="inline-flex items-center border border-paper-line rounded-full overflow-hidden">
                      <button
                        type="button"
                        aria-label="Diminuir"
                        disabled={item.qty <= 1}
                        onClick={() => updateQty(idx, item.qty - 1)}
                        className="h-9 w-9 grid place-items-center text-ink-900 hover:bg-zinc-50 disabled:opacity-40"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-mono font-semibold tabular-nums px-3 min-w-[40px] text-center">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        aria-label="Aumentar"
                        onClick={() => updateQty(idx, item.qty + 1)}
                        className="h-9 w-9 grid place-items-center text-ink-900 hover:bg-zinc-50"
                      >
                        <Plus size={14} />
                      </button>
                    </span>
                    <button
                      type="button"
                      aria-label={`Remover ${item.sku}`}
                      onClick={() => remove(idx)}
                      className="grid h-9 w-9 place-items-center rounded-full text-zinc-400 hover:bg-rose-50 hover:text-rose-500 transition"
                    >
                      <Trash2 size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-paper-line bg-white p-6 md:p-8 space-y-5"
            noValidate
          >
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-zinc-500">
              Seus dados
            </h2>

            <Field
              label="Nome completo"
              value={data.nome}
              onChange={(v) => update("nome", v)}
              required
              autoComplete="name"
            />
            <Field
              label="Empresa"
              value={data.empresa}
              onChange={(v) => update("empresa", v)}
              required
              autoComplete="organization"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Email"
                type="email"
                value={data.email}
                onChange={(v) => update("email", v)}
                required
                autoComplete="email"
              />
              <Field
                label="Telefone"
                value={data.telefone}
                onChange={(v) => update("telefone", v)}
                required
                autoComplete="tel"
              />
            </div>
            <Field
              label="Mensagem (opcional)"
              value={data.mensagem}
              onChange={(v) => update("mensagem", v)}
              multiline
            />

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-yellow text-ink-900 font-semibold disabled:bg-zinc-200 disabled:text-zinc-400 hover:bg-[#ffd34d] transition-all shadow-[0_6px_22px_rgba(255,199,44,0.25)] disabled:shadow-none"
            >
              <Mail size={16} strokeWidth={2.25} />
              Enviar cotação por email
            </button>

            <p className="text-xs text-zinc-500 leading-relaxed">
              Ao enviar, abriremos seu cliente de email com a cotação
              pré-preenchida para{" "}
              <span className="font-mono text-zinc-700">
                vendas@skidpower.com
              </span>
              .
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  multiline?: boolean;
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
  multiline,
}: FieldProps) {
  return (
    <label className="block">
      <span className="block font-mono text-[0.6rem] uppercase tracking-[0.18em] font-semibold text-zinc-500 mb-1.5">
        {label}
        {required && <span className="text-brand-yellow ml-1">*</span>}
      </span>
      {multiline ? (
        <textarea
          rows={3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          className="w-full rounded-md border border-paper-line bg-white px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          autoComplete={autoComplete}
          className="w-full h-11 rounded-md border border-paper-line bg-white px-3 text-sm text-ink-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 transition"
        />
      )}
    </label>
  );
}
