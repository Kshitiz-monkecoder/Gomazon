import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo123.png";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validation, API call)
    navigate('/'); // Redirect to home page on successful login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 sm:p-6 lg:p-8">
      <div className="mb-4">
        <img src={Logo} alt="Logo" className="h-24 mx-auto" />
      </div>
      <div className="bg-white p-8 px-14 rounded shadow-lg w-full max-w-md">
        <h2 className="text-3xl text-[#7F56D9] font-bold mb-2">Welcome back</h2>
        <p className='text-gray-400 font-semibold mb-7'>Enter your email and password to sign in</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full p-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full p-3.5 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="w-full py-3 px-5 uppercase border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#7F56D9] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-cyan-500 font-semibold hover:text-cyan-200">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
