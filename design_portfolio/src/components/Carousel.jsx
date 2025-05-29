import React, { useState } from 'react';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  if (!Array.isArray(images) || length === 0) return null;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div className="relative flex items-center justify-center">
      <button onClick={prevSlide} className="absolute left-0 ml-4 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75">
        &#8592;
      </button>
      {images.map((src, idx) => (
        <div key={idx} className={idx === current ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
          {idx === current && <img src={src} alt={`Slide ${idx}`} className="w-full max-h-96 object-contain rounded-lg" />}
        </div>
      ))}
      <button onClick={nextSlide} className="absolute right-0 mr-4 p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-75">
        &#8594;
      </button>
    </div>
  );
}
