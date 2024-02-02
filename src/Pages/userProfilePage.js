import React from "react";
import image from "../assets/user.png"

function UserProfile() {
  return (
    <div className="bg-lime-600 p-5 flex items-center justify-center">
      <div className="bg-blue-300 flex flex-col sm:flex-row w-3/4 p-4 rounded-lg">
        <div className="bg-red-300 w-full  sm:w-1/4 h-64 mb-4 flex items-center justify-center">
          <img
            src = {image}
            alt="User Avatar"
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="bg-red-700 w-full sm:w-2/4 h-64 mb-4">
        <div className="text-white text-left flex flex-col justify-items-center">
          <label className="text-sm rounded">User ID : <span>12345</span> </label>
          <br />
          <label className="text-sm mt-2 rounded">Username : <span>john_doe</span> </label>
          <br />
          <label className="text-sm mt-2 rounded">Contact No : <span>123-456-7890</span> </label>
          <br />
          <label className="text-sm mt-2 rounded">User Email : <span>john@example.com</span> </label>
        </div>
        </div>
        <div className="bg-green-300 w-full sm:w-1/4 h-64 mb-4"></div>
      </div>
    </div>
  );
}

export default UserProfile;
