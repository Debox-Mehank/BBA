import type React from "react";
import Image from "next/image";
import { blurHashToDataURL } from "@/utils/blurhash";
import { RichText } from "@graphcms/rich-text-react-renderer";

interface IOurStory {
  sectionTitle: string;
  sectionImage: {
    url: string;
  };
  sectionImageBlurHash: string;
  sectionContent: {
    raw: any;
    text: string;
  };
  isTop?: boolean;
}

const OurStory: React.FC<IOurStory> = ({
  sectionImage,
  sectionTitle,
  sectionImageBlurHash,
  sectionContent,
  isTop = false,
}) => {
  return (
    <div
      className={`lg:py-20 bg-bg3 lg:px-24 xsm:px-12 px-6 py-10 relative flex flex-col items-center z-10 overflow-hidden ${
        !isTop ? "mt-20" : ""
      }`}
    >
      <h2 className="xl:text-[80px] xsm:text-[60px] xsm:leading-[55px] xl:leading-[75px] text-[50px] leading-[45px] font-bebas xsm:mb-10 mb-10 text-bg1 text-center">
        {sectionTitle}
      </h2>

      <div
        className={`w-full flex flex-col custom-lg:flex-row items-center ${
          isTop ? "custom-lg:flex-row-reverse" : ""
        }`}
      >
        <div className="custom-lg:w-1/2 w-full flex items-center justify-center">
          <div className="relative xsm:w-[450px] xsm:h-[540px] w-[400px] h-[530px]">
            <Image
              src={sectionImage.url}
              placeholder="blur"
              blurDataURL={blurHashToDataURL(sectionImageBlurHash)}
              alt={`${sectionTitle} Image`}
              className="rounded-[80px] object-cover"
              fill
              priority
            />
          </div>
        </div>

        <div
          className={`flex flex-col custom-lg:w-1/2 w-full mt-10 custom-lg:mt-0 items-center
          ${!isTop ? "custom-lg:ml-10" : "custom-lg:mr-10"}
        `}
        >
          <div className="text-xl font-rubik custom-lg:max-w-[680px] max-w-screen text-bg1 space-y-6">
            <RichText content={sectionContent.raw} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
