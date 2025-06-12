import React from 'react'
import laugh from '../../assets/laugh.jpeg';
import lightPic from '../../assets/lightPic.jpeg';

export default function Service() {
  return (
    <section id='services' className='relative flex items-center justify-center overflow-hidden min-h-[790px] sm:min-h-[570px] px-4 sm:px-6 lg:px-4'>
        <div className='max-w-4xl w-full rounded-lg font-arima flex flex-col md:flex-row gap-8'>
            <div data-aos='fade-up' data-aos-delay='300' className='flex-1 space-y-4'>
                <h3 className='text-sm text-gray-600 font-semibold'>Art & Music</h3>
                <h1 className='text-4xl font-bold text-gray-800 leading-tight'>Work</h1>
                <ul className='text-gray-700'>
                    <li>In addition to his musical abilities, Gavin creates designs</li>
                    <li>for album covers, press releases, and gig flyers.  </li>
                    <li>From his love of drawing and photography he creates layers of blended mediums in Adobe Photoshop.</li> 
                    <li> </li> 
                </ul>
                <div className='flex items-center'>
                    <span className='w-7 h-7 bg-orange-300 rounded-full'></span>
                   
                </div>
            </div>
            <div data-aos='fade-left' data-aos-delay='300' className='flex-1 grid grid-cols-2 gap-2'>
                <div className='rounded-full overflow-hidden'>
                    <img src={laugh} alt="Image Service" className='w-full h-[390px] object-cover'/>
                </div>
                <div className='rounded-full overflow-hidden'>
                    <img src={lightPic} alt="Image Service" className='w-full h-[390px] object-cover'/>
                </div>
            </div>
        </div>
    </section>
  )
}
