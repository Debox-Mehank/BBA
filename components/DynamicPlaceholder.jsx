import React, { useEffect } from "react";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

// onClick?: (e?: any) => void;
const DynamicPlaceholder = ({ img, alt, onclick }) => {
  useEffect(() => {
    const getBlurData = async () => {
      try {
        const src =
          "https://images.unsplash.com/photo-1621961458348-f013d219b50c";

        const buffer = await fetch(src).then(async (res) =>
          Buffer.from(await res.arrayBuffer())
        );

        const { base64 } = await getPlaiceholder(buffer);

        console.log(base64);
      } catch (err) {
        err;
      }
    };
    getBlurData();
  }, []);
  return (
    <div>
      <Image
        src={img}
        alt={alt}
        fill
        placeholder="blur"
        blurDataURL=""
        onClick={() => onclick}
      />
    </div>
  );
};

export default DynamicPlaceholder;
