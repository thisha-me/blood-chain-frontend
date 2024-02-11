// BloodDonationForm.js
import React, { useState } from 'react';
import PersonalData from './components/PersonalData';
import HealthData from './components/HealthData';
import Registration from './components/Registration';

const BloodDonationForm = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center">
      <div className="max-w-4xl mx-4 flex">
        <div className="w-1/2 pr-4">
          <PersonalData />
        </div>
        <div className="w-1/2 pl-4">
          <HealthData />
        </div>
        <div className="w-1/2 pr-4 ml-4"> {/* Added ml-4 for left margin */}
          <Registration />
        </div>
      </div>
    </div>
  );
};

export default BloodDonationForm;
