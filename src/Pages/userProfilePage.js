import React, { useEffect, useState } from "react";
import image from "../assets/user.png";
import "../Styles/userProfile.css";
import Share from "../assets/share.png";
import { truncateAddress } from "../utils/truncateAddress";

const CONTRACT_ADDRESS ="0x53A1F65Ab31E7F971082947fb79D335C77549a9c";

import { Link } from "react-router-dom";
import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useContractRead,
  useDisconnect,
} from "@thirdweb-dev/react";

const UserProfile = () => {
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [selectedRequestIndex, setSelectedRequestIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showDonorInput, setShowDonorInput] = useState(false);
  const [donorId, setDonorId] = useState("");

  const address = useAddress();
  const userIdElement = address ? (
    <span>{truncateAddress(address)}</span>
  ) : null;

  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: activeRequestData, isLoading: loading } = useContractRead(
    contract,
    "getActiveRequest",
    [],
    { from: address }
  );

  const fulfillRequestById = async (donorId) => {
    try {
      await contract.fulfillBloodReqById(donorId);
    } catch (error) {
      console.error("Error fulfilling request:", error);
    }
  };

  let activeReqDataArray = [];

  // Check if activeRequestData is defined
  if (activeRequestData) {
    // Extracting values from activeRequestData array
    const [
      userId,
      username,
      contactNumber,
      district,
      province,
      city,
      bloodType,
      dateTimeObj,
      status,
    ] = activeRequestData;
    const date = new Date(dateTimeObj.toNumber() * 1000);
    const dateString = date.toLocaleDateString("en-US");
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Creating userData object
    activeReqDataArray = {
      userId: userIdElement,
      bloodType: bloodType,
      date: dateString,
    };

    console.log("active req: ".activeReqDataArray);
  } else {
    console.log("activeRequestData is undefined or null");
  }

  const isRegistered = !!address;

  const registrationButton = !isRegistered && (
    <div className="flex items-center justify-center flex-col">
      <span className="text-2xl font-bold mb-4 mt-10">
        You are not registered. Please register.
      </span>
      <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-5 rounded-xl hover:scale-105 transition-all duration-500 mb-20">
        <p className="font-bold text-2xl">
          <Link to="/registration">Register Now</Link>
        </p>
      </button>
    </div>
  );

  const { data: userDataArray, isLoading } = useContractRead(
    contract,
    "getUserDetails",
    [],
    { from: address }
  );
  console.log(userDataArray);
  // // Check if userDataArray is defined and not empty before accessing its first element
  const username = userDataArray?.[0];
  const contactNo = userDataArray?.[1];
  const email = userDataArray?.[2];
  const donationNo = parseInt(userDataArray?.[5], 16);

  const userData = {
    userId: userIdElement,
    username: username,
    contactNo: contactNo,
    userEmail: email,
    numberOfDonations: donationNo,
    numberOfRequests: 0,
    history: {
      donations: [
        {
          id: "D123",
          bloodType: "A+",
          date: "2024-01-01",
          time: "10:00",
          location: "Hospital A",
        },
        {
          id: "D456",
          bloodType: "B-",
          date: "2024-01-15",
          time: "11:00",
          location: "Hospital B",
        },
        {
          id: "D789",
          bloodType: "AB+",
          date: "2024-02-01",
          time: "09:00",
          location: "Hospital C",
        },
      ],
      requests: [
        {
          id: "A12B34C",
          bloodType: "O+",
          date: "2024-02-10",
          urgency: "High",
          location: "Colombo General Hospital",
          status: "Fulfilled",
          number: 1,
        },
        {
          id: "G56H78I",
          bloodType: "A-",
          date: "2024-03-05",
          urgency: "Medium",
          location: "Hospital Y",
          status: "Pending",
          number: 2,
        },
        {
          id: "J9KL0MN",
          bloodType: "AB+",
          date: "2024-03-20",
          urgency: "Low",
          location: "Hospital Z",
          status: "Pending",
          number: 3,
        },
      ],
    },
  };

  const handleButtonClick = (index, type) => {
    if (type === "donation") {
      setSelectedDonation(userData.history[index]);
      setSelectedRequestIndex(null); // Reset selected request
    } else if (type === "request") {
      setSelectedRequestIndex(index);
      setSelectedDonation(null); // Reset selected donation
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

  return (
    <div className="bg-[#F0F0F0] min-h-screen p-5 flex flex-col items-center justify-center mt-16 mb-16">
      {registrationButton}

      {/* User information part */}
      <div className="bg-white flex flex-col xl:flex-row xl:w-3/4 w-full p-4 rounded-2xl relative items-center justify-center">
        {/* User Avatar */}
        <div className="bg-[#F0F0F0] w-full xl:w-1/4 h-64 mb-4 flex items-center justify-center rounded-2xl relative">
          <img
            src={image}
            alt="User Avatar"
            className="w-40 h-40 rounded-full"
          />
        </div>
        {/* User Details */}
        <div className="bg-[#F0F0F0] w-full xl:w-1/2 p-1 h-64 mb-4 xl:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-base text-left flex flex-col justify-items-center my-3">
            <div className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-2">
              User ID :{" "}
              <span className="font-bold text-base text-black">
                {userData.userId}
              </span>
            </div>
            <div className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-2">
              Username :{" "}
              <span className="font-bold text-base text-black">
                {userData.username}
              </span>
            </div>
            <div className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-2">
              Contact No :{" "}
              <span className="font-bold text-base text-black">
                {userData.contactNo}
              </span>
            </div>
            <div className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-2">
              User Email :{" "}
              <span className="font-bold text-base text-black">
                {userData.userEmail}
              </span>
            </div>
          </div>
        </div>
        {/* /// */}
        <div className="bg-[#F0F0F0] w-full xl:w-1/4 p-1 h-64 mb-4 xl:ml-4 rounded-2xl relative">
          <div className="text-black font-bold text-base text-left flex flex-col justify-items-center my-3">
            <div className="font-medium text-base rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of donations:
            </div>
            <div className="font-bold text-base rounded-xl  mx-2 mb-2   bg-white p-2">
              {userData.numberOfDonations}
            </div>
            <div className="font-medium text-base rounded-xl  mx-2 mb-2 bg-white p-2">
              Number of requests:
            </div>
            <div className="font-bold text-base rounded-xl  mx-2 mb-2   bg-white p-2">
              {userData.numberOfRequests}
            </div>
          </div>
        </div>
      </div>

      {/* Activate request part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-base text-left justify-items-center my-2 p-2">
            <div className="font-bold text-base flex rounded-xl mx-2 mb-2 bg-white p-2 sm:w-1/2">
              Active Requests
            </div>
            <div className="flex flex-wrap">
              <div
                className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3 max-h-90 max-w-90"
                style={{ flexBasis: "calc(33.33% - 16px)" }}
              >
                <div>
                  Request ID :{" "}
                  <span className="font-bold text-base text-black ">
                    {activeReqDataArray.userId}
                  </span>
                </div>
                <div>
                  Blood Type :{" "}
                  <span className="font-bold text-base text-black">
                    {activeReqDataArray.bloodType}
                  </span>
                </div>
                <div>
                  Date :{" "}
                  <span className="font-bold text-base text-black">
                    {activeReqDataArray.date}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setShowPopup(true);
                    }}
                    className="my-3 px-4 py-2 button text-backgroundColor  rounded-lg "
                  >
                    Full fill request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-secondaryColor bg-opacity-60 flex items-center justify-center z-10">
            <div className="bg-white p-4 md:p-6 w-full md:w-3/4 lg:w-1/2 max-w-lg h-auto rounded shadow-lg">
              <button
                onClick={() => setShowPopup(false)}
                onClickCapture={() => setShowDonorInput(false)}
                className="ml-auto flex text-center py-1 text-textColor hover:secondaryColor font-bold rounded"
              >
                X
              </button>

              <div className="text-1xl flex justify-center font-bold mb-4 md:mb-8 ">
                Do you want to fulfill the request?
              </div>

              <div className=" justify-center mt-3">
                <div className="w-22">
                  <div
                    className="web3-button"
                    style={{ display: showDonorInput ? "none" : "block" }}
                  >
                    <Web3Button
                      connectWalletProps={{ btnTitle: "Yes Without Donor" }}
                      onClick={() => setShowDonorInput(false)}
                      contractAddress="0x9D2E2eAf9495f165AFBDCF1031f507A281dF1040"
                      action={(contract) => {
                        contract.call("fulfillBloodReq");
                      }}
                    >
                      Yes Without Donor
                    </Web3Button>
                  </div>
                </div>
              </div>
              <div className=" justify-center mt-3">
                <div className="w-25">
                  <button
                    onClick={() => setShowDonorInput(true)}
                    className="px-2 py-1 button text-backgroundColor rounded-lg mr-4 w-full"
                    style={{ display: showDonorInput ? "none" : "block" }}
                  >
                    Yes
                  </button>
                </div>
              </div>
              <div className=" justify-center mt-3">
                <div className="w-25">
                  <button
                    onClick={() => setShowPopup(false)}
                    onClickCapture={() => setShowDonorInput(false)}
                    className="px-2 py-1 w-full bg-transparent hover:bg-secondaryColor text-mainColor hover:text-mainColor border border-mainColor hover:border-transparent rounded"
                    style={{ display: showDonorInput ? "none" : "block" }}
                  >
                    No
                  </button>
                </div>
              </div>

              {showDonorInput && (
                <div className="mt-4 flex items-center mt-15">
                  <div className="w-full">
                    <div className="flex justify-center mt-3 mb-5">
                      <input
                        type="text"
                        value={donorId}
                        onChange={(e) => setDonorId(e.target.value)}
                        placeholder="Enter Donor ID"
                        className="border border-gray-300 px-4 py-2 rounded-lg w-full focus:outline-none focus:border-primaryColor mr-2"
                      />
                    </div>

                    <div className="web3-button">
                      <Web3Button
                        contractAddress="0x9D2E2eAf9495f165AFBDCF1031f507A281dF1040"
                        action={(contract) => {
                          contract.call("fulfillBloodReq", [ donorId ], {
                            from: address,
                          });
                        }}
                      >
                        Confirm
                      </Web3Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="font-bold grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                <p className="py-1"></p>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Donations History part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full  p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-base text-left justify-items-center my-2 p-2">
            <div className="font-bold text-base flex rounded-xl mx-2 mb-2 bg-white p-2 w-9/10">
              Donations History
            </div>
            <div className="flex flex-wrap">
              {userData.history.donations.map((donation, index) => (
                <div
                  className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3"
                  key={index}
                  style={{ flexBasis: "calc(33.33% - 16px)" }}
                >
                  <div>
                    Donation ID :{" "}
                    <span className="font-bold text-base text-black">
                      {donation.id}
                    </span>
                  </div>
                  <div>
                    Blood type :{" "}
                    <span className="font-bold text-base text-black">
                      {donation.bloodType}
                    </span>
                  </div>
                  <div>
                    Date :{" "}
                    <span className="font-bold text-base text-black">
                      {donation.date}
                    </span>
                  </div>
                  <div>
                    Time :{" "}
                    <span className="font-bold text-base text-black">
                      {donation.time}
                    </span>
                  </div>
                  <div>
                    Location :{" "}
                    <span className="font-bold text-base text-black">
                      {donation.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Request History part */}
      <div className="bg-white flex flex-col sm:flex-row xl:w-3/4 w-full  p-4 rounded-2xl relative mt-2">
        <div className="bg-[#F0F0F0] w-full mr-0 h-58 mb-0 sm:ml-4 rounded-2xl relative max">
          <div className="text-black font-bold text-base text-left justify-items-center my-2 p-2">
            <div className="font-bold text-base flex rounded-xl mx-2 mb-2 bg-white p-2 w-9/10">
              Request History
            </div>
            <div className="flex flex-wrap">
              {userData.history.requests.map((request, index) => (
                <div
                  className="font-medium text-base rounded-xl mx-2 mb-2 bg-white p-6 sm:w-1/3"
                  key={index}
                  style={{ flexBasis: "calc(33.33% - 16px)" }}
                >
                  <div>
                    Request ID :{" "}
                    <span className="font-bold text-base text-black">
                      {request.id}
                    </span>
                  </div>
                  <div>
                    Blood type :{" "}
                    <span className="font-bold text-base text-black">
                      {request.bloodType}
                    </span>
                  </div>
                  <div>
                    Date :{" "}
                    <span className="font-bold text-base text-black">
                      {request.date}
                    </span>
                  </div>
                  <div>
                    Urgency :{" "}
                    <span className="font-bold text-base text-black">
                      {request.urgency}
                    </span>
                  </div>
                  <div>
                    Location :{" "}
                    <span className="font-bold text-base text-black">
                      {request.location}
                    </span>
                  </div>
                  <div>
                    Status :{" "}
                    <span className="font-bold text-base text-black">
                      {request.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
