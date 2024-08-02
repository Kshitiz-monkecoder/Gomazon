import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const SlideBar = ({ isOpen, toggleSidebar }) => {
  const [isSubOptionsOpen, setIsSubOptionsOpen] = useState(false);

  const toggleMaster = () => {
    setIsSubOptionsOpen(!isSubOptionsOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-white text-black transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} shadow-[4px_0_8px_-2px_rgba(0,0,0,0.2)] z-50`}
    >
      <div className="flex items-center justify-between p-8">
        <button className="text-gray-500 hover:text-gray-400" onClick={toggleSidebar}>
          <RxCross2 className='font-thin' size={25} />
        </button>
      </div>
      <div className="flex-1 mt-4 px-2 pl-5">
        <ul>
          <li className="py-4 px-4 cursor-pointer">Campaigns</li>
          <li className="py-4 px-4 cursor-pointer flex items-center justify-between" onClick={toggleMaster}>
            Masters
            {isSubOptionsOpen ? <FaChevronUp /> : <FaChevronDown />}
          </li>
          {isSubOptionsOpen && (
            <ul className="pl-4">
              <li className="py-4 px-4 cursor-pointer">
                  <a href='/masters/prospects'>Prospects</a>
              </li>
              <li className="py-4 px-4 cursor-pointer">Templates</li>
            </ul>
          )}
          <li className="py-4 px-4 cursor-pointer">Users</li>
          <li className="py-4 px-4 cursor-pointer">Settings</li>
          <li className="py-4 px-4 cursor-pointer">Support</li>
        </ul>
      </div>
    </div>
  );
};

export default SlideBar;
