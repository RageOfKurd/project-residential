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

function AboutSection({ slug }) {
  const features = [
    { title: "Parking", imageUrl: "/parking.png" },
    { title: "Clinic", imageUrl: "/clinic.png" },
    { title: "Gym", imageUrl: "/gym.png" },
    { title: "Gym", imageUrl: "/gym.png" },
    { title: "Gym", imageUrl: "/gym.png" },
    { title: "Gym", imageUrl: "/gym.png" },
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex relative mx-4 rounded-xl py-16 gap-6 md:gap-10  flex-col items-center justify-center"
    >
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center gap-6 w-full"
        variants={containerVariants}
      >
        <div className="flex flex-col items-center justify-center ">
          {/* Title */}
          <motion.div variants={childVariants}>
            <HeadingText text="About Dlli Shar" />
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={childVariants}>
            <SubTitle
              maxWidth=" max-w-xl text-start"
              text="A project located in the heart of the city, designed with the latest contemporary architecture by leading engineering companies, making the decision to purchase a unit in the project very easy thanks to the unique services it offers.

The project covers an area of 20,000 m², consisting of a 30-story residential tower and a 25-story commercial tower. The residential tower contains 6 apartments per floor, built to the latest international standards. The residential tower also includes two floors dedicated to indoor parking, one floor dedicated to services, and 26 floors for residential units. The apartment layouts are divided into two types:

All apartments are equipped with full modern amenities. Every apartment has a balcony, and all units are designed so that they face outward without being blocked by other apartments, meaning residents can enjoy unobstructed views of the beautiful city of Slemani.

Out of the total 20,000 m² project area, only 5,400 m² is used for the towers, leaving the rest as green space, children’s play areas, and service facilities such as a daycare, landscaped gardens, clinic, mall, cafés, gym, swimming pool, and world-class brands in several shops and cafés located in front of the project on the main Salem Street.

"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;
