'use client'

import React from 'react';
import Image from 'next/image';
import logo_ispm from './images/logo_ispm.png';
import freecodecamp from './images/freecodecamp.jpg';
import great_learning_logo from './images/great_learning_logo.jpg';
import Link from 'next/link';

function Card() {
  return (
    <>
      <div className="w-full max-w-md p-4 border rounded-lg shadow sm:p-6 bg-gray-[#4b556330] border-gray-700">
        <h5 className="mb-3 text-base font-semibold md:text-xl text-white">
          Formations
        </h5>
        <p className="text-sm font-normal text-gray-400">
          Mon parcours universitaire et mes formations.
        </p>
        <ul className="my-4 space-y-3">
          <li>
            <div
              className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-[#4b55631c] hover:bg-[#6b728026] text-white"
            >
              <Image src={logo_ispm} width={50} height={50} alt="logo_ispm" />
              <div className="flex-1 ms-3 whitespace-normal text-sm">
                <span>
                  Institut Supérieur Polythecnique de Madagascar (ISPM)
                </span>
                <p className="text-sm font-normal text-gray-400">
                  Diplôme de Master II Professionnelle en Informatique de
                  Gestion Génie Logiciel et Intelligence artificielle (IGGLIA)
                </p>
              </div>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded bg-gray-700 text-gray-400">
                2015-2020
              </span>
            </div>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-[#4b55631c] hover:bg-[#6b728026] text-white"
            >
              <Image src={freecodecamp} width={50} height={50} alt="freecodecamp_logo" />
              <span className="flex-1 ms-3 whitespace-normal text-sm">
                <span className='block'>
                freeCodeCamp
                </span>
                <Link href="https://www.freecodecamp.org/certification/fcc63b11ea3-1b41-4a8e-85ed-fe4aa34b739b/responsive-web-design" className="text-sm font-normal text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Certificat, Responsive Web Design
                </Link>
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded bg-gray-700 text-gray-400">
                Août 2024
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-[#4b55631c] hover:bg-[#6b728026] text-white"
            >
              <Image src={great_learning_logo} width={50} height={50} alt="logo_ispm" />
              <span className="flex-1 ms-3 whitespace-normal text-sm">
                <span className='block'>
                GreatLearning
                </span>
                <Link href="https://www.mygreatlearning.com/certificate/RKPYBCQE" className="text-sm font-normal text-gray-400 hover:underline" target="_blank" rel="noopener noreferrer">
                  Certificate of completion, MERN stack
                </Link>
              </span>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded bg-gray-700 text-gray-400">
                Août 2024
              </span>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Card