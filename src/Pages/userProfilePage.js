import React, { useState } from 'react';
import image from '../assets/user.png';
import "./userProfile.css";
import Share from '../assets/share.png';

const UserProfile = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [selectedRequestIndex, setSelectedRequestIndex] = useState(null);

  const userData = {
    userId: '12345',
    username: 'john_doe',
    contactNo: '123-456-7890',
    userEmail: 'john@example.com',
    numberOfDonations: 5,
    numberOfRequests: 5,
    history: [
      { id: 'D123', type: 'donation', bloodType: 'A+', date: '2024-01-01', time: '10:00', location: 'Hospital A' },
      { id: 'D456', type: 'donation', bloodType: 'B-', date: '2024-01-15', time: '11:00', location: 'Hospital B' },
      { id: 'D789', type: 'donation', bloodType: 'AB+', date: '2024-02-01', time: '09:00', location: 'Hospital C' },
      { id: 'A12B34C', type: 'request', bloodType: 'O+', date: '2024-02-10', urgency: 'High', location: 'Colombo General Hospital', status: 'Fulfilled', number: 1 },
      { id: 'G56H78I', type: 'request', bloodType: 'A-', date: '2024-03-05', urgency: 'Medium', location: 'Hospital Y', status: 'Pending', number: 2 },
      { id: 'J9KL0MN', type: 'request', bloodType: 'AB+', date: '2024-03-20', urgency: 'Low', location: 'Hospital Z', status: 'Pending', number: 3 },
    ]
  };

  const handleButtonClick = (index, type) => {
    if (type === 'donation') {
      setSelectedDonation(userData.history[index]);
      setSelectedRequestIndex(null); // Reset selected request
    } else if (type === 'request') {
      setSelectedRequestIndex(index);
      setSelectedDonation(null); // Reset selected donation
    }
  };


  return (
    <div className="bg-[#F0F0F0] min-h-screen p-5 flex flex-col items-center justify-center mt-16 mb-16">
      {/* User information part */}
      <div className="bg-white flex flex-col xl:flex-row xl:w-3/4 w-full p-4 rounded-2xl relative items-center justify-center">
        {/* User Avatar */}
        <div className="bg-[#F0F0F0] w-full xl:w-1/4 h-64 mb-4 flex items-center justify-center rounded-2xl relative">
          <img
            src={image}
            alt="User Avatar"
            className="w-40 h-40 rounded-full"
          />
        </div>
        {/* User Details */}
        <div className="bg-[#F0F0F0] w-full xl:w-1/2 p-1 h-64 mb-4 xl:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-lg text-left flex flex-col justify-items-center my-3">
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              User ID : <span className="font-bold text-lg text-black">{userData.userId}</span>
            </div>
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              Username : <span className="font-bold text-lg text-black">{userData.username}</span>
            </div>
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              Contact No : <span className="font-bold text-lg text-black">{userData.contactNo}</span>
            </div>
            <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-2">
              User Email : <span className="font-bold text-lg text-black">{userData.userEmail}</span>
            </div>
          </div>
        </div>
        {/* /// */}
        <div className="bg-[#F0F0F0] w-full xl:w-1/4 p-1 h-64 mb-4 xl:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-lg text-left flex flex-col justify-items-center my-3">
            <div className="font-medium text-lg rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of donations:
            </div>
            <div className="font-bold text-lg rounded-xl  mx-2 mb-2   bg-white p-2">
              {userData.numberOfDonations}
            </div>
            <div className="font-medium text-lg rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of requests:
            </div>
            <div className="font-bold text-lg rounded-xl  mx-2 mb-2   bg-white p-2">
              {userData.numberOfRequests}
            </div>
          </div>
        </div>
        {/* Edit Button */}
        <button className="bg-[#F0F0F0] font-medium text-black px-4 absolute bottom-0 left-0 m-1 rounded-2xl">
          Edit
        </button>
      </div>

      {/* Activate request part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-2 sm:w-1/2">
              Active Requests
            </div>
            <div className="flex flex-wrap">
              {userData.history.map((item, index) => (
                item.type === 'request' && (
                  <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3 max-h-90 max-w-90 " key={index}
                    style={{ flexBasis: 'calc(33.33% - 16px)' }}>
                    <div>
                      Request ID : <span className="font-bold text-lg text-black">{item.id}</span>
                    </div>
                    <div>
                      Blood Type : <span className="font-bold text-lg text-black">{item.bloodType}</span>
                    </div>
                    <div>
                      Urgency : <span className="font-bold text-lg text-black">{item.urgency}</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Donations part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full  p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-2 sm:w-1/2">
              Scheduled Donations
            </div>
            <div className="flex flex-wrap">
              {userData.history.map((item, index) => (
                item.type === 'donation' && (
                  <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3" key={index}
                    style={{ flexBasis: 'calc(33.33% - 16px)' }}>
                    <div>
                      Donation ID : <span className="font-bold text-lg text-black">{item.id}</span>
                    </div>
                    <div>
                      Blood type : <span className="font-bold text-lg text-black">{item.bloodType}</span>
                    </div>
                    <div>
                      Date  : <span className="font-bold text-lg text-black">{item.date}</span>
                    </div>
                    <div>
                      Time : <span className="font-bold text-lg text-black">{item.time}</span>
                    </div>
                    <div>
                      Location : <span className="font-bold text-lg text-black">{item.location}</span>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Donation History part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-2 sm:w-1/2">
              Donation History
            </div>
            <div className="flex-col sm:flex-wrap">
              {userData.history.map((item, index) => (
                item.type === 'donation' && (
                  <div key={index} className="mb-4 sm:flex">
                    <input
                      type="textbox"
                      value={`Donation number ${index + 1}`}
                      className="border p-2 rounded-xl mb-2 sm:mr-2 sm:mb-0"
                      style={{ width: '100%', maxWidth: '900px' }}
                    />
                    <button
                      onClick={() => handleButtonClick(index, 'donation')}
                      className="ml-2 text-white px-1 py-1 rounded-md flex items-center"
                      style={{ border: '4px solid #fff' }}
                    >
                      <img src={Share} className=' h-8 w-8'/>
                    </button>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* Request History part */}

      {/* Request History part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-2 sm:w-1/2">
              Request History
            </div>
            <div className="flex-col sm:flex-wrap">
              {userData.history.map((item, index) => (
                item.type === 'request' && (
                  <div key={index} className="mb-4 sm:flex items-center">
                    <div
                      className="border p-2 rounded-xl mb-2 sm:mr-2 sm:mb-0 bg-white"
                      style={{ width: '100%', maxWidth: '900px', position: 'relative' }}
                    >
                      <span className="font-bold">Request number </span> {item.number}
                      <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 font-bold text-lg ${item.status === 'Fulfilled' ? ' text-black ' : ' text-gray-300'}`}>
                        {item.status}
                      </span>
                    </div>
                    <button
                      onClick={() => handleButtonClick(index, 'request')}
                      className="ml-2 text-white px-1 py-1 rounded-md flex items-center"
                      style={{ border: '4px solid #fff'}} // Adjust padding here
                    >
                      <img src={Share} className=' h-8 w-8'/>

                    </button>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;