import React from "react";

import HeroSecton from "@/components/projectPage/hero-section";

async function ProjectPage({ params }) {
  const { slug } = await params;

  return (
    <main className="flex items-center overflow-hidden relative justify-center">
      <div className="max-w-7xl w-full mx-auto px-0 xl:px-4 py-8">
        <HeroSecton slug={slug} />
      </div>
    </main>
  );
}

export default ProjectPage;
