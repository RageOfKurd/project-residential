"use client";
import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const SCALE_MIN = 0.9;

const EmblaCarousel = ({ slides = [], options = {} }) => {
  const mergedOptions = {
    loop: true,
    align: "center",
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions);
  const slideRefs = useRef([]);

  const updateStyles = useCallback(() => {
    if (!emblaApi) return;

    const scrollProgress = emblaApi.scrollProgress();
    const scrollSnapList = emblaApi.scrollSnapList();

    scrollSnapList.forEach((snap, index) => {
      let diffToTarget = snap - scrollProgress;

      // ✅ Use mergedOptions.loop instead of emblaApi.options.loop
      const normalizedDiff =
        Math.abs(diffToTarget) > 0.5 && mergedOptions.loop
          ? 1 - Math.abs(diffToTarget)
          : diffToTarget;

      const scale =
        1 - (1 - SCALE_MIN) * Math.min(Math.abs(normalizedDiff * 2), 1);

      const imageEl = slideRefs.current[index];
      if (imageEl) {
        imageEl.style.transform = `scale(${scale.toFixed(3)})`;
        imageEl.style.transition = `transform 0.3s ease-out`;
      }
    });
  }, [emblaApi, mergedOptions.loop]);

  useEffect(() => {
    if (!emblaApi) return;

    updateStyles();
    emblaApi
      .on("scroll", updateStyles)
      .on("reInit", updateStyles)
      .on("select", updateStyles);
  }, [emblaApi, updateStyles]);

  return (
    <div className="embla w-full  md:px-12">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {slides.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_80%] md:flex-[0_0_50%] max-w-[80%] md:max-w-[50%] aspect-square md:aspect-[6/4] w-full"
            >
              <div
                ref={(el) => (slideRefs.current[index] = el)}
                className="embla__slide__image bg-purple-800 rounded-xl shadow-xl shadow-stone-500/60 w-full h-full overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={1000}
                  height={1000}
                  className="object-cover object-center w-full h-full rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
