"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Thali from "../assets/lunchThali.png";
import { blurHashToDataURL } from "@/utils/blurhash";

interface IOfferSection {
  offerSectionTitle: string;
  offerSectionContent: string;
  offerSectionSubContent: string;
  offerSectionImage: {
    url: string;
  };
}

const LunchSection: React.FC<IOfferSection> = ({
  offerSectionContent,
  offerSectionImage,
  offerSectionSubContent,
  offerSectionTitle,
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end center"], // Adjust the end value to 'center' or a similar point
  });

  // Transform scroll position to vertical movement
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]); // Adjust the end value as needed

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center py-10 px-6 sm:py-20 sm:px-16 md:px-24 bg-bg3 -mt-24"
    >
      <h1 className="font-bebas mt-[60px] text-[50px] sm:text-[60px] md:text-[80px] leading-[180px] lg:text-[120px] xl:text-[200px] text-bg1 mb-20 w-full text-center">
        {offerSectionTitle}
      </h1>
      <motion.div
        style={{ y: yTransform }}
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust duration and easing as needed
        // className="w-full h-full"
      >
        <Image
          src={offerSectionImage.url}
          alt="thali"
          className="w-[950px] h-[300px] xsm:w-[600px] xsm:h-[400px] lg:w-[1176px] lg:h-[500px]"
          width={1100}
          height={500}

          // placeholder="blur"
          // blurDataURL={blurHashToDataURL("LLIXsnxv18wb~ot8IWa0x^j[S~M|")}
        />
      </motion.div>
      <p className="text-rubik text-xl md:text-2xl max-w-[1242px] text-bg1 text-center mb-10 md:-mt-[140px] md:mb-5 leading-8">
        {offerSectionContent}
      </p>
      <p className="text-2xl md:text-3xl font-rubik text-bg1 text-center font-medium mb-20">
        {offerSectionSubContent}
      </p>
    </div>
  );
};

export default LunchSection;
