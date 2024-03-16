import React from 'react'
import profile from '../assets/profile.svg'
import love from '../assets/love.svg'
import cart from '../assets/cart.svg'
import message from '../assets/message.svg'
function Navbar() {
  return (
    <nav className=" p-4 flex justify-between items-center">
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
        <img
          src={profile}
        
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="text-black ">Profile</span>
        <img
          src={message}
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="text-black">Message</span>
        <img
          src={love}
        
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="text-black">Orders</span>
        <img
          src={cart}
        
          className="w-5 h-5 rounded-full object-cover"
        />
        <span className="text-black">My cart</span>
      </div>
    </nav>
  );
};


export default Navbar
