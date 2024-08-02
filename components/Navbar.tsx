"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full px-2 py-0 bg-bg1 z-50'>
        <div className='flex justify-between items-center px-2 sm:px-16 py-6 xl:px-24 lg:px-12'>
          <div className='relative !w-[170px] !h-[53px] min-w-[115px] min-h-[53px]'>
            <Image src={Logo} alt='logo' className='!w-full !h-full object-contain' />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className={`px-6 py-2 h-12 hidden md:block w-[180px] text-[20px] bg-bg3 font-rubik font-medium mr-10 border rounded-lg text-bg1 transition-opacity duration-500 ${isButtonVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ visibility: isButtonVisible ? 'visible' : 'hidden' }}
            >
              ORDER NOW
            </button>
            <button>
              <Image src={HamburgerIcon} alt='Sidebar' className='w-9 h-6' onClick={toggleMenu} />
            </button>
          </div>
        </div>
        <div className={`bg-bg1 top-0 right-0 fixed w-full h-full z-30 flex flex-col items-center justify-center transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button className='self-end mr-4 mt-4' onClick={toggleMenu}>
          <svg className='absolute top-2 right-2 sm:top-10 sm:right-10 w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
          </svg>
        </button>
        <motion.ul className='justify-between flex text-xl pt-5 mx-5 items-center text-[#959090] flex-col  font-rubik font-medium'
          variants={fadeIn("up", "tween", 0.2, 0.2)} 
          initial="hidden"
          whileInView="show"
        >
          <li className='my-4 hover:text-bg3 cursor-pointer'>HOME</li>
          <li className='my-4 hover:text-bg3 cursor-pointer'>OUR STORY</li>
          <li className='my-4 hover:text-bg3 cursor-pointer'>OUR CATERING</li>
          <li className='my-4 hover:text-bg3 cursor-pointer'>OUR GALLERY</li>
         
        </motion.ul>
       
      </div>
      </div>
      <div ref={observerTargetRef} style={{ height: '1px' }} /> {/* Invisible target to manage scroll effect */}
    </>
  );
};

export default Navbar;
