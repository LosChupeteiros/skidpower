"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartProvider";

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

export function CartButton({ className, tone = "dark" }: Props) {
  const { count, open } = useCart();

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Abrir lista de cotação (${count} ${count === 1 ? "item" : "itens"})`}
      className={[
        "relative grid h-10 w-10 place-items-center rounded-full transition",
        tone === "dark"
          ? "text-paper hover:bg-white/8"
          : "text-ink-900 hover:bg-ink-900/8",
        className ?? "",
      ].join(" ")}
    >
      <ShoppingCart size={18} strokeWidth={1.75} />
      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 grid h-5 min-w-5 px-1 place-items-center rounded-full bg-brand-yellow text-ink-900 font-mono text-[0.65rem] font-bold leading-none tabular-nums shadow-[0_2px_8px_rgba(255,199,44,0.35)]"
          aria-hidden="true"
        >
          {count > 99 ? "99+" : count}
        </span>
      )}
    </button>
  );
}
