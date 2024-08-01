import React from 'react';
import BannerVideo from "../assets/videos/Reel with Overlay (1) (1).mp4"

const Banner = () => {
  return (
    <div className="relative h-[120vh] w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={BannerVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-[150px] mb-4 leading-[120px] font-bebas">
            <span className='mr-[200px]'>
            FROM INDIA
            </span>
            <br/> 
            <span className='ml-[200px]' >WITH LOVE</span>
          </h1>
          <button className="mt-4 px-8 py-3 tracking-wide text-lg md:text-xl font-medium font-rubik border-2  text-bg3 bg-bg1 rounded-[15px] shadow-xl">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
