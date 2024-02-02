import React, { useState } from 'react';
import donateBlood from '../Images/Rectangle 53.png';
import '../Styles/DonationCard.css';
import statement from '../Images/statement.png';


const requestData = [
  {
    id: '2014',
    name: 'Dew',
    location: 'Matara',
    bloodType: 'A+',
    date: '20/04/2024',
    time: '10:00 AM',
    donationCenter: 'Matara Hospital',
    contactNumber: '1234567890',
  },
  {
    id: '2015',
    name: 'John',
    location: 'Colombo',
    bloodType: 'B-',
    date: '15/05/2024',
    time: '11:30 AM',
    donationCenter: 'Colombo Hospital',
    contactNumber: '9876543210',
  },
  {
    id: '2016',
    name: 'Jane',
    location: 'Galle',
    bloodType: 'O+',
    date: '10/06/2024',
    time: '02:15 PM',
    donationCenter: 'Galle Hospital',
    contactNumber: '5678901234',
  },
  {
    id: '2017',
    name: 'Sarah',
    location: 'Kandy',
    bloodType: 'AB+',
    date: '25/07/2024',
    time: '09:45 AM',
    donationCenter: 'Kandy Hospital',
    contactNumber: '4321098765',
  },
  {
    id: '2018',
    name: 'Mike',
    location: 'Negombo',
    bloodType: 'A-',
    date: '30/08/2024',
    time: '04:20 PM',
    donationCenter: 'Negombo Hospital',
    contactNumber: '6789012345',
  },
];

const DonationCards = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBloodType, setSelectedBloodType] = useState(null);
  const [sortedRequests, setSortedRequests] = useState([...requestData]);
  const [sortAscending, setSortAscending] = useState(true); // Initial sorting direction

  const filterRequests = () => {
    if (selectedBloodType) {
      return sortedRequests.filter(request => request.bloodType === selectedBloodType);
    }
    return sortedRequests;
  };

  const sortRequestsByDateTime = () => {
    const sorted = [...sortedRequests].sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return sortAscending ? dateA - dateB : dateB - dateA;
    });

    setSortedRequests(sorted);
    setSortAscending(!sortAscending); // Toggle sorting direction
  };


  return (
    <div className="py-1 px-4 md:px-10 lg:px-20 mt-10">
      <div className="donate-blood-container">
        <img src={donateBlood} alt="donateBlood" className="flex items-center w-1/2 md:w-1/3 lg:w-1/3 mb-6 md:mb-8 lg:mb-12" />
        <img src={statement} alt="statement" className="flex items-center w-1/3 md:w-1/3 lg:w-1/6 ml-4 md:ml-10 lg:ml-20" />
      </div>

      <div className="mb-2 flex flex-col md:flex-row items-center justify-between">
        <p className="text-4xl font-bold mb-4 md:mb-0 md:ml-80">Currently Received Requests</p>
        <button onClick={sortRequestsByDateTime} className=" d:mr-6 md:ml-0 md:mr-72 md:w-auto px-2 py-2 bg-mainColorLighter hover:mainColor text-backgroundColor rounded ">
          Sort by Date and Time
        </button>
      </div>

      <div className="bloodSort mb-4">
        <select
          value={selectedBloodType}
          onChange={(e) => setSelectedBloodType(e.target.value)}
          className="border border-secondaryColor px-2 py-1 rounded w-15 md:w-auto md:mr-72"
        >
            <option value={null}>Select Blood Type</option>
            <option value="">ALL</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-26 md:px-20 lg:px-72">
        {filterRequests().map(request => (
          <div key={request.id} className="shadow-md border rounded-lg p-4">
            <p className="font-bold">Request ID : {request.id}</p>
            <p>Name : {request.name}</p>
            <p>Location : {request.location}</p>
            <p className='text-center'>Blood Type  </p>
            <p className='text-center font-extrabold'>{request.bloodType} </p>
            <button onClick={() => {
              setSelectedRequest(request);
              setShowPopup(true);
            }} className="ml-40 my-3 px-4 py-2 bg-mainColor text-backgroundColor rounded-lg ">Donate</button>
            <p className='ml-72 text-xs'>Time : {request.time}</p>
            <p className='ml-72 text-xs'>Date : {request.date}</p>
          </div>
        ))}
      </div>

    {showPopup && (
    <div className="fixed top-0 left-0 w-full h-full bg-secondaryColor bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-6 w-1/3 h-1/2 rounded shadow-lg">
      <button onClick={() => setShowPopup(false)} className="ml-96 px-10 py-2 text-textColor font-bold rounded hover:mainColor">X</button>

        <div className='text-3xl text-center font-bold mb-8 flex flex-col md:flex-row items-center gap-4 ml-24'>Recipient's <div className='text-mainColorLighter'> Details</div></div>
          <div className='font-bold px-5'>
          <p className='py-1'>Recipient Name : {selectedRequest.name}</p>
          <p className='py-1'>Donation Center : {selectedRequest.location}</p>
          <p className='py-1'>Contact Number : {selectedRequest.contactNumber}</p>
          <p className='py-1'>Blood Type : {selectedRequest.bloodType}</p>

        </div>
        <button className='bg-mainColor text-backgroundColor px-8 py-2 rounded-lg ml-40 mt-8 mb-5'><a href={`tel:${selectedRequest.contactNumber}`}>Contact Now</a></button>

      </div>
    </div>
    )}
  </div>
  );
};

export default DonationCards;