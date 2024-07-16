import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import { Karla } from "next/font/google";
import { getMobileOSBasedAppLink } from "../utils/app_link_redirect";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const font = Karla({ subsets: ["latin"], weight: ["400", "800"] });

const Layout = ({ children }) => {
  const router = useRouter();

  const [nv, setNv] = useState();

  useEffect(() => {
    if (navigator) {
      setNv(navigator);
    }
  }, []);

  return (
    <div
      className={"min-h-full flex flex-col tracking-widest " + font.className}
    >
      <Head>
        <title>Bawarchi Biryani Atlanta</title>
      </Head>
      <Navbar />
      {children}
      {nv ? (
        <button
          // target="_blank"
          // rel="noreffer"
          // href={getMobileOSBasedAppLink()}
          onClick={() => {
            let l = getMobileOSBasedAppLink(nv);
            router.push(l);
          }}
          className="bg-white/80 backdrop-blur-3xl fixed bottom-16 right-2 md:right-8 text-sm md:text-base z-[100] hover:bg-white duration-200 py-2 px-5 rounded-lg drop-shadow-2xl tracking-widest"
        >
          Download our App
        </button>
      ) : null}
      <a
        target="_blank"
        rel="noreffer"
        href="https://ordersave.com/partnersite/j5DgkW8FF1Nd/menu"
        className="bg-white/80 backdrop-blur-3xl fixed bottom-4 right-2 md:right-8 text-sm md:text-base z-[100] hover:bg-white duration-200 py-2 px-5 rounded-lg drop-shadow-2xl"
      >
        Order Online
      </a>
      <Footer />
    </div>
  );
};

export default Layout;
