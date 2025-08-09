"use client";
import React from "react";
import HeadingText from "@/components/texts/heading-text";
import SubTitle from "@/components/texts/sub-title";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail } from "lucide-react";

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

function ContactSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full py-20 flex flex-col items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://dlishar.com/wp-content/uploads/2022/09/12.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-purple-900/90" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center space-y-8 px-4 max-w-5xl w-full"
        variants={containerVariants}
      >
        {/* Title */}
        <div className="flex flex-col items-center">
          <HeadingText
            color={`from-stone-100 to-stone-300`}
            fontSize="text-4xl sm:text-4xl"
            text="Contact Us"
          />
          <SubTitle
            fontSize="text-lg md:text-xl"
            maxWidth="max-w-[20rem] md:max-w-xs mx-auto"
            color="text-stone-200"
            text="We’d love to hear from you. Reach out or visit us in person."
          />
        </div>

        {/* Contact details */}
        <div className="grid gap-8 sm:grid-cols-3 text-stone-100">
          {/* Phone Numbers */}
          <motion.div
            variants={childVariants}
            className="flex flex-col items-center space-y-2"
          >
            <Phone className="w-8 h-8 text-stone-300" />
            <a
              href="tel:+9647701970606"
              className="text-lg font-semibold hover:underline focus:outline-none f"
            >
              0770 197 0606
            </a>
            <a
              href="tel:+9647501970606"
              className="text-lg font-semibold hover:underline focus:outline-none "
            >
              0750 197 0606
            </a>
          </motion.div>

          {/* Address */}
          <motion.div
            variants={childVariants}
            className="flex flex-col items-center space-y-2 text-center"
          >
            <MapPin className="w-8 h-8 text-stone-300" />
            <p className="text-lg font-semibold">
              Slemany - Salim Street
              <br />
              Below Khasraw Khal Bridge
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={childVariants}
            className="flex flex-col items-center space-y-2"
          >
            <Mail className="w-8 h-8 text-stone-300" />
            <a
              href="mailto:info@dlishar.com"
              className="text-lg font-semibold hover:underline focus:outline-none  "
            >
              info@dlishar.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default ContactSection;
