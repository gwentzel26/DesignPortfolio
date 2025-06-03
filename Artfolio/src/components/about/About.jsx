import React, {useState} from 'react'
import TimeRiders from '../../assets/TimeRiders.jpeg'
import TimeRiders2 from '../../assets/TimeRiders2.jpeg'
import TimeRiders3 from '../../assets/TimeRiders3.jpeg'
import desert from '../../assets/desert.jpeg'

const images = [TimeRiders, TimeRiders2, TimeRiders3];

export default function About() {

        const [currentIndex, setCurrentIndex] = useState(0);
      
        const goToPrevious = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        };
      
        const goToNext = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        };
  return (
    <section id='about' className='min-h-screen flex justify-center items-center '>
        <div className='w-full max-w-4xl p-6 flex flex-col md:flex-row '>
            <div data-aos='fade-up' data-aos-delay='400' className='flex flex-col space-y-6 md:w-72 p-4'>
                <h1 className='text-2xl font-semibold font-arima'>About</h1>
                <p className='font-medium font-arima'>
               Gavin Wentzel is a multi-instrumentalist, vocalist, producer and artist
                    who combines a love for well written chord progressions with the modern spontaneity 
                   of beat making. A fusion of soul, hip-hop, psychadelic, and electronic music
                    Gavin is releasing his second album Electric Butterfield on July 4th, 2025
                </p>
            </div>
            <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col md:flex-row md:space-x-14 mt-6 md:mt-0 md:w-4/5'>
             {/* <div className='flex-1'>
                <img src={about1} alt="Image About" className='rounded-lg shadow-md'/>
             </div> */}
             <div className='flex-1 relative w-full max-w-md mx-auto'>
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className='rounded-lg shadow-md w-full h-auto object-contain'
                />

                <button
                    onClick={goToPrevious}
                    className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white
                    transition-all duration-300 ease-in-out'
                >
                    &#8592;
                </button>
                <button
                    onClick={goToNext}
                    className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white
                    transition-all duration-300 ease-in-out'
                >
                    &#8594;
                </button>
                </div>
             <div className='flex-1 space-y-4 mt-4 md:mt-0'>
                <img src={desert} alt="Image About" className='rounded-lg shadow-md'/>
                <div className='text-center'>
                    <p className='font-semibold font-arima'>Morocco 2017</p>
                    <div className='flex items-center justify-center'>
                       
                       
                    </div>
                </div>
             </div>
            </div>
        </div>
    </section>
  )
}

