import React, { useEffect, useState } from "react";
import imageUrl from "../assets/instruct.png";
import icon from "../assets/check-mark.png";

const InstructionSection = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1050);
  const [showReadMore, setShowPopup] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 1050);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  const [isMobile_1, setIsMobile_1] = useState(window.innerWidth < 450);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile_1(window.innerWidth < 450);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  useEffect(() => {
    if (showReadMore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showReadMore]);

  return (
    <div className="bg-[#F0F0F0] min-h-screen flex flex-col items-center justify-center">
      <div className="text-center py-1">
        <p className="text-[#000000] font-bold p-2 text-5xl mb-4 hover:scale-105 transition-all duration-500">
          How It <span className="text-[#DC143C]">Works</span>
        </p>

        <p className="text-[#000000] font-normal  p-2 text-2xl mb-4">
          Share your medical details securely. Blockchain technology ensures transparency and protects your privacy.
        </p>
      </div>
      <div className= {`flex ${isMobile ? "flex-col" : "flex"} items-center justify-between`}>
        <div className="max-w-md w-full">
          <img style={{height: '350px'}} src={imageUrl} alt="How it works" />
        </div>
        <div className= {`max-w-lg  w-full ${isMobile_1 ? "text-center" : " "}`}>
          <p style={{fontSize: '18px'}} className="text-[#000000] font-medium p-2  text-justify">Once a match is made, our platform securely connects you directly with the donor or recipient. Communicate details and arrange the blood transfer without intermediaries.</p>
          <ul className="list-disc pl-6 leading-loose">
            <li className="flex items-center">
              <img src={icon} alt="Register Icon" />
              <p style={{ fontSize: '1.3rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Register</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Profile Icon" />
              <p style={{ fontSize: '1.3rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Fill your Profile</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Request Icon" />
              <p style={{ fontSize: '1.3rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Request Blood</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Donate Icon" />
              <p style={{ fontSize: '1.3rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Donate Blood</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="View Icon" />
              <p style={{ fontSize: '1.3rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">View pending Requests</p>
            </li>
          </ul>
          <br/>
          <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 my-1 rounded-xl items-center"
          onClick={() => {
            setShowPopup(true);
          }}>
            Read More</button>
        </div>
      </div>

      {showReadMore && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondaryColor bg-opacity-60 flex items-center justify-center">
          <div className="bg-backgroundColor  w-3/4  max-w-full h-3/4 rounded shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto flex text-center py-5 mr-10 text-textColor hover:secondaryColor font-bold rounded"
            >
              X
            </button>
            <div className="text-2xl flex justify-center font-bold mb-4 md:mb-8 gap-4">
              Read more
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default InstructionSection;
