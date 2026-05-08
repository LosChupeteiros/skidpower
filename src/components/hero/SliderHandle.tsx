"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./hero.module.css";

type Props = {
  onKeyAdjust: (delta: number) => void;
  onJumpTo: (target: number) => void;
};

export function SliderHandle({ onKeyAdjust, onJumpTo }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const step = e.shiftKey ? 10 : 2;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        onKeyAdjust(-step);
        break;
      case "ArrowRight":
        e.preventDefault();
        onKeyAdjust(step);
        break;
      case "Home":
        e.preventDefault();
        onJumpTo(0);
        break;
      case "End":
        e.preventDefault();
        onJumpTo(100);
        break;
    }
  };

  return (
    <button
      type="button"
      className={styles.handle}
      aria-label="Arraste para comparar versão técnica e realista"
      onKeyDown={handleKeyDown}
    >
      <span className={styles.handleDot} aria-hidden="true" />
      <ChevronLeft size={14} strokeWidth={2.5} aria-hidden="true" />
      <ChevronRight size={14} strokeWidth={2.5} aria-hidden="true" />
      <span
        className={`${styles.handleDot} ${styles.handleDotBottom}`}
        aria-hidden="true"
      />
    </button>
  );
}
