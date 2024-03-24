/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import donateBlood from "../Images/Rectangle 53.png";
import "../Styles/DonationCard.css";
import statement from "../Images/statement.png";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import loadingGif from "../assets/Rolling-1s-157px.gif";

const CONTRACT_ADDRESS = "0x53A1F65Ab31E7F971082947fb79D335C77549a9c";

const DonationCards = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: bloodRequestData, isLoading: loading } = useContractRead(
    contract,
    "getFullFilledRequests",
    [false]
  );
  const [formattedData, setFormattedData] = useState([]);
  const [showLoader, setShowLoader] = useState(true); // State to manage loader visibility
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [sortedRequests, setSortedRequests] = useState([]);
  const [isAscending, setIsAscending] = useState(true);
  const [selectedBloodType, setBloodType] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');


  const filterRequests = () => {
    let filteredRequests = [...sortedRequests];

    // If no blood type selected (selectedBloodType is null or empty), filter by district
    if (!selectedBloodType || selectedBloodType === "") {
      // Filter by district if selectedDistrict is not empty
      if (selectedDistrict) {
        filteredRequests = filteredRequests.filter(
          (request) => request.location === selectedDistrict
        );
      }
    } else {
      // Filter by blood type
      filteredRequests = filteredRequests.filter(
        (request) => request.bloodType === selectedBloodType
      );

      // Filter by district if both blood type and district are selected
      if (selectedDistrict) {
        filteredRequests = filteredRequests.filter(
          (request) => request.location === selectedDistrict
        );
      }
    }

    return filteredRequests;
  };



  const sortRequestsByDateAndTime = () => {
    const sortedData = [...sortedRequests];

    sortedData.sort((a, b) => {
      const dateA = new Date(a.date + ' ' + a.time);
      const dateB = new Date(b.date + ' ' + b.time);

      return isAscending ? dateA - dateB : dateB - dateA;
    });

    setSortedRequests(sortedData);
    setIsAscending(!isAscending);
  };



  const resetSorting = () => {
    setSortedRequests([...formattedData]);
    setIsAscending(true);
  };

  useEffect(() => {
    if (!loading && bloodRequestData) {
      const formatted = bloodRequestData.map((request) => {
        const [
          id,
          name,
          contactNumber,
          location,
          ,
          donationCenter,
          bloodType,
          dateTimeObj,
        ] = request;
        const date = new Date(dateTimeObj.toNumber() * 1000);
        const dateString = date.toLocaleDateString("en-US");
        const timeString = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        });
        return {
          id: id,
          name: name,
          location: location,
          bloodType: bloodType,
          date: dateString,
          time: timeString,
          donationCenter: donationCenter,
          contactNumber: contactNumber,
        };
      });
      formatted.sort((a, b) => {
        const dateTimeA = new Date(a.date + ' ' + a.time);
        const dateTimeB = new Date(b.date + ' ' + b.time);
        return dateTimeB - dateTimeA;
      });

      setFormattedData(formatted);
      setSortedRequests(formatted);
      setShowLoader(false); // Once data is loaded, hide the loader
    }
  }, [bloodRequestData, loading]);

  const handleDonateButtonClick = (request) => {
    setSelectedRequest(request); // Set selectedRequest when clicking on the "Donate" button
    setShowPopup(true);
  };

  const shortenID = (id) => {
    if (id.length <= 5) return id;
    return id.slice(0, 5) + "......" + id.slice(-5);
  };

  useEffect(() => {
    if (selectedBloodType) {
      const filteredRequests = formattedData.filter(
        (request) => request.bloodType === selectedBloodType
      );
      setSortedRequests(filteredRequests);
    } else {
      setSortedRequests(formattedData);
    }
  }, [selectedBloodType, formattedData]);

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

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setSelectedProvince(selectedProvince);
    // Reset district selection when province changes
    setSelectedDistrict('');
  };

  useEffect(() => {
    // Check if selected blood type is empty ("") or null
    if (!selectedBloodType || selectedBloodType === "") {
      // Reset selected province and district
      setSelectedProvince("");
      setSelectedDistrict("");
    }

    // Filter the requests based on blood type
    if (selectedBloodType) {
      const filteredRequests = formattedData.filter(
        (request) => request.bloodType === selectedBloodType
      );
      setSortedRequests(filteredRequests);
    } else {
      // If no blood type selected, show all requests
      setSortedRequests(formattedData);
    }
  }, [selectedBloodType, formattedData]);

  return (
    <div className="py-1 px-4 md:px-10 lg:px-20 mt-16 mb-16 ">
      <div className="donate-blood-container">
        <img
          src={donateBlood}
          alt="donateBlood"
          className="flex items-center w-1/2 md:w-1/3 lg:w-1/3 mb-6 md:mb-8 lg:mb-12"
        />
        <img
          src={statement}
          alt="statement"
          className="flex items-center w-1/3 md:w-1/3 lg:w-1/6 ml-4 md:ml-10 lg:ml-20"
        />
      </div>

      <div className="mb-10 flex flex-col md:flex-row items-center justify-center md:w-auto gap-32">
        <p className="text-4xl font-bold  md:mb-20 md:w-auto">
          Currently Received Requests
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:w-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-5 md:w-auto">
            <button
              className=" button text-backgroundColor flex min-w-[200px] justify-content: flex-start align-items: center px-4 py-2 bg-primaryColor hover:secondaryColor text-bgColor1 rounded mx-2 max-h-[38px]"
              onClick={sortRequestsByDateAndTime}
              onDoubleClick={resetSorting}
            >
              Sort by Date and Time
            </button>

            <select
              value={selectedBloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="border border-bgColor2 px-2 py-1 rounded mx-2 md:w-auto min-w-[200px]"
            >
              <option disabled selected>
                Select Blood Type
              </option>
              <option value="">ALL</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>

            <select
              value={selectedProvince}
              onChange={handleProvinceChange}
              className="border border-bgColor2 px-2 py-1 rounded mx-2 md:w-auto min-w-[200px]"
            >
              <option value="" disabled selected>
                Select Province
              </option>
              <option value="">ALL</option>
              {provinces.map((province) => (
                <option key={province} value={province}>
                  {province}
                </option>
              ))}
            </select>
            {/* Select element for districts */}
            {selectedProvince && (
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="border border-bgColor2 px-2 py-1 rounded mx-2 md:w-auto min-w-[200px]"
              >
                <option value="" disabled selected>
                  Select District
                </option>
                <option value="">ALL</option>

                {/* Use selectedProvince to get the relevant districts */}
                {districts[selectedProvince]?.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            )}


          </div>
        </div>
      </div>

      {/* Loader */}
      {showLoader && (
        <div className=" top-10 left-0 w-full flex justify-center items-start p-4 h-screen">
          <div className="text-center">
            <img src={loadingGif} alt="loading..." />
            <p>Loading...</p>
          </div>
        </div>
      )}

      {/* Render donation cards when data is loaded */}
      {!showLoader && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 px-20 md:px-20 sm:w-full lg:px-56 mb-10">
          {filterRequests().map((request) => (
            <div key={request.id} className="shadow-md border rounded-lg p-4">
              <p className="font-bold">Request ID : {shortenID(request.id)}</p>
              <p>Name : {request.name}</p>
              <p>Location : {request.location}</p>
              <p className="text-center">Blood Type </p>
              <p className="text-center font-extrabold">{request.bloodType} </p>
              <div className="text-center">
                <button
                  onClick={() => handleDonateButtonClick(request)}
                  className="my-3 px-4 py-2 button text-backgroundColor  rounded-lg "
                >
                  Donate
                </button>
              </div>
              <p className="text-right text-xs">Time : {request.time}</p>
              <p className="text-right text-xs">Date : {request.date}</p>
            </div>
          ))}
        </div>
      )}

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-secondaryColor bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-4 md:p-6 w-full md:w-3/4 lg:w-1/2 max-w-lg h-auto rounded shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto flex text-center py-1 text-textColor hover:secondaryColor font-bold rounded"
            >
              X
            </button>

            <div className="text-2xl flex justify-center font-bold mb-4 md:mb-8 gap-4">
              Recipient&apos;s <div className="text-mainColor">Details</div>
            </div>

            <div className="font-bold grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              <p className="py-1">Recipient Name :</p>
              <p className="py-1">{selectedRequest.name}</p>
              <p className="py-1">District :</p>
              <p className="py-1">{selectedRequest.location}</p>
              <p className="py-1">Donation Center :</p>
              <p className="py-1">{selectedRequest.donationCenter}</p>
              <p className="py-1">Contact Number :</p>
              <p className="py-1">{selectedRequest.contactNumber}</p>
              <p className="py-1">Blood Type :</p>
              <p className="py-1">{selectedRequest.bloodType}</p>
            </div>

            <div className="flex justify-center mt-4 md:mt-8 mb-2 md:mb-5">
              <button className="text-backgroundColor px-4 md:px-8 py-2 rounded-lg button">
                <a href={`tel:${selectedRequest.contactNumber}`}>Contact Now</a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const provinces = [
  'Central',
  'Eastern',
  'North Central',
  'Northern',
  'North Western',
  'Sabaragamuwa',
  'Southern',
  'Uva',
  'Western'
];

const districts = {
  'Central': ['Kandy', 'Matale', 'Nuwara Eliya'],
  'Eastern': ['Ampara', 'Batticaloa', 'Trincomalee'],
  'North Central': ['Anuradhapura', 'Polonnaruwa'],
  'Northern': ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya'],
  'North Western': ['Kurunegala', 'Puttalam'],
  'Sabaragamuwa': ['Kegalle', 'Ratnapura'],
  'Southern': ['Galle', 'Hambantota', 'Matara'],
  'Uva': ['Badulla', 'Monaragala'],
  'Western': ['Colombo', 'Gampaha', 'Kalutara']
}

export default DonationCards;
