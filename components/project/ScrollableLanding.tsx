"use client";

import {
  useEffect,
  useState,
  type KeyboardEvent,
} from "react";

import { assets } from "@/data/assets";

type ScrollableLandingProps = {
  src: string;
  alt: string;
};

const MOBILE_BREAKPOINT = 768;

export function ScrollableLanding({
  src,
  alt,
}: ScrollableLandingProps) {
  const [isViewerOpen, setIsViewerOpen] =
    useState(false);

  const [isMobileViewerEnabled, setIsMobileViewerEnabled] =
    useState(false);

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

    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setIsViewerOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isViewerOpen]);

  function openViewer() {
    if (!isMobileViewerEnabled) return;

    setIsViewerOpen(true);
  }

  function closeViewer() {
    setIsViewerOpen(false);
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLDivElement>
  ) {
    if (
      isMobileViewerEnabled &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      openViewer();
    }
  }

  return (
    <>
      <div
        className={[
          "scrollable-case-cover",
          isMobileViewerEnabled ? "is-zoomable" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        tabIndex={isMobileViewerEnabled ? 0 : undefined}
        role={isMobileViewerEnabled ? "button" : undefined}
        aria-label={
          isMobileViewerEnabled
            ? `Open ${alt} in fullscreen`
            : alt
        }
        onClick={openViewer}
        onKeyDown={handleKeyDown}
      >
        <img
          src={src}
          alt={alt}
          draggable="false"
        />

        {isMobileViewerEnabled && (
          <span
            className="landing-zoom-label"
            aria-hidden="true"
          >
            View
          </span>
        )}
      </div>

      {isMobileViewerEnabled && isViewerOpen && (
        <div
          className="landing-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} fullscreen viewer`}
          onClick={closeViewer}
        >
          <button
            className="landing-viewer-close"
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
            className="landing-viewer-scroll"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              draggable="false"
            />
          </div>
        </div>
      )}
    </>
  );
}