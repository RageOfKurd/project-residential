"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const SCALE_MIN = 0.9;

const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const mergedOptions = {
    loop: true,
    align: "center",
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions);

  const updateStyles = useCallback(() => {
    if (!emblaApi) return;

    const selectedIndex = emblaApi.selectedScrollSnap();
    const slideCount = emblaApi.slideNodes().length;

    emblaApi.slideNodes().forEach((slideNode, index) => {
      let diffToSelected = index - selectedIndex;

      if (diffToSelected > slideCount / 2) diffToSelected -= slideCount;
      if (diffToSelected < -slideCount / 2) diffToSelected += slideCount;

      const absDiff = Math.abs(diffToSelected);
      const clampedDiff = Math.min(absDiff, 1);

      const scale = 1 - (1 - SCALE_MIN) * clampedDiff;
      const maxTranslateY = 40;
      const translateY = maxTranslateY * clampedDiff;

      // Only apply transition after initialization to prevent initial lag
      const transition = isInitialized ? "transform 0.3s ease-out" : "none";

      slideNode.style.transform = `scale(${scale.toFixed(
        3
      )}) translateY(${translateY}px)`;
      slideNode.style.transition = transition;
      slideNode.style.willChange = "transform"; // Optimize for hardware acceleration
    });

    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [emblaApi, isInitialized]);

  useEffect(() => {
    if (!emblaApi) return;

    // Initialize styles immediately
    updateStyles();

    const onSelect = () => {
      requestAnimationFrame(updateStyles);
    };

    emblaApi
      .on("scroll", onSelect)
      .on("reInit", updateStyles)
      .on("select", onSelect);

    return () => {
      emblaApi.off("scroll", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, updateStyles]);

  return (
    <div className="embla w-full md:px-12">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-6 md:gap-8">
          {slides.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_70%] md:flex-[0_0_40%] max-w-[70%] md:max-w-[40%] aspect-square md:aspect-[6/4] w-full"
            >
              <div className="embla__slide__image bg-gray-200 rounded-xl shadow-xl shadow-stone-500/60 w-full h-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  width={1000}
                  height={1000}
                  className="object-cover object-center w-full h-full rounded-xl"
                  priority={index === 0} // Prioritize first image
                  loading={index === 0 ? "eager" : "lazy"}
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
