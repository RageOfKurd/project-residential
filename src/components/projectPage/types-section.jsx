"use client";
import React from "react";
import HeadingText from "@/components/texts/heading-text";
import SubTitle from "@/components/texts/sub-title";
import Divider from "@/components/divider";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation configs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// Apartment types data
const apartmentTypes = [
  {
    name: "Type A",
    size: "250 m²",
    bedrooms: 4,
    image: "/type-a.png",
    rooms: [
      { name: "Master Bedroom", size: "4.00 × 8.35 m" },
      { name: "Bedroom 2", size: "3.80 × 4.50 m" },
      { name: "Bedroom 3", size: "3.60 × 4.20 m" },
      { name: "Kitchen", size: "4.20 × 3.50 m" },
      { name: "Living Room", size: "6.50 × 5.00 m" },
    ],
  },
  {
    name: "Type B",
    size: "300 m²",
    bedrooms: 5,
    image: "/type-b.png",
    rooms: [
      { name: "Master Bedroom", size: "5.00 × 7.80 m" },
      { name: "Bedroom 2", size: "4.00 × 4.50 m" },
      { name: "Bedroom 3", size: "3.80 × 4.20 m" },
      { name: "Bedroom 4", size: "3.60 × 4.00 m" },
      { name: "Kitchen", size: "4.50 × 3.70 m" },
      { name: "Living Room", size: "7.00 × 5.50 m" },
    ],
  },
];

function TypesSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative mx-4 rounded-xl py-16 gap-10 bg-stone-50 flex flex-col items-center"
    >
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        variants={containerVariants}
      >
        <HeadingText fontSize="text-4xl sm:text-4xl" text="Types" />
        <SubTitle
          fontSize="text-lg md:text-xl"
          maxWidth="max-w-[20rem] md:max-w-xs"
          text="Project consists of 2 types of apartments"
        />
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={childVariants}
        className="w-full flex justify-center"
      >
        <Divider />
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-20 w-full">
        {apartmentTypes.map((type, index) => (
          <motion.div
            key={type.name}
            variants={childVariants}
            className={`w-full max-w-6xl px-4 my-6 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`}
          >
            {/* Image — alternates sides */}
            <div
              className={`w-full max-w-sm mx-auto md:max-w-md ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={type.image}
                alt={type.name}
                width={800}
                height={800}
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>

            {/* Text */}
            <div
              className={`flex flex-col gap-6 ${
                index % 2 !== 0 ? "md:items-end text-right" : "md:items-start"
              } items-center`}
            >
              <HeadingText fontSize="text-4xl" text={type.name} />
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-purple-600/10 py-2 px-4 rounded-lg">
                  <HeadingText
                    fontSize="text-2xl md:text-xl"
                    text={type.size}
                    className="text-purple-900"
                    useGradient={false}
                  />
                </div>
                <span className="text-2xl text-stone-800 font-normal">
                  <strong>{type.bedrooms}</strong> bedrooms
                </span>
              </div>

              {/* Room list */}
              {type.rooms.map((room, i) => (
                <div
                  key={i}
                  className={`flex flex-row items-center w-full max-w-sm gap-2`}
                >
                  <span className="text-xl text-stone-700 font-normal">
                    {room.name}
                  </span>
                  <div className="flex-1 w-full">
                    <Divider color="bg-stone-300" maxWidth="max-w-full" />
                  </div>
                  <span className="text-xl text-stone-700 font-normal">
                    {room.size}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default TypesSection;
