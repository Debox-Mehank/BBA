import React from "react";
import Image from "next/image";
import arrowup from "../assets/arrow-up.png";
// import CateringReel from "../assets/videos/ReelCompressed.mp4";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

interface IEvents {
  eventReel: {
    url: string;
  };
  eventTitle: string;
  eventContent: string;
}

const Events: React.FC<IEvents> = ({ eventReel, eventContent, eventTitle }) => {
  const renderMedia = () => {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="xsm:w-[500px] xsm:h-[580px] w-[400px] h-[530px] rounded-[80px] object-cover"
      >
        <source src={eventReel.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <div className="lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg2 rounded-[60px] lg:rounded-[100px] relative -mt-20 flex custom-lg:flex-row flex-col items-center z-10 overflow-hidden">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="custom-lg:mr-10 custom-lg:mb-0 mb-10 custom-lg:w-1/2 w-full flex items-center justify-center"
      >
        {renderMedia()}
      </motion.div>

      <motion.div
        className="flex flex-col custom-lg:items-start custom-lg:w-1/2 w-full custom-lg2:mt-0"
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h1 className="custom-lg2:text-[80px] md:mt-0 text-[60px] custom-lg2:leading-[75px] leading-[55px] font-bebas  mb-10 text-bg1">
          {eventTitle}
        </h1>
        <p className="xsm:text-2xl text-xl font-rubik custom-lg:max-w-[680px] max-w-sreen text-bg1 xsm:mb-10 mb-14 ">
          {eventContent}
        </p>
        <Link href="/catering">
          <p className="flex items-center font-bebas xsm:text-3xl text-xl text-bg1 font-bold cursor-pointer group">
            <span className="transition-all duration-300 ease-in-out">
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

export default Events;
