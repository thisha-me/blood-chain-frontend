import React from 'react';
import backgroundImage from '../assets/first-page-image.png'

const WelcomeText = () => {

  const backgroundImageUrl = `url(${backgroundImage})`;

  return (
    <div className='bg-cover' style={{ backgroundImage: backgroundImageUrl }}>
      <div className='max-w-[800px] mt-[-86px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#000000] font-bold p-2 text-5xl'>
        Your <span className='text-[#FF0000]'>Donation</span> Can Make Someone's <span className='text-[#FF0000]'>Life</span> Better        </p>
      </div>
    </div>
  );
};

export default WelcomeText;