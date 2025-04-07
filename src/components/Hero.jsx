import React from 'react';
import { Link } from 'react-router-dom'; 
import background from '/assets/background.jpg';

const Hero = () => {
  return (
    <div className="glow w-full h-screen flex flex-col justify-center items-center text-white">
      <ul className='flex flex-col justify-center items-center text-center space-y-3 font-bold uppercase'>
      <li>
          <Link to="/" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Home</Link>
        </li>
        <li>
          <Link to="/about" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>About</Link>
        </li>
        <li>
          <Link to="/experience" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Experience</Link>
        </li>
        <li>
          <Link to="/projects" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Projets</Link>
        </li>
        <li>
          <Link to="/contact" className='text-6xl md:text-8xl transition-all duration-300 hover:text-9xl'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hero;