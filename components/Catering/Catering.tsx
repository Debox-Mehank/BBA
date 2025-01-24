import React from "react";
import Image from "next/image";
import { blurHashToDataURL } from "@/utils/blurhash";

interface ICatering {
  sectionTitle: string;
  sectionImage: {
    url: string;
  };
  sectionImageBlurHash: string;
}

const Catering: React.FC<ICatering> = ({
  sectionImage,
  sectionImageBlurHash,
  sectionTitle,
}) => {
  return (
    <div className="lg:py-20 lg:px-24 mt-20 xsm:px-12 px-6 py-10 flex flex-col items-center bg-bg3">
      <h1
        className="xl:text-[90px] xsm:text-[60px] xsm:leading-[55px] xl:leading-[80px] 
      text-[40px] leading-[40px] font-bebas xsm:mb-10 mb-5 text-bg1 text-center"
      >
        {sectionTitle}
      </h1>
      <div className="w-full max-w-[1240px] ">
        <Image
          src={sectionImage.url}
          alt="Catering"
          layout="responsive"
          placeholder="blur"
          blurDataURL={blurHashToDataURL(sectionImageBlurHash)}
          width={1240}
          height={800}
          className="md:rounded-[70px] rounded-[10px] object-cover"
        />
      </div>
    </div>
  );
};

export default Catering;
