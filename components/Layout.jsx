import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="min-h-full flex flex-col tracking-widest">
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
