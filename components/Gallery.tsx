import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import People from "../assets/people.png";
import arrowup from "../assets/arrow-up.png";
import first from "../assets/gallery/1.png";
import second from "../assets/gallery/2.png";
import third from "../assets/gallery/3.png";
import fourth from "../assets/gallery/4.png";
import fifth from "../assets/gallery/5.png";
import { fadeIn } from '../utils/motion';
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
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg2 rounded-[60px] lg:rounded-[100px] relative -mt-20 flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center z-10 overflow-hidden'>
      <motion.div
    variants={fadeIn("right", "tween", 0.2, 0.5)} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true}}
    className='custom-lg:mr-10 custom-lg:mb-0 mb-20 custom-lg:w-1/2 w-full flex items-center justify-center'
      
      >
        <Image 
          src={images[currentImageIndex]} 
          alt='reviews' 
          className='xsm:w-[500px] xsm:h-[630px] w-[400px] h-[530px] rounded-[80px] bg-contain' 
        />
      </motion.div>
      
      <motion.div className='flex flex-col custom-lg:items-start  custom-lg:w-1/2 w-full'
      variants={fadeIn("left", "tween", 0.2, 0.5)} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      >
        <h1 className='xl:text-[80px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[75px] 
        text-[50px] leading-[45px]
        font-bebas   xsm:mb-10 mb-14 text-bg1'>
          A decade of crafting delicious memories
        </h1>
        <p className='xsm:text-2xl text-xl font-rubik custom-lg:max-w-[680px] max-w-sreen text-bg1 xsm:mb-10 mb-14'>
          Bawarchi Biryanis isn&apos;t just about food. It&apos;s about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve at our restaurant.
        </p>
        
        <p className='flex items-center font-bebas xsm:text-3xl text-xl text-bg1 font-bold cursor-pointer'>
          READ MORE <Image src={arrowup} alt='arrow-up' className='xsm:w-[45px] w-[35px] xsm:h-[45px] h-[35px]' />
        </p>
      </motion.div>
    </div>
  );
}

export default Gallery;
