import React from 'react'
import Image from 'next/image'
import arrowup from "../assets/arrow-up.png"

const BlogTopSection = () => {
  return (
    <div className='lg:py-20 lg:px-24 mt-20 xsm:px-12 px-6 py-10 flex flex-col items-center bg-bg3'>
    <h1 className='xl:text-[90px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[80px] 
    text-[50px] leading-[45px]
    font-bebas   xsm:mb-10 mb-14 text-bg1 text-center'  >BLOGS</h1>
      <div className=' flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center z-10 overflow-hidden mt-20'>
      <div
   
    className='custom-lg:mr-10 custom-lg:mb-0 mb-20 custom-lg:w-1/2 w-full flex items-center justify-center'
      
      >
        <img 
          src="https://via.placeholder.com/600x500" 
          alt='reviews' 
          className=' rounded-[80px] bg-contain' 
        />
      </div>
      
      <div className='flex flex-col custom-lg:items-start  custom-lg:w-1/2 w-full'
     
      >
        <h1 className='xl:text-[70px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[75px] 
        text-[50px] leading-[45px]
        font-bebas    text-bg1 max-w-[600px]'>
          Lorem ipsum dolor sit amet
        </h1>
        <p className='xsm:mb-10 mb-14 font-nunito uppercase text-[#9D9D9D] font-semibold text-lg' >POSTED TODAY</p>
        <p className='xsm:text-2xl text-xl font-rubik custom-lg:max-w-[680px] max-w-sreen text-bg1 xsm:mb-10 mb-14'>
        Lorem ipsum dolor sit amet consectetur. Enim praesent in porta sit id cursus feugiat consectetur condimentum. Bibendum sagittis libero sed ipsum pretium elit ac proin pellentesque.
        </p>
        
        <p className='flex items-center font-bebas xsm:text-3xl text-xl text-bg1 font-bold'>
          READ MORE <Image src={arrowup} alt='arrow-up' className='xsm:w-[45px] w-[35px] xsm:h-[45px] h-[35px]' />
        </p>
      </div>
    </div>
   

</div>
  )
}

export default BlogTopSection