"use client";

import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
}: SectionHeadingProps) {
  const headingClassName = [
    styles.headingBlock,
    align === "center" ? styles.center : styles.left,
    inverted ? styles.inverted : "",
  ]
    .filter(Boolean)
    .join(" ");
  const descriptionClassName = [
    styles.description,
    inverted ? styles.descriptionInverted : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={headingClassName}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      {description ? (
        <p className={descriptionClassName}>{description}</p>
      ) : null}
    </div>
  );
}
