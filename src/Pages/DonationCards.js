import React, { useState } from 'react';

const requestData = [
 {
  id: '2014',
  name: 'Dew',
  location: 'Matara',
  bloodType: 'A+',
  date: '20/04/2024',
  time: '10:00 AM',
  donationCenter: 'Matara Hospital',
  contactNumber: '1234567890'
 },
 {
  id: '2015',
  name: 'John',
  location: 'Colombo',
  bloodType: 'B-',
  date: '15/05/2024',
  time: '11:30 AM',
  donationCenter: 'Colombo Hospital',
  contactNumber: '9876543210'
 },
 {
  id: '2016',
  name: 'Jane',
  location: 'Galle',
  bloodType: 'O+',
  date: '10/06/2024',
  time: '02:15 PM',
  donationCenter: 'Galle Hospital',
  contactNumber: '5678901234'
 },
 {
  id: '2017',
  name: 'Sarah',
  location: 'Kandy',
  bloodType: 'AB+',
  date: '25/07/2024',
  time: '09:45 AM',
  donationCenter: 'Kandy Hospital',
  contactNumber: '4321098765'
 },
 {
  id: '2018',
  name: 'Mike',
  location: 'Negombo',
  bloodType: 'A-',
  date: '30/08/2024',
  time: '04:20 PM',
  donationCenter: 'Negombo Hospital',
  contactNumber: '6789012345'
 },
];

const DonationCards = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="py-8 px-20">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Currently Received Requests</h1>
        <div className="flex items-center">
          <select className="mr-4 border border-gray-300 px-2 py-1 rounded">
            <option value={null}>Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
          </select>
          <button className="px-2 py-2 bg-mainColor text-white rounded hover">Sort by Date and Time</button>
        </div>
      </div>

      <div className="ml-40 mr-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-1 gap-y-10 px-10 ">
        {requestData.map(request => (
          <div key={request.id} className="ml-20 mr-5 shadow-md mx-1 border rounded-lg p-4">
            <p className="font-bold">Request ID : {request.id}</p>
            <p>Name : {request.name}</p>
            <p>Location : {request.location}</p>
            <p className='text-center'>Blood Type  </p>
            <p className='text-center font-extrabold'>{request.bloodType} </p>
            <button onClick={() => {
              setSelectedRequest(request);
              setShowPopup(true);
            }} className="ml-32 my-3 px-4 py-2 bg-mainColor text-backgroundColor rounded-lg ">Donate</button>
            <p className='ml-56 text-xs'>Time : {request.time}</p>
            <p className='ml-56 text-xs'>Date : {request.date}</p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p className="font-bold">Name : {selectedRequest.name}</p>
            <p>Location : {selectedRequest.location}</p>
            <p>Contact Number : {selectedRequest.contactNumber}</p>
            <p><a href={`tel:${selectedRequest.contactNumber}`}>Contact</a></p>
            <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-mainColorLighter text-white rounded hover:mainColor">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DonationCards;
