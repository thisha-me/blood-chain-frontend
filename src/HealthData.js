// HealthData.js
import React, { useState } from 'react';

const HealthData = ({ onRegister }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [healthConditions, setHealthConditions] = useState('');
  const [hasDisease, setHasDisease] = useState(false);

  const handleRegister = () => {
    // You can add validation logic here before submitting the form
    onRegister({ weight, height, healthConditions, hasDisease });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <fieldset className="border border-gray-300 p-4 rounded-md shadow-md">
        <legend className="text-lg font-semibold mb-4">Health Data</legend>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2" htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <label className="block mb-2" htmlFor="bloodType">Select Blood Type:</label>
        <select
          id="bloodType"
          name="bloodType"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
        >
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <br />

        <div className="mb-4">
          <label className="block mb-2">
            Have you given blood before:
            <br /><input type="radio" name="givenblood" value="Yes" /> Yes
            <br /><input type="radio" name="givenblood" value="No" /> No
          </label>
        </div>


        <label className="block mb-2">Have you been diagnosed with any kind of disease before:

          <input
            type="radio"
            name="disease"
            value="Yes"
            onChange={() => setHasDisease(true)}
          /> Yes
        <br/>
          <input
            type="radio"
            name="disease"
            value="No"
            onChange={() => setHasDisease(false)}
          /> No
        </label>


        {hasDisease && (
          <div className="mb-4">
            <label className="block mb-2" htmlFor="healthConditions">Please enter the health conditions you had:</label>
            <textarea
              id="healthConditions"
              value={healthConditions}
              onChange={(e) => setHealthConditions(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        )}

        <button onClick={handleRegister} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600">
          Register
        </button>
      </fieldset>
    </div >
  );
};

export default HealthData;