import React from 'react';
import Vector from '../Footer/Vector.png'


export const Footer = () => {
  return (
    <footer className="py-1 bg-mainColor text-center fixed bottom-0 w-full">
        <div className='pt-2'>
            <a href='#Home'><img src={Vector} className="bg-backgroundColor mx-auto rounded-lg px-2 py-2 w-8 h-8" alt="up" /></a>
        </div>
        
        <div className=" p-2 text-center text-backgroundColor">
            ©2023-2024 All Rights Received        
        </div>
    </footer>
  );
}
export default Footer;