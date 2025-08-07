"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const SCALE_MIN = 0.9;
const SLIDE_GAP = 0; // gap between slides in pixels

const EmblaCarousel = ({ slides = [], options = {} }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const mergedOptions = {
    loop: true,
    skipSnaps: false,
    align: "center",
    startIndex: 1,

    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(mergedOptions);

  const updateStyles = useCallback(() => {
    if (!emblaApi) return;

    const selectedIndex = emblaApi.selectedScrollSnap();
    const slideCount = emblaApi.slideNodes().length;
    const totalSlides = slideCount;

    emblaApi.slideNodes().forEach((slideNode, index) => {
      // Calculate the shortest distance to selected index considering loop
      let diffToSelected = index - selectedIndex;

      // Adjust for looping - find the minimal distance
      if (diffToSelected > totalSlides / 2) diffToSelected -= totalSlides;
      if (diffToSelected < -totalSlides / 2) diffToSelected += totalSlides;

      // Calculate scale and translate based on distance
      const absDiff = Math.abs(diffToSelected);
      const clampedDiff = Math.min(absDiff, 1);

      const scale = 1 - (1 - SCALE_MIN) * clampedDiff;
      const maxTranslateY = 40;
      const translateY = maxTranslateY * clampedDiff;

      // Calculate horizontal offset for better visual flow
      const maxTranslateX = SLIDE_GAP * 2;
      const translateX = maxTranslateX * diffToSelected;

      const transition = isInitialized ? "transform 0.3s ease-out" : "none";

      slideNode.style.transform = `scale(${scale.toFixed(
        3
      )}) translate(${translateX}px, ${translateY}px)`;
      slideNode.style.transition = transition;
      slideNode.style.zIndex = totalSlides - absDiff; // Ensure proper stacking
      slideNode.style.willChange = "transform";
    });

    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [emblaApi, isInitialized]);

  useEffect(() => {
    if (!emblaApi) return;

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

  // Add clone slides for better looping illusion
  const enhancedSlides = [...slides];

  return (
    <div className="embla w-full  ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-2 md:gap-8">
          {enhancedSlides.map((src, index) => (
            <div
              key={index}
              className="embla__slide  flex-[0_0_80%] md:flex-[0_0_50%] max-w-[80%] md:max-w-[50%] aspect-square md:aspect-[6/4] w-full"
            >
              <div className="embla__slide__image   rounded-xl shadow-xl shadow-stone-500/80 w-full h-full overflow-hidden">
                <Image
                  src={src}
                  alt={`Slide ${index % slides.length}`}
                  width={1000}
                  height={1000}
                  className="object-cover  object-center w-full h-full rounded-xl"
                  priority={index === 0}
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
