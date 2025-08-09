import React from "react";
import HeroSecton from "@/components/projectPage/hero-section";
import FeaturesSection from "@/components/projectPage/features-section";
import AboutSection from "@/components/projectPage/about-section";
import TypesSection from "@/components/projectPage/types-section";

async function ProjectPage({ params }) {
  const { slug } = await params;

  return (
    <main className="flex items-center overflow-hidden relative justify-center">
      <div className="max-w-7xl w-full flex flex-col gap-16 mx-auto px-0 xl:px-4 py-8">
        <HeroSecton slug={slug} />
        <FeaturesSection slug={slug} />
        <AboutSection slug={slug} />
        <TypesSection slug={slug} />
      </div>
    </main>
  );
}

export default ProjectPage;
