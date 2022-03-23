import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import about from "../assets/about.jpg"
import catering from "../assets/catering.jpg"
import dish1 from "../assets/dish1.png"
import dish2 from "../assets/dish2.png"
import dish3 from "../assets/dish3.png"
import dish4 from "../assets/dish4.png"

export default function Home() {
  return (
    <div className="w-full">
      {/* <div className="w-full h-screen bg-cover bg-center banner-div" /> */}
      <video autoPlay muted loop playsInline className="w-full h-screen bg-cover bg-center object-cover">
        <source src="./main.mp4" type="video/mp4" />
      </video>
      <br />
      <div id="aboutus" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch">
          <Image src={about} alt="" objectFit="cover" />
        </div>
        <div className="w-full bg-cover bg-center about-div p-6 flex flex-col justify-center">
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 font-big_calson">About Bawarchi</h3>
          <p className="text-black text-sm my-2">{"Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment."}</p>
          <p className="text-black text-sm my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
          <p className="text-black text-sm my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
        </div>
      </div>
      <br />
      <div id="catering" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full bg-cover bg-center catering-div p-6 flex flex-col justify-center">
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 text-primary font-big_calson">Catering</h3>
          <p className="text-white text-sm my-2">{"Let us Cater your next Event. We are ready to cater to you. We cook for you and your loved ones, co-workers and friends. We cater all groups, from a 20 people office lunch gathering to a 1000 people wedding party. Contact us today to set-up your menu for your next special event. In fact Delivery is on us. We offer multiple options including Party Trays to take to a party, Packed Lunch Boxes for Corporate setting, Live Onsite Catering, Buffet Catering, Set Menu's for large dinner parties. We will take your worry away about food and let you focus on celebrating the special occasion."}</p>
        </div>
        <div className="w-full flex justify-center items-stretch">
          <Image src={catering} alt="" objectFit="cover" />
        </div>
      </div>
      <br />
      <div id="glimpses" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch">
          <video autoPlay muted loop playsInline className="object-cover">
            <source src="./catering.mp4" type="video/mp4" />
          </video>
          {/* <Image src={glimpses} alt="" objectFit="cover" /> */}
        </div>
        <div className="w-full bg-cover bg-center glimpses-div p-6 flex flex-col justify-center">
          <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl mb-4 font-big_calson">Glimpses of Past Events</h3>
          <p className="text-black text-sm my-2">{"Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment."}</p>
          <p className="text-black text-sm my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
          <p className="text-black text-sm my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
        </div>
      </div>
      <br />
      <div id="specialities" className="w-full bg-cover bg-center bg-pri_green p-6 lg:p-10 xl:p-10">
        <h3 className="font-normal text-3xl lg:text-4xl xl:text-4xl text-center font-big_calson text-primary">Our Specialities</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 text-center mt-8 px-2 lg:px-10 xl:px-10 gap-12 lg:gap-18 xl:gap-24">
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
      </div>
      <br />
      <div id="contact" className="w-full p-4">
        <h3 className="font-bold text-3xl lg:text-4xl xl:text-4xl text-center font-big_calson">Contact Information</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 text-center mt-8 px-10 gap-8">
          <div className="flex justify-start items-center flex-col gap-2">
            <FontAwesomeIcon icon={faLocationDot} size="2x" />
            <h3 className="font-extrabold text-sm uppercase">
              Address
            </h3>
            <p className="font-bold text-xs whitespace-pre-line">
              6627-A ROSWELL ROAD,{"\n"}
              SANDY SPRINGS, GA - 30328
            </p>
          </div>
          <div className="flex justify-start items-center flex-col gap-2">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <h3 className="font-extrabold text-sm uppercase">
              Get in touch
            </h3>
            <p className="font-bold text-xs whitespace-pre-line">
              <span className="font-extrabold">PHONE :</span> <a href="tel:+14042555052">(404) 255-5052</a> | <a href="tel:+14042555059">(404) 255-5059</a>{"\n"}
              <span className="font-extrabold">EMAIL :</span> <a href="mailto:contact@bawarchiatlanta.com">contact@bawarchiatlanta.com</a>
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
  )
}
