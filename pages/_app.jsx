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
        <title>Bawarchi Biryani Atlanta</title>
        <meta
          name="description"
          content="Bawarchi Biryanis Atlanta"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
