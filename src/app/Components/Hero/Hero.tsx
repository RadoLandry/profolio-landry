import React from 'react'
import style from './fond.module.css'
function Hero() {
  return (
    <>

    <div className={style.fond}>
        <div className="bg-slate-500 w-10 rounded-full mt-20  pt-10 px-2 py-7"> 
            <div className='flex flex-col justify-items-stretch justify-between gap-10'>
                <button>
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

                <button>
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

                <button>
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
        </div>

        <div className='container max-w-[50%] text-left mt-20 mx-10 my-10 flex-col justify-center items-center'>
            <h1 className='md:text-4xl'>RANDRIANANDRASANA <br/>
            Rado Lalaina Landry Sandrio</h1>
            <h2 className='text-xl text-slate-400 mt-5'>Développeur full-stack MERN et spécialiste Shopify basé à Madagascar, j’aide les entreprises à construire des solutions e-commerce modernes et performantes</h2>
        </div> 
        
    </div>
    </>
  )
}

export default Hero