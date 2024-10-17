import React from 'react';
import Image from 'next/image';
import logo_ispm from './images/logo_ispm.png';
import freecodecamp from './images/freecodecamp.jpg';
import great_learning_logo from './images/great_learning_logo.jpg';

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
            <a
              href="#"
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
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-[#4b55631c] hover:bg-[#6b728026] text-white"
            >
              <Image src={freecodecamp} width={50} height={50} alt="logo_ispm" />
              <div className="flex-1 ms-3 whitespace-normal text-sm">
                <span>
                freeCodeCamp
                </span>
                <p className="text-sm font-normal text-gray-400">
                  Certificat, Responsive Web Design
                </p>
              </div>
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
              <div className="flex-1 ms-3 whitespace-normal text-sm">
                <span>
                GreatLearning
                </span>
                <p className="text-sm font-normal text-gray-400">
                  Certificate of completion, MERN stack
                </p>
              </div>
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