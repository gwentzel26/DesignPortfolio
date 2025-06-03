import React from 'react';
import lakePainting1 from '../../assets/lakePainting2.jpeg';

export default function Contact() {
  return (
    <section id='contact' className='relative h-screen mt-24'>
        <img src={lakePainting1} alt="Background" data-aos='fade-on' className='absolute inset-0 w-full h-full object-cover object-top rounded-lg' />
        <div className='absolute inset-0 opacity-40'></div>
        <div className='relative z-10 font-arima flex items-center justify-end h-full'>
            <div data-aos='fade-up' data-aos-delay='400' className='bg-gray-600 bg-opacity-50 p-10 md:w-1/2 h-full text-white space-y-6' >
            <h2 className='text-7xl font-medium'>Contact Me</h2>
            <p className='text-gray-300'>Accepting show, recording, and album cover design opportunities</p>
            <form className='space-y-4'>
                <div>
                    <label className='block text-xl mb-1'>Your name</label>
                    <input type="text" placeholder='Your name' className='w-full p-2 bg-black bg-opacity-75' />
                </div>
                <div>
                    <label className='block text-xl mb-1'> Your phone number</label>
                    <input type="text" placeholder='phone number' className='w-full p-2 bg-black bg-opacity-75' />
                </div>
                <div>
                    <label className='block text-xl mb-1'> Message</label>
                    <textarea rows="3"  placeholder='Message...' className='w-full p-2 bg-black bg-opacity-75' />
                </div>
                <button type='submit' className='w-full border-b-2 border-white hover:bg-orange-300 hover:text-gray-900 text-white py-2 rounded'>
                    Send
                </button>
            </form>
            </div>
        </div>
    </section>
  )
}
