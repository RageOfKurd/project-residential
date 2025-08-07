import React from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/carousel";

async function ProjectPage({ params }) {
  const { slug } = await params;

  // 3 image slides (you can swap URLs as needed)
  const slideImages = [
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
  ];

  return (
    <main className="flex items-center overflow-hidden justify-center">
      <div className="max-w-7xl w-full mx-auto px-0 py-8">
        <section className="flex gap-4 flex-col items-center justify-center">
          <Image
            src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745619168366/original/715e973a-30ea-4c3c-99bf-64fccb0c3f42.jpeg?im_w=480"
            alt={`Project ${slug}`}
            width={500}
            height={500}
            className="w-20 h-20"
          />

          <h1 className="text-3xl max-w-[18rem] text-center text-stone-700 font-semibold">
            Right at the Heart of The City
          </h1>

          {/* ✅ Carousel replaces the single <article> */}
          <EmblaCarousel slides={slideImages} />

          <p className="text-lg max-w-sm mt-2 text-center text-stone-600 font-medium">
            carved with the latest modern designs by major engineering
            companies.
          </p>
        </section>
      </div>
    </main>
  );
}

export default ProjectPage;
