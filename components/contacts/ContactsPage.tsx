"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Clock3,
  CalendarCheck,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import contactsPageCopy from "@/app/i18n/pages/contacts.json";
import { useAppSettings } from "@/app/providers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ContactsPage.module.css";

const phoneNumbers = ["+994 12 5644006", "+994 50 3344423", "+994 55 3344423"];
const whatsappLink = "https://wa.me/994503344423";
const mapUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=49.8379%2C40.4007%2C49.8431%2C40.4042&layer=mapnik&marker=40.4024885%2C49.8405175";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=40.40248850947148,49.840517541880175";
const minimumNameLength = 3;
const minimumPhoneLength = 7;

type ContactFormState = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialContactFormState: ContactFormState = {
  fullName: "",
  phone: "",
  email: "",
  message: "",
};

const pageCopy = contactsPageCopy.page;
const formMessages = contactsPageCopy.form;

export function ContactsPage() {
  const { locale, t } = useAppSettings();
  const copy = pageCopy[locale];
  const messages = formMessages[locale];
  const [formValues, setFormValues] = useState<ContactFormState>(
    initialContactFormState,
  );
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const validateForm = () => {
    const errors: ContactFormErrors = {};
    const trimmedName = formValues.fullName.trim();
    const trimmedEmail = formValues.email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (trimmedName.length < minimumNameLength) {
      errors.fullName = messages.validation.fullName;
    }

    if (
      formValues.phone.length < minimumPhoneLength ||
      !/^\+?\d+$/.test(formValues.phone)
    ) {
      errors.phone = messages.validation.phone;
    }

    if (!emailPattern.test(trimmedEmail)) {
      errors.email = messages.validation.email;
    }

    return errors;
  };

  const handleFieldChange =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = field === "phone"
        ? event.target.value
            .replace(/[^\d+]/g, "")
            .replace(/(?!^)\+/g, "")
        : event.target.value;

      setFormValues((current) => ({ ...current, [field]: value }));

      if (formErrors[field]) {
        setFormErrors((current) => {
          const next = { ...current };
          delete next[field];
          return next;
        });
      }
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setFormValues(initialContactFormState);
    setIsSuccessOpen(true);
  };

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <Image
            alt={t.contacts.title}
            className={styles.heroImage}
            fill
            priority
            sizes="100vw"
            src="/images/gallery/gallery-03-exam.jpg"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.eyebrow}>{t.contacts.eyebrow}</p>
              <h1>{t.contacts.title}</h1>
              <p>{copy.heroLead}</p>
              <div className={styles.heroActions}>
                <Button href="/contacts#contact-form" icon={<CalendarCheck />} size="lg">
                  {t.hero.primary}
                </Button>
                <Button
                  href={whatsappLink}
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

        <section className={styles.requestSection} id="contact-form">
          <div className={styles.requestIntro}>
            <SectionHeading
              description={copy.formLead}
              eyebrow={copy.formEyebrow}
              title={copy.formTitle}
            />
          </div>

          <div className={styles.requestGrid}>
            <form className={styles.formPanel} noValidate onSubmit={handleSubmit}>
              <div className={styles.fieldGrid}>
                <label
                  className={`${styles.field} ${
                    formErrors.fullName ? styles.fieldError : ""
                  }`}
                >
                  <span>{copy.fullName}</span>
                  <input
                    aria-describedby={
                      formErrors.fullName ? "fullName-error" : undefined
                    }
                    aria-invalid={Boolean(formErrors.fullName)}
                    autoComplete="name"
                    minLength={minimumNameLength}
                    name="fullName"
                    onChange={handleFieldChange("fullName")}
                    placeholder={copy.fullNamePlaceholder}
                    required
                    type="text"
                    value={formValues.fullName}
                  />
                  {formErrors.fullName ? (
                    <small id="fullName-error">{formErrors.fullName}</small>
                  ) : null}
                </label>

                <label
                  className={`${styles.field} ${
                    formErrors.phone ? styles.fieldError : ""
                  }`}
                >
                  <span>{copy.phoneNumber}</span>
                  <input
                    aria-describedby={formErrors.phone ? "phone-error" : undefined}
                    aria-invalid={Boolean(formErrors.phone)}
                    autoComplete="tel"
                    inputMode="tel"
                    name="phone"
                    onChange={handleFieldChange("phone")}
                    pattern="\+?[0-9]*"
                    placeholder={copy.phonePlaceholder}
                    required
                    type="tel"
                    value={formValues.phone}
                  />
                  {formErrors.phone ? (
                    <small id="phone-error">{formErrors.phone}</small>
                  ) : null}
                </label>

                <label
                  className={`${styles.field} ${
                    formErrors.email ? styles.fieldError : ""
                  }`}
                >
                  <span>{copy.mail}</span>
                  <input
                    aria-describedby={formErrors.email ? "email-error" : undefined}
                    aria-invalid={Boolean(formErrors.email)}
                    autoComplete="email"
                    inputMode="email"
                    name="email"
                    onChange={handleFieldChange("email")}
                    placeholder={copy.mailPlaceholder}
                    required
                    type="text"
                    value={formValues.email}
                  />
                  {formErrors.email ? (
                    <small id="email-error">{formErrors.email}</small>
                  ) : null}
                </label>

                <label className={styles.field}>
                  <span>{copy.message}</span>
                  <textarea
                    name="message"
                    onChange={handleFieldChange("message")}
                    placeholder={copy.messagePlaceholder}
                    rows={5}
                    value={formValues.message}
                  />
                </label>
              </div>

              <div className={styles.formFooter}>
                <Button
                  className={styles.submitButton}
                  icon={<Send />}
                  size="lg"
                  type="submit"
                >
                  {copy.submit}
                </Button>
                <span>{copy.formNote}</span>
              </div>
            </form>

            <aside className={styles.contactPanel} aria-label={copy.quickTitle}>
              <div className={styles.contactIntro}>
                <p className={styles.eyebrow}>{copy.quickTitle}</p>
                <h2>{copy.call}</h2>
                <p>{copy.quickLead}</p>
              </div>

              <div className={styles.contactRows}>
                <article className={styles.contactRow}>
                  <div className={styles.iconBox}>
                    <Phone aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{t.contacts.phone}</h3>
                    {phoneNumbers.map((phone) => (
                      <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}>
                        {phone}
                      </a>
                    ))}
                  </div>
                </article>

                <article className={styles.contactRow}>
                  <div className={styles.iconBox}>
                    <Mail aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{t.contacts.email}</h3>
                    <a href="mailto:info@alfavet.az">info@alfavet.az</a>
                  </div>
                </article>

                <article className={styles.contactRow}>
                  <div className={styles.iconBox}>
                    <MapPin aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{t.contacts.address}</h3>
                    <a href={mapsLink} rel="noreferrer" target="_blank">
                      {t.contacts.addressText}
                    </a>
                  </div>
                </article>

                <article className={styles.contactRow}>
                  <div className={styles.iconBox}>
                    <Clock3 aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{t.contacts.hours}</h3>
                    <p>{t.contacts.hoursText}</p>
                  </div>
                </article>
              </div>
            </aside>
          </div>
        </section>

        <section className={styles.mapSection}>
          <SectionHeading
            description={copy.stepsLead}
            eyebrow={copy.stepsEyebrow}
            title={copy.stepsTitle}
          />
          <div className={styles.mapGrid}>
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
                rel="noreferrer"
                target="_blank"
              />
              <span className={styles.mapHint}>
                <Navigation aria-hidden="true" size={16} />
                {copy.mapHint}
              </span>
            </div>

            <div className={styles.visitPanel}>
              <p className={styles.eyebrow}>{t.contacts.map}</p>
              <h2>{t.contacts.address}</h2>
              <p>{copy.mapLead}</p>
              <div className={styles.stepList}>
                {copy.steps.map((step, index) => (
                  <article className={styles.stepItem} key={step.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
              <Button
                href={mapsLink}
                icon={<Navigation />}
                rel="noreferrer"
                target="_blank"
                variant="secondary"
              >
                {t.contacts.map}
              </Button>
            </div>
          </div>
        </section>
      </main>
      {isSuccessOpen ? (
        <div
          className={styles.successOverlay}
          onClick={() => setIsSuccessOpen(false)}
          role="presentation"
        >
          <div
            aria-labelledby="contact-success-title"
            aria-modal="true"
            className={styles.successDialog}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className={styles.successIcon}>
              <CheckCircle2 aria-hidden="true" />
            </div>
            <h2 id="contact-success-title">{messages.success.title}</h2>
            <p>{messages.success.text}</p>
            <Button onClick={() => setIsSuccessOpen(false)}>
              {messages.success.close}
            </Button>
          </div>
        </div>
      ) : null}
      <SiteFooter />
    </div>
  );
}
