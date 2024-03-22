import '../App.css';
import AboutSection from '../Components/AboutSection';
import InstructionSection from '../Components/InstructionSection';
import PointSection from '../Components/Point';
import RegistrationSection from '../Components/RegistrationSection';
import WelcomeSection from '../Components/WelcomeSection';
import React from 'react';


function FirstPage() {
  return (
    <>
      <WelcomeSection />
      <PointSection />
      <AboutSection />
      <InstructionSection />
      <RegistrationSection />
    </>
  );
}

export default FirstPage;
