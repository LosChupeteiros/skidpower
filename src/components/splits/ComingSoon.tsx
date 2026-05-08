import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import styles from "./splits.module.css";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  partner?: {
    logoSrc: string;
    alt: string;
    label: string;
    description?: React.ReactNode;
  };
  backHref?: string;
  backLabel?: string;
};

export function ComingSoon({
  title,
  description,
  imageSrc,
  imageAlt,
  partner,
  backHref = "/fittings",
  backLabel = "Voltar para fittings",
}: Props) {
  return (
    <section className={styles.coming}>
      <div className={styles.comingImage}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      <div className={styles.comingOverlay} aria-hidden="true" />

      <div className={styles.comingContent}>
        <span className={styles.comingTag}>
          <span className={styles.comingDot} aria-hidden="true" />
          Em breve · Catálogo
        </span>
        <h1 className={styles.comingTitle}>{title}</h1>
        <p className={styles.comingDescription}>{description}</p>

        {partner && (
          <div className={styles.comingPartner}>
            <span className={styles.comingPartnerHeader}>
              <span
                className={styles.comingPartnerHeaderDot}
                aria-hidden="true"
              />
              {partner.label}
            </span>
            <div className={styles.comingPartnerLogo}>
              <Image
                src={partner.logoSrc}
                alt={partner.alt}
                width={220}
                height={60}
                priority
              />
            </div>
            {partner.description && (
              <p className={styles.comingPartnerLabel}>
                {partner.description}
              </p>
            )}
          </div>
        )}

        <div className={styles.comingActions}>
          <a
            href="mailto:vendas@skidpower.com?subject=Interesse%20em%20produto%20Skid%20Power"
            className={styles.comingActionPrimary}
          >
            <Mail size={16} strokeWidth={2.25} />
            Falar com vendas
          </a>
          <Link href={backHref} className={styles.comingActionSecondary}>
            <ArrowLeft size={16} strokeWidth={2.25} />
            {backLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
