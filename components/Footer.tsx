import React from 'react';
import Image from 'next/image';
import Instagram from "../assets/ri_instagram-fill.png";
import Facebook from "../assets/ic_baseline-facebook.png";

const Footer = () => {
  return (
    <div className='bg-bg1 py-12 px-6 flex flex-col items-center justify-between font-rubik text-bg3 gap-y-6' >
        <div className='flex items-center justify-evenly text-xl font-medium gap-x-10' >
            <span  >HOME</span>
            <span>OUR STORY</span>
            <span>OUR CATERING</span>
            <span>OUR GALLERY</span>
        </div>
        <p className='text-xl' >Delicious Indian Food in Sandy Springs Atlanta </p>
        <div className='flex items-center'>
            <Image src={Facebook} alt='facebook' className='w-[36px] h-[36px] mr-4' />
            <Image src={Instagram} alt='instagram' className='w-[36px] h-[36px]' />
        </div>
        <p className='font-medium text-xl' >
        DESIGNED AND DEVELOPED BY <span className='underline' >DEBOX CONSULTING PVT. LTD.</span>
        </p>


    </div>
  )
}

export default Footer