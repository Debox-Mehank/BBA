import React from 'react';
import Image from "next/image";
import Phone from "../assets/Phone mockup.png";
import QR from "../assets/bba qr  1.png";
import arrow from "../assets/bended-arrow.png";
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <div className="py-20 px-24 bg-bg3 flex items-center justify-around overflow-hidden">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.3)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
      >
        <Image src={Phone} alt='phone' className='w-[378px] h-[683px]' />
      </motion.div>
        <motion.div className='flex flex-col items-start'
                    variants={fadeIn("left", "tween", 0.2, 0.3)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true}}
        
        >
            <h1 className='uppercase text-bg1 font-bebas text-[140px] leading-[120px] max-w-[522px] mb-5' >Deliciously
            Simple</h1>
            <p className='font-rubik text-4xl text-bg1 max-w-[571px] uppercase mb-10' >Download the Bawarchi App
            Today</p>
            <div className='flex items-center ' >
                <Image src={QR}  alt='QR' className='w-[240px] h-[240px]' />
                <div className='flex flex-col ml-5' >
                    <Image src={arrow} alt='arrow' className='w-[54px] h-[45px]' />
                    <span className='font-rubik text-xl' >Scan the QR code!</span>

                </div>

            </div>

        </motion.div>

    </div>
  )
}

export default Download