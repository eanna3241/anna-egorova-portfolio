"use client";

import { useEffect, useState } from "react";

export function CaseProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    function updateProgress() {
      cancelAnimationFrame(animationFrame);

      animationFrame = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollHeight =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const nextProgress =
          scrollHeight > 0
            ? Math.min(scrollTop / scrollHeight, 1)
            : 0;

        setProgress(nextProgress);
      });
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="case-progress"
      aria-hidden="true"
    >
      <div
        className="case-progress-bar"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}