import React from "react";
import imageUrl_1 from "../assets/donate.png";
import imageUrl_2 from "../assets/request.png";

const PointSection = () => {
  const ImageUrl_1 = imageUrl_1;
  const ImageUrl_2 = imageUrl_2;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-col">
      <div className="text-center py-1">
        <p className="text-[#000000] font-bold p-2 text-5xl mb-4">
          <span className="text-[#DC143C]">LifeBlood</span> Exchange <br />
          Request & <span className="text-[#DC143C]">Donate</span>
        </p>
      </div>
      <div className="flex justify-between">
        <div className="max-w-md w-full rounded overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
          <img
            className="w-full h-90 object-cover mx-2 my-4 px-6 py-4"
            src={ImageUrl_2}
            alt="Card"
          />
          <div className="px-6 py-4 w-full text-center">
            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Request Blood
            </button>
          </div>
        </div>
        <div className="max-w-md w-full rounded overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
          <img
            className="w-full h-90 object-cover mx-2 my-4 px-6 py-4"
            src={ImageUrl_1}
            alt="Card"
          />
          <div className="px-6 py-4 w-full text-center">
            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Donate Blood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointSection;
