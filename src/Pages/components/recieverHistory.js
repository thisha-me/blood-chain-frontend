import React, { useState } from 'react';

const RecieverHistory = ({ bloodRequestArray }) => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedRequest(bloodRequestArray[index]);
  };

  return (
    <div>
      <fieldset>
        <legend>Blood Request History</legend>
        {bloodRequestArray.map((request, index) => (
          <div key={index} className="mb-4">
            <input type="textbox" value={`Request number ${index + 1}`} className="border p-2 rounded-md" />
            <button onClick={() => handleButtonClick(index)} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md">Show Details</button>
          </div>
        ))}
      </fieldset>
      {selectedRequest && (
        <div>
          <h2>Request Details</h2>
          <p>Date: {selectedRequest.date}</p>
          <p>Location: {selectedRequest.location}</p>
          <p>Blood Type: {selectedRequest.bloodType}</p>
          <p>Urgency: {selectedRequest.urgency}</p>
        </div>
      )}
    </div>
  );
};

export default RecieverHistory;
