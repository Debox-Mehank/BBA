import type React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Instagram from "../assets/ri_instagram-fill.png";
import Facebook from "../assets/ic_baseline-facebook.png";
import Logo from "../assets/logo.png";
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

  const quickLinks = [
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
    <footer className="bg-bg1 pt-12 pb-6 px-4 font-rubik text-bg3">
      <div className="container mx-auto grid md:grid-cols-4 gap-8 md:gap-12">
        {/* Column 1: Logo, Address, Social Links */}
        <div className="flex flex-col items-start md:pl-10 !w-full">
          <Image
            src={Logo || "/placeholder.svg"}
            alt="Restaurant Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="mb-4">{footerData.address}</p>
          <div className="flex items-center">
            <Link
              href={`${footerData.facebookLink}`}
              target="_blank"
              className="mr-4"
            >
              <Image
                src={Facebook || "/placeholder.svg"}
                alt="facebook"
                className="w-[30px] h-[30px]"
              />
            </Link>
            <Link href={`${footerData.instagramLink}`} target="_blank">
              <Image
                src={Instagram || "/placeholder.svg"}
                alt="instagram"
                className="w-[30px] h-[30px]"
              />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:ml-20">
          <h3 className="font-semibold uppercase mb-4 ">Quick Links:</h3>
          <div className="flex flex-col space-y-2 text-start">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="hover:underline w-fit"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Operational Hours */}
        <div>
          <h3 className="font-semibold uppercase mb-4">Operational Hours:</h3>
          <div className="">
            <RichText content={footerData.operationalHours.raw} />
          </div>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h3 className="font-semibold uppercase mb-4">Contact Us:</h3>
          <p>
            Phone:
            <a
              href={`tel:${footerData.contactDetail}`}
              className="hover:underline ml-2"
            >
              {footerData.contactDetail}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 pt-4 border-t border-gray-300 flex md:flex-row space-y-4 flex-col md:space-y-0 justify-between items-center">
        <p className="text-sm">
          Delicious Indian Food in Sandy Springs Atlanta
        </p>
        <p className="text-sm">
          DESIGNED AND DEVELOPED BY{" "}
          <Link
            href="https://debox.co.in/"
            target="_blank"
            className="underline"
          >
            DEBOX CONSULTING PVT. LTD.
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
