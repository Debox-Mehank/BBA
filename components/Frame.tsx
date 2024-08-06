"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image1 from "../assets/Gallery1.jpg";
import Image2 from "../assets/Gallery2.jpg";
import Image3 from "../assets/Gallery3.jpg";
import Image4 from "../assets/Gallery4.png";
import arrowup from "../assets/mingcute_arrow-up-line.png";
import { fadeIn } from '@/utils/motion';


const FrameSection = () => {
   
    return (
        <div className="py-10 px-6 sm:py-20 sm:px-6 md:px-24 md:py-24 bg-bg1 rounded-[60px] md:rounded-[100px] -mt-20 flex items-center justify-evenly  relative h-full lg:h-screen overflow-hidden lg:flex-row flex-col">

            <div className='gap-x-10 flex mt-4 custom-sm:mt-0'>
                <motion.div  className='flex flex-col '>
                    <Image src={Image4} alt='gallery-image' className='w-[500px] h-[600px] rounded-[40px] ' />
                </motion.div>
            </div>
            <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.5)} 
initial="hidden"
whileInView="show"
viewport={{ once: true}}
className='lg:ml-10 ml-0 lg:items-start items-center mt-20 lg:mt-0'
            >
                <h1 className='font-bebas custom-sm:text-[80px] text-[60px] leading-[55px] custom-sm:leading-[70px]  text-bg3 lg:max-w-[600px]  mb-10' >
                Capturing the essence of
                Bawarchi Atlanta in every frame
                </h1>
                <p className='flex items-center font-bebas text-3xl text-bg3 cursor-pointer '>
          READ MORE <Image src={arrowup} alt='arrow-up' className='w-[45px] h-[45px]' />
        </p>
            </motion.div>
        </div>
    )
}

export default FrameSection;