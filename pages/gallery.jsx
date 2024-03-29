import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Head from "next/head";
// Data
import imageData from "../utils/imageData";

// Lib for Gallery
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function OurGallery() {
  const [viewData, setViewData] = useState(imageData);
  const [selected, setSelected] = useState("All");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImgIndex, setModalImgIndex] = useState(null);
  const [modalImgData, setModalImgData] = useState([]);

  const isDesktop = useMediaQuery("(min-width: 500px)");

  // Filtering Images for the Modal based on user input

  useEffect(() => {
    setModalImgData(viewData.map((img) => img.url));
  }, [viewData]);

  return (
    <div className="mt-28 md:p-20 glimpses-div">
      <Head>
        <title>{`Bawarchi Atlanta Photo Gallary`}</title>
        <link rel="canonical" href={`https://bawarchiatlanta.com/gallery`} />
        <meta
          name="description"
          content="Check out the latest pictures from Bawarchi Atlanta."
        />
        {/* <link rel="icon" href="/favicon.ico"/> */}
        {/* OG Tags */}
        <meta property="og:title" content={`Bawarchi Atlanta Photo Gallary `} />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/debox/image/upload/v1651053969/BBA/BBA_Website_Images/Our%20Ambience/OurAmbience7_gf4wyp.jpg"
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={"Check out the latest pictures from Bawarchi Atlanta."}
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Bawarchi Atlanta Photo Gallary"}
        />
        <meta
          property="twitter:description"
          content={"Check out the latest pictures from Bawarchi Atlanta."}
        />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/gallery`}
        />
        <meta
          property="twitter:image"
          content={
            "https://res.cloudinary.com/debox/image/upload/v1651053969/BBA/BBA_Website_Images/Our%20Ambience/OurAmbience7_gf4wyp.jpg"
          }
        />
      </Head>
      <h1 className="font-bold font-big_calson text-5xl mb-12 text-center">
        Our Gallery
      </h1>

      {/* Category Buttons */}

      <div className="mx-auto grid grid-cols-2 gap-4 max-w-md w-11/12 sm:grid-cols-4 sm:max-w-xl md:max-w-none justify-between font-big_calson font-bold text-white">
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "All" && "bg-orange-400"}`}
          onClick={() => {
            setViewData(imageData);
            setSelected("All");
          }}
        >
          All Images
        </button>
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "Ambience" && "bg-orange-400"}`}
          onClick={() => {
            setViewData(imageData.filter((img) => img.category === "ambience"));
            setSelected("Ambience");
          }}
        >
          Our Ambience
        </button>
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "Food" && "bg-orange-400"}`}
          onClick={() => {
            setViewData(imageData.filter((img) => img.category === "food"));
            setSelected("Food");
          }}
        >
          Our Food
        </button>
        <button
          className={`text-lg px-6 py-2 lg:text-2xl lg:py-3 w-full bg-black rounded-md hover:bg-pri_green duration-200 transition 
          ${selected === "Events" && "bg-orange-400"}`}
          onClick={() => {
            setViewData(imageData.filter((img) => img.category === "events"));
            setSelected("Events");
          }}
        >
          Our Events
        </button>
      </div>
      {/* Gallery Images */}
      <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-3 mx-auto w-11/12 md:w-full justify-center">
        {viewData.map((img, index) => (
          <Image
            width={400}
            height={400}
            className="rounded-xl cursor-pointer hover:scale-105 transition-all"
            key={index}
            alt={img.alt}
            src={img.url}
            objectFit="cover"
            onClick={() => {
              setModalImgIndex(index);
              setModalIsOpen(true);
            }}
          />
        ))}
      </div>
      {modalIsOpen && (
        <Lightbox
          mainSrc={modalImgData[modalImgIndex]}
          nextSrc={modalImgData[(modalImgIndex + 1) % modalImgData.length]}
          prevSrc={
            modalImgData[
              (modalImgIndex + modalImgData.length - 1) % modalImgData.length
            ]
          }
          onMoveNextRequest={() =>
            setModalImgIndex((prev) => (prev + 1) % modalImgData.length)
          }
          onMovePrevRequest={() =>
            setModalImgIndex(
              (prev) => (prev + modalImgData.length - 1) % modalImgData.length
            )
          }
          onCloseRequest={() => setModalIsOpen(false)}
          imagePadding={isDesktop ? "100" : "40"}
        />
      )}
    </div>
  );
}
