import React, { useState } from 'react';
import { FaApple, FaGoogle, FaFacebook } from 'react-icons/fa';
import Logo from "../assets/logo123.png";

const Signup = () => {


  const [rememberMe, setRememberMe] = useState(false);
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <img src={Logo} alt="Logo" className="h-24 mx-auto" />
      </div>
      <div className="bg-white mb-5 p-8 px-4 sm:px-8 md:px-14 shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-7 pt-2">Register with</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="border-gray-200 border text-white p-4 sm:p-6 rounded-xl">
            <FaFacebook className='text-[#2D3748]' size={24} />
          </button>
          <button className="border-gray-200 border text-white p-4 sm:p-6 rounded-xl">
            <FaApple className='text-[#2D3748]' size={29} />
          </button>
          <button className="border-gray-200 border text-white p-4 sm:p-6 rounded-xl">
            <FaGoogle className='text-[#2D3748]' size={24} />
          </button>
        </div>
        <h1 className='flex justify-center mb-3 text-gray-400 text-xl'>or</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="name"
              id="name"
              required
              className="mt-1 block w-full p-2.5 sm:p-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your name here"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full p-2.5 sm:p-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full p-2.5 sm:p-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your password"
            />
          </div>
          <div className="flex items-center">
            
            <div
              className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in`}
            >
              <input
                type="checkbox"
                name="remember_me"
                required
                id="remember_me"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={rememberMe}
                onChange={toggleRememberMe}
              />
              <label
                htmlFor="remember_me"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <label htmlFor="remember_me" className="block text-sm font-medium text-gray-900">
              Remember me
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 px-5 uppercase border border-transparent rounded-xl shadow-sm text-xs font-medium text-white bg-[#7F56D9] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-cyan-500 hover:text-cyan-200">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
