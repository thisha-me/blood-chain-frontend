import React from "react";

function PointCard() {
  return (
    <div className="max-w-md w-full rounded overflow-hidden shadow-lg mx-2 my-4">
      {/* Adjust the width and height of the image as needed */}
      <img
        className="w-full h-64 object-cover"
        src="./assets/donate.png"
        alt="Card"
      />
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default PointCard;
