"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CartButton } from "@/components/cart/CartButton";
import { cn } from "@/lib/cn";

const NAV = [
  { href: "/fittings", label: "Fittings" },
  { href: "/selagem", label: "Selagem" },
  { href: "/cotacao", label: "Cotação" },
];

type Props = {
  variant?: "transparent" | "solid";
};

export function SiteHeader({ variant = "transparent" }: Props) {
  const [scrolled, setScrolled] = useState(variant === "solid");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dualTone = pathname === "/fittings/conexoes" && !scrolled;

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink-900/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent",
      )}
    >
      {/* Layer 1 — WHITE (default, full width) */}
      <HeaderRow tone="light" open={open} setOpen={setOpen} />

      {/* Layer 2 — BLACK (clipped to drawing side, only on catalog hero) */}
      {dualTone && (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            clipPath: "inset(0 calc(100% - var(--hero-split, 50%)) 0 0)",
            WebkitClipPath: "inset(0 calc(100% - var(--hero-split, 50%)) 0 0)",
            transition: "none",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <HeaderRow tone="dark" open={open} setOpen={setOpen} mirror />
        </div>
      )}

      {open && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-md border-t border-white/10">
          <Container className="flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-bold text-zinc-200 border-b border-white/5 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cotacao"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-brand-yellow px-5 font-semibold text-ink-900"
              onClick={() => setOpen(false)}
            >
              Solicitar cotação
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

type HeaderRowProps = {
  tone: "light" | "dark";
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mirror?: boolean;
};

function HeaderRow({ tone, open, setOpen, mirror = false }: HeaderRowProps) {
  // tone "light" = white text on dark bg (default). tone "dark" = black text on light bg.
  const navColor =
    tone === "light"
      ? "text-paper hover:text-brand-yellow"
      : "text-ink-900 hover:text-brand-blue";
  const navTextShadow =
    tone === "light"
      ? "0 3px 16px rgba(0,0,0,0.98), 0 1px 5px rgba(0,0,0,0.95)"
      : "none";
  const logoFilter =
    tone === "light"
      ? "brightness(0) invert(1) drop-shadow(0 1px 6px rgba(0,0,0,0.4))"
      : "brightness(0) drop-shadow(0 1px 6px rgba(255,255,255,0.4))";
  const cartTone = tone === "light" ? "dark" : "light";
  const menuColor =
    tone === "light"
      ? "text-paper hover:bg-white/8"
      : "text-ink-900 hover:bg-ink-900/8";

  return (
    <Container className="flex h-16 items-center justify-between md:h-20 relative">
      <Link
        href="/"
        className="flex items-center"
        aria-label="Skid Power - início"
        tabIndex={mirror ? -1 : 0}
      >
        <Image
          src="/images/logo.png"
          alt="Skid Power"
          width={180}
          height={48}
          priority
          className="h-9 md:h-10 w-auto"
          style={{ filter: logoFilter }}
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            tabIndex={mirror ? -1 : 0}
            className={cn(
              "text-sm font-bold tracking-tight transition-colors",
              navColor,
            )}
            style={{ textShadow: navTextShadow }}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-2">
        <CartButton tone={cartTone} />
        <Link
          href="/cotacao"
          tabIndex={mirror ? -1 : 0}
          className="inline-flex h-9 items-center rounded-full bg-brand-yellow px-4 text-sm font-bold text-ink-900 hover:bg-[#ffd34d] transition-colors"
        >
          Solicitar cotação
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-1">
        <CartButton tone={cartTone} />
        {!mirror && (
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-md transition-colors",
              menuColor,
            )}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </div>
    </Container>
  );
}
