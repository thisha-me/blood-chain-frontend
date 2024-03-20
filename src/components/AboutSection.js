/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import image_1 from "../assets/find-blood.png";
import image_2 from "../assets/get-notified.png";
import image_3 from "../assets/free-forever.png";
import image_4 from "../assets/save-a-life.png";
import image_5 from "../assets/fulfilled-req.png";

const AboutSection = () => {
  const Image_1 = image_1;
  const Image_2 = image_2;
  const Image_3 = image_3;
  const Image_4 = image_4;
  const Image_5 = image_5;

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
    <div className="min-h-screen flex items-center justify-center ">
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex"
        }  items-center justify-center`}
      >
        <div className=" flex-col items-center justify-center">
          <div className="mx-0 px-6 py-0 flex flex-wrap items-center justify-center ">
            <div
              style={{ maxWidth: "400px", height: "200px", width: "200px" }}
              className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
            >
              <img src={Image_1} alt="Free Forever" className="" />
              <div>
                <p className="text-[#DC143C] font-medium p-2 text-xl">
                  Find Blood
                </p>
              </div>
            </div>
            <div
              style={{ maxWidth: "400px", height: "200px", width: "200px" }}
              className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
            >
              <img src={Image_2} alt="Save a Life" className="" />
              <div>
                <p className="text-[#DC143C] font-medium p-2 text-xl">
                  Get Notified
                </p>
              </div>
            </div>
          </div>
          <div className="mx-0 px-6 py-0 flex flex-wrap items-center justify-center">
            <div
              style={{ maxWidth: "400px", height: "200px", width: "200px" }}
              className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
            >
              <img src={Image_3} alt="Free Forever" className="" />
              <div>
                <p className="text-[#DC143C] font-medium p-2 text-xl">
                  Free Forever
                </p>
              </div>
            </div>
            <div
              style={{ maxWidth: "400px", height: "200px", width: "200px" }}
              className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
            >
              <img src={Image_4} alt="Save a Life" className="" />
              <div>
                <p className="text-[#DC143C] font-medium p-2 text-xl">
                  Save a Life
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-lg w-full rounded overflow-hidden mx-2 flex flex-col justify-center items-center">
            <p className="text-[#000000] font-bold p-2 text-5xl hover:scale-105 transition-all duration-500">
              About <span className="text-[#DC143C]">Blood Chain</span>
            </p>
            <div className={`${isMobile_1 ? "text-center" : " "} `}>
              <p
                style={{ fontSize: "18px" }}
                className="text-[#000000] font-normal p-2 text-justify"
              >
                Transforming donation landscapes. Decentralized platform
                revolutionizes blood & organ access. Secure data, empowered
                patients, transparent impact.{" "}
                <span className=" font-bold">Join the life-saving chain.</span>
                <br />
              </p>
              <button
                className={`bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl ${
                  isMobile_1 ? "mx-auto" : " "
                }`}

                onClick={() => {
                    setShowPopup(true);
                  }}
              >
                Read More
              </button>
              <br />
              <br />
              <hr className="border-t-2 border-red-500" />
            </div>
          </div>
          <div className=" max-w-lg w-full rounded overflow-hidden mx-2 my-4 flex items-center">
            <div className="w-full">
              <p
                style={{ fontSize: "40px" }}
                className="text-[#DC143C] font-bold p-1"
              >
                240+
              </p>
              <p
                style={{ fontSize: "25px" }}
                className="text-[#000000] font-medium p-1 text-3xl"
              >
                Fulfilled Requests
              </p>
              <p
                style={{ fontSize: "40px" }}
                className="text-[#DC143C] font-bold p-1"
              >
                10+
              </p>
              <p
                style={{ fontSize: "25px" }}
                className="text-[#000000] font-medium p-1 text-3xl"
              >
                Pending Requests
              </p>
            </div>
            <img src={Image_5} alt="Save a Life" />
          </div>
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
                <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Effortless Donation</span></p>
                <p style={{ fontSize: "15px" }} className="text-justify">
                  Blood Chain revolutionizes the blood donation process, offering an incredibly user-friendly platform that simplifies every step, from effortless sign-up procedures to seamlessly scheduling appointments and tracking the meaningful impact of donors. This streamlined approach ensures that contributing to the life-saving cause is not only accessible but also a straightforward and rewarding experience for individuals committed to making a difference.
                  <br/><br/>
                </p>
              </div>
              <div className="">
                <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Connecting Lives</span></p>
                <p style={{ fontSize: "15px" }} className="text-justify">
                  Blood Chain serves as a vital link between blood donors and patients in need, fostering a community dedicated to ensuring that life-saving blood reaches those who require it the most, precisely when they need it. By joining this platform, individuals become part of a network that actively contributes to the well-being of others, highlighting the powerful connection between donors and the recipients of their generosity. The platform's commitment to connecting lives underscores the importance of collective efforts in providing timely and crucial support to those facing medical challenges.
                </p>
              </div>
              <div className="">
                <p className="text-center font-medium"><span className="text-[#DC143C] center-text">Transparency and Trust</span></p>
                <p style={{ fontSize: "15px"}} className="text-justify">
                  At the heart of Blood Chain's mission lies a dedication to transparency and ethical practices. The platform prioritizes the safety and quality of every blood donation, implementing a decentralized system to ensure the utmost security of donor and patient data. This commitment fosters trust among participants, reassuring them that their contributions are not only impactful but are also handled with the highest standards of integrity, making the act of donation an ethically sound and reliable endeavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
        
    </div>
  );
};

export default AboutSection;
