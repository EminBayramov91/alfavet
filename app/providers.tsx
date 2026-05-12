"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { dictionaries, type Locale, locales } from "./i18n";

type ThemeMode = "light" | "dark";

type AppSettings = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  t: (typeof dictionaries)[Locale];
};

const AppSettingsContext = createContext<AppSettings | null>(null);
const defaultLocale: Locale = "az";
const defaultTheme: ThemeMode = "dark";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const preferencesLoaded = useRef(false);
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [themeMode, setThemeMode] = useState<ThemeMode>(defaultTheme);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedLocale = window.localStorage.getItem("alfavet-locale");
      const storedTheme = window.localStorage.getItem("alfavet-theme");

      preferencesLoaded.current = true;

      if (storedLocale && locales.includes(storedLocale as Locale)) {
        setLocaleState(storedLocale as Locale);
      } else {
        setLocaleState(defaultLocale);
      }

      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeMode(storedTheme);
      } else {
        setThemeMode(defaultTheme);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = themeMode;

    if (preferencesLoaded.current) {
      window.localStorage.setItem("alfavet-locale", locale);
      window.localStorage.setItem("alfavet-theme", themeMode);
    }
  }, [locale, themeMode]);

  const value = useMemo<AppSettings>(
    () => ({
      locale,
      setLocale: setLocaleState,
      themeMode,
      toggleTheme: () =>
        setThemeMode((current) => (current === "light" ? "dark" : "light")),
      t: dictionaries[locale],
    }),
    [locale, themeMode],
  );

  return (
    <AppSettingsContext.Provider value={value}>
      {children}
    </AppSettingsContext.Provider>
  );
}

export function useAppSettings() {
  const context = useContext(AppSettingsContext);

  if (!context) {
    throw new Error("useAppSettings must be used inside AppProviders");
  }

  return context;
}
