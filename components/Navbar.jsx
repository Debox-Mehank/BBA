import { useState, useEffect } from "react"
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png"

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const doMagic = () => {
            setIsOpen(false);
        };

        Router.events.on("routeChangeStart", doMagic); // add listener

        return () => {
            Router.events.off("routeChangeStart", doMagic); // remove listener
        };
    }, []);

    return (
        <nav className="flex justify-between items-center flex-wrap h-auto w-full z-40 fixed top-0 left-0 p-6 bg-white">
            <div className="w-48">
                <Link href="/">
                    <a className="items-center mx-3 inline-flex">
                        <Image
                            src={logo}
                            alt="Bawarchi Biryanis Atlanta"
                        />
                    </a>
                </Link>
            </div>
            <ul className="hidden md:block">
                <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}>
                        Home
                    </a>
                </Link>
                {/* <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}>
                        Menu
                    </a>
                </Link> */}
                <Link href={"#catering"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}>
                        Catering
                    </a>
                </Link>
                {/* <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black`}>
                        Promotions
                    </a>
                </Link> */}
                <a
                    href="https://www.clover.com/online-ordering/bawarchi-biryanis-atlanta"
                    target={"_blank"}
                    rel="noreferrer"
                    className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-xs md:text-base text-black cursor-pointer`}>
                    Online Ordering
                </a>
            </ul>
            <div className={`${isOpen ? 'block' : 'hidden'} fixed transition-all top-0 left-0 w-full h-full z-50 bg-black`}>
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="absolute top-6 right-6 text-white text-6xl"
                    aria-label="Menu Mobile Button">
                    &times;
                </button>
                <ul className="flex flex-col justify-center items-center gap-4 h-full">
                    <a
                        onClick={() => {
                            setIsOpen((prev) => !prev)
                            router.push("/")
                        }}
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}>
                        Home
                    </a>
                    <a
                        onClick={() => {
                            setIsOpen((prev) => !prev)
                            router.push("#catering")
                        }}
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}>
                        Catering
                    </a>
                    <a
                        onClick={() => {
                            setIsOpen((prev) => !prev)
                            router.push("https://www.clover.com/online-ordering/bawarchi-biryanis-atlanta")
                        }}
                        className={`px-4 py-2 font-bold items-center justify-center hover:text-primary uppercase text-2xl text-white`}>
                        Online Ordering
                    </a>
                </ul>
            </div>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex p-3 md:hidden text-black ml-auto"
                aria-label="Menu Mobile Button">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </nav>
    )
}

export default Navbar