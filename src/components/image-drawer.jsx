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

export function ImageDrawer({ children }) {
  const [goal, setGoal] = React.useState(350);

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
              <TabsContent value="tab-1">
                <p className="text-muted-foreground p-4 text-center text-xs">
                  Content for Tab 1
                </p>
              </TabsContent>
              <TabsContent value="tab-2">
                <p className="text-muted-foreground p-4 text-center text-xs">
                  Content for Tab 2
                </p>
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
