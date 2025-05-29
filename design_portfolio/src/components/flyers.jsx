import React from 'react';
import Carousel from './Carousel';

const pressFlyers = ['/images/flyer1.jpg', '/images/flyer2.jpg'];

export default function PressReleases() {
  return (
    <section id="press" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Press Releases & Flyers</h2>
        <Carousel images={pressFlyers} />
      </div>
    </section>
  );
}