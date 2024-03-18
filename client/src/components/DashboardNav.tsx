import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineMenu } from "react-icons/hi";


const DashboardNav: React.FC = () => {
  return (
    <div className="w-full h-[75px] flex text-white justify-between text-2xl p-4 bg-customPink items-center">
        <a href="#"className="text-white text-xl flex items-center sm:hidden  hover:text-blue-300  ">
        <HiOutlineMenu  className="mr-2 text-2xl" /> <span className="hidden md:flex align-middle">Menu</span>
        </a>

        <AiOutlineSearch className='text-2xl sm:hidden flex' />
        <input type="text" className="m-auto ml-5 p-2 rounded-3xl text-lg text-black placeholder-gray-400 sm:flex hidden" placeholder="Search..." />

      
      <div className="ml-auto flex items-center gap-28">
        <div className='flex'>
        <div className="mx-3 ">
          <IoMdMail />
        </div>
        <div className="mr-3">
          <FaBell />
        </div>
        </div>
    
    
          <img src="/user.webp" alt="User" width={45} className=" rounded-full" />
        </div>
        <div className="w-28 mx-3  overflow-clip   ">
          <p className="text-lg ">Username</p>
          <p className="text-xs">Role</p>
      </div>
    </div>
  );
};

export default DashboardNav;
