import Head from "next/head";
import Layout from "../components/Layout";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import "swiper/css";
import image from "../assets/dish3.png";
config.autoAddCss = false;

//

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Bawarchi Biryani - Best Indian Food in Atlanta </title>
        <meta
          name="description"
          content="Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment. 
          Serving the finest Indian food in Atlanta."
        />
        {/* Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bawarchi Biryani - Best Indian Food in Atlanta "
        />
        <meta
          property="og:description"
          content="Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment. 
Serving the finest Indian food in Atlanta."
        />
        <meta property="og:image" content={image} />
        {/* Twitter Tags */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Bawarchi Biryani - Best Indian Food in Atlanta "
        />
        <meta
          property="twitter:description"
          content="Bawarchi Biryanis, isn't just about food. It's about the generations of chefs who kept the cooking traditions alive and are behind the delicious dishes we serve in our establishment. 
Serving the finest Indian food in Atlanta."
        />
        <meta property="twitter:image" content={image} />
      </Head>

      <Component {...pageProps} />
      <a
        target="_blank"
        rel="noreffer"
        href="https://www.clover.com/online-ordering/bawarchi-biryanis-atlanta-atlanta"
        className="bg-white/80 backdrop-blur-3xl fixed bottom-4 right-8 z-[100] hover:bg-white duration-200 py-2 px-5 rounded-lg drop-shadow-2xl"
      >
        Order Online
      </a>

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
