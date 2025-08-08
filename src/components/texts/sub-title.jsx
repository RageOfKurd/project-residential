"use client";
import React from "react";

function SubTitle({ text }) {
  return (
    <p className="text-xl md:text-2xl tracking-tight max-w-[22rem] md:max-w-md mt-4 text-center text-stone-600 font-normal">
      {text}
    </p>
  );
}

export default SubTitle;
