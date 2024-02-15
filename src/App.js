// BloodDonationForm.js
import React, { useState } from 'react';
import PersonalData from './components/PersonalData';
import HealthData from './components/HealthData';
import Registration from './components/Registration';
import "./App.css"

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleRegister = () => {
    // Logic for handling registration
    console.log('Registered!');
  };

  return (
    <div className="flex justify-center flex-col bg-gray-100">
      <h1 className="text-red-500 text-4xl font-bold mb-4 self-center mt-4">Registration</h1>
      <div class='max-w-100 bg-gray-400 sm:w-full md:w-1/2 lg:w-1/2 items-center justify-center border-4 rounded-lg border-gray-300 mx-auto'>
        <form>
          <PersonalData />
          <HealthData />
          <Registration email={formData.email} onRegister={handleRegister} />
          <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:bg-red-600 mx-auto block mt-4">
            Register
          </button>
        </form>

      </div>


    </div>
  );
};

export default BloodDonationForm;
