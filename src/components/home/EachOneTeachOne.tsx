// src/components/home/EachOneTeachOne.tsx
import React from "react";

const EachOneTeachOne = () => {
  // Responsive text sizes - adjust as needed
  const textSize =
    "text-7xl sm:text-8xl md:text-9xl lg:text-[8vw] xl:text-[9rem]";

  return (
    <div
      className={`
      ${textSize}
      font-medium uppercase text-white tracking-tight leading-none
      flex flex-wrap justify-end items-center 
      p-4 lg:p-0
      max-w-full lg:max-w-[400px] // Max width similar to Figma, but allow wrapping
    `}
    >
      <span className="block w-full text-right lg:w-auto lg:mr-4">
        Each One
      </span>{" "}
      <span className="block w-full text-right lg:w-auto lg:mr-4">
        Teach One
      </span>
    </div>
  );
};

export default EachOneTeachOne;
