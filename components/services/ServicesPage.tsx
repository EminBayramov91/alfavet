"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BadgePlus,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  FlaskConical,
  HeartPulse,
  Microscope,
  MessageCircle,
  Radiation,
  ScanHeart,
  ScanSearch,
  ShieldCheck,
  Scissors,
  SmilePlus,
  Stethoscope,
  Syringe,
} from "lucide-react";
import servicesPageCopy from "@/app/i18n/pages/services.json";
import { useAppSettings } from "@/app/providers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactCta } from "@/components/shared/ContactCta";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getServiceGroupIndex,
  getServiceIndex,
  getServicesForGroup,
  serviceIds,
  type ServiceId,
} from "@/lib/serviceCatalog";
import styles from "./ServicesPage.module.css";

const pathIcons: LucideIcon[] = [Stethoscope, Syringe, HeartPulse, ScanSearch];
const groupIcons: LucideIcon[] = [Stethoscope, Microscope, ShieldCheck, FileText];
const stepIcons: LucideIcon[] = [MessageCircle, Stethoscope, ClipboardCheck];
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

type ServicesPageProps = {
  initialService?: string | null;
};

const pageCopy = servicesPageCopy;

export function ServicesPage({ initialService = null }: ServicesPageProps) {
  const { locale, t } = useAppSettings();
  const copy = pageCopy[locale];
  const initialGroupIndex = getServiceGroupIndex(initialService);
  const initialServiceIndex = getServiceIndex(initialService);
  const resolvedInitialGroup = initialGroupIndex >= 0 ? initialGroupIndex : 0;
  const [activeGroup, setActiveGroup] = useState(
    resolvedInitialGroup,
  );
  const [selectedService, setSelectedService] = useState<ServiceId | null>(
    initialServiceIndex >= 0
      ? serviceIds[initialServiceIndex]
      : (getServicesForGroup(resolvedInitialGroup)[0] ?? null),
  );
  const activeGroupCopy = copy.groups[activeGroup] ?? copy.groups[0];
  const ActiveGroupIcon = groupIcons[activeGroup] ?? Stethoscope;
  const activeServiceIds = getServicesForGroup(activeGroup);
  const activeSelectedService = selectedService ?? activeServiceIds[0] ?? null;
  const selectedServiceIndex = activeSelectedService
    ? getServiceIndex(activeSelectedService)
    : -1;
  const selectedServiceCopy =
    selectedServiceIndex >= 0 ? t.services.items[selectedServiceIndex] : null;

  useEffect(() => {
    if (initialServiceIndex < 0) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById("service-guide")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [initialServiceIndex]);

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <Image
            alt={t.services.title}
            className={styles.heroImage}
            fill
            priority
            sizes="100vw"
            src="/images/gallery/gallery-04-kitten-care.jpg"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{t.services.eyebrow}</p>
              <h1>{t.services.title}</h1>
              <p>{copy.heroLead}</p>
              <div className={styles.heroActions}>
                <Button href="/contacts#contact-form" icon={<CalendarCheck />} size="lg">
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
          </div>
        </section>

        <section className={styles.pathsSection}>
          <SectionHeading
            description={copy.pathsLead}
            eyebrow={copy.pathsEyebrow}
            title={copy.pathsTitle}
          />
          <div className={styles.pathGrid}>
            {copy.paths.map((path, index) => {
              const Icon = pathIcons[index] ?? Stethoscope;

              return (
                <article className={styles.pathCard} key={path.title}>
                  <div className={styles.pathIcon}>
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h2>{path.title}</h2>
                    <p>{path.description}</p>
                  </div>
                  <span>{path.highlight}</span>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.guideSection} id="service-guide">
          <div className={styles.guideShell}>
            <div className={styles.guideIntro}>
              <p className={styles.eyebrow}>{copy.guideEyebrow}</p>
              <h2>{copy.guideTitle}</h2>
            </div>

            <div
              aria-label={copy.guideTitle}
              className={styles.groupTabs}
              role="tablist"
            >
              {copy.groups.map((group, index) => {
                const GroupIcon = groupIcons[index] ?? Stethoscope;
                const isActive = index === activeGroup;

                return (
                  <button
                    aria-selected={isActive}
                    className={`${styles.groupTab} ${isActive ? styles.groupTabActive : ""}`}
                    key={group.title}
                    onClick={() => {
                      setActiveGroup(index);
                      setSelectedService(getServicesForGroup(index)[0] ?? null);
                    }}
                    role="tab"
                    type="button"
                  >
                    <GroupIcon aria-hidden="true" />
                    <span>{group.title}</span>
                  </button>
                );
              })}
            </div>

            <article className={styles.groupPanel} role="tabpanel">
              <div className={styles.groupHeader}>
                <div className={styles.groupIcon}>
                  <ActiveGroupIcon aria-hidden="true" />
                </div>
                <div>
                  <h3>{activeGroupCopy.title}</h3>
                </div>
              </div>
              <ul className={styles.groupNotes}>
                {[activeGroupCopy.description, ...activeGroupCopy.notes].map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
              <div className={styles.servicePills}>
                {activeServiceIds.map((serviceId) => {
                  const serviceIndex = getServiceIndex(serviceId);
                  const service = t.services.items[serviceIndex];
                  const ServiceIcon = serviceIcons[serviceIndex] ?? Stethoscope;
                  const isSelected = activeSelectedService === serviceId;

                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`${styles.servicePill} ${
                        isSelected ? styles.servicePillActive : ""
                      }`}
                      key={serviceId}
                      onClick={() => setSelectedService(serviceId)}
                      type="button"
                    >
                      <ServiceIcon aria-hidden="true" />
                      <span>{service.title}</span>
                    </button>
                  );
                })}
              </div>
              {selectedServiceCopy ? (
                <div className={styles.selectedService}>
                  <span>{String(selectedServiceIndex + 1).padStart(2, "0")}</span>
                  <h4>{selectedServiceCopy.title}</h4>
                  <p>{selectedServiceCopy.description}</p>
                </div>
              ) : null}
            </article>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.processShell}>
            <div className={styles.processIntro}>
              <p className={styles.eyebrow}>{copy.processEyebrow}</p>
              <h2>{copy.processTitle}</h2>
              <p>{copy.processLead}</p>
            </div>

            <div className={styles.timeline}>
              {copy.steps.map((step, index) => {
                const StepIcon = stepIcons[index] ?? ClipboardCheck;

                return (
                  <article className={styles.timelineItem} key={step.title}>
                    <div className={styles.stepMarker}>
                      <StepIcon aria-hidden="true" />
                    </div>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <ContactCta title={copy.ctaTitle} text={copy.ctaLead} />
      </main>
      <SiteFooter />
    </div>
  );
}
