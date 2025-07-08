import React, { useState } from 'react';
import wagner from '../../assets/wagner.jpeg';
import wagner2 from '../../assets/wagner2.jpeg';
import desert from '../../assets/desert.jpeg';
import wagner3 from '../../assets/GavJim.jpeg';
import wagner4 from '../../assets/GlassesSmile.jpeg';

const images = [wagner, wagner3, wagner4, wagner2];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

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

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const endX = e.changedTouches[0].clientX;
    const swipeDistance = touchStartX - endX;
    const minSwipe = 50;

    if (swipeDistance > minSwipe) {
      goToNext();
    } else if (swipeDistance < -minSwipe) {
      goToPrevious();
    }

    setTouchStartX(null);
  };

  return (
    <section id="about" className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-7xl p-6 flex flex-col md:flex-row">
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col space-y-6 md:w-72 p-4"
        >
          <h1 className="text-2xl font-semibold font-arima">About</h1>
          <p className="font-medium font-arima">
            Gavin Wentzel is a multi-instrumentalist, vocalist, producer and artist
            who combines a love for well written chord progressions with the modern spontaneity
            of beat making. A fusion of soul, hip-hop, psychadelic, and electronic music,
            Gavin is releasing his second album Electric Butterfield on July 4th, 2025.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col md:flex-row md:space-x-14 mt-6 md:mt-0 w-full"
        >
          <div
            className="flex-1 relative w-full max-w-3xl mx-auto h-[24rem] sm:h-[24rem] md:h-[34rem]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="rounded-lg shadow-md w-full h-full object-cover transition duration-500 ease-in-out"
              key={currentIndex}
            />

            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition-all duration-300 ease-in-out"
            >
              &#8592;
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 rounded-full p-2 shadow hover:bg-white transition-all duration-300 ease-in-out"
            >
              &#8594;
            </button>
          </div>

          <div className="flex-1 space-y-4 mt-4 md:mt-0">
            <img src={desert} alt="Morocco 2017" className="rounded-lg shadow-md w-full h-60 md:h-72 object-cover" />
            <div className="text-center">
              <p className="font-semibold font-arima">Morocco 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
