import React, { useState } from 'react';
import image from '../assets/user.png';

const UserProfile = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [selectedRequestIndex, setSelectedRequestIndex] = useState(null);

  const userState = {
    userId: '12345',
    username: 'john_doe',
    contactNo: '123-456-7890',
    userEmail: 'john@example.com',
    numberOfDonations: 5,
    numberOfRequests: 5,
    requests: [
      { requestId: 'R123', bloodType: 'O+', urgency: 'High' },
      { requestId: 'R456', bloodType: 'A-', urgency: 'Medium' },
      { requestId: 'R789', bloodType: 'B+', urgency: 'Low' },
      { requestId: 'R789', bloodType: 'B+', urgency: 'Low' },
    ],
    donations: [
      { donationId: 'D123', bloodType: 'A+', date: '2024-01-01', time: '10:00', location: 'Hospital A' },
      { donationId: 'D456', bloodType: 'B-', date: '2024-01-15', time: '11:00', location: 'Hospital B' },
      { donationId: 'D789', bloodType: 'AB+', date: '2024-02-01', time: '09:00', location: 'Hospital C' },
      { donationId: 'D456', bloodType: 'B-', date: '2024-01-15', time: '11:00', location: 'Hospital B' },
      { donationId: 'D789', bloodType: 'AB+', date: '2024-02-01', time: '09:00', location: 'Hospital C' },
    ],
  };


  const donationArray = [
    { donationid: '1', bloodtype: 'A+', date: '2024-01-01', time: '10:00', location: 'Hospital A' },
    { donationid: '2', bloodtype: 'B-', date: '2024-01-15', time: '11:00', location: 'Hospital B' },
    { donationid: '3', bloodtype: 'AB+', date: '2024-02-01', time: '09:00', location: 'Hospital C' },
  ];

  const bloodRequestArray = [
    { requestid: 'A12B34C', bloodType: 'O+', date: '2024-02-10', urgency: 'High', location: 'Colombo General Hospital' },
    { requestid: 'G56H78I', bloodType: 'A-', date: '2024-03-05', urgency: 'Medium', location: 'Hospital Y' },
    { requestid: 'J9KL0MN', bloodType: 'AB+', date: '2024-03-20', urgency: 'Low', location: 'Hospital Z' },
  ];

  const handleDonationButtonClick = (index) => {
    setSelectedDonation(donationArray[index]);
  };

  const handleRequestButtonClick = (index) => {
    setSelectedRequestIndex(index);
  };

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

      {/* Activate request part */}
      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 pt-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-4 h-58 mb-4 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-lg text-left justify-items-center my-2 p-2">
            <div className="font-bold text-lg flex rounded-xl mx-2 mb-2 bg-white p-3 sm:w-1/2">
              Active Requests
            </div>
            <div className="flex flex-wrap">
              {userState.requests.map((request, index) => (
                <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3"
                  style={{ flexBasis: 'calc(33.33% - 16px)' }}
                >
                  <div>
                    Request ID : <span className="font-bold text-lg text-black">{request.requestId}</span>
                  </div>
                  <div>
                    Blood Type : <span className="font-bold text-lg text-black">{request.bloodType}</span>
                  </div>
                  <div>
                    Urgency : <span className="font-bold text-lg text-black">{request.urgency}</span>
                  </div>
                  <button onClick={() => handleRequestButtonClick(index)} className="bg-red-500 text-white px-3 py-1 mt-2 rounded-md">Show Details</button>
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
            <div className="flex flex-wrap">
              {userState.donations.map((donation) => (
                <div className="font-medium text-lg rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3"
                  style={{ flexBasis: 'calc(33.33% - 16px)' }}>
                  <div>
                    Donation ID : <span className="font-bold text-lg text-black">{donation.donationId}</span>
                  </div>
                  <div>
                    Blood type : <span className="font-bold text-lg text-black">{donation.bloodType}</span>
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

      {/* Donation History */}
      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 p-4 rounded-2xl relative mt-4">
        <fieldset>
          <legend>Blood Donation History</legend>
          {donationArray.map((donation, index) => (
            <div key={index} className="mb-4">
              <input type="textbox" value={`Donation number ${index + 1}`} className="border p-2 rounded-md" />
              <button onClick={() => handleDonationButtonClick(index)} className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md" style={{ border: '4px solid #fff' }}>Show Details</button>
            </div>
          ))}
        </fieldset>
        {selectedDonation && (
          <div className='p-5 ml-40 border rounded-3xl border-double border-red-500 border-8 text-xl' style={{ minWidth: '450px', maxHeight: '200px' }}>
            <h2>Donation Details</h2>
            <p>Date: {selectedDonation.date}</p>
            <p>Location: {selectedDonation.location}</p>
            <p>Blood Type: {selectedDonation.bloodtype}</p>
            <p>Time: {selectedDonation.time}</p>
          </div>
        )}
      </div>

      {/* Receiver History */}
      <div className="bg-white flex flex-col sm:flex-row w-full sm:w-3/4 p-4 rounded-2xl relative mt-4">
        <fieldset>
          <legend>Blood Request History</legend>
          {bloodRequestArray.map((request, index) => (
            <div key={index} className="mb-4">
              <input type="textbox" value={`Request number ${index + 1}`} className="border p-2 rounded-md" />
              <button onClick={() => handleRequestButtonClick(index)} className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md" style={{ border: '4px solid #fff' }}>Show Details</button>
            </div>
          ))}
        </fieldset>
        {selectedRequestIndex !== null && (
          <div className='p-5 ml-40 border rounded-3xl border-double border-red-500 border-8 text-xl' style={{ minWidth: '450px', maxHeight: '200px' }}>
            <h2>Request Details</h2>
            <p>Date: {bloodRequestArray[selectedRequestIndex].date}</p>
            <p>Location: {bloodRequestArray[selectedRequestIndex].location}</p>
            <p>Blood Type: {bloodRequestArray[selectedRequestIndex].bloodType}</p>
            <p>Urgency: {bloodRequestArray[selectedRequestIndex].urgency}</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default UserProfile;