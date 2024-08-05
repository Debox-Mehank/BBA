import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <div className='lg:py-20 lg:px-24 mt-20 xsm:px-12 px-6 py-10 flex flex-col items-center bg-bg3'>
        <h1 className='xl:text-[90px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[80px] 
        text-[50px] leading-[45px]
        font-bebas   xsm:mb-10 mb-14 text-bg1 text-center'  >A decade of crafting <br/>
        delicious memories</h1>
        <img src="https://via.placeholder.com/1240x600" alt='our story' className='rounded-[70px]' />
    </div>
  )
}

export default OurStory