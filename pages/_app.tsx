import type { AppProps } from "next/app";
import "../styles/global.css";
import { Rubik, Bebas_Neue } from '@next/font/google';

const rubik = Rubik({
    weight: ['400', '500', '600',  '700'],
    subsets: ['latin'],
  });
const bebas = Bebas_Neue({
    weight: ['400'],
    subsets: ['latin'],
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <style jsx global>{`
      :root {
        --font-rubik: ${rubik.style.fontFamily};
        --font-bebas: ${bebas.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
    <style jsx global>{`
      @import url('https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap');
    `}</style>
  </>
  );
}

export default MyApp;
 