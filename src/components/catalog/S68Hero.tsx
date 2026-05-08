"use client";

import { useState } from "react";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { SizeSelector } from "./SizeSelector";
import type { CatalogEntry } from "@/lib/specs";
import styles from "./catalog.module.css";

type Props = {
  preselected: CatalogEntry | null;
  onClearPreselect: () => void;
};

export function S68Hero({ preselected, onClearPreselect }: Props) {
  return (
    <div className={styles.heroWrap}>
      <HeroSlider dragOnly />
      <SizeSelector preselected={preselected} onClear={onClearPreselect} />
    </div>
  );
}
