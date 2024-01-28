import React from "react";

const RegistrationSection = () => {
    return (
        <div className="flex flex-col items-center justify-center h-96">
            <p className='text-[#000000] font-bold p-2 text-5xl'>Start <span className='text-[#DC143C]'>Blood Chain</span></p>
            <br/>
            <p className="text-[#000000] font-normal p-2 text-2xl text-justify">Become a donor or request for blood and help save lives</p>
            <br/>
            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-5 px-10 rounded-xl">
                <p className="font-bold text-4xl">Register Now</p>
            </button>
        </div>
    );
}

export default RegistrationSection;
