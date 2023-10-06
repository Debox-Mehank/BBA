import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/bba_logo.png";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <nav className="flex justify-between items-center flex-wrap h-auto w-full z-40 fixed top-0 left-0 px-6 pt-3 pb-2 bg-white">
      <div className="w-48 sm:w-60">
        <Link href="/">
          <span className="items-center mx-3 inline-flex">
            <Image src={logo} alt="Bawarchi Biryanis Atlanta" />
          </span>
        </Link>
      </div>
      <ul className="hidden md:block">
        <Link href={"/"}>
          <span
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}
          >
            Home
          </span>
        </Link>
        {/* // href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
            // target={"_blank"}
            // rel="noreferrer" */}

        <div className="inline px-4 py-2 font-bold items-center justify-center uppercase text-xs md:text-base text-black relative has_dropdown">
          <span className="cursor-pointer hover:text-prim">
            Online Ordering
          </span>
          <div className="absolute right-0 top-8 left-0 dropdown opacity-0 invisible translate-y-8">
            <ul className="bg-white shadow-md border-collapse w-full border-gray-400 flex justify-evenly items-center flex-col">
              <li className="w-full p-3  border border-collapse border-gray-400 hover:bg-greyButtonBg cursor-pointer hover:text-primary">
                <a
                  href="https://order.online/business/bawarchi-biryanis-46928/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Delivery
                </a>
              </li>
              <li className="w-full p-3  border border-collapse border-gray-400 hover:bg-greyButtonBg cursor-pointer hover:text-primary">
                <a
                  href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Takeaway
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}>
                        Menu
                    </a>
                </Link> */}
        <Link href={"/catering"}>
          <span
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}
          >
            Catering
          </span>
        </Link>
        <Link href="/gallery">
          <span
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}
          >
            Our Gallery
          </span>
        </Link>
        {/* <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}>
                        Promotions
                    </a>
                </Link> */}
      </ul>
      {/* Mobiel Nav */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed transition-all top-0 left-0 w-full h-full z-50 bg-black`}
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute top-6 right-6 text-white text-6xl"
          aria-label="Menu Mobile Button"
        >
          &times;
        </button>
        <ul className="flex flex-col justify-center items-center gap-4 h-full">
          <a
            onClick={() => {
              setIsOpen((prev) => !prev);
              router.push("/");
            }}
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}
          >
            Home
          </a>
          <a
            onClick={() => {
              setIsOpen((prev) => !prev);
              router.push(
                "https://order.online/business/bawarchi-biryanis-46928/"
              );
            }}
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}
          >
            Delivery
          </a>
          <a
            onClick={() => {
              setIsOpen((prev) => !prev);
              router.push(
                "https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
              );
            }}
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}
          >
            Takeaway
          </a>
          <a
            onClick={() => {
              setIsOpen((prev) => !prev);
              router.push("/catering");
            }}
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}
          >
            Catering
          </a>
          <a
            onClick={() => {
              setIsOpen((prev) => !prev);
              router.push("/gallery");
            }}
            className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}
          >
            Our Gallery
          </a>
        </ul>
      </div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex p-3 md:hidden text-black ml-auto"
        aria-label="Menu Mobile Button"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
