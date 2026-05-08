"use client";

import { Plus } from "lucide-react";
import { S68_CATALOG, type CatalogEntry } from "@/lib/specs";
import { useCart } from "@/components/cart/CartProvider";
import { cn } from "@/lib/cn";
import styles from "./catalog.module.css";

type Props = {
  activeSku?: string | null;
  onSelect?: (entry: CatalogEntry) => void;
};

export function S68Catalog({ activeSku, onSelect }: Props) {
  const { add } = useCart();

  return (
    <div className={styles.catalogWrap}>
      <div className={styles.catalogScroll}>
        <table className={styles.catalog}>
          <thead className={styles.catalogHead}>
            <tr>
              <th>Peça</th>
              <th>Tubo OD</th>
              <th>Rosca</th>
              <th>D</th>
              <th>W</th>
              <th>N</th>
              <th>L</th>
              <th>I</th>
              <th aria-label="Adicionar" />
            </tr>
          </thead>
          <tbody>
            {S68_CATALOG.map((row) => {
              const active = activeSku === row.sku;
              return (
                <tr
                  key={row.sku}
                  className={cn(
                    styles.catalogRow,
                    active && styles.catalogRowActive,
                  )}
                  onClick={() => onSelect?.(row)}
                  aria-current={active ? "true" : undefined}
                >
                  <td>{row.sku}</td>
                  <td>{row.tuboOd}</td>
                  <td>{row.rosca}</td>
                  <td>{row.D.toFixed(1).replace(".", ",")}</td>
                  <td>{row.W}</td>
                  <td>{row.N.toFixed(1).replace(".", ",")}</td>
                  <td>{row.L.toFixed(1).replace(".", ",")}</td>
                  <td>{row.I.toFixed(1).replace(".", ",")}</td>
                  <td>
                    <button
                      type="button"
                      aria-label={`Adicionar ${row.sku} à cotação`}
                      className={styles.rowAdd}
                      onClick={(e) => {
                        e.stopPropagation();
                        add({
                          sku: row.sku,
                          tuboOd: row.tuboOd,
                          rosca: row.rosca,
                          threadType: "BSP",
                          qty: 1,
                        });
                      }}
                    >
                      <Plus size={14} strokeWidth={2.25} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
