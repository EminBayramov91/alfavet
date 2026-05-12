"use client";

import type { LucideIcon } from "lucide-react";
import {
  BadgePlus,
  FileText,
  FlaskConical,
  HeartPulse,
  Microscope,
  Radiation,
  ScanHeart,
  ScanSearch,
  Scissors,
  SmilePlus,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { useAppSettings } from "@/app/providers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ServicesSection.module.css";

const serviceIcons: LucideIcon[] = [
  Stethoscope,
  HeartPulse,
  Syringe,
  FlaskConical,
  Scissors,
  SmilePlus,
  BadgePlus,
  Radiation,
  Microscope,
  ScanSearch,
  ScanHeart,
  FileText,
];

export function ServicesSection() {
  const { t } = useAppSettings();

  return (
    <section className={styles.section} id="services">
      <SectionHeading
        description={t.services.description}
        eyebrow={t.services.eyebrow}
        title={t.services.title}
      />
      <div className={styles.servicesGrid}>
        {t.services.items.map((service, index) => {
          const Icon = serviceIcons[index] ?? Stethoscope;

          return (
            <article className={styles.serviceCard} key={service.title}>
              <div className={styles.iconWrap}>
                <Icon aria-hidden="true" />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
