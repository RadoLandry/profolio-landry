'use client'

import React from 'react';
import Image from 'next/image';
import projectInfo from './data/projectInfo'

const CardProject = () => {
  return (
    <div className="w-full max-w-md p-4 border rounded-lg shadow sm:p-6 bg-gray-[#4b556330] border-gray-700">
      <h5 className="mb-3 text-base font-semibold md:text-xl text-white">
        Projets
      </h5>
      <p className="text-sm font-normal text-gray-400">
        Les projets auxquels j&apos;ai participé ces dernières années jusqu&apos;à aujourd&apos;hui.
      </p>
      <ul className="my-4 space-y-3">
        {projectInfo.map((project, index) => (
          <li key={index}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-[#4b55631c] hover:bg-[#6b728026] text-white"
            >
              <Image src={project.logo} width={50} height={50} alt={`Logo de ${project.title}`} />
              <div className="flex-1 ms-3 whitespace-normal text-sm">
                <span>{project.url}</span>
                <p className="text-sm font-normal text-gray-400">
                  {project.description}
                </p>
              </div>
              <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium rounded bg-gray-700 text-gray-400">
                {project.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardProject;
