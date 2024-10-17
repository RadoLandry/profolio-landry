import React from 'react';
import style from './style.module.css'
import DowloadIcone from './icones/DowloadIcone';
import ReseauSociaux from '../ReseauSociaux/ReseauSociaux';
import Image from 'next/image';
import photodp from '../../assets/images/photodp.jpg'


function HeroTwo() {

  return (
    <section className={style.back}>
        
        <div className='container m-auto'>
            <Image className="text-center m-auto my-5 rounded-full" src={photodp} width="150" height="150" alt="pdp"/>
            <h1 className='text-white mb-15 font-manrope text-2xl md:text-6xl font-bold leading-relaxed mx-2'>RANDRIANANDRASANA Landry</h1>
            <p className='text-sm md:text-xl text-slate-400 mt-5 text-center max-w-3xl mx-2 md:m-auto '>Développeur full-stack MERN et spécialiste Shopify basé à Madagascar, j’aide les entreprises à construire des solutions e-commerce modernes et performantes</p>
            <div className={style.decoration}></div>
        </div>
        <ReseauSociaux/>
        <a 
          className="text-blue-700 flex justify-center items-center m-auto max-w-36 mr-auto hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          href="/pdf/CV_RANDRIANANDRASANA_Rado_Lalaina_Landry.pdf"
          download="CV_RANDRIANANDRASANA_Rado_Lalaina_Landry.pdf"
        >
            <DowloadIcone/>
            <span className='m-auto text-xl'>CV</span>
        </a> 

    </section>
  )
}

export default HeroTwo

