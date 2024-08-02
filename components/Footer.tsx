import React from 'react';
import Image from 'next/image';
import Instagram from "../assets/ri_instagram-fill.png";
import Facebook from "../assets/ic_baseline-facebook.png";

const Footer = () => {
  return (
    <div className='bg-bg1 pt-12 sm:pb-12 pb-2 sm:px-4 px-2 flex flex-col items-start custom-sm:items-center justify-between font-rubik text-bg3 gap-y-6' >
        <div className='flex flex-col custom-sm:flex-row custom-sm:items-center items-start gap-y-4 justify-evenly text-xl font-medium gap-x-10' >
            <span >HOME</span>
            <span>OUR STORY</span>
            <span>OUR CATERING</span>
            <span>OUR GALLERY</span>
        </div>
        <p className='md:text-xl text-lg' >Delicious Indian Food in Sandy Springs Atlanta </p>
        <div className='flex items-center'>
            <Image src={Facebook} alt='facebook' className='w-[36px] h-[36px] mr-4' />
            <Image src={Instagram} alt='instagram' className='w-[36px] h-[36px]' />
        </div>
        <div className='flex items-center justify-center' >
        <p className='font-medium flex items-center custom-sm:text-xl xsm:text-[14px] text-[10px] custom-sm:mt-0 mt-10' >
        DESIGNED AND DEVELOPED BY <span className='underline ml-1' >DEBOX CONSULTING PVT. LTD.</span>
        </p>
        </div>


    </div>
  )
}

export default Footer