"use client";

import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useAppSettings } from "@/app/providers";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ContactSection.module.css";

const phoneNumbers = ["+994 12 5644006", "+994 50 3344423", "+994 55 3344423"];
const mapUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=49.8379%2C40.4007%2C49.8431%2C40.4042&layer=mapnik&marker=40.4024885%2C49.8405175";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=40.40248850947148,49.840517541880175";

export function ContactSection() {
  const { t } = useAppSettings();

  return (
    <section className={styles.section} id="contacts">
      <SectionHeading
        description={t.contacts.hoursText}
        eyebrow={t.contacts.eyebrow}
        title={t.contacts.title}
      />
      <div className={styles.contactGrid}>
        <div className={styles.contactPanel}>
          <div className={styles.contactRow}>
            <div className={styles.iconBox}>
              <Phone aria-hidden="true" />
            </div>
            <div>
              <h3>{t.contacts.phone}</h3>
              {phoneNumbers.map((phone) => (
                <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.iconBox}>
              <Mail aria-hidden="true" />
            </div>
            <div>
              <h3>{t.contacts.email}</h3>
              <a href="mailto:info@alfavet.az">info@alfavet.az</a>
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.iconBox}>
              <MapPin aria-hidden="true" />
            </div>
            <div>
              <h3>{t.contacts.address}</h3>
              <a href={mapsLink} target="_blank" rel="noreferrer">
                {t.contacts.addressText}
              </a>
            </div>
          </div>
          <div className={styles.contactRow}>
            <div className={styles.iconBox}>
              <Clock3 aria-hidden="true" />
            </div>
            <div>
              <h3>{t.contacts.hours}</h3>
              <p>{t.contacts.hoursText}</p>
            </div>
          </div>
          <div className={styles.contactActions}>
            <Button
              href="https://wa.me/994503344423"
              icon={<MessageCircle />}
              target="_blank"
              rel="noreferrer"
            >
              {t.contacts.whatsapp}
            </Button>
          </div>
        </div>
        <div className={styles.mapPanel}>
          <div className={styles.mapFrame}>
            <iframe
              aria-hidden="true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              scrolling="no"
              src={mapUrl}
              title={t.contacts.map}
            />
            <a
              aria-label={t.contacts.map}
              className={styles.mapOpenArea}
              href={mapsLink}
              target="_blank"
              rel="noreferrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
