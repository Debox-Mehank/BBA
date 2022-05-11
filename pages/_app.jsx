import Head from "next/head";
import Layout from '../components/Layout'
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/globals.css'
import "swiper/css";
config.autoAddCss = false;

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
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
