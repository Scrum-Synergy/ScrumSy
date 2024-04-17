import React from 'react';
import { FaHome, FaBook, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

import { IoMdMenu } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type Props = {
  handleTabChange: (tab: string) => void;
};

const SideBar: React.FC<Props> = ({ handleTabChange }) => {
  const navigate = useNavigate();

  async function signOut() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/auth/signout`);
      if (response.status === 200) {
        toast.success('Sign Out successful!');
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Redirect to the home page after successful sign-out
        navigate('/');
        console.log("Sign-out successful");
      }
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Sign Out failed.');
    }
  }

  return (
    <div className="hidden sm:flex sm:w-16 md:w-72 bg-[#211951] flex-col justify-between h-screen p-4" >
      <div className="flex flex-col mx-auto ">
      <a href='/' className=" text-white text-4xl kodchasan-bold-italic w-24 h-24 hidden md:flex">ReviPro</a>
        <a href="#" className="pt-4 text-white text-xl flex items-center mb-6 hover:text-blue-300" onClick={() => handleTabChange('Menu')}>
          <IoMdMenu className="mr-2 text-2xl" /> <span className="hidden md:flex align-middle">Menu</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300" onClick={() => handleTabChange('Dashboard')}>
          <FaHome className="mr-2" /> <span className="hidden md:flex  align-middle">Dashboard</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300" onClick={() => handleTabChange('Courses')}>
          <FaBook className="mr-2" /> <span className="hidden md:flex align-middle">Plan Form</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300" onClick={() => handleTabChange('Profile')}>
          <FaUser className="mr-2" /> <span className="hidden md:flex align-middle">Profile</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300" onClick={() => handleTabChange('Settings')}>
          <FaCog className="mr-2" /> <span className="hidden md:flex align-middle">Settings</span>
        </a>
      </div>
      <div className="flex items-center  pb-6 mr-3">
        <a href="#" onClick={signOut} className="text-white text-xl flex items-center hover:text-blue-300  mx-auto">
          <FaSignOutAlt className="mr-2" /> <span className="hidden md:flex align-middle" >Sign Out</span>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
