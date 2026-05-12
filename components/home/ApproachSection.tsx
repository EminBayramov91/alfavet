"use client";

import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { useAppSettings } from "@/app/providers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ApproachSection.module.css";

const icons = [HeartHandshake, ShieldCheck, CheckCircle2] as const;

export function ApproachSection() {
  const { t } = useAppSettings();

  return (
    <section className={styles.section} id="approach">
      <div className={styles.inner}>
        <SectionHeading
          align="left"
          description={t.approach.description}
          eyebrow={t.approach.eyebrow}
          title={t.approach.title}
        />
        <div className={styles.approachGrid}>
          {t.approach.items.map((item, index) => {
            const Icon = icons[index] ?? CheckCircle2;

            return (
              <article className={styles.approachItem} key={item.title}>
                <Icon aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
