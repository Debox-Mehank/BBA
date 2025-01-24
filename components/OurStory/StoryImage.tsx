import React from "react";
import Image from "next/image";
import Image2 from "../../assets/storyImg2.png";
import { blurHashToDataURL } from "@/utils/blurhash";

interface IStoryImage {
  sectionTitle: string;
  sectionImage: {
    url: string;
  };
  sectionImageBlurHash: string;
}

const StoryImage: React.FC<IStoryImage> = ({
  sectionImage,
  sectionImageBlurHash,
  sectionTitle,
}) => {
  return (
    <div className="lg:py-20 lg:px-24 xsm:px-12 px-6  bg-bg1 rounded-[60px] lg:rounded-[100px] relative flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center z-10 overflow-hidden">
      <div className="custom-lg:mr-10 custom-lg:mb-0 mb-10 custom-lg:w-1/2 w-full flex items-start justify-center custom-lg:mt-0 mt-10">
        <Image
          src={sectionImage.url}
          alt="reviews"
          className="xsm:w-[400px] xsm:h-[500px] w-[400px] h-[430px] rounded-[50px]  bg-contain"
          blurDataURL={blurHashToDataURL(sectionImageBlurHash)}
          placeholder="blur"
          width={500}
          height={630}
        />
      </div>

      <div className="flex flex-col custom-lg:items-start items-center  custom-lg:w-1/2 w-full">
        <h1
          className=" xsm:text-[60px]  xsm:leading-[55px] 
      text-[45px] leading-[45px]
      font-bebas text-bg2 custom-lg:mb-0 mb-10"
        >
          {sectionTitle}
        </h1>
      </div>
    </div>
  );
};

export default StoryImage;
