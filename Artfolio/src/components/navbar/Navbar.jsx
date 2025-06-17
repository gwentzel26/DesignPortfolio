import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const listNavbar = [
    { id: 1, name: 'Home', path: '#home' },
    { id: 2, name: 'About', path: '#about' },
    { id: 3, name: 'Work', path: '#services' },
    { id: 5, name: 'Contact', path: '#contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <section className="flex items-center font-arima justify-center">
      {/* Fixed Navbar at top */}
      <nav
        data-aos="fade-up"
        data-aos-delay="400"
        className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-100 via-white to-[#914e0f] px-8 py-4 shadow-md z-50 flex justify-between items-center"
      >
        <div className="flex-1">
          <div onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
        </div>
        <div className="flex-1 text-center text-burntOrange">
         <a href="#home"> <h1 className="font-beauriveau text-burntOrange md:text-5xl text-3xl font-semibold">Gavin Wentzel</h1></a>
        </div>
        <div className="flex flex-1 justify-end md:font-bold font-semibold space-x-4"></div>
      </nav>

      {/* Offset for fixed navbar */}
      <div className="h-20" />

      {/* Side menu */}
      <ul
        ref={menuRef}
        className={`
          fixed left-0 top-0 md:w-[20%] w-[45%] h-full border-r border-r-gray-100 bg-[#ffc48d]
          ease-in-out duration-500 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ zIndex: 100 }}
      >
        {listNavbar.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#ffddbd] duration-300 cursor-pointer border-gray-200"
          >
            <a
              href={item.path}
              className="block w-full h-full text-gray-700 font-semibold px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
