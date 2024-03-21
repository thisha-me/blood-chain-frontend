import PersonalData from "../Components/PersonalData";
import HealthData from "../Components/HealthData";
import Registration from "../Components/Registration";
import { useState } from "react";
import {Link} from "react-router-dom";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username : '',
        bday : '',
        contactno : '',
        address: '',
        sex : '',
        email : '',
        weight: '',
        height : '',
        bloodtype : ''
    });
    const [step, setStep] = useState(1);

    const handleRegister = () => {
        // Logic for handling registration
        console.log('Registered!');
    };

    return (
        <div className="flex justify-center flex-col mt-16 mb-16 ">
            <h1 className="text-[#DC143C] text-4xl font-bold mb-4 self-center mt-4">Registration</h1>
            <div className='max-w-100 shadow-lg sm:w-full md:w-1/2 lg:w-1/2 items-center justify-center border-4 rounded-lg border-gray-300 mx-auto'>
                <form>
                    <PersonalData />
                    <HealthData />
                    <Registration email={formData.email} onRegister={handleRegister} />
                    <button type='submit' className="bg-[#8C0909] hover:bg-red-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:bg-red-600 mx-auto block mt-4 mb-5">
                        <Link to="/profile">Register</Link>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
