"use client";
import React from "react";

function HeadingText({ text }) {
  return (
    <h1 className="text-4xl sm:text-5xl max-w-xs sm:max-w-md text-center font-semibold bg-gradient-to-b from-stone-700 to-stone-900 bg-clip-text text-transparent">
      {text}
    </h1>
  );
}

export default HeadingText;
