"use client";

import { CalendarCheck, MessageCircle } from "lucide-react";
import type { Locale } from "@/app/i18n";
import { useAppSettings } from "@/app/providers";
import { Button } from "@/components/ui/Button";
import styles from "./ContactCta.module.css";

const defaultCopy: Record<
  Locale,
  {
    title: string;
    text: string;
  }
> = {
  az: {
    title: "Haradan başlamağın daha doğru olduğunu dəqiqləşdirək",
    text: "Simptomları və ya lazım olan xidməti yazın, komanda uyğun qəbul vaxtı təklif edəcək.",
  },
  en: {
    title: "Let's clarify where to start",
    text: "Describe the symptoms or the service you need, and the team will suggest a suitable visit time.",
  },
  ru: {
    title: "Уточним, с чего лучше начать",
    text: "Опишите симптомы или нужную услугу, и команда предложит подходящее время приёма.",
  },
};

type ContactCtaProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryHref?: string;
};

export function ContactCta({
  eyebrow,
  title,
  text,
  primaryHref = "/contacts",
}: ContactCtaProps) {
  const { locale, t } = useAppSettings();
  const copy = defaultCopy[locale];

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div>
          <p className={styles.eyebrow}>{eyebrow ?? t.contacts.eyebrow}</p>
          <h2>{title ?? copy.title}</h2>
          <p>{text ?? copy.text}</p>
        </div>
        <div className={styles.actions}>
          <Button href={primaryHref} icon={<CalendarCheck />} size="lg">
            {t.hero.primary}
          </Button>
          <Button
            href="https://wa.me/994503344423"
            icon={<MessageCircle />}
            rel="noreferrer"
            size="lg"
            target="_blank"
            variant="ghost"
          >
            {t.contacts.whatsapp}
          </Button>
        </div>
      </div>
    </section>
  );
}
