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
      <a
        target="_blank"
        rel="noreffer"
        href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
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
