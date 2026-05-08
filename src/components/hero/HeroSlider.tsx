"use client";

import Image from "next/image";
import { useCallback } from "react";
import { useSlider } from "@/hooks/useSlider";
import { SliderHandle } from "./SliderHandle";
import styles from "./hero.module.css";

type Props = {
  dragOnly?: boolean;
};

export function HeroSlider({ dragOnly = false }: Props) {
  const { containerRef, getSplit, setSplit } = useSlider({
    initial: dragOnly ? 50 : 0,
    animateTo: 50,
    duration: 1300,
    hoverFollow: !dragOnly,
    dragOnly,
    publishGlobal: dragOnly,
  });

  const onKeyAdjust = useCallback(
    (delta: number) => setSplit(getSplit() + delta),
    [getSplit, setSplit],
  );
  const onJumpTo = useCallback((v: number) => setSplit(v), [setSplit]);

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className={`${styles.hero} ${dragOnly ? styles.heroDragOnly : ""}`}
      role="slider"
      aria-label="Comparador entre desenho técnico e foto realista do conector S68"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={dragOnly ? 50 : 0}
    >
      <div className={`${styles.panel} ${styles.panelTechnical}`}>
        <div className={styles.gridOverlay} aria-hidden="true" />
        <div className={`${styles.imageWrapper} ${styles.imageWrapperTechnical}`}>
          <Image
            src="/images/s68-technical.png"
            alt="Desenho técnico CAD do conector Dupla-Anilha S68 com cotas D, W, N, L e I"
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        <div className={`${styles.cornerLabels} ${styles.cornerLeft}`}>
          <span className={styles.cornerDot} aria-hidden="true" />
          <span>DRAWING · ISO 8434-1</span>
        </div>

        <div className={`${styles.headline} ${styles.headlineTechnical}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowTechnical}`}>
            Desenho técnico
          </span>
          <h1 className={styles.title}>
            Engenharia de precisão.
            <br />
            <span className="whitespace-nowrap">Dupla-Anilha</span> documentada.
          </h1>
          <p className={`${styles.subtitle} ${styles.subtitleTechnical}`}>
            Cotas, tolerâncias e referências em conformidade com ISO 8434-1.
          </p>
        </div>
      </div>

      <div className={`${styles.panel} ${styles.panelRealistic}`}>
        <div className={`${styles.imageWrapper} ${styles.imageWrapperRealistic}`}>
          <Image
            src="/images/s68-realistic.png"
            alt="Foto realista do conector Skid Power S68 em aço inox com gravação a laser"
            fill
            priority
            sizes="100vw"
            quality={90}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>

        <div className={`${styles.cornerLabels} ${styles.cornerRight}`}>
          <span>STAINLESS · AISI 316L</span>
          <span className={styles.cornerDot} aria-hidden="true" />
        </div>

        <div className={`${styles.headline} ${styles.headlineRealistic}`}>
          <span className={`${styles.eyebrow} ${styles.eyebrowRealistic}`}>
            Produto real
          </span>
          <h1 className={styles.title}>
            União Macho —
            <br />
            <span className="whitespace-nowrap">Dupla-Anilha</span>{" "}
            <span className="font-mono text-[0.85em] text-brand-yellow">S68</span>
          </h1>
          <p className={`${styles.subtitle} ${styles.subtitleRealistic}`}>
            Usinagem CNC, polimento espelhado e identificação gravada a laser.
          </p>
        </div>
      </div>

      <div className={styles.productBadge}>
        <span className={styles.productBadgeDot} aria-hidden="true" />
        <span>
          Industrial Fittings ·{" "}
          <span className="whitespace-nowrap">Dupla-Anilha</span> S68
        </span>
      </div>

      <div className={styles.dividerGlow} aria-hidden="true" />
      <div className={styles.divider} aria-hidden="true" />
      <SliderHandle
        onKeyAdjust={onKeyAdjust}
        onJumpTo={onJumpTo}
      />

      <div className={styles.scrollHint}>
        <span>{dragOnly ? "Clique e arraste" : "Arraste para comparar"}</span>
        <span className={styles.scrollHintLine} aria-hidden="true" />
      </div>
    </section>
  );
}
