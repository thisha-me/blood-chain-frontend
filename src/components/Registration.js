// Registration.js
import React, { useState } from 'react';


const Registration = ({ email, onRegister, fieldsetClassName }) => {
  // Ensure that the initial state of useEmailId is set to false
  const [useEmailId, setUseEmailId] = useState(false);
  const [customId, setCustomId] = useState('');

  return (
    <div className="registration-container">
      <div class="max-w-100 mx-auto mt-8 sm:w-full md:w-3/4 lg:w-7/10">
        <fieldset className={`border-4 border-red-500 rounded-md p-4 ${fieldsetClassName}`}>
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
          {!useEmailId ? (
            <div className="mb-4">
              <label className="block mb-2">Enter Custom ID:</label>
              <input
                type="text"
                value={customId}
                onChange={(e) => setCustomId(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>
          ) : (
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
    </div>  
  );
};

      export default Registration;
