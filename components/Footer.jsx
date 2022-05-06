import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex gap-4 justify-around items-center flex-col flex-wrap h-auto w-full z-50 px-4 py-8 bg-pri_green mt-auto text-center">

      <ul className="grid grid-cols-4 justify-center text-center mb-2">
        <Link href={"/"}>
          <a
            className={`px-4 py-2 font-bold text-primary uppercase text-xs`}
          >
            Home
          </a>
        </Link>
        <Link
          href={
            "https://www.clover.com/online-ordering/bawarchi-biryanis-atlanta"
          }
        >
          <a
            className={`px-4 py-2 font-bold text-primary uppercase text-xs`}
          >
            Online Ordering
          </a>
        </Link>
        <Link href={"/catering"}>
          <a
            className={`px-4 py-2 font-bold text-primary uppercase text-xs`}
          >
            Catering
          </a>
        </Link>
        <Link href={"/gallery"}>
          <a
            className={`px-4 py-2 font-bold text-primary uppercase text-xs`}
          >
            Gallery
          </a>
        </Link>
      </ul>


      <div className="flex flex-col gap-2 lg:flex-row justify-around items-center text-primary text-sm lg:gap-16 uppercase">
        <p>Delicious Indian Food in Sandy Springs Atlanta</p>
        <div className="flex lg:ml-16">
          <Link href="https://www.facebook.com/bawarchibiryanisandysprings">
            <a className="items-center mx-3 inline-flex">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size={"lg"}
                className="text-primary"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/bawarchibiryanisatlanta/">
            <a className="items-center mx-3 inline-flex">
              <FontAwesomeIcon
                icon={faInstagramSquare}
                size={"lg"}
                className="text-primary"
              />
            </a>
          </Link>
        </div>
        <p>Designed and developed by <Link href={"https://debox.co.in/"}>
          <a className="text-orange-300 hover:text-orange-400 cursor-pointer transition-colors">Debox Consulting Pvt. Ltd.</a></Link></p>
      </div>


    </footer>
  );
};

export default Footer;

// Icons
{/*  */ }