import React from 'react';
import Image from 'next/image';
import arrowup from "../assets/arrow-up.png";
import CateringReel from "../assets/videos/Reel with Overlay (1) (1).mp4";
import { fadeIn } from '@/utils/motion';
import {motion} from "framer-motion";


const Events = () => {


    return (
      <div className='py-20 px-24 bg-bg2 rounded-[100px] relative -mt-20 flex items-center justify-between z-10 overflow-hidden'>
        <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        >
          <video
             src={CateringReel}
             autoPlay
             loop
             muted 
            className='w-[529px] h-[941px] rounded-[80px] bg-contain' 
            ></video>
        </motion.div>
        
        <motion.div className='flex flex-col items-start max-w-[680px]'
        variants={fadeIn("left", "tween", 0.2, 0.5)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        
        >
          <h1 className='text-[80px] leading-[75px] font-bebas  mb-10 text-bg1'>
          Elevating your events
          with our flavors
          </h1>
          <p className='text-2xl font-rubik max-w-[600px] text-bg1 mb-10'>
            Looking for the best Indian food catering in Atlanta? You&apos;ve come to the right place. Bawarchi Biryanis Atlanta is here to add a delicious zing to your special events. 

          </p>
          
          <p className='flex items-center font-bebas text-3xl text-bg1 font-bold'>
            READ MORE <Image src={arrowup} alt='arrow-up' className='w-[45px] h-[45px]' />
          </p>
        </motion.div>
      </div>
    );
  }
  
  export default Events;
  
