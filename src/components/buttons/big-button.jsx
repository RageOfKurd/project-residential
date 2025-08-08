"use client";
import React from "react";
import "./big-button.css";

const BigButton = ({ children, ...props }) => {
  return (
    <button role="button" className="purple-button " {...props}>
      <span className="purple-text h">{children || "Golden Button"}</span>
    </button>
  );
};

export default BigButton;
