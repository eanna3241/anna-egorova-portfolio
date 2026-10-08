import { Suspense } from "react";

import { Header } from "@/components/shared/Header";
import { Hero } from "@/components/home/Hero";
import { ProjectGallery } from "@/components/home/ProjectGallery";

export default function HomePage() {
  return (
    <main className="home">
      <Header />
      <Hero />

      <Suspense fallback={null}>
        <ProjectGallery />
      </Suspense>
    </main>
  );
}