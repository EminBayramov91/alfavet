"use client";

import { CalendarCheck, MessageCircle, PawPrint } from "lucide-react";
import { useAppSettings } from "@/app/providers";
import { Button } from "@/components/ui/Button";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  const { t } = useAppSettings();

  return (
    <section className={styles.hero} id="top">
      <video
        autoPlay
        className={styles.heroVideo}
        loop
        muted
        playsInline
        poster="/images/hero-dog-poster.jpg"
        preload="metadata"
      >
        <source src="/images/hero-dog-being-petted.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>
          <PawPrint aria-hidden="true" size={18} />
          {t.hero.eyebrow}
        </p>
        <h1 className={styles.title}>{t.hero.title}</h1>
        <p className={styles.lead}>{t.hero.lead}</p>
        <div className={styles.actions}>
          <Button href="/contacts" icon={<CalendarCheck />} size="lg">
            {t.hero.primary}
          </Button>
          <Button
            href="https://wa.me/994503344423"
            icon={<MessageCircle />}
            rel="noreferrer"
            size="lg"
            target="_blank"
            variant="dark"
          >
            {t.contacts.whatsapp}
          </Button>
        </div>
      </div>
    </section>
  );
}
