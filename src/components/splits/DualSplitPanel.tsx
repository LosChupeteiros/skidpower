import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./splits.module.css";

export type DualPanel = {
  href: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  badge?: { logoSrc: string; alt: string; label: string };
};

type Props = { left: DualPanel; right: DualPanel };

export function DualSplitPanel({ left, right }: Props) {
  return (
    <section className={styles.dual} aria-label="Categorias principais">
      <div className={styles.dualLogo} aria-hidden="true">
        <Image
          src="/images/logo.png"
          alt="Skid Power"
          width={220}
          height={60}
          priority
        />
      </div>

      <Panel data={left} />
      <Panel data={right} />

      <div className={styles.dualDivider} aria-hidden="true" />
    </section>
  );
}

function Panel({ data }: { data: DualPanel }) {
  return (
    <Link
      href={data.href}
      className={`${styles.dualPanel} ${data.badge ? styles.dualPanelWithBadge : ""}`}
    >
      <div className={styles.dualImage}>
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          quality={85}
        />
      </div>
      <div className={styles.dualVignette} aria-hidden="true" />

      {data.badge && (
        <div className={styles.dualBadge}>
          <span className={styles.dualBadgeTag}>
            <span className={styles.dualBadgeTagDot} aria-hidden="true" />
            {data.badge.label}
          </span>
          <span className={styles.dualBadgeLogo}>
            <Image
              src={data.badge.logoSrc}
              alt={data.badge.alt}
              width={160}
              height={48}
            />
          </span>
        </div>
      )}

      <div className={styles.dualContent}>
        <span className={styles.dualEyebrow}>{data.eyebrow}</span>
        <h2 className={styles.dualTitle}>{data.title}</h2>
        <p className={styles.dualSubtitle}>{data.subtitle}</p>

        <span className={styles.dualCta}>
          {data.cta}
          <ArrowRight size={14} strokeWidth={2.25} />
        </span>
      </div>
    </Link>
  );
}
