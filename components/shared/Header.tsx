"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { assets } from "@/data/assets";
import { site } from "@/data/site";
import { ContactIcon } from "./ContactIcon";

const availabilityMessages = [
  "Open to work",
  "Open to projects",
  "Open to collaborations",
  "Open to global teams",
];

export function Header() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((currentIndex) => {
        return (
          (currentIndex + 1) %
          availabilityMessages.length
        );
      });
    }, 2800);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <header className="site-header">
      <Link
        className="identity"
        href="/about"
        aria-label="Open About page"
      >
        <img
          src={assets.profile}
          alt="Anna Egorova"
          draggable="false"
        />

        <strong>
          Anna
          <br />
          Egorova
        </strong>
      </Link>

      <div
        className="availability"
        aria-live="polite"
      >
        <i aria-hidden="true" />

        <span
          key={messageIndex}
          className="availability-text"
        >
          {availabilityMessages[messageIndex]}
        </span>
      </div>

      <nav aria-label="Contacts">
        <ContactIcon
          href={site.contacts.telegram}
          label="Telegram"
          icon={assets.icons.telegram}
          hoverIcon={assets.icons.telegramHover}
        />

        <ContactIcon
          href={site.contacts.email}
          label="Email"
          icon={assets.icons.email}
          hoverIcon={assets.icons.emailHover}
        />

        <ContactIcon
          href={site.contacts.linkedin}
          label="LinkedIn"
          icon={assets.icons.linkedin}
          hoverIcon={assets.icons.linkedinHover}
        />

        <ContactIcon
          href={site.contacts.cv}
          label="Download CV"
          icon={assets.icons.cv}
          hoverIcon={assets.icons.cvHover}
          download
        />
      </nav>
    </header>
  );
}