import React from 'react';
import Image from 'next/image';
import Briyani from "../assets/Group 1.png";
import ImageTopText from "../assets/Linked Path Group.png"

const CircleImage = () => {
  return (
    <div className='py-20 px-24 bg-bg1 rounded-[100px] -mt-20 flex flex-col items-center justify-between z-10 relative'>
      <h1 className='font-bebas text-bg2 text-7xl'>A DECADE IN NUMBERS</h1>
      <div className='relative mt-5 ml-10'>
        <Image src={Briyani} alt='food-Image' className='w-[690px] h-[700px]' />
      </div>
      <div className='absolute top-40'>
        <Image src={ImageTopText} alt='border' className='w-[728px] h-[542px] ' />
      </div>
    </div>
  );
}

export default CircleImage;
