"use client";

import * as React from "react";

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

export function ImageDrawer({ children }) {
  const InteriorImages = [
    "https://dlishar.com/wp-content/uploads/2022/09/4.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/11.jpg",
  ];

  const ExteriorImages = [
    "https://dlishar.com/wp-content/uploads/2022/09/4.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/11.jpg",
  ];
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent desiredHeight={"60%"}>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className={`text-xl`}>Image Gallery</DrawerTitle>
            <DrawerDescription>Browse over the images</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-0">
            <Tabs defaultValue="tab-1" className="items-center">
              <TabsList>
                <TabsTrigger value="tab-1">Exterior Design</TabsTrigger>
                <TabsTrigger value="tab-2">Interior Design</TabsTrigger>
              </TabsList>
              <TabsContent className={`w-full `} value="tab-1">
                <div className=" p-4 ">
                  <Image
                    src={ExteriorImages[0]}
                    alt={`Slide`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full  aspect-square  object-center  rounded-2xl"
                  />
                </div>
              </TabsContent>
              <TabsContent value="tab-2">
                <div className="text-muted-foreground p-4 text-center text-xs">
                  Content for Tab 2
                </div>
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
