"use client";
import React from "react";
import Image from "next/image";

import Float from "./fancy/blocks/float";

function LogoIcon({ imageUrl, slug }) {
  return (
    <div>
      <Float
        rotationRange={[
          2 + Math.random() * 2,
          2 + Math.random() * 2,
          2 + Math.random() * 2,
        ]}
      >
        <Image
          src={imageUrl}
          alt={`Project ${slug}`}
          width={500}
          height={500}
          className="w-22 h-22 sm:w-24 sm:h-24"
        />
      </Float>
    </div>
  );
}

export default LogoIcon;
