"use client";
import React from "react";

function Divider({ color = "bg-stone-500", maxWidth = "max-w-16" }) {
  return <div className={`w-full ${maxWidth} h-0.5 ${color} origin-center`} />;
}

export default Divider;
