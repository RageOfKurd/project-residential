"use client";
import React from "react";

function HeadingText({
  text,
  fontSize = "text-4xl sm:text-5xl",
  maxWidth = "max-w-xs sm:max-w-md",
  className = "",
  useGradient = true,
  color = "from-stone-700 to-stone-900",
}) {
  return (
    <h1
      className={`${className} ${fontSize} ${maxWidth} text-center font-semibold ${
        useGradient
          ? `bg-gradient-to-b ${color} bg-clip-text text-transparent`
          : ""
      }`}
    >
      {text}
    </h1>
  );
}

export default HeadingText;
