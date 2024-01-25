import React from "react";
import PointCard from "./PointCard";

function PointSection() {
  return (
    <>
        <div className="bg-gray-100 w-full h-screen items-center justify-center ">
            <div className="text-center">
                <p className="text-[#000000] font-bold p-2 text-5xl mb-4">
                    LifeBlood Exchange <br /> Request & Donate
                </p>
            </div>
            <div className=" flex items-center justify-center">
                <PointCard/>
                <PointCard/>
            </div>
        </div>
    </>
  );
}

export default PointSection;
