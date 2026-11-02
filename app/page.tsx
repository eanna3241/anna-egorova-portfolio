import { Suspense } from "react";

import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/home/Hero";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { PortfolioRoulette } from "@/components/home/PortfolioRoulette";

export default function HomePage() {
  return (
    <main className="home">
      <PortfolioRoulette />

      <Header />
      <Hero />

      <Suspense fallback={null}>
        <ProjectGallery />
      </Suspense>
    </main>
  );
}