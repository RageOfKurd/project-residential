"use client";
import React from "react";
import HeadingText from "@/components/texts/heading-text";
import { motion } from "framer-motion";

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

function AboutSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex relative mx-4 md:mx-auto max-w-5xl rounded-xl py-16 gap-8 flex-col items-center"
    >
      {/* Heading */}
      <motion.div
        variants={childVariants}
        className="text-center space-y-4 px-4"
      >
        <HeadingText fontSize="text-4xl sm:text-4xl" text="About Dlli Shar" />
      </motion.div>

      {/* Body text */}
      <motion.div
        variants={childVariants}
        className="px-4 text-lg sm:text-xl text-stone-600 leading-relaxed text-pretty text-justify max-w-3xl space-y-6"
      >
        <p>
          A project located in the heart of the city, designed with the latest
          contemporary architecture by leading engineering companies, making the
          decision to purchase a unit in the project very easy thanks to the
          unique services it offers.
        </p>

        <p>
          The project covers an area of <strong>20,000 m²</strong>, consisting
          of a 30-story residential tower and a 25-story commercial tower. The
          residential tower contains six apartments per floor, built to the
          latest international standards. It also includes two floors dedicated
          to indoor parking, one floor for services, and 26 floors for
          residential units.
        </p>

        <p>
          The apartment layouts are divided into two types, all equipped with
          full modern amenities. Every apartment has a balcony, and all units
          are designed to face outward without being blocked by other
          apartments, offering unobstructed views of the beautiful city of
          Slemani.
        </p>

        <p>
          Out of the total 20,000 m² project area, only 5,400 m² is used for the
          towers, leaving the rest as green space, children’s play areas, and
          service facilities such as a daycare, landscaped gardens, clinic,
          mall, cafés, gym, swimming pool, and world-class retail on the main
          Salem Street.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default AboutSection;
