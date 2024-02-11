import React, { useState } from "react";
import image from "../assets/user.png";
import DonationHistory from "./components/donationHistory"; 
import RecieverHistory from "./components/recieverHistory"; 

const UserProfile = () => {
  const [userState] = useState({
    userId: '12345',
    username: 'john_doe',
    contactNo: '123-456-7890',
    userEmail: 'john@example.com',
    numberOfDonations: 5,
    numberOfRequests: 5,

    //active request
    requestid: '100',
    bloodtype: 'O+',
    urgency : 'High',

    //scheduled donations
    donationid: '50',
    bloodtype2: 'O-',
    date: "20.01.2024",
    time: 8.55 ,
    location:'Colombo',

  });
  const donationArray = [
    { donationid: '1', bloodtype: 'A+', date: '2024-01-01', time: '10:00', location: 'Hospital A' },
    { donationid: '2', bloodtype: 'B-', date: '2024-01-15', time: '11:00', location: 'Hospital B' },
    { donationid: '3', bloodtype: 'AB+', date: '2024-02-01', time: '09:00', location: 'Hospital C' }
  ];

  const bloodRequestArray = [
    { requestid: '1', bloodType: 'O+', date: '2024-02-10', urgency: 'High', location: 'Hospital X' },
    { requestid: '2', bloodType: 'A-', date: '2024-03-05', urgency: 'Medium', location: 'Hospital Y' },
    { requestid: '3', bloodType: 'AB+', date: '2024-03-20', urgency: 'Low', location: 'Hospital Z' }
  ];

  return (
    <div className="bg-[#F0F0F0] p-5 flex flex-col items-center justify-center">
      {/* User information part */}
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

      {/* Activate request part */}

      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 pt-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-4 h-58 mb-4 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bol text-lg text-left justify-items-center my-2 p-2">
            <label className="font-bold text-lg flex   rounded-xl mx-2 mb-2 bg-white p-3 sm:w-1/2">
              Active Requests
            </label>
            <div className="flex">

              <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white  p-6 sm:w-1/3">
                <div>
                Request ID : <span className="font-bold text-lg text-black ">{userState.requestid}</span>
                </div>
                <div>
                Blood Type : <span className="font-bold text-lg text-black ">{userState.bloodtype}</span>
                </div>
                <div>
                Urgency : <span className="font-bold text-lg text-black ">{userState.urgency}</span>
                </div>

              </label>

              <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6  sm:w-1/3">
                <div>
                Request ID : <span className="font-bold text-lg text-black ">{userState.requestid}</span>
                </div>
                <div>
                Blood Type : <span className="font-bold text-lg text-black ">{userState.bloodtype}</span>
                </div>
                <div>
                Urgency : <span className="font-bold text-lg text-black ">{userState.urgency}</span>
                </div>

              </label>
              
              <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6  sm:w-1/3">
                <div>
                Request ID : <span className="font-bold text-lg text-black ">{userState.requestid}</span>
                </div>
                <div>
                Blood Type : <span className="font-bold text-lg text-black ">{userState.bloodtype}</span>
                </div>
                <div>
                Urgency : <span className="font-bold text-lg text-black ">{userState.urgency}</span>
                </div>

              </label>  
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Donations part */}

      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 pt-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-4 h-58 mb-4 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bol text-lg text-left justify-items-center my-2 p-2">
            <label className="font-bold text-lg flex   rounded-xl mx-2 mb-2 bg-white p-3 sm:w-1/2">
            Scheduled Donations
            </label>
            <div className="flex">

              <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white  p-6 sm:w-1/3">
                <div>
                Donation ID : <span className="font-bold text-lg text-black ">{userState.donationid}</span>
                </div>
                <div>
                Blood type : <span className="font-bold text-lg text-black ">{userState.bloodtype2}</span>
                </div>
                <div>
                Date  : <span className="font-bold text-lg text-black ">{userState.date}</span>
                </div>
                <div>
                Time : <span className="font-bold text-lg text-black ">{userState.time}</span>
                </div>
                <div>
                Location : <span className="font-bold text-lg text-black ">{userState.location}</span>
                </div>

              </label>

              <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white  p-6 sm:w-1/3">
                <div>
                Donation ID : <span className="font-bold text-lg text-black ">{userState.donationid}</span>
                </div>
                <div>
                Blood type : <span className="font-bold text-lg text-black ">{userState.bloodtype2}</span>
                </div>
                <div>
                Date  : <span className="font-bold text-lg text-black ">{userState.date}</span>
                </div>
                <div>
                Time : <span className="font-bold text-lg text-black ">{userState.time}</span>
                </div>
                <div>
                Location : <span className="font-bold text-lg text-black ">{userState.location}</span>
                </div>

              </label>
              <label className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white  p-6 sm:w-1/3">
                <div>
                Donation ID : <span className="font-bold text-lg text-black ">{userState.donationid}</span>
                </div>
                <div>
                Blood type : <span className="font-bold text-lg text-black ">{userState.bloodtype2}</span>
                </div>
                <div>
                Date  : <span className="font-bold text-lg text-black ">{userState.date}</span>
                </div>
                <div>
                Time : <span className="font-bold text-lg text-black ">{userState.time}</span>
                </div>
                <div>
                Location : <span className="font-bold text-lg text-black ">{userState.location}</span>
                </div>

              </label>
            </div>
          </div>
        </div>
      </div>
       {/* Donation History */}
       <div>
        <donationHistory donationArray={donationArray} />
      </div>

      {/* Receiver History */}
      <div>
        <recieverHistory bloodRequestArray={bloodRequestArray} />
      </div>
    </div>

    
  );
};

export default UserProfile;