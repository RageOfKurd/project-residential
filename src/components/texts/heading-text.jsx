"use client";
import React from "react";

function HeadingText({
  text,
  fontSize = "text-4xl sm:text-5xl",
  maxWidth = "max-w-xs sm:max-w-md",
}) {
  return (
    <h1
      className={`${fontSize} ${maxWidth} text-center font-semibold bg-gradient-to-b from-stone-700 to-stone-900 bg-clip-text text-transparent`}
    >
      {text}
    </h1>
  );
}

export default HeadingText;
