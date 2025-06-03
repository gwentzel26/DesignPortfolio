import React from 'react'
import hero from '../../assets/keys1.jpeg'
import electricButterfield from '../../assets/electricButterfield.jpeg'

export default function Hero() {
  return (
    <section id='home' className='relative flex items-center justify-center overflow-hidden min-h-[780px] sm:min-h-[600px]' >
        <div className='flex flex-col md:flex-row md:space-x-4 font-arima px-8 max-w-5xl mx-auto md:mt-32 mt-[-180px]'>
            <div data-aos='fade-up' data-aos-delay='500' className='flex-1 space-y-6 transform'>
                <p className='text-sm text-gray-600 '>Blending Genres and Mediums </p>
                <h1 className='text-5xl font-semibold text-gray-900'>Visual & Musical Artist</h1>
                <div className='flex items-center'>
                    <span className='w-8 h-8 bg-orange-300 rounded-full'></span>
                    <span className='w-8 h-8 bg-blue-300 rounded-full'></span>
                    <button className='-ml-5 font-bold text-black rounded-full z-10'></button>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='600' className='flex-1 relative'>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='relative z-10 md:right-[-200px] right-[-150px] md:bottom-40 bottom-[-20px]'>
                        <img src={electricButterfield} alt="Image 1" className='rounded-lg md:w-40 md:h-40 w-28 h-28 object-cover' />
                    </div>

                   
                    <div className='absolute md:bottom-20 md:left-[-40px] md:w-80 md:h-80 w-52 h-52 p-2 rounded-lg '>
                        <img src={hero} alt="Image" className='rounded-md'/>
                    </div>
                    <div className='absolute md:bottom-[-20px] bottom-[-180px] md:right-[-20px] right-[8px] transform rotate-[-30deg]'>
                        <p className='font-serif text-sm text-gray-800 tracking-wider'>
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
