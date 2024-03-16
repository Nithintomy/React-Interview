import React from 'react';
import profile from '../assets/profile.svg';
import love from '../assets/love.svg';
import cart from '../assets/cart.svg';
import message from '../assets/message.svg';

function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="flex items-center">
        <a href="#" className="text-blue-700 font-bold text-xl ml-10">
          Brand
        </a>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="search"
          className="w-96 text-gray-600 px-4 py-2 rounded-l-md focus:outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
          Search
        </button>
      </div>

      <div className="flex items-center">
        <div className="flex flex-col items-center mr-5">
          <img
            src={profile}
            className="w-5 h-5 rounded-full object-cover"
            alt="Profile"
          />
          <span className="text-black ml-1">Profile</span>
        </div>
        <div className="flex flex-col items-center mr-5">
          <img
            src={message}
            className="w-5 h-5 rounded-full object-cover"
            alt="Message"
          />
          <span className="text-black ml-1">Message</span>
        </div>
        <div className="flex flex-col items-center mr-5">
          <img
            src={love}
            className="w-5 h-5 rounded-full object-cover"
            alt="Orders"
          />
          <span className="text-black ml-1">Orders</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={cart}
            className="w-5 h-5 rounded-full object-cover"
            alt="My Cart"
          />
          <span className="text-black ml-1">My Cart</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
