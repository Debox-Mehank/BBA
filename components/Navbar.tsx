"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";
import Logo from "../assets/logo.png";
import HamburgerIcon from "../assets/hamburger.png";
import Link from "next/link";

interface FooterLink {
  name: string;
  href: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const observerTargetRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const footer: FooterLink[] = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Catering", href: "/catering" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    {
      name: "Order Online",
      href: "https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu",
    },
    {
      name: "Kwality Ice-Creams",
      href: "https://www.clover.com/online-ordering/kwality-ice-creams-atl-sandy-springs",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Handle scroll and button visibility
  useEffect(() => {
    const handleScroll = () => {
      const target = observerTargetRef.current;
      if (target) {
        const isPast120vh = window.scrollY > window.innerHeight * 0.8;
        setIsButtonVisible(isPast120vh);
      }
    };

    if (router.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsButtonVisible(true);
    }

    return () => {
      if (router.pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [router.pathname]);

  // Handle menu open/close with body overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add click listener to document
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        ref={navbarRef}
        className="fixed top-0 left-0 w-full px-2 py-0 bg-bg1 z-50"
      >
        <div className="flex justify-between items-center px-2 sm:px-16 py-6 xl:px-24 lg:px-12">
          <Link
            href={"/"}
            prefetch={false}
            passHref
            className="relative !w-[170px] !h-[53px] min-w-[115px] min-h-[53px]"
            aria-label="Logo"
          >
            <Image
              src={Logo}
              alt="logo"
              className="!w-full !h-full object-contain"
            />
          </Link>
          <div className="flex items-center justify-between">
            <Link
              target="_blank"
              href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
              className="mr-10"
              aria-label="Order Now Link"
            >
              <button
                aria-label="Order Now"
                className={`px-6 py-2 h-12 hidden md:block w-[180px] text-[20px] bg-bg3 font-rubik font-medium  border rounded-[10px] text-bg1 transition-opacity duration-500 ${
                  isButtonVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ visibility: isButtonVisible ? "visible" : "hidden" }}
              >
                ORDER NOW
              </button>
            </Link>
            <button aria-label="Close Menu">
              <Image
                src={HamburgerIcon}
                alt="Sidebar"
                className="w-9 h-6"
                onClick={toggleMenu}
              />
            </button>
          </div>
        </div>
        <div
          className={`bg-bg1 top-0 right-0 fixed w-[70%] md:w-1/2 h-full z-30 flex flex-col items-center justify-center transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Toggle Menu"
            className="self-end mr-4 mt-4"
            onClick={toggleMenu}
          >
            <svg
              className="absolute top-2 right-2 sm:top-10 sm:right-10 w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <motion.ul
            className="justify-between flex text-xl pt-5 mx-5 gap-y-6 items-center text-[#959090] flex-col  font-rubik font-medium"
            variants={fadeIn("up", "tween", 0.2, 0.2)}
            initial="hidden"
            whileInView="show"
          >
            {footer.map((item, index) => (
              <Link key={index} href={item.href} onClick={toggleMenu}>
                <span className="cursor-pointer hover:text-bg3 uppercase">
                  {item.name}
                </span>
              </Link>
            ))}
          </motion.ul>
        </div>
      </div>
      <div ref={observerTargetRef} style={{ height: "1px" }} />
    </>
  );
};

export default Navbar;
