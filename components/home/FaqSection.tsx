"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAppSettings } from "@/app/providers";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  const { t } = useAppSettings();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.section} id="faq">
      <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
      <div className={styles.faqList}>
        {t.faq.items.map((item, index) => {
          const open = openIndex === index;

          return (
            <article
              className={[
                styles.faqItem,
                open ? styles.faqItemOpen : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={item.question}
            >
              <button
                aria-expanded={open}
                className={styles.faqButton}
                onClick={() => setOpenIndex(open ? -1 : index)}
                type="button"
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
              <div aria-hidden={!open} className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
