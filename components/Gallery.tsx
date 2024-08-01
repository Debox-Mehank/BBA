import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import People from "../assets/people.png";
import arrowup from "../assets/arrow-up.png";
import first from "../assets/gallery/1.png";
import second from "../assets/gallery/2.png";
import third from "../assets/gallery/3.png";
import fourth from "../assets/gallery/4.png";
import fifth from "../assets/gallery/5.png";
import { fadeIn } from '@/utils/motion';
import {motion} from "framer-motion";

const Gallery = () => {
  const images = [first, second, third, fourth, fifth]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className='py-20 px-24 bg-bg2 rounded-[100px] relative -mt-20 flex items-center justify-between z-10 overflow-hidden'>
      <motion.div
    variants={fadeIn("right", "tween", 0.2, 0.5)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true}}
      
      >
        <Image 
          src={images[currentImageIndex]} 
          alt='reviews' 
          className='w-[500px] h-[630px] rounded-[80px] bg-contain' 
        />
      </motion.div>
      
      <motion.div className='flex flex-col items-start max-w-[680px]'
      variants={fadeIn("left", "tween", 0.2, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      >
        <h1 className='text-[80px] leading-[75px] font-bebas  mb-10 text-bg1'>
          A decade of crafting delicious memories
        </h1>
        <p className='text-2xl font-rubik max-w-[680px] text-bg1 mb-10'>
          Bawarchi Biryanis isn&apos;t just about food. It&apos;s about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve at our restaurant.
        </p>
        
        <p className='flex items-center font-bebas text-3xl text-bg1 font-bold'>
          READ MORE <Image src={arrowup} alt='arrow-up' className='w-[45px] h-[45px]' />
        </p>
      </motion.div>
    </div>
  );
}

export default Gallery;
