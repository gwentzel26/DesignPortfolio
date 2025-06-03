import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const Links = [
    {
        id: 6,
        child: (
          <>
            Instagram <FaInstagram size={30} />
          </>
        ),
        href: "https://www.instagram.com/gavinwentzel/?hl=en",
        style: "rounded-tr-md",
      },
      {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/gavinwentzel/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gwentzel26",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:gavinwentzel@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "SoftwareResume4-05.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];


  return (
    <footer className='bg-gray-900 font-arima text-white py-10 px-6 mt-20 relative'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* <div data-aos='fade-up' data-aos-delay='400' className='bg-orange-500 p-4 flex flex-col justify-center -mt-20'>
                <h2 className='text-white text-xl mb-4'>Subscribe</h2>
                <form className='flex flex-col space-y-2'>
                    <input type="email" placeholder='Email' className='w-full p-2 text-gray-900' />
                    <button type='submit' className='bg-gray-800 px-4 py-2 text-sm text-white'>
                        SUBSCRIBE NOW
                    </button>
                </form>
            </div> */}
            <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col'>
                <h2 className='text-xl mb-4'>About</h2>
                <p className='text-gray-400 text-sm'>
                    Website Designed and Created by Gavin Wentzel
                </p>
            </div>
             <div className="hidden lg:flex lg:flex-col lg:top-[35%] left-0 lg:fixed">
      <ul>
        {Links.map(({id, child, href, style, download}) => (
          <li key={id} className={
            "flex justify-between items-center w-40 h-12 px-4 bg-amber-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" 
            + " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target='_blank'
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
            <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col'>
                <h2 className='text-xl mb-4'>Socials</h2>
                <ul className='text-gray-400 text-sm space-y-2'>
                    <li>Spotify</li>
                    <li>Instagram</li>
                    <li>Apple Music</li>
                    <li>YouTube</li>
                </ul>
            </div>
            <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col'>
                <h2 className='text-xl mb-4'>Quick Links</h2>
                <ul className='text-gray-400 text-sm space-y-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

