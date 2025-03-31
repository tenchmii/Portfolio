import React from 'react';
import { Link } from 'react-router-dom'; 
import background from '/assets/background.jpg';

const Hero = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center text-white bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
      }}
    >
      <ul className='flex flex-col justify-center items-center text-center space-y-3 font-bold uppercase'>
        <li>
          <Link to="/about" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>About</Link>
        </li>
        <li>
          <Link to="/experience" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Experience</Link>
        </li>
        <li>
          <Link to="/projects" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hero;