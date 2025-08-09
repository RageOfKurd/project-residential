"use client";
import React from "react";

function SubTitle({
  text,
  fontSize = "text-xl md:text-2xl",
  maxWidth = "max-w-[22rem] md:max-w-md",
}) {
  return (
    <p
      className={`${fontSize} ${maxWidth} tracking-tight  mt-4 text-center text-stone-600 font-normal`}
    >
      {text}
    </p>
  );
}

export default SubTitle;
