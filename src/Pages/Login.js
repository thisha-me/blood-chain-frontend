import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="p-8 bg-white rounded-md shadow-md"
      style={{width: '400px'}}
      >


      {/* page title */}
        <h1  className="text-center text-xl font-bold mb-4 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
          BloodChain
        </h1>
        <p className="text-center text-xl font-bold mb-4 p-2 text-gray-800">
          Login
        </p>
        <p className="text-left text-lg text-gray-600 mb-4 font-bold">
          Login to your account :
        </p>

      {/* Email box */}
        <form className="flex flex-col">
        <input className=" border mb-4 text-center bg-white text-black  py-3 rounded w90  text-1xl "
               type="text"
               name="email"
               placeholder="Email"/>

      {/* password box */}
          <input className="border mb-4 text-center bg-white  text-black  py-3 rounded w-90  text-1xl"
                 type="password"
                 name="password"
                 placeholder="Password"/>

      {/* checkbox */}
          <div className="flex items-center mb-4">
            <input type="checkbox"
                   id="rememberMe"
                   className="mr-2"/>
            <label htmlFor="rememberMe" className="text-sm text-gray-600 p-2">
              Remember me
            </label>
          </div>
    
          <a href="/signin" className="text-center text-xl font-bold mb-14 p-2 bg-red-700 text-white rounded-md w-40 mx-auto">
            Sign In
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;