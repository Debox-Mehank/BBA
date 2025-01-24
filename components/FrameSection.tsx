"use client";

import React, { IframeHTMLAttributes, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import arrowup from "../assets/mingcute_arrow-up-line.png";
import { fadeIn } from "@/utils/motion";
import { blurHashToDataURL } from "@/utils/blurhash";
import Link from "next/link";

interface IFrameSection {
  frameSectionTitle: string;
  frameSectionImage1: {
    url: string;
  };
  frameSectionImage2: {
    url: string;
  };
  frameSectionImage3: {
    url: string;
  };
  frameSectionImage4: {
    url: string;
  };
  frameSectionBlurHash1: string;
  frameSectionBlurHash2: string;
  frameSectionBlurHash3: string;
  frameSectionBlurHash4: string;
}

const FrameSection: React.FC<IFrameSection> = ({
  frameSectionImage1,
  frameSectionImage2,
  frameSectionImage3,
  frameSectionImage4,
  frameSectionTitle,
  frameSectionBlurHash1,
  frameSectionBlurHash2,
  frameSectionBlurHash3,
  frameSectionBlurHash4,
}) => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["40%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <div className="py-10 px-6 sm:py-20 sm:px-6 md:px-24 bg-bg1 md:min-h-[120vh] rounded-[60px] md:rounded-[100px] -mt-20 flex items-center justify-evenly z-10 relative h-full lg:h-screen lg:flex-row flex-col overflow-hidden">
      <div
        ref={scrollRef}
        className="gap-x-10 flex py-10 lg:h-full lg:overflow-hidden"
      >
        <div className="hidden lg:block relative w-[360px] h-full overflow-hidden">
          <motion.div
            style={{ y: y1 }}
            className="absolute top-[10%] left-0 space-y-12"
          >
            <Image
              src={frameSectionImage1.url}
              placeholder="blur"
              blurDataURL={blurHashToDataURL(frameSectionBlurHash1)}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-[10px]"
              width={360}
              height={500}
            />
            <Image
              src={frameSectionImage2.url}
              placeholder="blur"
              blurDataURL={blurHashToDataURL(frameSectionBlurHash2)}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-[10px]"
              width={360}
              height={500}
            />
          </motion.div>
        </div>
        <div className="hidden lg:block relative w-[360px] h-full overflow-hidden">
          <motion.div
            style={{ y: y2 }}
            className="absolute top-[5%] left-0 space-y-12"
          >
            <Image
              placeholder="blur"
              blurDataURL={blurHashToDataURL(frameSectionBlurHash3)}
              src={frameSectionImage3.url}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-[10px]"
              width={360}
              height={500}
            />
            <Image
              placeholder="blur"
              blurDataURL={blurHashToDataURL(frameSectionBlurHash4)}
              src={frameSectionImage4.url}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-[10px]"
              width={360}
              height={500}
            />
          </motion.div>
        </div>
        <div className="flex items-center flex-col justify-center lg:hidden custom-sm:flex-row">
          <div>
            <Image
              src={frameSectionImage4.url}
              placeholder="blur"
              blurDataURL={blurHashToDataURL(frameSectionBlurHash4)}
              alt="gallery-image"
              className="w-[360px] h-[500px] rounded-[10px]"
              width={360}
              height={500}
            />
          </div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:ml-10 ml-0 lg:items-start items-center mt-8 lg:mt-0"
      >
        <h1 className="font-bebas custom-sm:text-[80px] text-[60px] leading-[55px] custom-sm:leading-[70px] text-bg3 lg:max-w-[438px] mb-10">
          {frameSectionTitle}
        </h1>
        <Link href="/catering">
          <p className="flex items-center font-bebas xsm:text-3xl text-xl text-bg3 font-bold cursor-pointer group">
            <span className="group-hover:text-primary transition-all duration-300 ease-in-out">
              READ MORE
            </span>
            <Image
              src={arrowup}
              alt="arrow-up"
              className="xsm:w-[45px] w-[35px] xsm:h-[45px] h-[35px] group-hover:rotate-45 transition-all duration-300 ease-in-out"
            />
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default FrameSection;
