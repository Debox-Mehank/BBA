import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
import about from "../assets/about.jpg"
import catering from "../assets/catering.jpg"
import glimpses from "../assets/glimpses.gif"

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full h-screen bg-cover bg-center banner-div" />
      <br />
      <div id="aboutus" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch">
          <Image src={about} alt="" objectFit="cover" />
        </div>
        <div className="w-full bg-cover bg-center about-div p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-3xl mb-4">About Bawarchi</h3>
          <p className="text-black text-xs my-2">{"Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment."}</p>
          <p className="text-black text-xs my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
          <p className="text-black text-xs my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
        </div>
      </div>
      <br />
      <div id="catering" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full bg-cover bg-center catering-div p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-3xl mb-4 text-primary">Catering</h3>
          <p className="text-white text-xs my-2">{"Let us Cater your next Event. We are ready to cater to you. We cook for you and your loved ones, co-workers and friends. We cater all groups, from a 20 people office lunch gathering to a 1000 people wedding party. Contact us today to set-up your menu for your next special event. In fact Delivery is on us. We offer multiple options including Party Trays to take to a party, Packed Lunch Boxes for Corporate setting, Live Onsite Catering, Buffet Catering, Set Menu's for large dinner parties. We will take your worry away about food and let you focus on celebrating the special occasion."}</p>
        </div>
        <div className="w-full flex justify-center items-stretch">
          <Image src={catering} alt="" objectFit="cover" />
        </div>
      </div>
      <br />
      <div id="glimpses" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex justify-center items-stretch">
          <Image src={glimpses} alt="" objectFit="cover" />
        </div>
        <div className="w-full bg-cover bg-center glimpses-div p-6 flex flex-col justify-center">
          <h3 className="font-semibold text-3xl mb-4">Glimpses of Past Events</h3>
          <p className="text-black text-xs my-2">{"Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment."}</p>
          <p className="text-black text-xs my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
          <p className="text-black text-xs my-2">{"Bawarchi means 'the chef' as an homage to all the chefs that kept the traditions alive. We strive to tantalize our customers with versatile pan-Indian menu in a modern fine dine setting. We take great pride in delivering most authentic Indian dishes prepared with best ingredients."}</p>
        </div>
      </div>
      <br />
      {/* <div id="specialities" className="w-full bg-cover bg-center">

      </div> */}
      <div id="contact" className="w-full p-4">
        <h3 className="text-3xl font-bold text-center">Contact Information</h3>
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
