// BloodDonationForm.js
import React, { useState } from 'react';
import PersonalData from './components/PersonalData';
import HealthData from './components/HealthData';
import Registration from './components/Registration';

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleRegister = () => {
    // Logic for handling registration
    console.log('Registered!');
  };

  return (
    <div className="flex justify-center flex-col"> 
      <h1 className="text-red-500 text-2xl font-bold mb-4 self-center">Registration</h1> 
      <div className="max-w-4xl mx-4 flex justify-between"> 
      <div className="w-1/3 pr-4" style={{ marginRight: '50px', marginLeft: '80px' }}>
          <PersonalData />
        </div>
        <div className="w-1/3 px-2" style={{ marginLeft: '150px' }}> 
          <HealthData />
        </div>
        <div className="w-1/3 pl-2" style={{ marginLeft: '210px' }}> 
          <Registration email={formData.email} onRegister={handleRegister} /> 
        </div>
      </div>
    </div>
  );
};

export default BloodDonationForm;
