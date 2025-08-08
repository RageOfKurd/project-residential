"use client";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

export function ImageDrawer({ children }) {
  const InteriorImages = [
    "https://dlishar.com/wp-content/uploads/2022/06/cam11-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/pool-photoshoped-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/reception-1-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/BED-ROOM-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/cam-4-_Post2-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/reception-3.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/BED-DRESSING-2-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/cam-10_Post-1.jpg",
    "https://dlishar.com/wp-content/uploads/2022/06/cam11-1.jpg",
  ];

  const ExteriorImages = [
    "https://dlishar.com/wp-content/uploads/2022/09/4.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/11.jpg",
  ];

  const Slider = ({ images }) => {
    const [sliderRef, instanceRef] = useKeenSlider({
      loop: false,
      mode: "free",
      rubberband: true,
      renderMode: "performance",
      slides: { perView: 1, spacing: 12 },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 16 },
        },
      },
    });

    React.useEffect(() => {
      if (instanceRef.current) {
        instanceRef.current.update();
      }
    }, [images, instanceRef]);

    return (
      <div ref={sliderRef} className="keen-slider w-full">
        <PhotoProvider>
          {images.map((src, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <PhotoView key={idx} src={src}>
                <div className="relative w-full hover:cursor-pointer aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`Slide ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
    );
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className="text-xl">Image Gallery</DrawerTitle>
            <DrawerDescription>Browse over the images</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-0">
            <Tabs defaultValue="tab-1" className="items-center">
              <TabsList className="mb-4">
                <TabsTrigger value="tab-1">Exterior Design</TabsTrigger>
                <TabsTrigger value="tab-2">Interior Design</TabsTrigger>
              </TabsList>

              <TabsContent value="tab-1" className="w-full">
                <Slider images={ExteriorImages} />
              </TabsContent>

              <TabsContent value="tab-2" className="w-full">
                <Slider images={InteriorImages} />
              </TabsContent>
            </Tabs>
          </div>
          <DrawerFooter>
            <DrawerClose asChild></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
