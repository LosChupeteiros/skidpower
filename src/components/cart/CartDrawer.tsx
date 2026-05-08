"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "./CartProvider";
import { cn } from "@/lib/cn";
import styles from "./cart.module.css";

export function CartDrawer() {
  const { items, isOpen, count, close, remove, updateQty, clear } = useCart();

  return (
    <>
      <button
        type="button"
        aria-label="Fechar cotação"
        tabIndex={isOpen ? 0 : -1}
        className={cn(styles.backdrop, isOpen && styles.backdropOpen)}
        onClick={close}
      />
      <aside
        role="dialog"
        aria-modal={isOpen}
        aria-label="Lista de cotação"
        className={cn(styles.drawer, isOpen && styles.drawerOpen)}
      >
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.headerLeftDot} aria-hidden="true" />
            <span className={styles.title}>
              Lista de cotação · {count}
            </span>
          </div>
          <button
            type="button"
            aria-label="Fechar"
            onClick={close}
            className={styles.closeBtn}
          >
            <X size={16} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>
              <ShoppingCart size={22} strokeWidth={1.5} />
            </span>
            <div>
              <p style={{ color: "#fafafa", fontWeight: 600, marginBottom: 4 }}>
                Sua lista está vazia
              </p>
              <p style={{ fontSize: "0.85rem" }}>
                Configure tamanhos no catálogo e adicione itens à cotação.
              </p>
            </div>
          </div>
        ) : (
          <ul className={styles.list}>
            {items.map((item, idx) => (
              <li key={`${item.sku}-${item.threadType}-${idx}`} className={styles.item}>
                <div>
                  <div className={styles.itemSku}>{item.sku}</div>
                  <div className={styles.itemMeta}>
                    <span>OD {item.tuboOd}</span>
                    <span>
                      {item.threadType} {item.rosca}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={`Remover ${item.sku}`}
                  onClick={() => remove(idx)}
                  className={styles.itemRemove}
                >
                  <Trash2 size={14} strokeWidth={1.75} />
                </button>
                <div className={styles.qtyRow}>
                  <span className={styles.qtyLabel}>Qtd</span>
                  <span className={styles.qtyStepper}>
                    <button
                      type="button"
                      aria-label="Diminuir"
                      onClick={() => updateQty(idx, item.qty - 1)}
                      disabled={item.qty <= 1}
                      className={styles.qtyBtn}
                    >
                      <Minus size={14} strokeWidth={2} />
                    </button>
                    <span className={styles.qtyValue}>{item.qty}</span>
                    <button
                      type="button"
                      aria-label="Aumentar"
                      onClick={() => updateQty(idx, item.qty + 1)}
                      className={styles.qtyBtn}
                    >
                      <Plus size={14} strokeWidth={2} />
                    </button>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <footer className={styles.footer}>
            <div className={styles.summary}>
              <span>Total de itens</span>
              <span className={styles.summaryValue}>{count}</span>
            </div>
            <Link href="/cotacao" onClick={close} className={styles.checkout}>
              Finalizar cotação
              <ArrowRight size={16} strokeWidth={2.25} />
            </Link>
            <button type="button" onClick={clear} className={styles.clear}>
              Esvaziar lista
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
