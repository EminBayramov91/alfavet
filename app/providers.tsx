"use client";

import React, {
  createContext,
  useCallback,
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

  const readStoredPreferences = useCallback(() => {
    const storedLocale = window.localStorage.getItem("alfavet-locale");
    const storedTheme = window.localStorage.getItem("alfavet-theme");

    return {
      locale:
        storedLocale && locales.includes(storedLocale as Locale)
          ? (storedLocale as Locale)
          : defaultLocale,
      theme:
        storedTheme === "light" || storedTheme === "dark"
          ? storedTheme
          : defaultTheme,
    };
  }, []);

  const applyStoredPreferences = useCallback(() => {
    const stored = readStoredPreferences();

    preferencesLoaded.current = true;
    setLocaleState(stored.locale);
    setThemeMode(stored.theme);
  }, [readStoredPreferences]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      applyStoredPreferences();
    });

    const handlePageShow = () => {
      applyStoredPreferences();
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "alfavet-locale" || event.key === "alfavet-theme") {
        applyStoredPreferences();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("storage", handleStorage);
    };
  }, [applyStoredPreferences]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.theme = themeMode;

    if (preferencesLoaded.current) {
      window.localStorage.setItem("alfavet-locale", locale);
      window.localStorage.setItem("alfavet-theme", themeMode);
    }
  }, [locale, themeMode]);

  const setLocale = useCallback((nextLocale: Locale) => {
    preferencesLoaded.current = true;
    window.localStorage.setItem("alfavet-locale", nextLocale);
    setLocaleState(nextLocale);
  }, []);

  const toggleTheme = useCallback(() => {
    preferencesLoaded.current = true;
    setThemeMode((current) => {
      const nextTheme = current === "light" ? "dark" : "light";

      window.localStorage.setItem("alfavet-theme", nextTheme);
      return nextTheme;
    });
  }, []);

  const value = useMemo<AppSettings>(
    () => ({
      locale,
      setLocale,
      themeMode,
      toggleTheme,
      t: dictionaries[locale],
    }),
    [locale, setLocale, themeMode, toggleTheme],
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
