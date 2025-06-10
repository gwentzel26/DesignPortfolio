import React, { useState } from "react";
import electricButterfield from "../../assets/electricButterfield.jpeg";
import underThePine from "../../assets/UTP.jpg";
import MeetingAgain from "../../assets/MeetingAgain.jpg";
import hopshire from "../../assets/hopshire.jpeg";
import ExploringVieques from "../../assets/ExploringVieques.jpg";
import LazyEsperanza from "../../assets/LazyEsperanza.jpg";
import summerGigs from "../../assets/summerGigs.png";
import blackTR from "../../assets/MerchIdeaBlack.png";
import photography from "../../assets/photography.jpeg";
import Photography1 from "../../assets/Photography1.jpeg";
import Photography2 from "../../assets/Photography2.jpeg";
import Photography3 from "../../assets/Photography3.jpeg";
import Photography4 from "../../assets/Photography4.jpeg";
import Photography5 from "../../assets/Photography5.jpeg";
import Photography6 from "../../assets/Photography6.jpeg";
import Photography7 from "../../assets/Photography7.jpeg";
import Photography8 from "../../assets/Photography8.jpeg";
import Photography9 from "../../assets/Photography9.jpeg";
import Photography10 from "../../assets/Photography10.jpeg";

// Import unique background image for Electric Butterfield back face
import bgEB from "../../assets/backCover.jpg";

import { FaSpotify } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";

const products = [
  {
    id: 1,
    name: "Electric Butterfield",
    category: "Album Covers",
    image: electricButterfield,
    backText:
      "Electric Butterfield to be released on July 4, 2025. The music is a fusion of soul, hip-hop, psycadelic, and electronic. Artwork is designed by blending drawings, photography, and digital painting.",
    backImage: bgEB,
    spotifyLink: "https://open.spotify.com/album/electric-butterfield",
    appleMusicLink: "https://music.apple.com/album/electric-butterfield",
  },
  {
    id: 2,
    name: "Lazy Esperanza",
    category: "Album Covers",
    image: LazyEsperanza,
    backText:
      "Lazy Esperanza is an upcoming, mostly instrumental project. The music is inspired by a 6-week stay at Lazy Jack's hostel in Esperanza, Vieques. The artwork is a blend of photographs taken during the time",
    // No backImage here, so will use default styling
    spotifyLink: "https://open.spotify.com/album/lazy-esperanza",
    appleMusicLink: "https://music.apple.com/album/lazy-esperanza",
  },
  {
    id: 4,
    name: "Meeting Again",
    category: "Album Covers",
    image: MeetingAgain,
    backText:
      "Meeting Again is a therapeutic lofi instrumental featuring Rhodes keys.  The cover is a drawing of butterflies carrying a coffin through the sky",
    // No backImage here, default styling
    spotifyLink:
      "https://open.spotify.com/track/6dguMF4rIjeBgiBjKOgzSs?si=b91ad1f754d04f5a",
    appleMusicLink:
      "https://music.apple.com/us/album/meeting-again/1736698688?i=1736698690",
  },
  {
    id: 5,
    name: "The Time Riders",
    category: "Album Covers",
    image: blackTR,
    backText:
      "The Time Riders are a band based in Ithaca, NY who play a variety of hits from throughout the ages.",
    // No backImage here, default styling
    spotifyLink:
      "https://open.spotify.com/album/2WEKpRsbBrsibC5Qy1BPNb?si=MGvjLZLGT0ad-t_fhd3gEg",
    appleMusicLink: "https://music.apple.com/us/album/the-time-riders/1801629777",
  },
  {
    id: 6,
    name: "Under the Pine",
    category: "Album Covers",
    image: underThePine,
    backText:
      "Under the Pine single artwork was painted on a block of wood with additional digital painting in Photoshop",
    // No backImage here, default styling
    spotifyLink:
      "https://open.spotify.com/track/14NIM4neiIQ7eVpd1c18AF?si=222b736c3d0245f5",
    appleMusicLink:
      "https://music.apple.com/us/album/under-the-pine/1795204361?i=1795204362",
  },
  {
    id: 7,
    name: "The Time Riders at Hopshire",
    category: "Flyers",
    image: hopshire,
    backText:
      "Concert flyer for The Time Riders at Hopshire Brewery, July 2024. Emphasizes an oldschool live performance aesthetic.",
    // No backImage, no links
  },
  {
    id: 8,
    name: "Summer Gig Schedule",
    category: "Flyers",
    image: summerGigs,
    backText:
      "Summer 2025 gig schedule flyer: bright colors and clear dates/venues to use for marketing.",
    // No backImage, no links
  },
  {
    id: 9,
    name: "Exploring Vieques",
    category: "Album Covers",
    image: ExploringVieques,
    backText:
      "A single-pack from upcoming album Lazy Esperanza featuring Vieques landscapes.",
    // No backImage here, default styling
    spotifyLink:
      "https://open.spotify.com/album/5u00qbDAQFFf3542ShQpbf?si=kcjH3FeJQIKYwuX-zUfJiw",
    appleMusicLink:
      "https://music.apple.com/us/album/exploring-vieques-single/1787901610",
  },
  {
    id: 10,
    name: "Light Museum: Seville ",
    category: "Photography",
    image: photography,
    backText:
      "While studying in Seville, Spain.  This picture is multiple reflections of himself",
    // No backImage, no links
  },
  {
    id: 11,
    name: "Light Distortion: Seville",
    category: "Photography",
    image: Photography1,
    backText:
      "Gavin created a photography album during his time taking a class while studying in Seville, Spain.",
    // No backImage, no links
  },
  {
    id: 12,
    name: "Palm Trees: Seville",
    category: "Photography",
    image: Photography2,
    backText:
      "An upward looking view of palm trees in Maria Luisa park ",
    // No backImage, no links
  },
  {
    id: 13,
    name: "Garden Door: Seville",
    category: "Photography",
    image: Photography3,
    backText:
      "A shot from the Alcazar of Seville, Dorne's Water Gardens from the series Game of Thrones",
    // No backImage, no links
  },
  {
    id: 14,
    name: "3 bottles: Seville",
    category: "Photography",
    image: Photography4,
    backText:
      "A horizontal view from the light museum",
    // No backImage, no links
  },
  {
    id: 15,
    name: "City Night: Ceville",
    category: "Photography",
    image: Photography5,
    backText:
      "Used motion technique with his Nikon to capture the movement of a Seville bus",
    // No backImage, no links
  },
  {
    id: 16,
    name: "White Distortion: Seville",
    category: "Photography",
    image: Photography6,
    backText:
      "A distorted shot representing morning light",
    // No backImage, no links
  },
  {
    id: 17,
    name: "A glance from outside: Seville",
    category: "Photography",
    image: Photography7,
    backText:
      "A view into a bar featuring a nice palette of colors.",
    // No backImage, no links
  },
  {
    id: 18,
    name: "Wall Architecture: Seville",
    category: "Photography",
    image: Photography8,
    backText:
      "Bending black shapes capturing a reflection of the city.",
    // No backImage, no links
  },
  {
    id: 19,
    name: "Water Lights",
    category: "Photography",
    image: Photography9,
    backText:
      "A reflection of inside lights overlooking Butterfield Lake in the 1000 islands",
    // No backImage, no links
  },
  {
    id: 20,
    name: "Ice Clouds",
    category: "Photography",
    image: Photography10,
    backText:
      "A strong capture of the reflection of clouds and the colorful fall in the water.",
    // No backImage, no links
  },
];

function Navbar({ setCategory }) {
  return (
    <nav className="py-4 mb-6">
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="container mx-auto px-4 flex space-x-4 sm:space-x-6 text-gray-700 font-semibold text-sm sm:text-lg"
      >
        <button onClick={() => setCategory("Album Covers")} className="hover:text-black">
          Album Covers
        </button>
        <button onClick={() => setCategory("Flyers")} className="hover:text-black">
          Flyers
        </button>
        <button onClick={() => setCategory("Photography")} className="hover:text-black">
          Photography
        </button>
      </div>
    </nav>
  );
}

function ProductCard({ product }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className="w-full cursor-pointer [perspective:1000px]"
      data-aos="fade-up"
      data-aos-delay="500"
    >
      <div
        className={`
          relative w-full transition-transform duration-500
          [transform-style:preserve-3d]
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* FRONT FACE: unchanged */}
        <div className="[backface-visibility:hidden] flex flex-col items-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-contain mb-4"
          />
          <h3 className="text-gray-700 font-semibold text-sm">{product.name}</h3>
        </div>

        {/* BACK FACE: if product.backImage exists, use it; otherwise default styling */}
        {product.backImage ? (
          <div
            className="
              absolute inset-0 flex items-center justify-center 
              bg-cover bg-center rounded-lg shadow-lg
              [backface-visibility:hidden] [transform:rotateY(180deg)]
            "
            style={{ backgroundImage: `url(${product.backImage})` }}
          >
            <div className="bg-white bg-opacity-80 p-4 rounded-md max-w-xs text-center">
              <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-700 mb-4">{product.backText}</p>
              <div className="flex items-center justify-center space-x-4">
                {product.spotifyLink && (
                  <a
                    href={product.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSpotify size={30} />
                  </a>
                )}
                {product.appleMusicLink && (
                  <a
                    href={product.appleMusicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiApplemusic size={30} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="
              absolute inset-0 flex flex-col items-center justify-center p-6
              bg-white rounded-lg shadow-lg
              [backface-visibility:hidden] [transform:rotateY(180deg)]
            "
          >
            <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{product.backText}</p>
            <p className="mt-auto text-xs text-gray-500">(Click to flip back)</p>
            <div className="flex items-center space-x-4 mb-2">
              {product.spotifyLink && (
                <a
                  href={product.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSpotify size={30} />
                </a>
              )}
              {product.appleMusicLink && (
                <a
                  href={product.appleMusicLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiApplemusic size={30} />
                </a>
              )}
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

function ProductGrid({ category }) {
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function Products() {
  const [category, setCategory] = useState("Album Covers");

  return (
    <section id="products" className="font-arima overflow-hidden min-h-[780px] sm:min-h-[600px]">
      <Navbar setCategory={setCategory} />
      <div className="container mx-auto px-4">
        <ProductGrid category={category} />
      </div>
    </section>
  );
}

export default Products;
