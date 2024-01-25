import React from "react";

const PointCard = ({ imageUrl, buttonName }) => (
  <div className="max-w-md w-full rounded overflow-hidden shadow-lg mx-2 my-4">
    <img className="w-full h-64 object-cover" src={imageUrl} alt="Card" />
    <div className="px-6 py-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {buttonName}
      </button>
    </div>
  </div>
);

export default PointCard;
