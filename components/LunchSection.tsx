"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Thali from "../assets/Thali 1.png";

const LunchSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform scroll position to vertical movement
  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]); // Adjust the end value as needed

  return (
    <div 
      ref={containerRef}
      className='flex flex-col justify-center items-center py-20 px-24 bg-bg3 -mt-24'
    >
      <h1 className='font-bebas text-[200px] text-bg1 mb-10'>LUNCH AT BAWARCHI</h1>
      <motion.div
        style={{ y: yTransform }}
        transition={{ duration: 1, ease: "easeInOut" }} // Adjust duration and easing as needed
      >
        <Image src={Thali} alt='thali' className='w-[676px] h-[570px]' />
      </motion.div>
      <p className='text-rubik text-2xl max-w-[1242px] text-bg1 text-center mb-5 leading-8'>
        Enjoy our daily-changing thali, featuring a delightful assortment of traditional Indian dishes. Experience a new culinary journey with every visit, celebrating the essence of Indian cuisine.
      </p>
      <p className='text-3xl font-rubik text-bg1 text-center font-medium mb-20'>
        Available from 11:30 AM to 3:00 PM
      </p>
    </div>
  );
}

export default LunchSection;
