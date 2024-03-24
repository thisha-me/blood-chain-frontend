import React from "react";
import {Link} from "react-router-dom";

const RegistrationSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-96">
            <p className='text-[#000000] font-bold p-2 text-5xl hover:scale-105 transition-all duration-500'>Start <span className='text-[#DC143C]'>Blood Chain</span></p>
            <br/>
            <p className="text-[#000000] font-normal p-2 text-xl text-justify">Become a donor or request for blood and help save lives</p>
            <br/>
            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl hover:scale-105 transition-all duration-500">
                <p className="font-bold text-2xl"><Link to="/registration">Register Now</Link></p>
            </button>
        </div>
    );
}

export default RegistrationSection;
