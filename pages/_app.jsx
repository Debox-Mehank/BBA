import Head from "next/head";
import Layout from "../components/Layout";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import "swiper/css";
import image from "../assets/dish3.png";
import { getMobileOSBasedAppLink } from "../utils/app_link_redirect";
config.autoAddCss = false;


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
    
        <title>{`Bawarchi Biryanis Atlanta - Authentic Indian Cuisine in a Fine Dine Setting`}</title>
        <link rel="canonical" href={`https://bawarchiatlanta.com/`} />
        <link rel="icon" href="/favicon.ico" />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={`Bawarchi Biryanis Atlanta - Authentic Indian Cuisine in a Fine Dine Setting `}
        />
        <meta property="og:image" content={"/assets/dish1.png"} />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Experience the richness of authentic Indian cuisine at Bawarchi Biryanis Atlanta. From Mughlai delights to South-Indian classics, our versatile menu celebrates India's culinary traditions."
          }
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={
            "Bawarchi Biryanis Atlanta - Authentic Indian Cuisine in a Fine Dine Setting"
          }
        />
        <meta
          property="twitter:description"
          content={
            "Experience the richness of authentic Indian cuisine at Bawarchi Biryanis Atlanta. From Mughlai delights to South-Indian classics, our versatile menu celebrates India's culinary traditions."
          }
        />
        <meta property="twitter:url" content={`https://bawarchiatlanta.com/`} />
        <meta property="twitter:image" content={"/assets/dish1.png"} />
      </Head>

      <Component {...pageProps} />

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        id="analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-228506755-1`}
      />
      <Script strategy="lazyOnload" id="analytics2">
        {`            window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', "UA-228506755-1");`}
      </Script>
    </Layout>
  );
}

export default MyApp;
