import React from "react";
import HeroSecton from "@/components/projectPage/hero-section";
import FeaturesSection from "@/components/projectPage/features-section";
import AboutSection from "@/components/projectPage/about-section";
import TypesSection from "@/components/projectPage/types-section";
import ContactSection from "@/components/projectPage/contact-section";

async function ProjectPage({ params }) {
  const { slug } = await params;

  return (
    <main className="flex flex-col gap-16 items-center overflow-hidden relative justify-center">
      {/* All normal sections in centered container */}
      <div className="max-w-7xl w-full flex flex-col gap-16 mx-auto px-0 xl:px-4 py-8">
        <HeroSecton slug={slug} />
        <FeaturesSection slug={slug} />
        <AboutSection slug={slug} />
        <TypesSection slug={slug} />
      </div>

      {/* Contact section full-width */}
      <ContactSection slug={slug} />
    </main>
  );
}

export default ProjectPage;
