import React from "react";

async function ProjectPage({ params }) {
  const { slug } = await params;
  return (
    <main className={`flex items-center justify-center`}>
      <section className="flex flex-col   items-center justify-center max-w-4xl ">
        <h1 className={`text-5xl max-w-md text-center text-white font-medium `}>
          Now you can Airbnb more than an Airbnb
        </h1>
      </section>
    </main>
  );
}

export default ProjectPage;
