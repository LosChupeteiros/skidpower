import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./splits.module.css";

export type MultiPanel = {
  href: string;
  number: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

export function MultiSplitPanel({ panels }: { panels: MultiPanel[] }) {
  return (
    <section className={styles.multi} aria-label="Categorias de fittings">
      {panels.map((p) => (
        <Link key={p.href} href={p.href} className={styles.multiPanel}>
          <div className={styles.multiImage}>
            <Image
              src={p.imageSrc}
              alt={p.title}
              fill
              priority
              sizes="(min-width: 768px) 20vw, 100vw"
              quality={85}
            />
          </div>
          <div className={styles.multiVignette} aria-hidden="true" />
          <div className={styles.multiContent}>
            <span className={styles.multiNumber}>{p.number}</span>
            <h3 className={styles.multiTitle}>{p.title}</h3>
            <p className={styles.multiSubtitle}>{p.subtitle}</p>
            <span className={styles.multiCta}>
              Explorar
              <ArrowRight size={12} strokeWidth={2.25} />
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
