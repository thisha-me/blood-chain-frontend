import React, { useState } from 'react';

const BloodDonationComponent = ({ bloodDonationArray }) => {
  const [selectedDonation, setSelectedDonation] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedDonation(bloodDonationArray[index]);
  };

  return (
    <div>
      <fieldset>
        <legend>Blood Donation History</legend>
        {bloodDonationArray.map((donation, index) => (
          <div key={index} className="mb-4">
            <input type="textbox" value={`Donation number ${index + 1}`} className="border p-2 rounded-md" />
            <button onClick={() => handleButtonClick(index)} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md">Show Details</button>
          </div>
        ))}
      </fieldset>
      {selectedDonation && (
        <div>
          <h2>Donation Details</h2>
          <p>Date: {selectedDonation.date}</p>
          <p>Location: {selectedDonation.location}</p>
          <p>Blood Type: {selectedDonation.bloodtype}</p>
          <p>Time: {selectedDonation.time}</p>
        </div>
      )}
    </div>
  );
};

export default BloodDonationComponent;
