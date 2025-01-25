import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurStory from "@/components/OurStory/OurStory";
import StoryImage from "@/components/OurStory/StoryImage";
import StoryText from "@/components/OurStory/StoryText";
import { graphQLClient } from "@/lib/graphqlClient";
import { gql } from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import StorySection from "@/components/OurStory/StorySection";

interface IOurStoryPage {
  section1Title: string;
  section1Image: {
    url: string;
  };
  section1ImageBlurHash: string;
  section1Content: {
    raw: any;
    text: string;
  };
  section2Title: string;
  section2Image: {
    url: string;
  };
  section2ImageBlurHash: string;
  section3Title: string;
  section3Content: {
    raw: any;
    text: string;
  };
  section3Image: {
    url: string;
  };
  section3ImageBlurHash: string;
}

interface OurStoryPageProps {
  ourStoryPageData: IOurStoryPage;
}

const ourStory: React.FC<OurStoryPageProps> = ({ ourStoryPageData }) => {
  return (
    <>
      <Head>
        <title>Bawarchi Atlanta Journey</title>
        <meta
          name="description"
          content="Discover the journey of Bawarchi Atlanta's culinary passion and commitment to authentic Indian cuisine."
        />
        <link rel="canonical" href={`https://bawarchiatlanta.com/our-story/`} />
        <link rel="icon" href="/favicon.ico" />
        {/* OG Tags */}
        <meta property="og:title" content={`Our Story | Bawarchi Atlanta`} />
        <meta property="og:image" content={"/BBA.jpg"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Discover the story behind Bawarchi Atlanta's culinary passion and commitment to authentic Indian cuisine."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Our Story | Bawarchi Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Learn about the journey and inspiration behind Bawarchi Atlanta's restaurant."
          }
        />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/our-story/`}
        />
        <meta property="twitter:image" content={"/BBA.jpg"} />
      </Head>
      <div>
        <Navbar />
        <OurStory
          sectionImage={ourStoryPageData.section1Image}
          sectionImageBlurHash={ourStoryPageData.section1ImageBlurHash}
          sectionTitle={ourStoryPageData.section1Title}
          sectionContent={ourStoryPageData.section1Content}
        />
        <StoryImage
          sectionImage={ourStoryPageData.section2Image}
          sectionImageBlurHash={ourStoryPageData.section2ImageBlurHash}
          sectionTitle={ourStoryPageData.section2Title}
        />
        <OurStory
          sectionImage={ourStoryPageData.section3Image}
          sectionImageBlurHash={ourStoryPageData.section3ImageBlurHash}
          sectionTitle={ourStoryPageData.section3Title}
          sectionContent={ourStoryPageData.section3Content}
          isTop
        />
        <StoryText />
        <Footer />
      </div>
    </>
  );
};

export default ourStory;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const query = gql`
      query OurStoryPage {
        ourStoryPages {
          section1Title
          section1Image {
            url
          }
          section1Content {
            raw
            text
          }
          section1ImageBlurHash
          section2Title
          section2Image {
            url
          }
          section2ImageBlurHash
          section3Title
          section3Content {
            raw
            text
          }
          section3Image {
            url
          }
          section3ImageBlurHash
        }
      }
    `;

    const response = await graphQLClient.request<{
      ourStoryPages: IOurStoryPage[];
    }>(query);

    return {
      props: {
        ourStoryPageData: response.ourStoryPages[0],
      },
      revalidate: 86400, //1 day
    };
  } catch (error) {
    console.error("GraphQL query failed:", error);
    return {
      props: {
        homePageData: null,
      },
      revalidate: 86400, //1 day
    };
  }
};
