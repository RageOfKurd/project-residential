"use client";
import React from "react";

function SubTitle({
  text,
  fontSize = "text-xl md:text-2xl",
  maxWidth = "max-w-[22rem] md:max-w-md",
  color = "text-stone-600",
}) {
  return (
    <p
      className={`${fontSize} ${maxWidth} tracking-tight  mt-4 text-center ${color} font-normal`}
    >
      {text}
    </p>
  );
}

export default SubTitle;
