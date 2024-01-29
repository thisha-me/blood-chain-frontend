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
    <div>
      <div>
        <h1>Currently Received Requests</h1>
        <select>
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

        <button>Sort by Date and Time</button>
      </div>

      <div>
        {requestData.map(request => (
          <div key={request.id}>
            <p>Request ID : {request.id}</p>
            <p>Name : {request.name}</p>
            <p>Location : {request.location}</p>
            <p>Blood Type : {request.bloodType}</p>
            <p>Date : {request.date}</p>
            <p>Time : {request.time}</p>
            <button onClick={() => {
              setSelectedRequest(request);
              setShowPopup(true);
            }}>Donate</button>
          </div>
        ))}
      </div>

      {showPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
            <p>Name : {selectedRequest.name}</p>
            <p>Location : {selectedRequest.location}</p>
            <p>Contact Number : {selectedRequest.contactNumber}</p>
            <p><a href={`tel:${selectedRequest.contactNumber}`}>Contact</a></p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DonationCards;