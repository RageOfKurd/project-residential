"use client";
import React from "react";
import HeadingText from "@/components/texts/heading-text";
import SubTitle from "@/components/texts/sub-title";
import Divider from "@/components/divider";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurVignette from "../ui/blur-vignette";

// Parent animation setup
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // delay between each child
      delayChildren: 0.2, // delay before first child
    },
  },
};

// Reusable child fade/slide
const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

function FeaturesSection({ slug }) {
  const features = [
    { title: "Parking", imageUrl: "/parking.png" },
    { title: "Clinic", imageUrl: "/clinic.png" },
    { title: "Gym", imageUrl: "/gym.png" },
    { title: "Market", imageUrl: "/market.png" },
    { title: "Moroccan Ceiling", imageUrl: "/ceiling.png" },
    { title: "Kindergarten", imageUrl: "/kindergarten.png" },
    { title: "Stove System", imageUrl: "/stove-system.png" },
    { title: "Clinic", imageUrl: "/clinic.png" },
    { title: "Gym", imageUrl: "/gym.png" },
    { title: "Parking", imageUrl: "/parking.png" },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex relative mx-4 rounded-xl py-16 gap-6 md:gap-10 bg-stone-50 flex-col items-center justify-center"
    >
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center gap-6 w-full"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center ">
          {/* Title */}
          <motion.div variants={childVariants}>
            <HeadingText
              fontSize="text-4xl sm:text-4xl"
              text="Project Features"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={childVariants}>
            <SubTitle
              fontSize="text-lg md:text-xl"
              maxWidth="max-w-[20rem] md:max-w-xs"
              text="All the services you need for a comfortable stay."
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full flex items-center justify-center"
          variants={childVariants}
        >
          <Divider />
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="
          my-4 md:my-8
    grid 
    grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
    gap-6 sm:gap-8 
    w-full 
    space-y-8
    max-w-6xl 
    mx-auto 
    px-4 sm:px-6 
    [align-items:start]
  "
          style={{
            gridAutoRows: "1fr", // make all items same height
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="
        flex flex-col   items-center justify-start 
        w-full mx-auto 
      "
              variants={childVariants}
            >
              <div className="aspect-square w-full  max-w-[6rem] rounded-xl   mb-2">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full rounded-xl"
                  priority={index === 0}
                />
              </div>
              <p className="text-lg text-stone-800 font-normal text-center">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default FeaturesSection;
