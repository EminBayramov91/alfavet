import az from "./i18n/locales/az.json";
import en from "./i18n/locales/en.json";
import ru from "./i18n/locales/ru.json";

export const locales = ["az", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
};

export const dictionaries = {
  az,
  en,
  ru,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
