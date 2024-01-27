import React from "react";
import PointCard from "./PointCard";
import imageUrl_1 from "../assets/donate.png"
import imageUrl_2 from "../assets/request.png"

function PointSection() {

    const card1Props = {
        imageUrl: imageUrl_2,
        buttonName: "Request Blood",
      };
    
    const card2Props = {
        imageUrl: imageUrl_1,
        buttonName: "Donate Blood",
      };  


    return (
        <>
            <div className="bg-gray-100 w-full h-screen items-center justify-center ">
                <div className="text-center py-6">
                    <p className="text-[#000000] font-bold p-2 text-5xl mb-4">
                        <span className="text-[#FF0000]">LifeBlood</span> Exchange <br />
                        Request & <span className="text-[#FF0000]">Donate</span>
                    </p>
                </div>
                <div className=" flex items-center justify-center">
                    <PointCard{...card1Props}/>
                    <PointCard{...card2Props}/>
                </div>
            </div>
        </>
    );
}

export default PointSection;
