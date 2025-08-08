import React from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/carousel";
import Float from "@/components/fancy/blocks/float";
import BigButton from "@/components/buttons/big-button";

async function ProjectPage({ params }) {
  const { slug } = await params;

  const slideImages = [
    "https://dlishar.com/wp-content/uploads/2022/09/4.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/11.jpg",
  ];

  return (
    <main className="flex items-center overflow-hidden relative justify-center">
      <div className="max-w-7xl w-full mx-auto px-0 py-8">
        <section className="flex relative gap-6 flex-col items-center justify-center min-h-screen">
          {/* Content with proper z-index */}
          <div className="relative z-20 flex flex-col items-center justify-center gap-6 w-full">
            <Float
              rotationRange={[
                2 + Math.random() * 2,
                2 + Math.random() * 2,
                2 + Math.random() * 2,
              ]}
            >
              <Image
                src="https://a0.muscache.com/im/pictures/canvas/Canvas-1745619168366/original/715e973a-30ea-4c3c-99bf-64fccb0c3f42.jpeg?im_w=480"
                alt={`Project ${slug}`}
                width={500}
                height={500}
                className="w-22 h-22"
              />
            </Float>

            <div className="relative">
              <h1 className="text-4xl md:text-5xl max-w-xs md:max-w-md text-center font-semibold bg-gradient-to-b from-stone-700 to-stone-900 bg-clip-text text-transparent">
                Right at the Heart of The City
              </h1>
            </div>

            <EmblaCarousel slides={slideImages} />

            <p className="text-xl md:text-2xl tracking-tight max-w-[22rem] md:max-w-xs mt-4 text-center text-stone-600 font-normal">
              carved with the latest modern designs by major engineering
              companies.
            </p>
            <div className="w-full max-w-16 h-0.5 bg-stone-400" />
            <BigButton>Explore Gallery</BigButton>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectPage;
