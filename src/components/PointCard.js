import React from "react";

const PointCard = ({ imageUrl, buttonName }) => (
  <div className="max-w-md w-full rounded overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
    <img className="w-full h-100 object-cover mx-2 my-4 px-6 py-4" src={imageUrl} alt="Card" />
    <div className="px-6 py-4">
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        {buttonName}
      </button>
    </div>
  </div>
);

export default PointCard;
