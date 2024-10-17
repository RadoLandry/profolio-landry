import React from 'react';
import style from '../Contacts/style.module.css'

const CardProject = () => {
  return (
    <>
      <div className="w-full max-w-md p-4 border rounded-lg shadow sm:p-6 bg-gray-[#4b556330] border-gray-700">
        <h5 className="mb-3 text-base font-semibold md:text-xl text-white">
          Technologies
        </h5>
        <p className="text-sm font-normal text-gray-400">
          Les langages,les cms et les frameworks que j&apos; utilise souvent:
        </p>
        <ul className="my-4 space-y-3 text-white">
          <li>+ HTML,CSS</li>
          <li>+ Javascript,Typescript</li>
          <div className='block md:hidden'>
            <div className={style.decorationRight}></div>
          </div>
          <li>+ Stack MERN:</li>
            <li className='ml-10 pb-0 mb-0'>- MongoDB</li>
            <li className='ml-10 pb-0 mb-0'>- Express</li>
            <li className='ml-10 pb-0 mb-0'>- React</li>
            <li className='ml-10 pb-0 mb-0'>- NodeJS</li>
          <li>+ NextJs & Tailwind ,Remix</li>
          <li>+ Shopify,StoryBlok</li>
        </ul>
       
      </div>
    </>
  );
}

export default CardProject;