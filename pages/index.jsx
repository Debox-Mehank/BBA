import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const SpecialitiesData = [
  {
    img: dish1,
    className: "dish1Mobile",
    alt: "Chicken dum biryani",
  },
  {
    img: dish2,
    className: "dish2Mobile",
    alt: "Butter Chicker",
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

export default function Home() {
  const [swiper, setSwiper] = useState();
  return (
    <div className="w-full">
      {/* <div className="w-full h-screen bg-cover bg-center banner-div" /> */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen bg-cover bg-center object-cover banner-video hidden lg:block"
      >
        <source src="./main_desktop.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-screen bg-cover bg-center object-cover banner-video block lg:hidden"
      >
        <source src="./main_mobile.mp4" type="video/mp4" />
      </video>
      <br />
      <div id="aboutus" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch md:hidden">
          <Image src={about} alt="" objectFit="cover" />
        </div>
        <div className="w-full hidden justify-center items-stretch aboutus bg-cover bg-fixed bg-center md:flex" />
        <div className="w-full h-auto xl:h-[50vh] md:min-h-[500px] bg-cover bg-center about-div p-6 flex flex-col justify-center">
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 font-big_calson">
            About Bawarchi
          </h3>
          <p className="text-black text-sm my-2">
            {
              "Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment."
            }
          </p>
          <p className="text-black text-sm my-2">
            {
              "Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."
            }
          </p>
        </div>
      </div>
      <br />
      <div id="catering" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch md:hidden lg:hidden xl:hidden">
          <Image src={catering} alt="" objectFit="cover" />
        </div>
        {/* Catering */}
        <div className="w-full h-auto xl:h-[50vh] md:min-h-[500px] bg-cover bg-center catering-div p-6 flex flex-col justify-center">
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-primary font-big_calson">
            Catering
          </h3>
          <p className="text-white text-sm my-2 whitespace-pre-line">
            {
              "Looking for the best Indian food catering in Atlanta? You've come to the right place. Bawarchi Biryanis Atlanta is here to add a delicious zing to your special events.\nBe it a small intimate gathering or a conference of thousands. We're sure to make your event an unforgettable one.\nOur experienced Catering Specialists will be there to assist you right from finalizing the menu to ensuring that your special event is an unforgettable one.\nWhether you're looking for luscious Mughlai delights, hearty Punjabi classics, drool-worthy Chaats, Garvi Gujarat dishes, simple south-Indian classics, or even global fusion delicacies, we're there to create a menu that will perfectly fit your budget and your palate."
            }
          </p>
          <p className="text-white text-sm mt-2">Enquire Now!</p>
          <a
            href="https://api.whatsapp.com/send?phone=14702652768"
            target={"_blank"}
            rel="noopener noreferrer"
            className="py-2 font-bold font-big_calson text-primary rounded-md w-max text-sm mb-2 hover:underline"
          >
            Whatsapp Us
          </a>
          <Link href={"/catering"}>
            <a className="px-3 py-2 font-bold font-big_calson text-primary bg-black rounded-md w-max text-sm">
              Submit Catering Enquiry
            </a>
          </Link>
        </div>
        <div className="w-full hidden justify-center items-stretch catering bg-cover bg-fixed bg-center md:flex" />
      </div>
      <br />
      <div id="glimpses" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch">
          <video autoPlay muted loop playsInline className="">
            <source src="./catering.mp4" type="video/mp4" />
          </video>
          {/* <Image src={glimpses} alt="" objectFit="cover" /> */}
        </div>
        <div className="w-full bg-cover bg-center glimpses-div p-6 flex flex-col justify-center">
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 font-big_calson">
            Glimpses of Past Events
          </h3>
          <p className="text-black text-sm my-2">
            {"We're among Atlanta's Best Caterers for a reason."}
          </p>
          <p className="text-black text-sm my-2">
            {
              "Right from finalizing the menu to ensuring that everything on the D-Day is as planned to make your occasion an unforgettable one - we're there with you at every step to ensure that your event is a delicious one."
            }
          </p>
          <p className="text-black text-sm my-2">
            {"Check out a gist of the past events we've catered to."}
          </p>
        </div>
      </div>
      <br />
      <div
        id="specialities"
        className="w-full bg-cover bg-center bg-pri_green p-6 lg:p-10 xl:p-10"
      >
        <h3 className="font-normal text-3xl lg:text-4xl xl:text-4xl text-center font-big_calson text-primary">
          Our Specialities
        </h3>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 text-center mt-8 px-2 lg:px-10 xl:px-10 gap-12 lg:gap-18 xl:gap-24">
          <div className="w-full hover:shadow-specialities hover:scale-105 transition-all dish1">
            <Image src={dish1} alt="Chicken dum biryani" objectFit={"cover"} />
          </div>
          <div className="w-full hover:shadow-specialities hover:scale-105 transition-all dish2">
            <Image src={dish2} alt="Butter Chicker" objectFit={"cover"} />
          </div>
          <div className="w-full hover:shadow-specialities hover:scale-105 transition-all dish3">
            <Image src={dish3} alt="Lamb Chops" objectFit={"cover"} />
          </div>
          <div className="w-full hover:shadow-specialities hover:scale-105 transition-all dish4">
            <Image src={dish4} alt="Mushroom Pepper Salt" objectFit={"cover"} />
          </div>
        </div>
        <div className="text-center mt-8 px-8 md:hidden relative">
          <div className="absolute -left-2 lg:left-48 xl:left-48 z-10 top-0 bottom-0 flex justify-center items-center">
            <div
              onClick={() => {
                if (swiper.activeIndex > 0) {
                  swiper.slideTo(swiper.activeIndex - 1);
                }
              }}
              className="bg-primary rounded-full p-2 hover:bg-primary text-pri_green w-7 h-7 lg:w-10 lg:h-10 md:w-10 md:h-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 lg:w-6 lg:h-6 md:w-6 md:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </div>
          <div className="absolute -right-2 lg:right-48 xl:right-48 z-10 top-0 bottom-0 flex justify-center items-center">
            <div
              onClick={() => {
                if (swiper.activeIndex < SpecialitiesData.length) {
                  swiper.slideTo(swiper.activeIndex + 1);
                }
              }}
              className="bg-primary rounded-full p-2 hover:primary text-pri_green w-7 h-7 lg:w-10 lg:h-10 md:w-10 md:h-10 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 lg:w-6 lg:h-6 md:w-6 md:h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={4}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <Swiper
            navigation={false}
            pagination={false}
            centeredSlides={true}
            spaceBetween={12}
            slidesPerView={1}
            onSwiper={(s) => setSwiper(s)}
            autoHeight={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {SpecialitiesData.map((d, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div
                    className={`w-full hover:shadow-specialities hover:scale-105 transition-all ${d.className}`}
                  >
                    <Image src={d.img} alt={d.alt} objectFit={"cover"} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <br />
      <div id="contact" className="w-full p-4">
        <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl text-center font-big_calson">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 text-center mt-8 px-10 gap-8">
          <div className="flex justify-start items-center flex-col gap-2">
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <h3 className="font-extrabold text-sm uppercase">Address</h3>
            <a
              href="https://g.page/bawarchibiryanisatlanta?share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-bold text-xs whitespace-pre-line">
                6627-A ROSWELL ROAD,{"\n"}
                SANDY SPRINGS, GA - 30328
              </p>
            </a>
          </div>
          <div className="flex justify-start items-center flex-col gap-2">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <h3 className="font-extrabold text-sm uppercase">Get in touch</h3>
            <p className="font-bold text-xs whitespace-pre-line">
              <span className="font-extrabold">PHONE :</span>{" "}
              <a href="tel:+14042555052">(404) 255-5052</a> |{" "}
              <a href="tel:+14042555059">(404) 255-5059</a>
              {"\n"}
              <span className="font-extrabold">EMAIL :</span>{" "}
              <a href="mailto:contact@bawarchiatlanta.com">
                contact@bawarchiatlanta.com
              </a>
            </p>
          </div>
          <div className="flex justify-start items-center flex-col gap-2">
            <FontAwesomeIcon icon={faClock} size="2x" />
            <h3 className="font-extrabold text-sm uppercase">
              Hours of operation
            </h3>
            <p className="font-bold text-xs whitespace-pre-line">
              SUNDAY - THURSDAY{"\n"}
              11:30AM - 9:30PM
            </p>
            <p className="font-bold text-xs whitespace-pre-line">
              FRIDAY & SATURDAY{"\n"}
              11:30AM - 10:00PM
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
