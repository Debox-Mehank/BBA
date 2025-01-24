import React, { useEffect, useState } from "react";
import Image from "next/image";
import Instagram from "../assets/ri_instagram-fill.png";
import Facebook from "../assets/ic_baseline-facebook.png";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { graphQLClient } from "@/lib/graphqlClient";
import { gql } from "graphql-request";

interface IFooterData {
  operationalHours: {
    text: string;
    raw: any;
  };
  contactDetail: string;
  address: string;
  instagramLink: string;
  facebookLink: string;
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<IFooterData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Catering", href: "/catering" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
  ];

  useEffect(() => {
    const fetchFooter = async () => {
      try {
        const response = await graphQLClient.request<{
          homePages: IFooterData[];
        }>(gql`
          query FooterData {
            homePages {
              operationalHours {
                raw
                text
              }
              contactDetail
              address
              instagramLink
              facebookLink
            }
          }
        `);

        if (response?.homePages?.[0]) {
          setFooterData(response.homePages[0]);
        } else {
          setError("No footer data found.");
        }
      } catch (error) {
        console.error(error);
        setError("Failed to fetch footer data. Please try again later.");
      }
    };

    fetchFooter();
  }, []);

  if (!footerData) {
    return (
      <div className="bg-bg1 pt-12 sm:pb-12 pb-2 sm:px-4 px-4 flex flex-col items-center justify-center font-rubik text-bg3 gap-y-6">
        <p>Loading footer...</p>
      </div>
    );
  }

  return (
    <div className="bg-bg1 pt-12 sm:pb-12 pb-2 sm:px-4 px-4 flex flex-col custom-sm:items-center justify-between font-rubik text-bg3 gap-y-6">
      <div className="flex flex-col items-start md:items-center">
        <div className="flex flex-col mb-4 custom-sm:flex-row custom-sm:items-center items-start gap-y-4 justify-evenly text-xl font-medium gap-x-10">
          {footerLinks.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="cursor-pointer uppercase">{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:items-center items-start my-5">
          <p className="font-semibold uppercase">Operational Hours:</p>
          <div>
            <RichText content={footerData.operationalHours.raw} />
          </div>
        </div>
        <div className="flex flex-col md:items-center items-start my-5">
          <p className="font-semibold uppercase">Contact Us:</p>
          <a
            href={`tel:${footerData.contactDetail}`}
            className="hover:underline"
          >
            {footerData.contactDetail}
          </a>
        </div>
        <div className="flex flex-col md:items-center items-start mt-3 mb-5">
          <p className="font-semibold uppercase">Our Location:</p>
          <Link
            href="https://www.google.com/maps/place/Bawarchi+Biryanis+Atlanta/@33.9358123,-84.3794284,17z/data=!3m1!4b1!4m6!3m5!1s0x88f50e9fded7b25d:0x28ffca00c31c2e05!8m2!3d33.9358123!4d-84.3768535!16s%2Fg%2F11b5wjnpzw?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
            passHref
            target="_blank"
          >
            <p className="hover:underline underline-offset-2">
              {footerData.address}
            </p>
          </Link>
        </div>
        <p className="md:text-xl text-lg mb-4">
          Delicious Indian Food in Sandy Springs Atlanta
        </p>
        <div className="flex items-center">
          <Link href={`${footerData.facebookLink}`} target="_blank">
            <Image
              src={Facebook}
              alt="facebook"
              className="w-[30px] h-[30px] mr-4"
            />
          </Link>
          <Link href={`${footerData.instagramLink}`} target="_blank">
            <Image
              src={Instagram}
              alt="instagram"
              className="w-[30px] h-[30px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="font-medium flex items-center custom-sm:text-xl xsm:text-[14px] text-[10px] custom-sm:mt-0 mt-10">
          DESIGNED AND DEVELOPED BY{" "}
          <Link
            href="https://debox.co.in/"
            target="_blank"
            className="underline ml-1"
          >
            DEBOX CONSULTING PVT. LTD.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
