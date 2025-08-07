import React from "react";
import Image from "next/image";

async function ProjectPage({ params }) {
  const { slug } = await params;
  return (
    <main className={`flex items-center justify-center`}>
      <div className={`max-w-7xl  w-full mx-auto px-4 py-8`}>
        <section className="flex gap-4 flex-col items-center justify-center  ">
          <Image
            src={`https://a0.muscache.com/im/pictures/canvas/Canvas-1745619168366/original/715e973a-30ea-4c3c-99bf-64fccb0c3f42.jpeg?im_w=480`}
            alt={`Project ${slug}`}
            width={500}
            height={500}
            className={`w-20 h-20`}
          />
          <h1
            className={`text-3xl max-w-[18rem]  text-center text-stone-700 font-semibold `}
          >
            Right at the Heart of The City
          </h1>

          <article
            className={`bg-purple-800  rounded-xl  shadow-xl shadow-stone-500/60 max-w-3xl mx-6 aspect-square md:aspect-[6/4] w-full `}
          >
            <Image
              src={`https://dlishar.com/wp-content/uploads/2022/09/7.jpg`}
              alt={`Project ${slug}`}
              width={500}
              height={500}
              className={`object-cover   rounded-xl object-center w-full h-full`}
            />
          </article>
          <p
            className={`text-lg max-w-sm mt-2   text-center text-stone-600 font-medium `}
          >
            carved with the latest modern designs by major engineering
            companies.
          </p>
        </section>
      </div>
    </main>
  );
}

export default ProjectPage;
