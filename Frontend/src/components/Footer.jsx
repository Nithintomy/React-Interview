import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-200 py-6 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-sm">Best information about the company goes here but now lorem ipsum is below this</p>
         
        </div>
        <div className="flex flex-row text-black justify-between">
        <ul className="text-sm mr-8">
            <li><a className="text-black font-bold hover:text-black">About</a></li>
            <li><a className="text-gray-600 hover:text-black">About Us</a></li>
            <li><a className="text-gray-600 hover:text-black">Find store</a></li>
            <li><a className="text-gray-600 hover:text-black">Categories</a></li>
            <li><a className="text-gray-600 hover:text-black">Blogs</a></li>
          </ul>
          <ul className="text-sm mr-8">
            <li><a className="text-black font-bold hover:text-black">Partnership</a></li>
            <li><a className="text-gray-600 hover:text-black">About Us</a></li>
            <li><a className="text-gray-600 hover:text-black">Find store</a></li>
            <li><a className="text-gray-600 hover:text-black">Categories</a></li>
            <li><a className="text-gray-600 hover:text-black">Blogs</a></li>
          </ul>
          <ul className="text-sm mr-8">
            <li><a className="text-black font-bold hover:text-black">Information</a></li>
            <li><a className="text-gray-600 hover:text-black">About Us</a></li>
            <li><a className="text-gray-600 hover:text-black">Find store</a></li>
            <li><a className="text-gray-600 hover:text-black">Categories</a></li>
            <li><a className="text-gray-600 hover:text-black">Blogs</a></li>
          </ul>
          <ul className="text-sm mr-8">
            <li><a className="text-black font-bold hover:text-black">For Users</a></li>
            <li><a className="text-gray-600 hover:text-black">About Us</a></li>
            <li><a className="text-gray-600 hover:text-black">Find store</a></li>
            <li><a className="text-gray-600 hover:text-black">Categories</a></li>
            <li><a className="text-gray-600 hover:text-black">Blogs</a></li>
          </ul>
        </div>
        <div className=" text-black ">
          <p className="text-sm mb-5">Get app</p>
          <button className='w-full p-2 bg-black text-white h-12'>App store</button>
          <button  className='w-full p-2 bg-black text-white h-12 mt-2'>Google Play</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
