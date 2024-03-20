/* eslint-disable react/prop-types */
// PersonalData.js
import React, { useState } from 'react';


const PersonalData = ({ fieldsetClassName }) => {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [email, setEmail] = useState('');


  return (
    <div className="personal-data-container ">
      <div className="max-w-100 mx-auto mt-8 sm:w-full md:w-3/4 lg:w-7/10">
        <fieldset className={`border-4 border-solid border-[#f0f0f0] rounded-md p-4 ${fieldsetClassName}`}>
          <legend className="text-lg font-semibold mb-4">Personal Data</legend>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="sex">Sex:</label>
            <select
              id="sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            >
              <option value="">Select Sex</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          {/* <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600">
          Next
        </button> */}
        </fieldset>
      </div>
    </div>
  );
};

export default PersonalData;