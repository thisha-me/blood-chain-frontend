// Registration.js
import React, { useState } from 'react';

const Registration = ({ email }) => {
  const [useEmailId, setUseEmailId] = useState(false);
  const [customId, setCustomId] = useState('');

  return (
    <div className="max-w-md mx-auto mt-8 ml-4"> {/* Added ml-4 for left margin */}
      <fieldset className="border border-gray-300 p-4 rounded-md shadow-md">
        <legend className="text-lg font-semibold mb-4">Authentication</legend>
        <div className="mb-4">
          <label className="block mb-2">Would you like to use E-mail as the ID:</label>
          <div className="flex">
            <input
              type="radio"
              name="consent"
              value="yes"
              onChange={() => setUseEmailId(true)}
              className="mr-2"
            />
            <label className="mr-6">Yes</label>
            <input
              type="radio"
              name="consent"
              value="no"
              onChange={() => setUseEmailId(false)}
              className="mr-2"
            />
            <label>No</label>
          </div>
        </div>
        {!useEmailId && (
          <div className="mb-4">
            <label className="block mb-2">Enter Custom ID:</label>
            <input
              type="text"
              value={customId}
              onChange={(e) => setCustomId(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        )}
        {useEmailId && (
          <div className="mb-4">
            <label className="block mb-2">Your ID:</label>
            <input
              type="text"
              value={email}
              readOnly // Prevents editing
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-2">Enter Password:</label>
          <input
            type="password"
            name="password"
            id="Password"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Re-enter Password:</label>
          <input
            type="password"
            name="repassword"
            id="Repassword"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default Registration;
