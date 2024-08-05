import React from 'react'

const StoryImage = () => {
  return (
    <div className='lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg1 rounded-[60px] lg:rounded-[100px] relative flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center z-10 overflow-hidden'>
    <div
  className='custom-lg:mr-10 custom-lg:mb-0 mb-20 custom-lg:w-1/2 w-full flex items-start justify-center custom-lg:mt-0 mt-10' 
    >
      <img 
        src="https://via.placeholder.com/520x764"
        alt='reviews' 
        className='xsm:w-[500px] xsm:h-[630px] w-[400px] h-[530px]   bg-contain' 
      />
    </div>
    
    <div className='flex flex-col custom-lg:items-start items-center  custom-lg:w-1/2 w-full'>
      <h1 className='xl:text-[80px] xsm:text-[60px]  xsm:leading-[55px] xl:leading-[75px] 
      text-[45px] leading-[45px]
      font-bebas text-bg3'>
        A decade of crafting delicious memories
      </h1>
     
      
     
    </div>
  </div>
  )
}

export default StoryImage