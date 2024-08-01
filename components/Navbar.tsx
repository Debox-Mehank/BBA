"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from "../assets/logo.png";
import HamburgerIcon from "../assets/hamburger.png";

const Navbar = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const observerTargetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const target = observerTargetRef.current;
      if (target) {
        // Show button only if the scroll position has passed 120vh
        const isPast120vh = window.scrollY > window.innerHeight * 0.8;
        setIsButtonVisible(isPast120vh);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='fixed top-0 left-0 w-full px-2 py-0 bg-bg1 z-50'>
        <div className='flex justify-between items-center px-6 sm:px-16 py-6 xl:px-24 lg:px-12'>
          <div className='w-[170px] h-[53px]'>
            <Image src={Logo} alt='logo' />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className={`px-6 py-2 h-12 w-[180px] text-[20px] bg-bg3 font-rubik font-medium mr-10 border rounded-lg text-bg1 transition-opacity duration-500 ${isButtonVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ visibility: isButtonVisible ? 'visible' : 'hidden' }}
            >
              ORDER NOW
            </button>
            <button>
              <Image src={HamburgerIcon} alt='Sidebar' className='w-9 h-6' />
            </button>
          </div>
        </div>
      </div>
      <div ref={observerTargetRef} style={{ height: '1px' }} /> {/* Invisible target to manage scroll effect */}
    </>
  );
};

export default Navbar;
