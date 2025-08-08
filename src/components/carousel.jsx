"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import BlurVignette from "@/components/ui/blur-vignette";

const SCALE_MIN = 0.9;
const SLIDE_GAP = 0;

const Carousel = ({ slides = [], options = {} }) => {
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
      let diffToSelected = index - selectedIndex;
      if (diffToSelected > totalSlides / 2) diffToSelected -= totalSlides;
      if (diffToSelected < -totalSlides / 2) diffToSelected += totalSlides;

      const absDiff = Math.abs(diffToSelected);
      const clampedDiff = Math.min(absDiff, 1);

      const scale = 1 - (1 - SCALE_MIN) * clampedDiff;
      const maxTranslateY = 40;
      const translateY = maxTranslateY * clampedDiff;

      const maxTranslateX = SLIDE_GAP * 2;
      const translateX = maxTranslateX * diffToSelected;

      const transition = isInitialized ? "transform 0.3s ease-out" : "none";

      slideNode.style.transform = `scale(${scale.toFixed(
        3
      )}) translate(${translateX}px, ${translateY}px)`;
      slideNode.style.transition = transition;
      slideNode.style.zIndex = totalSlides - absDiff;
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

  const enhancedSlides = [...slides];

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-2 md:gap-4">
          {enhancedSlides.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_80%] sm:flex-[0_0_60%] sm:max-w-[60%] max-w-[80%] md:flex-[0_0_80%] md:max-w-[80%] lg:flex-[0_0_70%] lg:max-w-[70%] xl:flex-[0_0_55%] xl:max-w-[55%] aspect-square md:aspect-[6/4] w-full"
            >
              <div
                style={{
                  backgroundImage: "url('/two.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                className="embla__slide__image p-3 rounded-xl shadow-xl shadow-stone-500/80 w-full h-full overflow-visible"
              >
                <BlurVignette
                  radius="0px"
                  inset="2px"
                  transitionLength="60px"
                  blur="100px"
                  className="aspect-square object-cover w-full h-full md:aspect-[6/4] rounded-xl flex-1"
                >
                  <Image
                    src={src}
                    alt={`Slide ${index % slides.length}`}
                    width={1000}
                    height={1000}
                    className="object-cover border-4 border-purple-700 object-center w-full h-full rounded-2xl"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </BlurVignette>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
