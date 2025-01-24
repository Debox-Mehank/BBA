import React from "react";
import Catering from "../components/Catering/Catering";
import Navbar from "../components/Navbar";
import CateringOptions from "@/components/Catering/CateringOptions";
import CateringPackages from "@/components/Catering/CateringPackages";
import PartyPackage from "@/components/Catering/PartyPackage";
import PartyTrays from "@/components/Catering/PartyTrays";
import CateringForm from "@/components/Catering/CateringForm";
import CateringCard from "@/components/Catering/CateringCard";
import Footer from "@/components/Footer";
import Head from "next/head";
import { graphQLClient } from "@/lib/graphqlClient";
import { gql } from "graphql-request";
import { GetStaticProps } from "next";

export interface ICateringPage {
  section1Title: string;
  section1ImageBlurHash: string;
  section1Image: {
    url: string;
  };
  section2Title: string;
  section2Image: {
    url: string;
  };
  section2Content: {
    raw: any;
    text: string;
  };
  section2ImageBlurHash: string;
  section3Title: string;
  section3Image: {
    url: string;
  };
  section3Content: {
    raw: any;
    text: string;
  };
  section3ImageBlurHash: string;
  section4Title: string;
  section4Image: {
    url: string;
  };
  section4Content: {
    raw: any;
    text: string;
  };
  section4ImageBlurHash: string;
  sec3Package1Title: string;
  sec3Package1Subtitle: string;
  sec3Package1Content: string;
  sec3Package2Title: string;
  sec3Package2Subtitle: string;
  sec3Package2Content: string;
  cateringPackage1: {
    text: string;
    raw: any;
  };
  cateringPackage2: {
    text: string;
    raw: any;
  };
  cateringPackage3: {
    text: string;
    raw: any;
  };
  partyTray1: {
    raw: any;
    text: string;
  };
  partyTray2: {
    raw: any;
    text: string;
  };
  partyTray3: {
    raw: any;
    text: string;
  };
  partyTray4: {
    raw: any;
    text: string;
  };
  partyTray1Image: {
    url: string;
  };
  partyTray2Image: {
    url: string;
  };
  partyTray3Image: {
    url: string;
  };
  partyTray4Image: {
    url: string;
  };
}

interface ICatering {
  cateringPageData: ICateringPage;
}

const catering: React.FC<ICatering> = ({ cateringPageData }) => {
  console.log(cateringPageData);
  return (
    <div>
      <Head>
        <title>{`Best Indian Catering in Atlanta`}</title>
        <meta
          name="description"
          content="Best Indian Catering services in Atlanta having catered more than 1000+ events and served half a million people through the Catering services over the last 10 years."
        />
        <link rel="canonical" href={`https://bawarchiatlanta.com/catering/`} />
        <link rel="icon" href="/favicon.ico" />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={`Best Indian Catering in Atlanta `}
        />
        <meta property="og:image" content={"/BBA.jpg"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Best Indian Catering services in Atlanta having catered more than 1000+ events and served half a million people through the Catering services over the last 10 years."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Best Indian Catering in Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Best Indian Catering services in Atlanta having catered more than 1000+ events and served half a million people through the Catering services over the last 10 years."
          }
        />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/catering/`}
        />
        <meta property="twitter:image" content={"/BBA.jpg"} />
      </Head>
      <Navbar />
      <Catering
        sectionImage={cateringPageData.section1Image}
        sectionImageBlurHash={cateringPageData.section1ImageBlurHash}
        sectionTitle={cateringPageData.section1Title}
      />
      <CateringOptions
        sectionContent={cateringPageData.section2Content}
        sectionImage={cateringPageData.section2Image}
        sectionImageBlurHash={cateringPageData.section2ImageBlurHash}
        sectionTitle={cateringPageData.section2Title}
      />
      <PartyPackage
        sectionContent={cateringPageData.section4Content}
        sectionImage={cateringPageData.section4Image}
        sectionImageBlurHash={cateringPageData.section4ImageBlurHash}
        sectionTitle={cateringPageData.section4Title}
        Package1Content={cateringPageData.sec3Package1Content}
        Package1Subtitle={cateringPageData.sec3Package1Subtitle}
        Package1Title={cateringPageData.sec3Package1Title}
        Package2Content={cateringPageData.sec3Package2Content}
        Package2Subtitle={cateringPageData.sec3Package2Subtitle}
        Package2Title={cateringPageData.sec3Package2Title}
      />
      <CateringCard
        package1={cateringPageData.cateringPackage1}
        package2={cateringPageData.cateringPackage2}
        package3={cateringPageData.cateringPackage3}
      />
      <CateringPackages
        sectionContent={cateringPageData.section3Content}
        sectionImage={cateringPageData.section3Image}
        sectionImageBlurHash={cateringPageData.section3ImageBlurHash}
        sectionTitle={cateringPageData.section3Title}
      />

      <PartyTrays
        partyTray1={cateringPageData.partyTray1}
        partyTray2={cateringPageData.partyTray2}
        partyTray3={cateringPageData.partyTray3}
        partyTray4={cateringPageData.partyTray4}
        partyTray1Image={cateringPageData.partyTray1Image}
        partyTray2Image={cateringPageData.partyTray2Image}
        partyTray3Image={cateringPageData.partyTray3Image}
        partyTray4Image={cateringPageData.partyTray4Image}
      />
      <CateringForm />
      <Footer />
    </div>
  );
};

export default catering;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const query = gql`
      query CateringPage {
        caterings {
          section1Title
          section1ImageBlurHash
          section1Image {
            url
          }
          section2Title

          section2Image {
            url
          }
          section2Content {
            raw
            text
          }
          section2ImageBlurHash

          section4Title
          section4Image {
            url
          }
          section4Content {
            raw
            text
          }
          section4ImageBlurHash
          section3Title
          section3Image {
            url
          }
          section3Content {
            raw
            text
          }
          section3ImageBlurHash
          sec3Package1Title
          sec3Package1Subtitle
          sec3Package1Content
          sec3Package2Title
          sec3Package2Subtitle
          sec3Package2Content
          cateringPackage1 {
            text
            raw
          }
          cateringPackage2 {
            text
            raw
          }
          cateringPackage3 {
            text
            raw
          }
          partyTray1 {
            raw
            text
          }
          partyTray2 {
            raw
            text
          }
          partyTray3 {
            raw
            text
          }
          partyTray4 {
            raw
            text
          }
          partyTray1Image {
            url
          }
          partyTray2Image {
            url
          }
          partyTray3Image {
            url
          }
          partyTray4Image {
            url
          }
        }
      }
    `;

    const response = await graphQLClient.request<{
      caterings: ICateringPage[];
    }>(query);

    return {
      props: {
        cateringPageData: response.caterings[0],
      },
      revalidate: 86400, //1 day
    };
  } catch (error) {
    console.error("GraphQL query failed:", error);
    return {
      props: {
        cateringPageData: null,
      },
      revalidate: 86400, //1 day
    };
  }
};
