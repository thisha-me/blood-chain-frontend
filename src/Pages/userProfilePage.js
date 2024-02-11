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

    //active request
    requests: [
      { requestId: '100', bloodtype: 'O+', urgency: 'High' },
      { requestId: '101', bloodtype: 'AB-', urgency: 'Low' },
      { requestId: '102', bloodtype: 'A+', urgency: 'Medium' }
    ],

    //scheduled donations
    donations: [
      { donationid: '50', bloodtype: 'O-', date: "20.01.2024", time: 8.55, location: 'Colombo' },
      { donationid: '51', bloodtype: 'B+', date: "25.01.2024", time: 9.30, location: 'Kandy' },
      { donationid: '52', bloodtype: 'A-', date: "30.01.2024", time: 10.15, location: 'Galle' }
    ]
  });

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
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              User ID : <span className="font-bold text-lg text-black">{userState.userId}</span>
            </div>
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              Username : <span className="font-bold text-lg text-black">{userState.username}</span>
            </div>
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              Contact No : <span className="font-bold text-lg text-black">{userState.contactNo}</span>
            </div>
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              User Email : <span className="font-bold text-lg text-black">{userState.userEmail}</span>
            </div>
          </div>
        </div>
        <div className="bg-[#F0F0F0] w-full sm:w-1/4 p-1 h-64 mb-4 sm:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-lg text-left flex flex-col justify-items-center my-3">
            <div className="font-medium text-lg rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of donations:
            </div>
            <div className="font-bold text-lg rounded-xl  mx-2 mb-2   bg-white p-2">
              {userState.numberOfDonations}
            </div>
            <div className="font-medium text-lg rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of requests:
            </div>
            <div className="font-bold text-lg rounded-xl  mx-2 mb-2   bg-white p-2">
              {userState.numberOfRequests}
            </div>
          </div>
        </div>
        <button className="bg-[#F0F0F0] font-medium text-black px-4 absolute bottom-0 left-0 m-1 rounded-2xl">
          Edit
        </button>
      </div>

      {/* Active Requests part */}
      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 pt-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-4 h-58 mb-4 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-3 sm:w-1/2">
              Active Requests
            </div>
            <div className="flex">
              {userState.requests.map((request, index) => (
                <div key={index} className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3">
                  <div>
                    Request ID : <span className="font-bold text-lg text-black">{request.requestId}</span>
                  </div>
                  <div>
                    Blood Type : <span className="font-bold text-lg text-black">{request.bloodtype}</span>
                  </div>
                  <div>
                    Urgency : <span className="font-bold text-lg text-black">{request.urgency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Donations part */}
      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 pt-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-4 h-58 mb-4 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-3 sm:w-1/2">
              Scheduled Donations
            </div>
            <div className="flex">
              {userState.donations.map((donation, index) => (
                <div key={index} className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3">
                  <div>
                    Donation ID : <span className="font-bold text-lg text-black">{donation.donationid}</span>
                  </div>
                  <div>
                    Blood type : <span className="font-bold text-lg text-black">{donation.bloodtype}</span>
                  </div>
                  <div>
                    Date  : <span className="font-bold text-lg text-black">{donation.date}</span>
                  </div>
                  <div>
                    Time : <span className="font-bold text-lg text-black">{donation.time}</span>
                  </div>
                  <div>
                    Location : <span className="font-bold text-lg text-black">{donation.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
