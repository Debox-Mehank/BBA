import React from 'react';
import Image1 from "../assets/slider/BBA1.jpg";
import Image2 from "../assets/slider/BBA2.jpg";
import Image3 from "../assets/slider/BBA3.jpg";
import Image4 from "../assets/slider/BBA4.jpg";
import Image5 from "../assets/slider/BBA5.jpg";
import Image from 'next/image';

const Slider = () => {
  return (
    <div className="relative md:h-[150vh] h-[120vh] w-full overflow-hidden -z-10 ">
      <div className="absolute top-0 left-0 w-full h-full flex ">
        <div className="flex-shrink-0 ">
          <Image src={Image2} alt="Slide 1" className="w-full h-full object-cover" />
        </div>
       
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-10">
        <div className='absolute font-bebas top-16 animate-scroll text-4xl   text-white flex w-full whitespace-nowrap ' >
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        <span className="mr-5">A DECADE OF DELICIOUSNESS</span>
        
            </div>
        <div className="text-center">
          <h1 className="text-bg2 md:text-4xl sm:text-3xl text-2xl leading-8 max-w-[933px] sm:leading-10 font-rubik px-2">
          Over the last 10 years, Bawarchi Atlanta has become a beloved fixture in the heart of Sandy Springs. We have had the privilege of hosting countless family gatherings, community events, and celebrations fostering strong connections and creating memories with every meal.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
