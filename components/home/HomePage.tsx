"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ApproachSection } from "./ApproachSection";
import { ContactSection } from "./ContactSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { PartnersSection } from "./PartnersSection";
import { ServicesSection } from "./ServicesSection";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <PartnersSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
