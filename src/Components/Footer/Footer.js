import React, { useState, useEffect } from 'react';
import Vector from '../Footer/Vector.png'


export const Footer = () => {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Function to check if the user has scrolled enough to show the button
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  // Function to smoothly scroll to the top of the page
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="py-1 bg-mainColor text-center bottom-0 w-full">
      <div className='pt-2'>
        <div onClick={scrollTop}><img src={Vector} className="bg-backgroundColor mx-auto rounded-lg px-2 py-2 w-8 h-8" alt="up" /></div>
      </div>

      <div className=" p-2 text-center text-backgroundColor">
        ©2023-2024 All Rights Received
      </div>
    </footer>
  );
}
export default Footer;