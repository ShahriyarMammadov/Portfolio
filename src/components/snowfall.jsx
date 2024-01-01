"use client";
import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

const SnowfallComponent = () => {
  //   const [pageHeight, setPageHeight] = useState(0);

  //   useEffect(() => {
  //     const updatePageHeight = () => {
  //       setPageHeight(document.body.scrollHeight);
  //     };

  //     updatePageHeight();

  //     window.addEventListener("resize", updatePageHeight);
  //     document.addEventListener("scroll", updatePageHeight);

  //     return () => {
  //       window.removeEventListener("resize", updatePageHeight);
  //       document.removeEventListener("scroll", updatePageHeight);
  //     };
  //   }, []);

  return (
    <Snowfall
      snowflakeCount={750}
      fallSpeed={5}
      speed={[4, 5]}
      windSpeed={5}
      flakeRadius={3}
      radius={[2, 6]}
      style={{
        width: "100%",
        height: `9400px`,
      }}
    />
  );
};

export default SnowfallComponent;
