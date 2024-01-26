import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-8 bg-white rounded-md shadow-md">
        <h1
          className="text-center text-4xl font-bold mb-14 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
          BloodChain
        </h1>
        <div className="flex flex-col space-y-4 items-center">
          <a
            href="/register"
            className="bg-white hover:bg-red-700 text-black font-bold py-3 rounded w-60 mb-4 text-center  text-2xl shadow-md">
            Registration
          </a>

          <p className="pb-1">OR</p>

          <a
            href="/login"
            className="bg-white hover:bg-red-700 text-black font-bold py-3 rounded w-60 text-center text-2xl shadow-md">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
