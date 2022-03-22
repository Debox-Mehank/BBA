import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <nav className="flex justify-around items-center flex-wrap h-auto w-full z-50 p-6 bg-pri_green">
            <ul className='grid grid-cols-3 lg:block'>
                <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center text-primary uppercase text-xs`}>
                        Home
                    </a>
                </Link>
                <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center text-primary uppercase text-xs`}>
                        Menu
                    </a>
                </Link>
                <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center text-primary uppercase text-xs`}>
                        Catering
                    </a>
                </Link>
                <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center text-primary uppercase text-xs`}>
                        Promotions
                    </a>
                </Link>
                <Link href={"/"}>
                    <a
                        className={`px-4 py-2 font-bold items-center justify-center text-primary uppercase text-xs`}>
                        Online Ordering
                    </a>
                </Link>
            </ul>
            <div className="w-48 p-12">
                <Link href="/">
                    <a className="items-center mx-3 inline-flex">
                        <FontAwesomeIcon icon={faFacebookSquare} size={"lg"} className="text-primary" />
                    </a>
                </Link>
                <Link href="/">
                    <a className="items-center mx-3 inline-flex">
                        <FontAwesomeIcon icon={faInstagramSquare} size={"lg"} className="text-primary" />
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Footer