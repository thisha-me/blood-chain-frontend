import './App.css';
import AboutSection from './components/AboutSection';
import InstructionSection from './components/InstructionSection';
import PointSection from './components/PointSection';
import RegistrationSection from './components/RegistrationSection';
import WelcomeText from './components/WelcomeText';

function App() {
  return (
    <>
      <WelcomeText/>
      <PointSection/>
      <AboutSection/>
      <InstructionSection/>
      <RegistrationSection/>
    </>

    
  );
}

export default App;
