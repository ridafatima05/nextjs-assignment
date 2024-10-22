
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      {/* Overlay for better text visibility */}
      <div className="absolute flex flex-col justify-center items-center h-full text-orange-300  z-10 px-96">
        <h1 className="text-4xl md:text-21xl justify-center font-bold mb-4 text-center">
          Welcome to Rida<sup>'</sup>s Coffee Bar
        </h1>
        <p className="text-xl md:text-19xl mb-6 ">
        "The best place to enjoy your coffee and relax."
        </p>
        <button className=" bg-orange-950 text-orange-300  hover:bg-orange-700 font-semibold py-2 px-4 rounded-full ">
          Explore Our Menu
        </button>
      </div>
      <Image
        src="/images/brown-coffee-droplets-fly-around-cup-chaotic-artistic-splash_91128-4339.avif" 
        alt="Coffee Ingredients" 
        className="object-cover w-full h-full" 
      />
      
      </div>
    
  );
};

export default HeroSection;
