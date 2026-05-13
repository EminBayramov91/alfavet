"use client";

import Image from "next/image";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { useAppSettings } from "@/app/providers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactCta } from "@/components/shared/ContactCta";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./AboutPage.module.css";

const storyImages = [
  {
    alt: "Alfavet clinic team with a patient",
    src: "/images/about/clinic-team-room.jpg",
  },
  {
    alt: "Kitten examination at Alfavet",
    src: "/images/about/kitten-exam.jpg",
  },
  {
    alt: "Dog receiving care at Alfavet",
    src: "/images/about/dog-iv-care.jpg",
  },
] as const;
const teamImages = [
  "/images/about/rufat-abasov.png",
  "/images/about/alla-abasova.png",
  "/images/about/orxan-gadjily.png",
] as const;

export function AboutPage() {
  const { t } = useAppSettings();

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <Image
            alt="Kittens at Alfavet veterinary clinic"
            className={styles.heroImage}
            fill
            priority
            sizes="100vw"
            src="/images/about/about-hero-kittens.jpg"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{t.aboutPage.heroEyebrow}</p>
              <h1>{t.aboutPage.heroTitle}</h1>
              <p>{t.aboutPage.heroLead}</p>
              <div className={styles.heroActions}>
                <Button href="/contacts" icon={<CalendarCheck />} size="lg">
                  {t.aboutPage.primary}
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
          </div>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyStack}>
            {t.aboutPage.storyBlocks.map((block, index) => {
              const image = storyImages[index] ?? storyImages[0];
              const blockClassName = [
                styles.storyBlock,
                index % 2 === 1 ? styles.storyBlockReverse : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <article className={blockClassName} key={block.title}>
                  <div className={styles.storyText}>
                    <p className={styles.eyebrow}>{block.eyebrow}</p>
                    <h2>{block.title}</h2>
                    <p>{block.description}</p>
                  </div>
                  <figure className={styles.storyImage}>
                  <Image
                    alt={image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 480px"
                    src={image.src}
                  />
                  </figure>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.processSection}>
          <SectionHeading
            eyebrow={t.aboutPage.processEyebrow}
            title={t.aboutPage.processTitle}
          />
          <div className={styles.processGrid}>
            {t.aboutPage.process.map((item, index) => (
              <article className={styles.processItem} key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.teamSection}>
          <SectionHeading
            description={t.aboutPage.teamLead}
            eyebrow={t.aboutPage.teamEyebrow}
            title={t.aboutPage.teamTitle}
          />
          <div className={styles.teamGrid}>
            {t.aboutPage.teamMembers.map((member, index) => (
              <article className={styles.teamCard} key={member.name}>
                <div className={styles.teamPhoto}>
                  <Image
                    alt={member.name}
                    fill
                    sizes="(max-width: 760px) 100vw, 280px"
                    src={teamImages[index] ?? teamImages[0]}
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <ContactCta title={t.aboutPage.ctaTitle} text={t.aboutPage.ctaText} />
      </main>
      <SiteFooter />
    </div>
  );
}
