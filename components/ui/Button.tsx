"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  target,
  rel,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  className,
  ariaLabel,
}: ButtonProps) {
  const buttonClassName = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {icon ? <span className={styles.iconSlot}>{icon}</span> : null}
      <span>{children}</span>
    </>
  );
  const isInternalLink =
    href?.startsWith("/") && !target && !href.startsWith("//");

  if (href) {
    if (isInternalLink) {
      return (
        <Link
          aria-label={ariaLabel}
          className={buttonClassName}
          href={href}
          onClick={onClick}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        aria-label={ariaLabel}
        className={buttonClassName}
        href={href}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className={buttonClassName}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
