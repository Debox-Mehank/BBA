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
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "-100%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "100%"]);

    return (
        <div 
            ref={containerRef}
            className="py-20 px-24 bg-bg1 rounded-[100px] -mt-20 flex items-center justify-evenly z-10 relative h-screen overflow-hidden"
        >
            <div className='gap-x-10 flex'>
                <motion.div style={{ y: y1 }} className='flex flex-col gap-y-16 '>
                    <Image src={Image1} alt='gallery-image' className='w-[360px] h-[500px] rounded-lg' />
                    <Image src={Image2} alt='gallery-image' className='w-[360px] h-[500px] rounded-lg' />
                </motion.div>
                <motion.div style={{ y: y2 }} className='flex flex-col gap-y-16 '>
                    <Image src={Image3} alt='gallery-image' className='w-[360px] h-[500px] rounded-lg' />
                    <Image src={Image4} alt='gallery-image' className='w-[360px] h-[500px] rounded-lg' />
                

                </motion.div>
            </div>
            <motion.div
            variants={fadeIn("right", "tween", 0.2, 0.5)} 
initial="hidden"
whileInView="show"
viewport={{ once: true}}
            >
                <h1 className='font-bebas text-[80px] leading-[70px]  text-bg3 max-w-[438px] mb-10' >
                Capturing the essence of
                Bawarchi Atlanta in every frame
                </h1>
                <p className='flex items-center font-bebas text-3xl text-bg3 '>
          READ MORE <Image src={arrowup} alt='arrow-up' className='w-[45px] h-[45px]' />
        </p>
            </motion.div>
        </div>
    )
}

export default FrameSection;