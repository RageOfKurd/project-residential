"use client";
import React from "react";
import Carousel from "@/components/carousel";
import BigButton from "@/components/buttons/big-button";
import HeadingText from "@/components/texts/heading-text";
import LogoIcon from "@/components/logo-icon";
import SubTitle from "@/components/texts/sub-title";
import Divider from "@/components/divider";
import { motion } from "framer-motion";
import { ImageDrawer } from "../image-drawer";
import { PhotoProvider } from "react-photo-view";

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

function HeroSecton({ slug }) {
  const slideImages = [
    "https://dlishar.com/wp-content/uploads/2022/09/4.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/7.jpg",
    "https://dlishar.com/wp-content/uploads/2022/09/11.jpg",
  ];

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex relative gap-6 md:gap-10  flex-col items-center justify-center min-h-screen"
    >
      {/* Content with proper z-index */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-6 w-full">
        <motion.div variants={childVariants}>
          <LogoIcon
            imageUrl={
              "https://a0.muscache.com/im/pictures/canvas/Canvas-1745619168366/original/715e973a-30ea-4c3c-99bf-64fccb0c3f42.jpeg?im_w=480"
            }
            slug={slug}
          />
        </motion.div>
        <motion.div variants={childVariants}>
          <HeadingText text={`Right at the Heart of The City`} />
        </motion.div>
        <motion.div variants={childVariants} className="w-full">
          <Carousel slides={slideImages} />
        </motion.div>
        <motion.div variants={childVariants}>
          <SubTitle
            text={`carved with the latest modern designs by major engineering companies.`}
          />
        </motion.div>

        <motion.div
          className={`w-full flex items-center justify-center`}
          variants={childVariants}
        >
          <Divider />
        </motion.div>

        {/* Button — keep bounce */}
        <motion.div
          variants={childVariants}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ImageDrawer>
            <BigButton>Explore Gallery</BigButton>
          </ImageDrawer>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default HeroSecton;
