import React, { useState } from "react";

const Login = () => {
  // State variables to manage the email input value and its validity  
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  // Function to handle changes in the email input
  const handleEmailChange = (e) => {
    // Get the entered email from the input
    const enteredEmail = e.target.value;
    // Update the email state
    setEmail(enteredEmail);

    //this checks the email for @ sign
    setIsEmailValid(enteredEmail.includes("@"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-8 bg-white rounded-md shadow-md">
        <h1 className="text-center text-4xl font-bold mb-4 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
          BloodChain
        </h1>
        <p className="text-center text-xl font-bold mb-4 p-2 text-gray-800">
          Login
        </p>
        <p className="text-left text-lg text-gray-600 mb-4 font-bold">
          Login to your account :
        </p>

        
        <form className="flex flex-col">
          {/* email input */}
          <input
            className={`border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-60 text-1xl ${
              !isEmailValid && "border-red-500"
            }`}
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />

          {/* display error message for invalid inputs */}
          {!isEmailValid && (
            <p className="text-left  mb-4">
              Invalid email address
            </p>
          )}

          {/* password input */}
          <input
            className="border mb-4 text-center bg-white hover:bg-gray-700 text-black py-3 rounded w-60 text-1xl"
            type="password"
            name="password"
            placeholder="Password"/>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm text-gray-600 p-2">
              Remember me
            </label>
          </div>

          <a
            href="/signin"
            className="text-center text-4xl font-bold mb-14 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
            Sign In
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
