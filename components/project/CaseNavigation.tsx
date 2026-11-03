"use client";

import {
  useEffect,
  useState,
} from "react";

export type CaseNavigationItem = {
  id: string;
  label: string;
};

type CaseNavigationProps = {
  items: CaseNavigationItem[];
  title: string;
};

export function CaseNavigation({
  items,
  title,
}: CaseNavigationProps) {
  const [activeId, setActiveId] =
    useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) =>
        document.getElementById(item.id)
      )
      .filter(
        (
          section
        ): section is HTMLElement =>
          Boolean(section)
      );

    if (!sections.length) {
      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio
              );

          const currentSection =
            visibleSections[0];

          if (currentSection?.target.id) {
            setActiveId(
              currentSection.target.id
            );
          }
        },
        {
          root: null,
          rootMargin:
            "-25% 0px -55% 0px",
          threshold: [
            0,
            0.15,
            0.35,
            0.6,
          ],
        }
      );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  function openSection(id: string) {
    const section =
      document.getElementById(id);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveId(id);
  }

  if (!items.length) {
    return null;
  }

  return (
    <nav
      className="case-navigation"
      aria-label={`${title} project sections`}
    >
      <p className="case-navigation-title">
        {title}
      </p>

      <div className="case-navigation-list">
        {items.map((item, index) => {
          const isActive =
            item.id === activeId;

          return (
            <button
              key={item.id}
              className={
                isActive
                  ? "is-active"
                  : ""
              }
              type="button"
              onClick={() =>
                openSection(item.id)
              }
              aria-current={
                isActive
                  ? "location"
                  : undefined
              }
            >
              <span className="case-navigation-number">
                {String(
                  index + 1
                ).padStart(2, "0")}
              </span>

              <span className="case-navigation-label">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}