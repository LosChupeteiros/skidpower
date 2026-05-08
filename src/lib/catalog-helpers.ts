import { S68_CATALOG, type CatalogEntry } from "./specs";

export const OD_LIST: readonly string[] = Array.from(
  new Set(S68_CATALOG.map((e) => e.tuboOd)),
);

export const ROSCA_LIST: readonly string[] = Array.from(
  new Set(S68_CATALOG.map((e) => e.rosca)),
);

export function filterRoscasForOd(od: string | null): Set<string> {
  if (!od) return new Set();
  return new Set(
    S68_CATALOG.filter((e) => e.tuboOd === od).map((e) => e.rosca),
  );
}

export function resolveSku(
  od: string | null,
  rosca: string | null,
): CatalogEntry | null {
  if (!od || !rosca) return null;
  return S68_CATALOG.find((e) => e.tuboOd === od && e.rosca === rosca) ?? null;
}

export function findBySku(sku: string): CatalogEntry | null {
  return S68_CATALOG.find((e) => e.sku === sku) ?? null;
}
