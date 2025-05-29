import React from 'react';
import Carousel from './Carousel';

const aboutImages = ['/images/about1.jpg'];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-6 max-w-2xl">
          I’m a digital artist specializing in modern illustration and album cover design…
        </p>
        <Carousel images={aboutImages} />
      </div>
    </section>
  );
}