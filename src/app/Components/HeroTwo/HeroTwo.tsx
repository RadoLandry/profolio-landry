import React from 'react';
import style from './style.module.css'
import LinkidinIcone from './icones/LinkidinIcone';
import GitLabIcone from './icones/GitLabIcone';
import GitHubIcone from './icones/GitHubIcone';
import DowloadIcone from './icones/DowloadIcone';


function HeroTwo() {
  return (
    <section className={style.back}>
        <div className='container m-auto'>
            <h1 className='text-white mb-15 font-manrope text-2xl md:text-6xl font-bold leading-relaxed'>RANDRIANANDRASANA Landry</h1>
            <p className='text-sm md:text-xl text-slate-400 mt-5 text-center max-w-3xl m-auto'>Développeur full-stack MERN et spécialiste Shopify basé à Madagascar, j’aide les entreprises à construire des solutions e-commerce modernes et performantes</p>
            <div className={style.decoration}></div>
        </div>

        <div className='flex justify-center gap-5 my-10'>
            <LinkidinIcone/>
            <GitHubIcone/>
            <GitLabIcone/>
        </div>

        <button className="bg-[#1e40af30] text-white px-6 py-3 mt-5 font-xl rounded-md sm:mb-0 m-auto flex gap-3  hover:border-[3px] hover:border-blue-500">
            <DowloadIcone/>
            <span className='m-auto text-xl'>CV</span>
        </button>        
    </section>
  )
}

export default HeroTwo

