import React from "react";
import imageUrl_1 from "../assets/donate.png";
import imageUrl_2 from "../assets/request.png";

const PointSection = () => {
  const ImageUrl_1 = imageUrl_1;
  const ImageUrl_2 = imageUrl_2;

  return (
    <div className="bg-[#F0F0F0] min-h-screen flex items-center justify-center flex-col">
      <div className="text-center py-1">
        <p className="text-[#000000] font-bold p-2 text-5xl mb-4 hover:scale-105 transition-all duration-500">
          <span className="text-[#DC143C]">LifeBlood</span> Exchange <br />
          Request & <span className="text-[#DC143C]">Donate</span>
        </p>
      </div>
      <div className="flex justify-between space-x-12 ">
        <div className=" bg-[#FFFFFF] max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500">
          <img
            className="w-full h-85 object-cover mx-2 my-4 px-3 py-3"
            src={ImageUrl_2}
            alt="Card"
          />
          <div className="px-6 py-4 w-full text-center">
            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">
              Request Blood
            </button>
          </div>
        </div>
        <div className=" bg-[#FFFFFF] max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500">
          <img
            className="w-full h-85 object-cover mx-2 my-4 px-3 py-3"
            src={ImageUrl_1}
            alt="Card"
          />
          <div className="px-6 py-4 w-full text-center">
            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">
              Donate Blood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointSection;
