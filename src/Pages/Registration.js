import React from "react";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-8 bg-white rounded-md shadow-md"> 
        <h1 className="text-center text-4xl font-bold mb-4 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
          BloodChain
        </h1>
        <p className="text-center text-xl font-bold mb-4 p-2 text-gray-800">
          Registration
        </p>
        <p className="text-left text-lg text-gray-600 mb-4 font-bold">
          Create your account
        </p>

        <form className="flex flex-col">
          <label className="text-left mb-2" htmlFor="name">
            Enter your name:
          </label>
          <input
            className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-80 text-1xl"
            type="text"
            name="name"
            id="name"
            placeholder="Name"/>

          <label className="text-left mb-2" htmlFor="email">
            Enter your email:
          </label>
          <input
            className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-80 text-1xl"
            type="text"
            name="email"
            id="email"
            placeholder="Email"/>

          <label className="text-left mb-2" htmlFor="password">
            Enter your password:
          </label>
          <input
            className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-80 text-1xl"
            type="password"
            name="password"
            id="password"
            placeholder="Password"/>

          <label className="text-left mb-2" htmlFor="confirmPassword">
            Confirm your password:
          </label>
          <input
            className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-80 text-1xl"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"/>

    

          <div className="flex justify-between mb-4">
            <div className="flex flex-col mr-4">
              <label className="text-left mb-2" htmlFor="age">
                Enter your age:
              </label>
              <input
                className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-40 text-1xl"
                type="text"
                name="age"
                id="age"
                placeholder="Age"/>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-left pl-4" htmlFor="gender">
                Select your gender:
              </label>
              <div className="flex">
                <label className="mr-4 p-2">
                  <input type="radio" name="gender" value="male"/>
                  Male
                </label>
                <label className="mr-4 p-2">
                  <input type="radio" name="gender" value="female"/>
                  Female
                </label>
              </div>
            </div>
          </div>


          <label className="text-left mb-2" htmlFor="confirmPassword">
            Confirm your password:
          </label>
          <input
            className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-80 text-1xl"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"/>

            
          <a href="/signup" className="text-center text-4xl font-bold mb-2 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
}

export default Registration;
