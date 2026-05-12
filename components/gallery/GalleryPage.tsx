"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { useAppSettings } from "@/app/providers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import styles from "./GalleryPage.module.css";

const imageSources = [
  "/images/gallery/gallery-01-reception.jpg",
  "/images/gallery/gallery-02-dog-care.jpg",
  "/images/gallery/gallery-03-exam.jpg",
  "/images/gallery/gallery-04-kitten-care.jpg",
  "/images/gallery/gallery-05-kittens.jpg",
  "/images/gallery/gallery-06-treatment.jpg",
  "/images/gallery/gallery-07-clinic-room.jpg",
  "/images/gallery/gallery-08-patient.jpg",
  "/images/gallery/gallery-09-vet-portrait.jpg",
  "/images/gallery/gallery-10-team.jpg",
] as const;

function getOffset(index: number, activeIndex: number, length: number) {
  const raw = index - activeIndex;
  const half = Math.floor(length / 2);

  if (raw > half) {
    return raw - length;
  }

  if (raw < -half) {
    return raw + length;
  }

  return raw;
}

function getPositionClass(offset: number) {
  if (offset === 0) return styles.activeSlide;
  if (offset === -1) return styles.previousSlide;
  if (offset === 1) return styles.nextSlide;
  if (offset === -2) return styles.farPreviousSlide;
  if (offset === 2) return styles.farNextSlide;
  return styles.hiddenSlide;
}

export function GalleryPage() {
  const { t } = useAppSettings();
  const slides = useMemo(
    () =>
      imageSources.map((src, index) => ({
        src,
        title: t.galleryPage.slides[index]?.title ?? t.galleryPage.slideLabel,
        description: t.galleryPage.slides[index]?.description ?? "",
      })),
    [t],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragState, setDragState] = useState<{
    startX: number;
    deltaX: number;
    isDragging: boolean;
  } | null>(null);
  const activeSlide = slides[activeIndex];
  const progress = ((activeIndex + 1) / slides.length) * 100;
  const dragOffset =
    dragState?.isDragging && Math.abs(dragState.deltaX) > 2
      ? Math.max(-140, Math.min(140, dragState.deltaX))
      : 0;
  const stageStyle = {
    "--drag-x": `${dragOffset}px`,
    "--drag-x-soft": `${dragOffset * 0.45}px`,
    "--drag-x-far": `${dragOffset * 0.24}px`,
  } as CSSProperties;
  const sliderClassName = [
    styles.sliderShell,
    dragState?.isDragging ? styles.sliderDragging : "",
  ]
    .filter(Boolean)
    .join(" ");

  const goToPrevious = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const goToNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <div className={styles.page}>
      <SiteHeader />
      <main>
        <section className={styles.gallerySection}>
          <div className={styles.galleryIntro}>
            <p className={styles.eyebrow}>{t.galleryPage.eyebrow}</p>
            <h1>{t.galleryPage.title}</h1>
            <p>{t.galleryPage.lead}</p>
          </div>

          <div
            aria-label={t.galleryPage.title}
            className={sliderClassName}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") goToPrevious();
              if (event.key === "ArrowRight") goToNext();
            }}
            onPointerCancel={() => setDragState(null)}
            onPointerDown={(event) => {
              event.currentTarget.setPointerCapture(event.pointerId);
              setDragState({
                startX: event.clientX,
                deltaX: 0,
                isDragging: true,
              });
            }}
            onPointerMove={(event) => {
              setDragState((current) => {
                if (!current?.isDragging) return current;

                return {
                  ...current,
                  deltaX: event.clientX - current.startX,
                };
              });
            }}
            onPointerUp={(event) => {
              if (!dragState?.isDragging) return;
              const movement = event.clientX - dragState.startX;

              if (Math.abs(movement) > 48) {
                if (movement > 0) goToPrevious();
                else goToNext();
              }

              setDragState(null);
            }}
            tabIndex={0}
          >
            <div className={styles.stage} style={stageStyle}>
              {slides.map((slide, index) => {
                const offset = getOffset(index, activeIndex, slides.length);
                const positionClass = getPositionClass(offset);

                return (
                  <button
                    aria-label={`${t.galleryPage.slideLabel} ${index + 1}: ${slide.title}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={[styles.slideCard, positionClass].join(" ")}
                    key={slide.src}
                    onClick={() => {
                      if (dragState && Math.abs(dragState.deltaX) > 8) return;
                      setActiveIndex(index);
                    }}
                    type="button"
                  >
                    <Image
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 760px) 90vw, 760px"
                      src={slide.src}
                    />
                  </button>
                );
              })}
            </div>

            <div className={styles.sliderMeta}>
              <div className={styles.counter}>
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                <div className={styles.progressTrack}>
                  <span style={{ width: `${progress}%` }} />
                </div>
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>

              <div className={styles.caption}>
                <h2>{activeSlide.title}</h2>
                <p>{activeSlide.description}</p>
              </div>

              <div className={styles.controls}>
                <button
                  aria-label={t.galleryPage.previous}
                  onClick={goToPrevious}
                  type="button"
                >
                  <ArrowLeft aria-hidden="true" size={20} />
                </button>
                <button aria-label={t.galleryPage.next} onClick={goToNext} type="button">
                  <ArrowRight aria-hidden="true" size={20} />
                </button>
              </div>
            </div>

            <div className={styles.thumbnailRail}>
              {slides.map((slide, index) => (
                <button
                  aria-label={`${t.galleryPage.slideLabel} ${index + 1}: ${slide.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={styles.thumbnailButton}
                  key={slide.src}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                >
                  <Image alt="" fill sizes="96px" src={slide.src} />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
