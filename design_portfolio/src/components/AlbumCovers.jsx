import React from 'react';
import Carousel from './Carousel';

const albumCovers = ['/images/album1.jpg', '/images/album2.jpg'];

export default function AlbumCover() {
  return (
    <section id="album" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-800">
        <h2 className="text-3xl font-bold mb-4">Album Covers</h2>
        <Carousel images={albumCovers} />
      </div>
    </section>
  );
}