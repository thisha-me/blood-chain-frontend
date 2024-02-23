import React from "react";
import {Link} from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="p-8 bg-white rounded-md shadow-md" 
      style={{width: '400px'}}
      
      >
        <h1
          className="text-center text-xl font-bold mb-14 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
          BloodChain
        </h1>
        <div className="flex flex-col space-y-4 items-center">

        {/* Login and registration buttons */}
          <Link
            to="/registration"
            className="bg-white hover:bg-red-700 text-black font-bold py-3 rounded w-60 mb-4 text-center  text-xl shadow-md">
            Registration
          </Link>

          <p className="pb-1">OR</p>

          <Link
            to="/login"
            className="bg-white hover:bg-red-700 text-black font-bold py-3 rounded w-60 text-center text-xl shadow-md">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;