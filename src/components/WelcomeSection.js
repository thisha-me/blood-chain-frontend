import React from 'react';
import backgroundImage from '../assets/first-page-image.png'

const WelcomeSection = () => {

  const backgroundImageUrl = `url(${backgroundImage})`;

  return (
    <div className='bg-cover min-h-screen flex items-center justify-center' style={{ backgroundImage: backgroundImageUrl }}>
      <div className='max-w-[800px] mt-[-86px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#000000] font-bold p-2 text-5xl hover:scale-105 transition-all duration-500'>
        Your <span className='text-[#DC143C]'>Donation</span> Can Make Someone's <span className='text-[#DC143C]'>Life</span> Better 
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;