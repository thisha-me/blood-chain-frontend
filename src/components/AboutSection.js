import React from "react";
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

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className=" mx-0 my-4">
                <div className=" max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
                    <img src={Image_1} alt="Find Blood" className="mx-2 my-4 px-6 py-4" />
                    <div>
                        <p className="text-[#d84747] font-normal p-2 text-5xl">Find Blood</p>
                    </div>
                </div>
                <div className=" max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
                    <img src={Image_2} alt="Get Notified" className="mx-2 my-4 px-6 py-4"/>
                    <div>
                        <p className="text-[#d84747] font-normal p-2 text-5xl">Get Notified</p>
                    </div>
                </div>
            </div>
            <div className="mx-0 my-4 px-6 py-4">
                <div className=" max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
                    <img src={Image_3} alt="Free Forever" className="mx-2 my-4 px-6 py-4" />
                    <div>
                        <p className="text-[#d84747] font-normal p-2 text-5xl">Free Forever</p>
                    </div>
                </div>
                <div className=" max-w-md w-full rounded-xl overflow-hidden shadow-xl mx-2 my-4 flex flex-col justify-center items-center">
                    <img src={Image_4} alt="Save a Life" className="mx-2 my-4 px-6 py-4" />
                    <div>
                        <p className="text-[#d84747] font-normal p-2 text-5xl">Save a Life</p>
                    </div>
                </div>
            </div>
            <div className="bg-slate-500 ">
                <div className="max-w-md w-full rounded overflow-hidden mx-2 flex flex-col justify-center items-center">
                    <p className="text-[#000000] font-bold p-2 text-5xl">About Blood Chain</p>
                    <div>
                        <p className="text-[#000000] font-normal p-2 text-2xl text-justify">Transforming donation landscapes. Decentralized platform revolutionizes blood & organ access. Secure data, empowered patients, transparent impact. Join the life saving chain.<br/><br/></p>
                        <button className="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl">Read More</button>
                    </div>
                </div>
                <div className="bg-orange-400 max-w-md w-full rounded overflow-hidden shadow-xl mx-2 my-4 flex   items-center">
                    <div className=" w-full">
                        <p className="text-[#000000] font-bold p-2 text-5xl">240+</p>
                        <p className="text-[#000000] font-normal p-2 text-4xl">Fulfilled Requests</p>
                        <p className="text-[#000000] font-bold p-2 text-5xl">10+</p>
                        <p className="text-[#000000] font-normal p-2 text-4xl">Pending Requests</p>
                    </div>
                    <img src={Image_5} alt="Save a Life" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
