// pages/index.tsx
import React from "react";
import { gql } from "graphql-request";
import { graphQLClient } from "@/lib/graphqlClient";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Bawarchi from "../components/Bawarchi";
import Slider from "../components/Slider";
import Events from "../components/Events";
import LunchSection from "../components/LunchSection";
import Download from "../components/Download";
import Footer from "../components/Footer";
import FrameSection from "../components/FrameSection";
import { GetStaticProps } from "next";

// types.ts
interface IHomePage {
  title: string;
  titleSlider2: string;
  titleSlider3: string;
  isVideo: boolean;
  heroBannerDesktop: {
    url: string;
  };
  heroBannerMobile: {
    url: string;
  };
  highlightSectionTitle: string;
  highlightSectionContent: string;
  highlightSectionImage: {
    url: string;
  };
  frameSectionTitle: string;
  frameSectionImage1: {
    url: string;
  };
  frameSectionImage2: {
    url: string;
  };
  frameSectionImage3: {
    url: string;
  };
  frameSectionImage4: {
    url: string;
  };
  offerSectionTitle: string;
  offerSectionContent: string;
  offerSectionSubContent: string;
  offerSectionImage: {
    url: string;
  };
  operationalHours: {
    raw: string;
    html: string;
    text: string;
  };
  contactDetail: string;
  address: string;
  ctaImage: {
    url: string;
  };
  imageSlider1?: {
    url: string;
  };
  imageSlider2?: {
    url: string;
  };
  imageSlider3?: {
    url: string;
  };

  eventSectionVideo: {
    url: string;
  };
  imageSliderBlurHash1: string;
  imageSliderBlurHash2: string;
  imageSliderBlurHash3: string;
  frameSection1BlurHash: string;
  frameSection2BlurHash: string;
  frameSection3BlurHash: string;
  frameSection4BlurHash: string;
  ctaImageBlurHash: string;
  aboutUsTitle: string;
  aboutUsContent: string;
  cateringSectionTitle: string;
  cateringSectionContent: string;
  eventsCatered: number;
  biryanisServed: number;
  guestsServed: number;
  heroBannerDesktop2: {
    url: string;
  };
  heroBannerMobile2: {
    url: string;
  };
  heroBannerDesktop3: {
    url: string;
  };
  heroBannerMobile3: {
    url: string;
  };
  instagramLink: string;
  facebookLink: string;
  orderNowLink: string;
}

interface HomePageProps {
  homePageData: IHomePage;
}

const HomePage: React.FC<HomePageProps> = ({ homePageData }) => {
  return (
    <div>
      <Navbar />
      <Banner
        heroBannerDesktop={homePageData.heroBannerDesktop}
        heroBannerMobile={homePageData.heroBannerMobile}
        isVideo={homePageData.isVideo}
        title={homePageData.title}
        heroBannerDesktop2={homePageData.heroBannerDesktop2}
        heroBannerDesktop3={homePageData.heroBannerDesktop3}
        heroBannerMobile2={homePageData.heroBannerMobile2}
        heroBannerMobile3={homePageData.heroBannerMobile3}
        title2={homePageData.titleSlider2}
        title3={homePageData.titleSlider3}
        onlineOrderLink={homePageData.orderNowLink}
      />
      <Gallery
        Img1={homePageData.imageSlider1}
        Img2={homePageData.imageSlider2}
        Img3={homePageData.imageSlider3}
        ImgBH1={homePageData.imageSliderBlurHash1}
        ImgBH2={homePageData.imageSliderBlurHash2}
        ImgBH3={homePageData.imageSliderBlurHash3}
        sectionContent={homePageData.aboutUsContent}
        sectionTitle={homePageData.aboutUsTitle}
      />
      <Bawarchi />
      <Slider
        highlightSectionContent={homePageData.highlightSectionContent}
        highlightSectionImage={homePageData.highlightSectionImage}
        highlightSectionTitle={homePageData.highlightSectionTitle}
        biryanisServed={homePageData.biryanisServed}
        eventsCatered={homePageData.eventsCatered}
        guestsServed={homePageData.guestsServed}
      />
      <Events
        eventReel={homePageData.eventSectionVideo}
        eventContent={homePageData.cateringSectionContent}
        eventTitle={homePageData.cateringSectionTitle}
      />
      <LunchSection
        offerSectionContent={homePageData.offerSectionContent}
        offerSectionImage={homePageData.offerSectionImage}
        offerSectionSubContent={homePageData.offerSectionSubContent}
        offerSectionTitle={homePageData.offerSectionTitle}
      />
      <FrameSection
        frameSectionImage1={homePageData.frameSectionImage1}
        frameSectionImage2={homePageData.frameSectionImage2}
        frameSectionImage3={homePageData.frameSectionImage3}
        frameSectionImage4={homePageData.frameSectionImage4}
        frameSectionTitle={homePageData.frameSectionTitle}
        frameSectionBlurHash1={homePageData.frameSection1BlurHash}
        frameSectionBlurHash2={homePageData.frameSection2BlurHash}
        frameSectionBlurHash3={homePageData.frameSection3BlurHash}
        frameSectionBlurHash4={homePageData.frameSection4BlurHash}
      />
      <Download
        CTAImage={homePageData.ctaImage}
        CTABlurHash={homePageData.ctaImageBlurHash}
      />
      <Footer />
    </div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const query = gql`
      query HomePage {
        homePages {
          title
          isVideo
          heroBannerDesktop {
            url
          }
          heroBannerMobile {
            url
          }
          highlightSectionTitle
          highlightSectionContent
          highlightSectionImage {
            url
          }
          frameSectionTitle
          frameSectionImage1 {
            url
          }
          frameSectionImage2 {
            url
          }
          frameSectionImage3 {
            url
          }
          frameSectionImage4 {
            url
          }
          offerSectionTitle
          offerSectionContent
          offerSectionSubContent
          offerSectionImage {
            url
          }
          operationalHours {
            raw
            html
            text
          }
          contactDetail
          address
          ctaImage {
            url
          }
          imageSlider1 {
            url
          }
          imageSlider2 {
            url
          }
          imageSlider3 {
            url
          }
          eventSectionVideo {
            url
          }
          imageSliderBlurHash1
          imageSliderBlurHash2
          imageSliderBlurHash3
          frameSection1BlurHash
          frameSection2BlurHash
          frameSection3BlurHash
          frameSection4BlurHash
          ctaImageBlurHash
          aboutUsTitle
          aboutUsContent
          cateringSectionTitle
          cateringSectionContent
          eventsCatered
          biryanisServed
          guestsServed
          heroBannerDesktop2 {
            url
          }
          heroBannerMobile2 {
            url
          }
          heroBannerDesktop3 {
            url
          }
          heroBannerMobile3 {
            url
          }
          titleSlider2
          titleSlider3
          instagramLink
          facebookLink
          orderNowLink
        }
      }
    `;

    const response = await graphQLClient.request<{ homePages: IHomePage[] }>(
      query
    );

    return {
      props: {
        homePageData: response.homePages[0],
      },
      revalidate: 3600, // Regenerate page every 1 hour
    };
  } catch (error) {
    console.error("GraphQL query failed:", error);
    return {
      props: {
        homePageData: null,
      },
      revalidate: 3600, // Still revalidate even on error
    };
  }
};
