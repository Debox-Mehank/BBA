import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import {
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import about from "../assets/about.jpg";
import catering from "../assets/catering.jpg";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import Head from "next/head";

import webBanner from "../public/Bawarchi_March_Web_Banner_Ramadan.jpg";
import mobileBanner from "../public/Bawarchi_March_Mobile_Banner_Ramadan.jpg";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Bawarchi from "../components/Bawarchi";
import Slider from "../components/Slider";
import Events from "../components/Events";
import LunchSection from "../components/LunchSection";
import Download from "../components/Download";
import Footer from "../components/Footer";
import FrameSection from "../components/FrameSection";
import { Rubik, Bebas_Neue } from '@next/font/google';

const rubik = Rubik({
    weight: ['400', '500', '600',  '700'],
    subsets: ['latin'],
  });
const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
  });

const SpecialitiesData = [
  {
    img: dish1,
    className: "dish1Mobile",
    alt: "Chicken Dum Biryani",
  },
  {
    img: dish2,
    className: "dish2Mobile",
    alt: "Butter Chicken",
  },
  {
    img: dish3,
    className: "dish3Mobile",
    alt: "Lamb Chops",
  },
  {
    img: dish4,
    className: "dish4Mobile",
    alt: "Mushroom Pepper Salt",
  },
];

export default function Home({ data }) {
  const [swiper, setSwiper] = useState();
  return (
    <div
    className={"w-full " + `${!rubik.className}` + `${!bebas.className}`}
     >
      <Head>
     
        <title>{`Best Indian Restaurant in Atlanta`}</title>
        <link rel="canonical" href={`https://bawarchiatlanta.com/`} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Best Indian Restaurant in Sandy Springs serving delicious Indian food since 2014. Serving authentic Indian Curries, Authentic Biryanis, Indian Appetizers & Tandoor, Indian Chaat, Snacksn and Indian Desserts."
        />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={`Best Indian Restaurant in Atlanta `}
        />
        <meta property="og:image" content={"/assets/dish1.png"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Best Indian Restaurant in Sandy Springs serving delicious Indian food since 2014. Serving authentic Indian Curries, Authentic Biryanis, Indian Appetizers & Tandoor, Indian Chaat, Snacksn and Indian Desserts."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Best Indian Restaurant in Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Best Indian Restaurant in Sandy Springs serving delicious Indian food since 2014. Serving authentic Indian Curries, Authentic Biryanis, Indian Appetizers & Tandoor, Indian Chaat, Snacksn and Indian Desserts."
          }
        />
        <meta property="twitter:url" content={`https://bawarchiatlanta.com/`} />
        <meta property="twitter:image" content={"/assets/dish1.png"} />
      </Head>
      {/* Below div is for offers.  */}
      {/* <div className="w-full h-screen bg-cover bg-center banner-div sm:mt-24 " /> */}
    
        <Banner/>
        <Gallery/>
        <Bawarchi/>
    
        <Slider/>
        <Events/>
        <LunchSection/>
        <FrameSection/>
      
        <Download/>
        
      
    </div>
  );
}

// export async function getServerSideProps() {
//   const { data, error } = await client.query({
//     query: gql`
//       query MyQuery {
//         homeBanners {
//           bannerAlt
//           webBanner {
//             url
//           }
//           mobileBanner {
//             url
//           }
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       data: data.homeBanners,
//     },
//   };
// }
