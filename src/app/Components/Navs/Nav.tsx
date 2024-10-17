"use client"; 

import React from 'react';
import pdf from '../../assets/images/pdp.jpeg'
import Image from 'next/image';
import Link from "next/link";
import { useState } from 'react';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <nav className='bg-[#0000] w-full md:py-10'>
        <div className="flex justify-between md:hidden m-7">
            <span className="text-white">RL</span>
            <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen}
            >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
            </button>
        </div>
  

            <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className='w-full flex flex-col font-medium mt-4 rounded-lg rtl:space-x-reverse md:container md:m-auto md:flex-row md:justify-between'> 
                    <li>
                        <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">Accueil</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">À propos</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">Compétences</Link>
                    </li>
                    <Image className="hidden md:block"src={pdf} alt="logo" width={50} height={50}/>
                    <li>
                        <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">Projets</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">Expérience</Link>
                    </li>
                    <li>
                        <Link href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent">Contact</Link>
                    </li>
                </ul>
            </div>
            
    </nav>
  )
}

export default Nav 

// RANDRIANANDRASANA 
// Rado Lalaina Landry Sandrio
// Développeur full-stack MERN et spécialiste Shopify basé à Madagascar, j’aide les entreprises à construire des solutions e-commerce modernes et performantes
// Télécharger mon CV

