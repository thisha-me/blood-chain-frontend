import React, { useEffect, useState } from "react";
import image_1 from "../assets/find-blood.png";
import image_2 from "../assets/get-notified.png";
import image_3 from "../assets/free-forever.png";
import image_4 from "../assets/save-a-life.png";
import image_5 from "../assets/fulfilled-req.png"

const AboutSection = () => {
    const Image_1 = image_1;
    const Image_2 = image_2;
    const Image_3 = image_3;
    const Image_4 = image_4;
    const Image_5 = image_5;

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1050);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1050);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className= {`flex ${isMobile ? "flex-col" : "flex"} items-center justify-center`}>
            <div className="flex-col items-center justify-center">
                <div className="mx-0 px-6 py-0 flex flex-wrap">
                    <div
                    style={{ maxWidth: '400px', height: '200px', width: '200px' }}
                    className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
                    >
                    <img src={Image_1} alt="Free Forever" className="" />
                    <div>
                        <p className="text-[#DC143C] font-normal p-2 text-3xl">Find Blood</p>
                    </div>
                    </div>
                    <div
                    style={{ maxWidth: '400px', height: '200px', width: '200px' }}
                    className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
                    >
                    <img src={Image_2} alt="Save a Life" className="" />
                    <div>
                        <p className="text-[#DC143C] font-normal p-2 text-3xl">Get Notified</p>
                    </div>
                    </div>
                </div>
                <div className="mx-0 px-6 py-0 flex flex-wrap">
                    <div
                    style={{ maxWidth: '400px', height: '200px', width: '200px' }}
                    className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
                    >
                    <img src={Image_3} alt="Free Forever" className="" />
                    <div>
                        <p className="text-[#DC143C] font-normal p-2 text-3xl">Free Forever</p>
                    </div>
                    </div>
                    <div
                    style={{ maxWidth: '400px', height: '200px', width: '200px' }}
                    className="bg-white max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center hover:scale-105 transition-all duration-500"
                    >
                    <img src={Image_4} alt="Save a Life" className="" />
                    <div>
                        <p className="text-[#DC143C] font-normal p-2 text-3xl">Save a Life</p>
                    </div>
                    </div>
                </div>
        </div>
                <div className="">
                    <div className="max-w-lg w-full rounded overflow-hidden mx-2 flex flex-col justify-center items-center">
                        <p className="text-[#000000] font-bold p-2 text-5xl hover:scale-105 transition-all duration-500">About <span className="text-[#DC143C]">Blood Chain</span></p>
                        <div>
                        <p style={{fontSize: '18px'}} className="text-[#000000] font-normal p-2 text-justify">Transforming donation landscapes. Decentralized platform revolutionizes blood & organ access. Secure data, empowered patients, transparent impact. <span className=" font-bold">Join the life-saving chain.</span><br /></p>
                            <button className="bg-[#8C0909] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">Read More</button>
                            <br/><br/>
                            <hr className="border-t-2 border-red-500"/>
                        </div>
                    </div>
                    <div className=" max-w-lg w-full rounded overflow-hidden mx-2 my-4 flex items-center">
                        <div className="w-full">
                            <p style={{fontSize: '40px'}} className="text-[#DC143C] font-bold p-1">240+</p>
                            <p style={{fontSize: '25px'}} className="text-[#000000] font-medium p-1 text-3xl">Fulfilled Requests</p>
                            <p style={{fontSize: '40px'}} className="text-[#DC143C] font-bold p-1">10+</p>
                            <p style={{fontSize: '25px'}} className="text-[#000000] font-medium p-1 text-3xl">Pending Requests</p>
                        </div>
                        <img src={Image_5} alt="Save a Life" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
