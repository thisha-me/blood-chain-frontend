import React, { useState } from "react";
import image from "../assets/user.png";

const UserProfile = () => {

  const [userState] = useState({
    userId: '12345',
    username: 'john_doe',
    contactNo: '123-456-7890',
    userEmail: 'john@example.com',
    numberOfDonations: 5,
    numberOfRequests: 5,
  });

  return (

    //===================User information part====================================================================================================================================

    <div className="bg-[#F0F0F0] p-5 flex items-center justify-center">
      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 p-4 rounded-2xl relative">
        <div className="bg-[#F0F0F0] w-full sm:w-1/4 h-64 mb-4 flex items-center justify-center rounded-2xl relative">
          <img
            src={image}
            alt="User Avatar"
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="bg-[#F0F0F0] w-full sm:w-1/2 p-1 h-64 mb-4 sm:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-lg text-left flex flex-col justify-items-center my-3">
            <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              User ID : <span className="font-bold text-lg text-black">{userState.userId}</span>
            </label>
            <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              Username : <span className="font-bold text-lg text-black">{userState.username}</span>
            </label>
            <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              Contact No : <span className="font-bold text-lg text-black">{userState.contactNo}</span>
            </label>
            <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              User Email : <span className="font-bold text-lg text-black">{userState.userEmail}</span>
            </label>
          </div>
        </div>
        <div className="bg-[#F0F0F0] w-full sm:w-1/4 p-1 h-64 mb-4 sm:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-lg text-left flex flex-col justify-items-center my-3">
            <label className="font-medium text-lg rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of donations:
            </label>
            <label className="font-bold text-lg rounded-xl  mx-2 mb-2   bg-white p-2">
              {userState.numberOfDonations}
            </label>
            <label className="font-medium text-lg rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of requests:
            </label>
            <label className="font-bold text-lg rounded-xl  mx-2 mb-2   bg-white p-2">
              {userState.numberOfRequests}
            </label>
          </div>
        </div>
        <button className="bg-[#F0F0F0] font-medium text-black px-4 absolute bottom-0 left-0 m-1 rounded-2xl">
          Edit
        </button>
      </div>
    </div>

   //========================Active requests part -rivindu=========================================================================================================================================
   //========================Scheduled donations part -rivindu=========================================================================================================================================

   //========================Donation history part -thenuka=========================================================================================================================================
   //========================Request history part -thenuka=========================================================================================================================================



     
  );
};

export default UserProfile;
