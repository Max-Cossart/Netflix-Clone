import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/0adf0460-8717-48a3-af3d-8bdf4ed5c811/AU-en-20221121-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-4 z-50">
          <div className="max-w-[450px] h-[600px] mt-20 mx-auto bg-black/75 text-white">
            <div className="max-w-[350px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className=" flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8 ">
                  <span className="text-gray-600 mr-2">
                    New to netflix?
                  </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
