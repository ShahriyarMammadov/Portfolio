"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TextTypist = ({ textArray }) => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={textArray}
      speed={{ type: "keyStrokeDelayInMs", value: 100 }}
      wrapper="h3"
      // speed={50}
      repeat={Infinity}
    />
  );
};

export default TextTypist;
