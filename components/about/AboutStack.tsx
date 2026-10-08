"use client";

import { useRef, useState } from "react";
import { aboutCards } from "@/data/about";

const SWIPE_DISTANCE = 50;

export function AboutStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [pendingIndex, setPendingIndex] = useState<number | null>(
    null
  );
  const [direction, setDirection] = useState<"next" | "previous">(
    "next"
  );

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const nextIndex =
    (activeIndex + 1) % aboutCards.length;

  const previousIndex =
    (activeIndex - 1 + aboutCards.length) %
    aboutCards.length;

  const previewIndex =
    pendingIndex !== null ? pendingIndex : nextIndex;

  function changeCard(
    targetIndex: number = nextIndex,
    newDirection: "next" | "previous" = "next"
  ) {
    if (isSwitching) return;
    if (targetIndex === activeIndex) return;

    setDirection(newDirection);
    setPendingIndex(targetIndex);
    setIsSwitching(true);

    window.setTimeout(() => {
      setActiveIndex(targetIndex);
      setPendingIndex(null);
      setDirection("next");
      setIsSwitching(false);
    }, 700);
  }

  function showNextCard() {
    changeCard(nextIndex, "next");
  }

  function showPreviousCard() {
    changeCard(previousIndex, "previous");
  }

  function handleTouchStart(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  }

  function handleTouchEnd(
    event: React.TouchEvent<HTMLDivElement>
  ) {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      isSwitching
    ) {
      touchStartX.current = null;
      touchStartY.current = null;
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

    if (!isHorizontalSwipe || !isLongEnough) {
      return;
    }

    if (distanceX < 0) {
      showNextCard();
    } else {
      showPreviousCard();
    }
  }

  function getCardClass(index: number) {
    if (index === activeIndex) {
      return "is-active";
    }

    if (index === previewIndex) {
      return "is-next";
    }

    return "is-hidden";
  }

  function getDotDirection(targetIndex: number) {
    const forwardDistance =
      (targetIndex - activeIndex + aboutCards.length) %
      aboutCards.length;

    const backwardDistance =
      (activeIndex - targetIndex + aboutCards.length) %
      aboutCards.length;

    return forwardDistance <= backwardDistance
      ? "next"
      : "previous";
  }

  return (
    <>
      <div
        className={[
          "about-stack",
          isSwitching ? "is-switching" : "",
          direction === "previous"
            ? "is-switching-previous"
            : "is-switching-next",
        ]
          .filter(Boolean)
          .join(" ")}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {aboutCards.map((card, index) => {
          const isPreview = index === previewIndex;

          const isHidden =
            index !== activeIndex &&
            index !== previewIndex;

          return (
            <button
              key={card.title}
              type="button"
              className={`about-card ${getCardClass(
                index
              )}`}
              onClick={() => {
                if (isPreview) {
                  showNextCard();
                }
              }}
              aria-label={
                isPreview
                  ? `Open ${card.title}`
                  : card.title
              }
              aria-hidden={isHidden}
              tabIndex={isPreview ? 0 : -1}
            >
              <div className="about-card-image">
                <img src={card.image} alt="" />
              </div>

              <div className="about-card-content">
                <h2>{card.title}</h2>

                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <div className="about-dots">
        {aboutCards.map((card, index) => (
          <button
            key={card.title}
            type="button"
            className={`about-dot ${
              index === activeIndex
                ? "is-active"
                : ""
            }`}
            onClick={() =>
              changeCard(
                index,
                getDotDirection(index)
              )
            }
            aria-label={`Open ${card.title}`}
            aria-current={
              index === activeIndex ? "true" : undefined
            }
          />
        ))}
      </div>
    </>
  );
}