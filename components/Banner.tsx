import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface IBanner {
  title: string;
  title2?: string;
  title3?: string;
  isVideo: boolean;
  heroBannerDesktop: {
    url: string;
  };
  heroBannerMobile: {
    url: string;
  };
  heroBannerDesktop2?: {
    url: string;
  };
  heroBannerMobile2?: {
    url: string;
  };
  heroBannerDesktop3?: {
    url: string;
  };
  heroBannerMobile3?: {
    url: string;
  };
  onlineOrderLink: string;
}

const Banner: React.FC<IBanner> = ({
  heroBannerDesktop,
  heroBannerMobile,
  isVideo,
  title,
  heroBannerDesktop2,
  heroBannerMobile2,
  heroBannerDesktop3,
  heroBannerMobile3,
  title2,
  title3,
  onlineOrderLink,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { desktop: heroBannerDesktop, mobile: heroBannerMobile, title },
    heroBannerDesktop2
      ? {
          desktop: heroBannerDesktop2,
          mobile: heroBannerMobile2,
          title: title2,
        }
      : null,
    heroBannerDesktop3
      ? {
          desktop: heroBannerDesktop3,
          mobile: heroBannerMobile3,
          title: title3,
        }
      : null,
  ].filter(Boolean);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const renderBackground = (slide: any) => {
    if (isVideo) {
      return (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroBannerDesktop.url}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }

    return (
      <>
        <Image
          src={slide.desktop.url}
          alt="Hero Background"
          fill
          priority
          className={`absolute top-0 left-0 w-full h-full object-cover ${
            slide.mobile ? "hidden md:block" : "block"
          }`}
        />
        {slide.mobile && (
          <Image
            src={slide.mobile.url}
            alt="Hero Background Mobile"
            fill
            priority
            className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
          />
        )}
      </>
    );
  };

  const renderVideoBg = () => {
    if (isVideo) {
      return (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroBannerDesktop.url}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
  };

  return (
    <div className="relative w-full h-[120vh] overflow-hidden">
      {isVideo
        ? renderVideoBg()
        : slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-20 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {renderBackground(slide)}
            </div>
          ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30">
        <div className="text-center">
          <h1 className="text-white sm:text-[100px] sm:leading-[80px] mb-4 md:leading-[120px] text-[70px] leading-[60px] font-bebas">
            {isVideo ? title : slides[currentSlide]?.title}
            <br />
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center space-x-4">
            <Link target="_blank" href={`${onlineOrderLink}`}>
              <button className="mt-4 px-8 py-3 tracking-wide text-sm xsm:text-lg md:text-xl font-medium font-rubik border-2 text-bg3 bg-bg1 rounded-[15px] shadow-xl">
                ORDER NOW
              </button>
            </Link>
            <Link
              target="_blank"
              href="https://www.clover.com/online-ordering/kwality-ice-creams-atl-sandy-springs"
            >
              <button className="mt-4 px-8 py-3 tracking-wide text-sm xsm:text-lg md:text-xl font-medium font-rubik border-2 border-bg1 text-bg1 bg-bg3 rounded-[15px] shadow-xl">
                Kwality Ice-Creams Atlanta
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
