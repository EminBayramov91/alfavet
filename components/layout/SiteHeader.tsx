"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { localeLabels, locales, type Locale } from "@/app/i18n";
import { useAppSettings } from "@/app/providers";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/about", key: "about" },
  { href: "/services", key: "services" },
  { href: "/gallery", key: "gallery" },
  { href: "/blog", key: "blog" },
  { href: "/contacts", key: "contacts" },
] as const;

export function SiteHeader() {
  const { locale, setLocale, themeMode, toggleTheme, t } = useAppSettings();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const themeSwitchClassName = [
    styles.themeSwitch,
    themeMode === "dark" ? styles.themeSwitchDark : styles.themeSwitchLight,
  ].join(" ");
  const switchThumbClassName = [
    styles.switchThumb,
    themeMode === "dark" ? styles.switchThumbDark : styles.switchThumbLight,
  ].join(" ");

  return (
    <header className={styles.headerShell}>
      <div className={styles.headerInner}>
        <Link
          aria-label="Alfavet"
          className={styles.logoLink}
          href="/"
          onClick={closeMenu}
        >
          <Image
            alt="Alfavet"
            height={34}
            priority
            src="/images/alfavet-logo-light.webp"
            width={156}
          />
        </Link>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link className={styles.navLink} href={item.href} key={item.key}>
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <LanguageDropdown
            className={styles.desktopLanguage}
            label={t.nav.language}
            locale={locale}
            onChange={setLocale}
          />

          <button
            aria-checked={themeMode === "dark"}
            aria-label={t.nav.theme}
            className={themeSwitchClassName}
            onClick={toggleTheme}
            role="switch"
            type="button"
          >
            <span
              className={[
                styles.switchIcon,
                themeMode === "light" ? styles.switchIconActive : "",
              ].join(" ")}
            >
              <Sun size={16} />
            </span>
            <span
              className={[
                styles.switchIcon,
                themeMode === "dark" ? styles.switchIconActive : "",
              ].join(" ")}
            >
              <Moon size={16} />
            </span>
            <span className={switchThumbClassName}>
              {themeMode === "light" ? <Sun size={17} /> : <Moon size={17} />}
            </span>
          </button>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.nav.close : t.nav.menu}
            className={styles.menuButton}
            onClick={() => setMenuOpen((current) => !current)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className={styles.mobilePanel}>
          <div className={styles.mobileControls}>
            <LanguageDropdown
              className={styles.mobileLanguage}
              label={t.nav.language}
              locale={locale}
              onChange={setLocale}
            />
          </div>

          {navItems.map((item) => (
            <Link
              className={styles.mobileLink}
              href={item.href}
              key={item.key}
              onClick={closeMenu}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}

type LanguageDropdownProps = {
  className?: string;
  label: string;
  locale: Locale;
  onChange: (locale: Locale) => void;
};

function LanguageDropdown({
  className,
  label,
  locale,
  onChange,
}: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const rootClassName = [styles.languageRoot, className].filter(Boolean).join(" ");
  const chevronClassName = [
    styles.chevronIcon,
    open ? styles.chevronIconOpen : "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className={rootClassName} ref={rootRef}>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={label}
        className={styles.languageButton}
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <Languages aria-hidden="true" size={16} />
        <span>{localeLabels[locale]}</span>
        <ChevronDown aria-hidden="true" className={chevronClassName} size={15} />
      </button>

      {open ? (
        <div aria-label={label} className={styles.languageMenu} role="listbox">
          {locales.map((item) => (
            <button
              aria-selected={item === locale}
              className={[
                styles.languageOption,
                item === locale ? styles.languageOptionActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={item}
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              role="option"
              type="button"
            >
              {localeLabels[item]}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
