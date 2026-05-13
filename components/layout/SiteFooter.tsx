"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { useAppSettings } from "@/app/providers";
import styles from "./SiteFooter.module.css";

const phoneNumbers = ["+994 12 5644006", "+994 50 3344423", "+994 55 3344423"];
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=40.40248850947148,49.840517541880175";
const footerNavItems = [
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/gallery", key: "gallery" },
  { href: "/contacts", key: "contacts" },
] as const;

export function SiteFooter() {
  const { t } = useAppSettings();
  const footerServices = t.services.items.slice(0, 6);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerPanel}>
        <div className={styles.brand}>
          <Image
            alt="Alfavet"
            height={34}
            src="/images/alfavet-logo-light.webp"
            width={156}
          />
        </div>

        <div className={styles.footerGroup}>
          <h3 className={styles.footerTitle}>{t.footer.clinic}</h3>
          <nav aria-label="Footer navigation" className={styles.footerNav}>
            {footerNavItems.map((item) => (
              <Link className={styles.footerLink} href={item.href} key={item.key}>
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.footerGroup}>
          <h3 className={styles.footerTitle}>{t.footer.services}</h3>
          <nav aria-label="Footer services" className={styles.footerNav}>
            {footerServices.map((service) => (
              <Link className={styles.footerLink} href="/services" key={service.title}>
                {service.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className={styles.footerGroup}>
          <h3 className={styles.footerTitle}>{t.footer.contact}</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone aria-hidden="true" size={16} />
              <span className={styles.phoneList}>
                {phoneNumbers.map((phone) => (
                  <a
                    className={styles.phoneLink}
                    href={`tel:${phone.replaceAll(" ", "")}`}
                    key={phone}
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </li>
            <li>
              <Mail aria-hidden="true" size={16} />
              <a href="mailto:info@alfavet.az">info@alfavet.az</a>
            </li>
            <li>
              <MapPin aria-hidden="true" size={16} />
              <a href={mapsLink} target="_blank" rel="noreferrer">
                {t.contacts.addressText}
              </a>
            </li>
          </ul>
        </div>


      </div>
    </footer>
  );
}
