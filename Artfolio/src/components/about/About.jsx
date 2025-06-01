import React from 'react'
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import desert from '../../assets/desert.jpeg'
export default function About() {
  return (
    <section id='about' className='min-h-screen flex justify-center items-center '>
        <div className='w-full max-w-4xl p-6 flex flex-col md:flex-row '>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-col space-y-6 md:w-72'>
                <h1 className='text-2xl font-semibold font-arima'>About</h1>
                <p className='font-medium font-arima'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Recusandae expedita soluta, distinctio modi quam ea quasi non impedit accusantium.
                    Voluptates optio obcaecati ipsa fuga beatae vitae consequuntur enim odit vel.
                </p>
            </div>
            <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col md:flex-row md:space-x-14 mt-6 md:mt-0 md:w-4/5'>
             <div className='flex-1'>
                <img src={about1} alt="Image About" className='rounded-lg shadow-md'/>
             </div>
             <div className='flex-1 space-y-4 mt-4 md:mt-0'>
                <img src={desert} alt="Image About" className='rounded-lg shadow-md'/>
                <div className='text-center'>
                    <p className='font-semibold font-arima'>Lorem ipsum dolor, sit amet consectetur.</p>
                    <div className='flex items-center justify-center'>
                        <span className='w-8 h-8 bg-orange-300 rounded-full'></span>
                        <button className='-ml-5 font-bold text-black rounded-full z-10'>Shop Now</button>
                    </div>
                </div>
             </div>
            </div>
        </div>
    </section>
  )
}
