import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import { Karla } from "next/font/google";
const font = Karla({ subsets: ["latin"], weight: ["400", "800"] });

const Layout = ({ children }) => {
  return (
    <div
      className={"min-h-full flex flex-col tracking-widest " + font.className}
    >
      <Head>
        <title>Bawarchi Biryani Atlanta</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
