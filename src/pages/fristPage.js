import '../App.css';
import AboutSection from '../Components/AboutSection';
import InstructionSection from '../Components/InstructionSection';
import PointSection from '../Components/PointSection';
import RegistrationSection from '../Components/RegistrationSection';
import WelcomeSection from '../Components/WelcomeSection';


function FirstPage() {
    return (
      <>
        <WelcomeSection/>
        <PointSection/>
        <AboutSection/>
        <InstructionSection/>
        <RegistrationSection/>
      </>
  
      
    );
  }
  
  export default FirstPage;
  