"use client";

import Image from "next/image";
import { useAppSettings } from "@/app/providers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./PartnersSection.module.css";

const partners = [
  {
    alt: "FURminator",
    src: "/images/partner-furminator.png",
  },
  {
    alt: "TRIXIE",
    src: "/images/partner-trixie.png",
  },
  {
    alt: "Royal Canin",
    src: "/images/partner-royal-canin.png",
  },
];

export function PartnersSection() {
  const { t } = useAppSettings();

  return (
    <section className={styles.section}>
      <SectionHeading
        eyebrow={t.partners.eyebrow}
        title={t.partners.title}
      />
      <div aria-label={t.partners.eyebrow} className={styles.logoRail}>
        {partners.map((partner) => (
          <div className={styles.logoItem} key={partner.alt}>
            <Image alt={partner.alt} height={126} src={partner.src} width={180} />
          </div>
        ))}
      </div>
    </section>
  );
}
