"use client";

import {
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

import { assets } from "@/data/assets";

type PresentationGalleryProps = {
  title: string;
  images: string[];
  ndaSlides?: number[];
};

const MOBILE_BREAKPOINT = 768;
const SWIPE_DISTANCE = 50;

export function PresentationGallery({
  title,
  images,
  ndaSlides = [],
}: PresentationGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isViewerOpen, setIsViewerOpen] =
    useState(false);

  const [
    isMobileViewerEnabled,
    setIsMobileViewerEnabled,
  ] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const activeSlideNumber = activeIndex + 1;

  const isActiveSlideNda =
    ndaSlides.includes(activeSlideNumber);

  const hasMultipleSlides = images.length > 1;

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT}px)`
    );

    function updateMobileState() {
      const isMobile = mediaQuery.matches;

      setIsMobileViewerEnabled(isMobile);

      if (!isMobile) {
        setIsViewerOpen(false);
      }
    }

    updateMobileState();

    mediaQuery.addEventListener(
      "change",
      updateMobileState
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMobileState
      );
    };
  }, []);

  useEffect(() => {
    if (!isViewerOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsViewerOpen(false);
      }

      if (
        event.key === "ArrowRight" &&
        images.length > 1
      ) {
        setActiveIndex((currentIndex) => {
          return (currentIndex + 1) % images.length;
        });
      }

      if (
        event.key === "ArrowLeft" &&
        images.length > 1
      ) {
        setActiveIndex((currentIndex) => {
          return (
            (currentIndex - 1 + images.length) %
            images.length
          );
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isViewerOpen, images.length]);

  if (!images.length) {
    return null;
  }

  function showNextSlide() {
    if (!hasMultipleSlides) return;

    setActiveIndex((currentIndex) => {
      return (currentIndex + 1) % images.length;
    });
  }

  function showPreviousSlide() {
    if (!hasMultipleSlides) return;

    setActiveIndex((currentIndex) => {
      return (
        (currentIndex - 1 + images.length) %
        images.length
      );
    });
  }

  function openViewer() {
    if (!isMobileViewerEnabled) {
      return;
    }

    setIsViewerOpen(true);
  }

  function closeViewer() {
    setIsViewerOpen(false);
  }

  function handleTouchStart(
    event: TouchEvent<HTMLDivElement>
  ) {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  }

  function handleTouchEnd(
    event: TouchEvent<HTMLDivElement>
  ) {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    const distanceX =
      touch.clientX - touchStartX.current;

    const distanceY =
      touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    const isHorizontalSwipe =
      Math.abs(distanceX) > Math.abs(distanceY);

    const isLongEnough =
      Math.abs(distanceX) >= SWIPE_DISTANCE;

    if (
      !hasMultipleSlides ||
      !isHorizontalSwipe ||
      !isLongEnough
    ) {
      return;
    }

    if (distanceX < 0) {
      showNextSlide();
    } else {
      showPreviousSlide();
    }
  }

  const mainImageClassName = [
    "presentation-gallery-main",
    isMobileViewerEnabled ? "is-zoomable" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <section
        className="presentation-gallery"
        aria-label={`${title} presentation slides`}
      >
        <button
          className={mainImageClassName}
          type="button"
          onClick={openViewer}
          aria-label={
            isMobileViewerEnabled
              ? `Open ${title} slide ${activeSlideNumber} in fullscreen`
              : `${title} slide ${activeSlideNumber}`
          }
        >
          <img
            src={images[activeIndex]}
            alt={`${title} slide ${activeSlideNumber}`}
            draggable="false"
          />

          {isActiveSlideNda && (
            <span className="presentation-nda-label">
              Project under NDA
            </span>
          )}

          {isMobileViewerEnabled && (
            <span
              className="presentation-zoom-label"
              aria-hidden="true"
            >
              View
            </span>
          )}
        </button>

        {hasMultipleSlides && (
          <div className="presentation-gallery-thumbnails">
            {images.map((image, index) => {
              const slideNumber = index + 1;

              const isNda =
                ndaSlides.includes(slideNumber);

              return (
                <button
                  key={image}
                  className={
                    activeIndex === index
                      ? "presentation-thumbnail active"
                      : "presentation-thumbnail"
                  }
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show slide ${slideNumber}`}
                  aria-pressed={activeIndex === index}
                >
                  <img
                    src={image}
                    alt=""
                    draggable="false"
                  />

                  {isNda && (
                    <span className="presentation-thumbnail-nda">
                      NDA
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {isMobileViewerEnabled && isViewerOpen && (
        <div
          className="presentation-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} slide viewer`}
          onClick={closeViewer}
        >
          <button
            className="presentation-viewer-close"
            type="button"
            onClick={closeViewer}
            aria-label="Close fullscreen view"
          >
            <img
              src={assets.icons.close}
              alt=""
              aria-hidden="true"
              draggable="false"
            />
          </button>

          <div
            className="presentation-viewer-counter"
            aria-live="polite"
          >
            {activeSlideNumber} / {images.length}
          </div>

          <div
            className="presentation-viewer-content"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={images[activeIndex]}
              className="presentation-viewer-image"
              src={images[activeIndex]}
              alt={`${title} slide ${activeSlideNumber}`}
              draggable="false"
            />

            {isActiveSlideNda && (
              <span className="presentation-viewer-nda">
                Project under NDA
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}