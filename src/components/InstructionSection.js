import React from "react";
import imageUrl from "../assets/instruct.png";
import icon from "../assets/check-mark.png";

const InstructionSection = () => {
  return (
    <div className="bg-[#F0F0F0] min-h-screen flex flex-col items-center justify-center">
      <div className="text-center py-1">
        <p className="text-[#000000] font-bold p-2 text-5xl mb-4">
          How It <span className="text-[#DC143C]">Works</span>
        </p>

        <p className="text-[#000000] font-normal  p-2 text-3xl mb-4">
          Share your medical details securely. Blockchain technology ensures transparency <br />and protects your privacy.
        </p>
      </div>
      <div className=" flex items-center justify-center">
        <img src={imageUrl} alt="How it works" />
        <div className="w-1/3">
          <p className="text-[#000000] font-medium  p-2 text-2xl text-justify">Once a match is made, our platform securely connects you directly with the donor or recipient. Communicate details and arrange the blood transfer without intermediaries.</p>
          <ul className="list-disc pl-6 leading-loose">
            <li className="flex items-center">
              <img src={icon} alt="Register Icon" />
              <p className="mr-2 text-[#000000] text-2xl font-normal p-2">Register</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Profile Icon" />
              <p className="mr-2 text-[#000000] text-2xl font-normal p-2">Fill your Profile</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Request Icon" />
              <p className="mr-2 text-[#000000] text-2xl font-normal p-2">Request Blood</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Donate Icon" />
              <p className="mr-2 text-[#000000] text-2xl font-normal p-2">Donate Blood</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="View Icon" />
              <p className="mr-2 text-[#000000] text-2xl font-normal p-2">View pending Requests</p>
            </li>
          </ul>
          <br/>
          <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default InstructionSection;
