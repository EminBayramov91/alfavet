"use client";

import Image from "next/image";
import {
  Clock3,
  CalendarCheck,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";
import type { Locale } from "@/app/i18n";
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

type ContactsPageCopy = {
  heroLead: string;
  call: string;
  mapLead: string;
  mapHint: string;
  quickTitle: string;
  quickLead: string;
  formEyebrow: string;
  formTitle: string;
  formLead: string;
  fullName: string;
  fullNamePlaceholder: string;
  phoneNumber: string;
  phonePlaceholder: string;
  mail: string;
  mailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  submit: string;
  formNote: string;
  stepsEyebrow: string;
  stepsTitle: string;
  stepsLead: string;
  steps: Array<{
    title: string;
    description: string;
  }>;
};

const pageCopy: Record<Locale, ContactsPageCopy> = {
  az: {
    heroLead:
      "Qəbulu əvvəlcədən planlaşdırmaq daha rahatdır: zəng edin, WhatsApp-da yazın və ya xəritəni açıb klinikaya gəlmə yolunu yoxlayın.",
    call: "Zəng et",
    mapLead:
      "Klinika Nərimanov rayonunda, Maqsud Əlizadə küçəsində yerləşir. Xəritəyə toxunanda ünvan Google Maps-də açılacaq.",
    mapHint: "Xəritəni açmaq üçün üzərinə klikləyin",
    quickTitle: "Əlaqə məlumatları",
    quickLead: "Komanda qəbul vaxtını dəqiqləşdirmək üçün sizinlə əlaqə saxlayacaq.",
    formEyebrow: "Sorğu forması",
    formTitle: "Qəbul üçün məlumat göndərin",
    formLead:
      "Formanı doldurun, biz e-mail göndərilməsini və avtomatik cavabı növbəti mərhələdə qoşacağıq.",
    fullName: "Ad və soyad",
    fullNamePlaceholder: "Adınızı yazın",
    phoneNumber: "Telefon nömrəsi",
    phonePlaceholder: "+994",
    mail: "E-mail",
    mailPlaceholder: "name@example.com",
    message: "Mətn (istəyə bağlı)",
    messagePlaceholder: "Qısa olaraq nə üçün müraciət etdiyinizi yazın",
    submit: "Göndər",
    formNote: "Göndərmə funksiyası növbəti mərhələdə qoşulacaq.",
    stepsEyebrow: "Qəbul formatı",
    stepsTitle: "Klinikaya gəlməzdən əvvəl",
    stepsLead:
      "Qəbul yazılışla aparılır ki, həkim pasiyentə və sahibinə sakit vaxt ayıra bilsin.",
    steps: [
      {
        title: "Əvvəlcə əlaqə saxlayın",
        description: "Formanı doldurun, zəng edin və ya WhatsApp vasitəsilə yazın.",
      },
      {
        title: "Vaxtı təsdiqləyin",
        description: "Komanda uyğun qəbul saatını və lazım olan hazırlığı deyəcək.",
      },
      {
        title: "Ünvanı xəritədə açın",
        description: "Xəritəyə klikləyərək klinikanın yerini Google Maps-də görün.",
      },
    ],
  },
  en: {
    heroLead:
      "Plan the visit before you arrive: call the clinic, write on WhatsApp or open the route to Alfavet in maps.",
    call: "Call clinic",
    mapLead:
      "The clinic is located on Magsud Alizade Street in Narimanov district. Tap the map to open the address in Google Maps.",
    mapHint: "Click the map to open directions",
    quickTitle: "Contact details",
    quickLead: "The team will get back to you to clarify the visit time.",
    formEyebrow: "Request form",
    formTitle: "Send visit details",
    formLead:
      "Fill out the form. Email delivery and the automatic client reply will be connected in the next step.",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your name",
    phoneNumber: "Phone number",
    phonePlaceholder: "+994",
    mail: "Mail",
    mailPlaceholder: "name@example.com",
    message: "Text (optional)",
    messagePlaceholder: "Briefly describe what you need",
    submit: "Send request",
    formNote: "Submission will be connected in the next stage.",
    stepsEyebrow: "Visit format",
    stepsTitle: "Before you come in",
    stepsLead:
      "Visits are handled by appointment so the doctor can give the patient and owner focused time.",
    steps: [
      {
        title: "Contact the clinic",
        description: "Fill out the form, call or send a short message on WhatsApp.",
      },
      {
        title: "Confirm the time",
        description: "The team will suggest a visit time and preparation if needed.",
      },
      {
        title: "Open the address",
        description: "Click the map to view the clinic location in Google Maps.",
      },
    ],
  },
  ru: {
    heroLead:
      "Запланируйте визит заранее: позвоните в клинику, напишите в WhatsApp или откройте маршрут до Alfavet на карте.",
    call: "Позвонить",
    mapLead:
      "Клиника находится на улице Магсуда Ализаде в Наримановском районе. Нажмите на карту, чтобы открыть адрес в Google Maps.",
    mapHint: "Нажмите на карту, чтобы открыть маршрут",
    quickTitle: "Контактные данные",
    quickLead: "Команда свяжется с вами, чтобы уточнить удобное время приема.",
    formEyebrow: "Форма заявки",
    formTitle: "Отправьте данные для записи",
    formLead:
      "Заполните форму. Отправку на e-mail клиники и автоответ пользователю подключим следующим этапом.",
    fullName: "Full Name",
    fullNamePlaceholder: "Введите ваше имя",
    phoneNumber: "Phone number",
    phonePlaceholder: "+994",
    mail: "Mail",
    mailPlaceholder: "name@example.com",
    message: "Text (optional)",
    messagePlaceholder: "Коротко опишите, что нужно",
    submit: "Отправить заявку",
    formNote: "Отправка формы будет подключена на следующем этапе.",
    stepsEyebrow: "Формат приема",
    stepsTitle: "Перед визитом в клинику",
    stepsLead:
      "Прием ведется по записи, чтобы врач мог спокойно уделить время пациенту и владельцу.",
    steps: [
      {
        title: "Свяжитесь с клиникой",
        description: "Заполните форму, позвоните или отправьте короткое сообщение в WhatsApp.",
      },
      {
        title: "Подтвердите время",
        description: "Команда предложит время приема и подготовку, если она нужна.",
      },
      {
        title: "Откройте адрес",
        description: "Нажмите на карту, чтобы посмотреть клинику в Google Maps.",
      },
    ],
  },
};

export function ContactsPage() {
  const { locale, t } = useAppSettings();
  const copy = pageCopy[locale];

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.hero}>
          <Image
            alt="Alfavet clinic patient"
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
          <div className={styles.requestGrid}>
            <form
              className={styles.formPanel}
              onSubmit={(event) => event.preventDefault()}
            >
              <p className={styles.eyebrow}>{copy.formEyebrow}</p>
              <h2>{copy.formTitle}</h2>
              <p>{copy.formLead}</p>

              <div className={styles.fieldGrid}>
                <label className={styles.field}>
                  <span>{copy.fullName}</span>
                  <input
                    autoComplete="name"
                    name="fullName"
                    placeholder={copy.fullNamePlaceholder}
                    required
                    type="text"
                  />
                </label>

                <label className={styles.field}>
                  <span>{copy.phoneNumber}</span>
                  <input
                    autoComplete="tel"
                    name="phone"
                    placeholder={copy.phonePlaceholder}
                    required
                    type="tel"
                  />
                </label>

                <label className={styles.field}>
                  <span>{copy.mail}</span>
                  <input
                    autoComplete="email"
                    name="email"
                    placeholder={copy.mailPlaceholder}
                    required
                    type="email"
                  />
                </label>

                <label className={styles.field}>
                  <span>{copy.message}</span>
                  <textarea
                    name="message"
                    placeholder={copy.messagePlaceholder}
                    rows={5}
                  />
                </label>
              </div>

              <div className={styles.formFooter}>
                <Button icon={<Send />} type="submit">
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
                title="Alfavet map"
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
      <SiteFooter />
    </div>
  );
}
