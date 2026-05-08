"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import {
  OD_LIST,
  ROSCA_LIST,
  filterRoscasForOd,
  resolveSku,
} from "@/lib/catalog-helpers";
import type { CatalogEntry } from "@/lib/specs";
import type { ThreadType } from "@/lib/cart-types";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import styles from "./catalog.module.css";

type Props = {
  preselected?: CatalogEntry | null;
  onClear?: () => void;
};

export function SizeSelector({ preselected, onClear }: Props) {
  const { add } = useCart();

  const [threadType, setThreadType] = useState<ThreadType>("BSP");
  const [od, setOd] = useState<string | null>(null);
  const [rosca, setRosca] = useState<string | null>(null);
  const [qty, setQty] = useState<number>(1);
  const [justAdded, setJustAdded] = useState(false);

  // sync from preselected (clicked table row)
  useEffect(() => {
    if (preselected) {
      setOd(preselected.tuboOd);
      setRosca(preselected.rosca);
    }
  }, [preselected]);

  const validRoscas = useMemo(() => filterRoscasForOd(od), [od]);
  const resolved = useMemo(() => resolveSku(od, rosca), [od, rosca]);

  // if rosca becomes invalid after OD change, clear it
  useEffect(() => {
    if (rosca && !validRoscas.has(rosca)) {
      setRosca(null);
    }
  }, [validRoscas, rosca]);

  const canAdd = !!resolved && qty >= 1;

  const handleAdd = () => {
    if (!resolved) return;
    add({
      sku: resolved.sku,
      tuboOd: resolved.tuboOd,
      rosca: resolved.rosca,
      threadType,
      qty,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  return (
    <div
      className={styles.selectorAnchor}
      onPointerDown={stop}
      onPointerMove={stop}
      onPointerUp={stop}
      onClick={stop}
    >
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardHeaderTop}>
            <span className={styles.cardEyebrow}>
              <span className={styles.cardEyebrowDot} aria-hidden="true" />
              Configurador
            </span>
            {resolved && (
              <span className={styles.skuMini}>{resolved.sku}</span>
            )}
          </div>
          <h2 className={styles.cardTitle}>Configure sua peça</h2>
        </div>

        {/* Toggle NPT/BSP */}
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Padrão de rosca</label>
          <div className={styles.toggle} role="tablist" aria-label="Tipo de rosca">
            {(["BSP", "NPT"] as const).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={threadType === t}
                onClick={() => setThreadType(t)}
                className={cn(
                  styles.toggleBtn,
                  threadType === t && styles.toggleBtnActive,
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Tubo OD chips */}
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Tubo OD</label>
          <div className={styles.chipGrid}>
            {OD_LIST.map((value) => {
              const active = od === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setOd(value);
                    onClear?.();
                  }}
                  className={cn(styles.chip, active && styles.chipActive)}
                  aria-pressed={active}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>

        {/* Rosca chips */}
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Tamanho da rosca</label>
          <div className={cn(styles.chipGrid, styles.chipGridRosca)}>
            {ROSCA_LIST.map((value) => {
              const active = rosca === value;
              const disabled = od ? !validRoscas.has(value) : false;
              return (
                <button
                  key={value}
                  type="button"
                  disabled={disabled}
                  onClick={() => setRosca(value)}
                  className={cn(styles.chip, active && styles.chipActive)}
                  aria-pressed={active}
                  aria-disabled={disabled}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>

        {/* Qty stepper */}
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Quantidade</label>
          <div className={styles.qtyRow}>
            <span className={styles.qtyStepper}>
              <button
                type="button"
                aria-label="Diminuir"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                disabled={qty <= 1}
                className={styles.qtyBtn}
              >
                <Minus size={14} strokeWidth={2.25} />
              </button>
              <span className={styles.qtyValue} aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Aumentar"
                onClick={() => setQty((q) => q + 1)}
                className={styles.qtyBtn}
              >
                <Plus size={14} strokeWidth={2.25} />
              </button>
            </span>
          </div>
        </div>

        {/* Summary — só aparece quando SKU está resolvido */}
        {resolved && (
          <div className={styles.summary}>
            <span className={styles.summarySkuTag}>SKU resolvido</span>
            <div className={styles.summarySku}>
              <span>{resolved.sku}</span>
              <span style={{ color: "#a1a1aa" }}>
                {threadType} · {resolved.rosca}
              </span>
            </div>
            <div className={styles.summaryCotas}>
              {(["D", "W", "N", "L", "I"] as const).map((k) => (
                <span key={k} className={styles.summaryCota}>
                  <span className={styles.summaryCotaLetter}>{k}</span>
                  <span>{resolved[k].toFixed(1).replace(".", ",")}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          disabled={!canAdd}
          onClick={handleAdd}
          className={styles.addBtn}
        >
          {justAdded ? (
            <>
              <Check size={16} strokeWidth={2.5} /> Adicionado à cotação
            </>
          ) : (
            <>
              Adicionar à cotação
              <ArrowRight size={16} strokeWidth={2.25} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
