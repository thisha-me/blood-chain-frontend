/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import donateBlood from "../Images/Rectangle 53.png";
import "../Styles/DonationCard.css";
import statement from "../Images/statement.png";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import loadingGif from "../assets/Rolling-1s-157px.gif";

const DonationCards = () => {
  const { contract } = useContract(
    "0x1C8b6ace2BD3f9A5007c1cf0b06eE531ad3Dd17A"
  );
  const { data: bloodRequestData, isLoading: loading } = useContractRead(
    contract,
    "getAllRequests"
  );
  const [formattedData, setFormattedData] = useState([]);
  const [showLoader, setShowLoader] = useState(true); // State to manage loader visibility
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [sortedRequests, setSortedRequests] = useState([...formattedData]);
  const [isAscending, setIsAscending] = useState(true);
  const [selectedBloodType, setBloodType] = useState(null);


  const filterRequests = () => {
    if (selectedBloodType) {
      return sortedRequests.filter(
        (request) => request.bloodType === selectedBloodType
      );
    }
    return sortedRequests;
  };

  const convertToDateObject = (dateString, timeString) => {
    const dateParts = dateString.split("/");
    const timeParts = timeString.split(" ");
    const year = parseInt(dateParts[2]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[0]);
    const hours = parseInt(timeParts[0].split(":")[0]);
    const minutes = parseInt(timeParts[0].split(":")[1]);
    return new Date(year, month, day, hours, minutes);
  };

  const sortRequestsByDateAndTime = () => {
    const sortedData = [...sortedRequests];

    sortedData.sort((a, b) => {
      const dateA = convertToDateObject(a.date, a.time);
      const dateB = convertToDateObject(b.date, b.time);
      return dateA - dateB;
    });

    if (isAscending) {
      sortedData.sort((a, b) => {
        const timeA = new Date(a.time).getTime();
        const timeB = new Date(b.time).getTime();

        return timeA - timeB;
      });
    } else {
      sortedData.sort((a, b) => {
        const timeA = new Date(a.time).getTime();
        const timeB = new Date(b.time).getTime();

        return timeB - timeA;
      });
    }

    setSortedRequests(sortedData);

    setIsAscending(!isAscending);
  };

  const resetSorting = () => {
    setSortedRequests([...formattedData]);
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
      setFormattedData(formatted);
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

  return (
    <div className="py-1 px-4 md:px-10 lg:px-20 mt-16 mb-16 ">
      <div className="donate-blood-container ">
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
      

      {/* Render donation cards when data is loaded */}
      {!showLoader && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 px-20 md:px-20 lg:px-56 mb-10">
          {formattedData.map((request) => (
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
              Recipient's <div className="text-primaryColor">Details</div>
            </div>

            <div className="font-bold grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
              <p className="py-1">Recipient Name:</p>
              <p className="py-1">{selectedRequest.name}</p>
              <p className="py-1">Donation Center:</p>
              <p className="py-1">{selectedRequest.location}</p>
              <p className="py-1">Contact Number:</p>
              <p className="py-1">{selectedRequest.contactNumber}</p>
              <p className="py-1">Blood Type:</p>
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

export default DonationCards;
