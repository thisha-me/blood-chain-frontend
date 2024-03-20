/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import imageUrl from "../assets/instruct.png";
import icon from "../assets/check-mark.png";

const InstructionSection = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1050);
  const [showReadMore, setShowPopup] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 1050);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  const [isMobile_1, setIsMobile_1] = useState(window.innerWidth < 450);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile_1(window.innerWidth < 450);
      };

      window.addEventListener("resize", handleResize);

      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);

  useEffect(() => {
    if (showReadMore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showReadMore]);

  return (
    <div className="bg-[#F0F0F0] min-h-screen flex flex-col items-center justify-center">
      <div className="text-center py-1">
        <p className="text-[#000000] font-bold p-2 text-5xl mb-4 hover:scale-105 transition-all duration-500">
          How It <span className="text-[#DC143C]">Works</span>
        </p>

        <p className="text-[#000000] font-normal  p-2 text-xl mb-4">
          Share your medical details securely. Blockchain technology ensures transparency and protects your privacy.
        </p>
      </div>
      <div className= {`flex ${isMobile ? "flex-col" : "flex"} items-center justify-between`}>
        <div className="max-w-md w-full">
          <img style={{height: '350px'}} src={imageUrl} alt="How it works" />
        </div>
        <div className= {`max-w-lg  w-full ${isMobile_1 ? "text-center" : " "}`}>
          <p style={{fontSize: '18px'}} className="text-[#000000] font-medium p-2  text-justify">Once a match is made, our platform securely connects you directly with the donor or recipient. Communicate details and arrange the blood transfer without intermediaries.</p>
          <ul className="list-disc pl-6 leading-loose">
            <li className="flex items-center">
              <img src={icon} alt="Register Icon" />
              <p style={{ fontSize: '1.2rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Register</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Profile Icon" />
              <p style={{ fontSize: '1.2rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Fill your Profile</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Request Icon" />
              <p style={{ fontSize: '1.2rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Request Blood</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="Donate Icon" />
              <p style={{ fontSize: '1.2rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">Donate Blood</p>
            </li>
            <li className="flex items-center">
              <img src={icon} alt="View Icon" />
              <p style={{ fontSize: '1.2rem' }} className="mr-2 text-[#000000] text-2xl font-normal p-2">View pending Requests</p>
            </li>
          </ul>
          <br/>
          <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 my-1 rounded-xl items-center"
          onClick={() => {
            setShowPopup(true);
          }}>
            Read More</button>
        </div>
      </div>

      {showReadMore && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondaryColor bg-opacity-60 flex items-center justify-center">
        <div className="bg-backgroundColor  w-3/4  max-w-full h-3/4 rounded shadow-lg">
          <button
            onClick={() => setShowPopup(false)}
            className="ml-auto flex text-center py-5 mr-10 text-textColor hover:secondaryColor font-bold rounded"
          >
            X
          </button>
          <div className="text-2xl flex-col justify-center font-normal p-3 mb-4 md:mb-8 gap-4 overflow-y-auto" style={{ maxHeight: "430px" }}>
            <div className="">
              <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Register</span></p>
              <p style={{ fontSize: "15px" }} className="text-justify">
              Potential donors create an account on the platform by providing their basic details such as personal information, medical history and blood type. This information is stored securely on the blockchain, a distributed ledger that is resistant to tampering and fraud.
              <br/><br/>
              </p>
            </div>
            <div className="">
              <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Fill Your Profile</span></p>
              <p style={{ fontSize: "15px" }} className="text-justify">
              Donors can then complete their profiles by adding more detailed information about their health, such as recent medications, allergies, and travel history. This information helps to ensure that they are eligible to donate and that their blood is compatible with potential recipients.
              <br/><br/>
              </p>
            </div>
            <div className="">
              <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Request Blood</span></p>
              <p style={{ fontSize: "15px" }} className="text-justify">
              Pateints, hospitals or other medical facilities in need of blood can post requests on the platform, specifying the type of blood they need and the urgency of the request. Person who request blood can choose the location, donation center and other basic information while filling the request form.
              </p>
            </div>
            <div className="">
              <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Donate Blood</span></p>
              <p style={{ fontSize: "15px" }} className="text-justify">
              When a donor sees a request for blood that they are eligible to fulfill, they can contact the recipient directly through the platform to arrange a donation. The platform facilitates communication and streamlines the donation process. Go ahead with us to explore the system and new features.
              <br/><br/>
              </p>
            </div>
            <div className="">
              <p className="text-center font-medium"><span className="text-[#DC143C] center-text"> View Pending Requests</span></p>
              <p style={{ fontSize: "15px" }} className="text-justify">
                
              Donors can also browse a list of pending blood requests to see if there are any matches for their blood type and other criteria. This allows them to proactively donate blood to patients in need.
              <br/><br/>
              </p>
            </div>
            <hr className="w-full h-3 border-black"></hr>
            <br/>

            <div className="">
              <p className="text-center font-medium"><span className="text-[#DC143C] center-text"> Blockchain's Role in Protecting Donor Data:</span></p>
              <br/>
              <p style={{ fontSize: "15px" }} className="text-justify">
              Data immutability: Once a donor's medical information is added to the blockchain, it cannot be altered or deleted without the consensus of all participants in the network. This makes it tamper-proof and protects against unauthorized data modification.
              <br/><br/>
              Encryption: Donors can choose to encrypt their most sensitive medical data before storing it on the blockchain. This adds an extra layer of security and ensures that only authorized parties can access it.
              <br/><br/>
              Decentralization: The blockchain is not stored in a single location, but rather distributed across a network of computers. This makes it resistant to hacking and data breaches, as there is no single point of failure.
              <br/><br/>
              </p>
            </div>
          </div>
        </div>
      </div>
      )}

    </div>
  );
};

export default InstructionSection;
