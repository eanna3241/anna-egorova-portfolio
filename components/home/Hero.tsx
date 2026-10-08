import Link from "next/link";
import { assets } from "@/data/assets";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="hero">
      <h1>
        <strong>{site.role}</strong>

        {site.heroLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>

      <img
        className="hero-art"
        src={assets.hero}
        alt=""
        aria-hidden="true"
        draggable="false"
      />

      <Link className="learn-button" href="/about">
        Click on me to learn more
      </Link>
    </section>
  );
}