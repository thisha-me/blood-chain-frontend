// BloodDonationForm.js
import React, { useState } from 'react';
import PersonalData from './components/PersonalData';
import HealthData from './components/HealthData';

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  // const handlePersonalDataNext = (personalData) => {
  //   setFormData({ ...formData, ...personalData });
  //   setStep(2);
  // };

  // const handleRegister = (healthData) => {
  //   setFormData({ ...formData, ...healthData });

  //   // You can perform the registration logic here with the complete form data
  //   console.log('Registered:', formData);
  // };
  // const userData[]

  return (
    <div className="flex justify-center">
      <div className="max-w-md mx-4">
        <form>
          <div className="max-w-md">
            <div className="mb-8">
              <PersonalData />
            </div>
            <div className="mb-8">
              <HealthData />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodDonationForm;
