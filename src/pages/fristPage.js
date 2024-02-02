import '../App.css';
import AboutSection from '../components/AboutSection';
import InstructionSection from '../components/InstructionSection';
import PointSection from '../components/PointSection';
import RegistrationSection from '../components/RegistrationSection';
import WelcomeSection from '../components/WelcomeSection';


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
  