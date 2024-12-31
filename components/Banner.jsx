import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import MobileBanner from "../assets/MobileBanner1.png";
import MobileBanner2 from "../assets/MobileBanner2.png";

const Banner = () => {
  return (
    <div className="relative h-screen w-full pt-20">
      {/* Background Swiper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 top-20">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full">
              <img 
                src={Banner2.src}
                alt="Banner 1"
                className="hidden md:block w-full h-full object-cover"
              />
              <img 
                src={MobileBanner2.src}
                alt="Mobile Banner 1"
                className="md:hidden w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img 
                src={Banner1.src}
                alt="Banner 2"
                className="hidden md:block w-full h-full object-cover"
              />
              <img 
                src={MobileBanner.src}
                alt="Mobile Banner 2"
                className="md:hidden w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10 top-20"></div>

      {/* Content */}
      <div className="relative h-[calc(100vh-15rem)] flex items-end justify-center z-20">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
            <Link
              target="_blank"
              href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
            >
              <button className="w-full md:w-auto px-8 py-3 tracking-wide text-sm xsm:text-lg md:text-xl font-medium font-rubik border-2 text-bg3 bg-bg1 hover:bg-bg1/90 rounded-[15px] shadow-xl transition-all">
                ORDER NOW
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://www.clover.com/online-ordering/kwality-ice-creams-atl-sandy-springs"
            >
              <button className="w-full md:w-auto px-8 py-3 tracking-wide text-sm xsm:text-lg md:text-xl font-medium font-rubik border-2 border-bg1 text-bg1 bg-bg3 hover:bg-bg3/90 rounded-[15px] shadow-xl transition-all">
                Kwality Ice-Creams Atlanta
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
            >
              <button className="w-full md:w-auto px-8 py-3 tracking-wide text-sm xsm:text-lg md:text-xl font-medium font-rubik border-2 text-bg3 bg-bg1 hover:bg-bg1/90 rounded-[15px] shadow-xl transition-all">
                Weekend Specials
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;