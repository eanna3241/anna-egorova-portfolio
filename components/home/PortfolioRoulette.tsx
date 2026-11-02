"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const categoryLabels: Record<string, string> = {
  mobile: "Mobile",
  web: "Web",
  presentation: "Presentation",
  graphic: "Graphic",
  concept: "Concept",
};

const rouletteProjects = projects.filter(
  (project) => project.tags.length > 0
);

function getProjectWords(project: (typeof projects)[number]) {
  return {
    format:
      categoryLabels[project.category] ?? project.category,
    focus: project.tags[0] ?? "Design",
    skill: project.tags[1] ?? project.tags[0] ?? "Creative",
  };
}

function getRandomProject() {
  return rouletteProjects[
    Math.floor(Math.random() * rouletteProjects.length)
  ];
}

export function PortfolioRoulette() {
  const initialProject = rouletteProjects[0];
  const initialWords = getProjectWords(initialProject);

  const [isOpen, setIsOpen] = useState(true);
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const [activeProject, setActiveProject] =
    useState(initialProject);

  const [format, setFormat] = useState(
    initialWords.format
  );

  const [focus, setFocus] = useState(
    initialWords.focus
  );

  const [skill, setSkill] = useState(
    initialWords.skill
  );

  const timers = useRef<number[]>([]);

  function clearTimers() {
    timers.current.forEach((timer) => {
      window.clearInterval(timer);
      window.clearTimeout(timer);
    });

    timers.current = [];
  }

  function closeRoulette() {
    clearTimers();
    setIsSpinning(false);
    setIsOpen(false);

    sessionStorage.setItem(
      "portfolio-intro-seen",
      "true"
    );
  }

  function openRoulette() {
    clearTimers();
    setIsSpinning(false);
    setHasResult(false);
    setIsOpen(true);
  }

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(
      "portfolio-intro-seen"
    );

    if (hasSeenIntro) {
      setIsOpen(false);
    }

    return clearTimers;
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function spinPortfolio() {
    if (isSpinning || rouletteProjects.length < 2) {
      return;
    }

    clearTimers();

    setHasResult(false);
    setIsSpinning(true);

    let targetProject = getRandomProject();

    while (targetProject.slug === activeProject.slug) {
      targetProject = getRandomProject();
    }

    const targetWords = getProjectWords(targetProject);

    const formatInterval = window.setInterval(() => {
      const randomProject = getRandomProject();

      setFormat(
        getProjectWords(randomProject).format
      );
    }, 80);

    const focusInterval = window.setInterval(() => {
      const randomProject = getRandomProject();

      setFocus(
        getProjectWords(randomProject).focus
      );
    }, 90);

    const skillInterval = window.setInterval(() => {
      const randomProject = getRandomProject();

      setSkill(
        getProjectWords(randomProject).skill
      );
    }, 100);

    timers.current.push(
      formatInterval,
      focusInterval,
      skillInterval
    );

    const stopFormat = window.setTimeout(() => {
      window.clearInterval(formatInterval);
      setFormat(targetWords.format);
    }, 700);

    const stopFocus = window.setTimeout(() => {
      window.clearInterval(focusInterval);
      setFocus(targetWords.focus);
    }, 1000);

    const stopSkill = window.setTimeout(() => {
      window.clearInterval(skillInterval);
      setSkill(targetWords.skill);
    }, 1300);

    const showResult = window.setTimeout(() => {
      setActiveProject(targetProject);
      setIsSpinning(false);
      setHasResult(true);
    }, 1400);

    timers.current.push(
      stopFormat,
      stopFocus,
      stopSkill,
      showResult
    );
  }

  if (!isOpen) {
    return (
      <button
        className="roulette-disc"
        type="button"
        onClick={openRoulette}
        aria-label="Open portfolio roulette"
      >
        <span className="roulette-disc-label">
          Spin again
        </span>

        <span
          className="roulette-disc-shape"
          aria-hidden="true"
        >
          <span className="roulette-disc-ring" />

          <span className="roulette-disc-star">
            ✦
          </span>
        </span>
      </button>
    );
  }

  return (
    <div
      className="roulette-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="roulette-title"
    >
      <div
        className="roulette-backdrop"
        onClick={closeRoulette}
      />

      <section className="roulette-modal">
        <button
          className="roulette-close"
          type="button"
          onClick={closeRoulette}
          aria-label="Close portfolio intro"
        >
          <span />
          <span />
        </button>

        <div className="roulette-heading">
          <p>Not sure where to start?</p>

          <h2 id="roulette-title">
            Spin my portfolio
          </h2>

          <span className="roulette-description">
            Let chance choose your first project.
          </span>
        </div>

        <div
          className={`roulette-reels ${
            isSpinning ? "is-spinning" : ""
          }`}
          aria-live="polite"
        >
          <div className="roulette-reel">
            <span>Format</span>
            <strong>{format}</strong>
          </div>

          <div className="roulette-reel">
            <span>Focus</span>
            <strong>{focus}</strong>
          </div>

          <div className="roulette-reel">
            <span>Skill</span>
            <strong>{skill}</strong>
          </div>
        </div>

        <button
          className="roulette-spin-button"
          type="button"
          onClick={spinPortfolio}
          disabled={isSpinning}
        >
          {isSpinning
            ? "Spinning..."
            : hasResult
              ? "Spin again ✦"
              : "Spin portfolio ✦"}
        </button>

        {hasResult && (
          <div className="roulette-result">
            <img
              src={activeProject.preview}
              alt={`${activeProject.shortTitle} project preview`}
              draggable="false"
            />

            <div className="roulette-result-content">
              <div>
                <p>Your project</p>

                <h3>
                  {activeProject.shortTitle}
                </h3>
              </div>

              <Link
                href={`/projects/${activeProject.slug}`}
                onClick={() => {
                  sessionStorage.setItem(
                    "portfolio-intro-seen",
                    "true"
                  );
                }}
              >
                View project →
              </Link>
            </div>
          </div>
        )}

        <button
          className="roulette-skip"
          type="button"
          onClick={closeRoulette}
        >
          Skip and view portfolio
        </button>
      </section>
    </div>
  );
}