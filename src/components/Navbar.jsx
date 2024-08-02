import React, { useState } from 'react';
import SlideBar from './SlideBar';
import Logo from "../assets/logo123.png"
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="relative z-10 flex items-center p-4 pl-10 border-b-2 text-white">
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-400">
          <FiMenu size={24} />
        </button>
        <img src={Logo} alt="Logo" className="h-[70px] px-5"/>
      </nav>
      <SlideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
