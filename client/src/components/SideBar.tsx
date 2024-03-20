import React from 'react';
import { FaHome, FaBook, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Logo from '/ReviPro.svg';
import { IoMdMenu } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SideBar: React.FC = () => {
  const navigate = useNavigate();

  async function signOut() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/auth/signout`);
      if (response.status === 200) {
        // Redirect to the home page after successful sign-out
        navigate('/');
        console.log("Sign-out successful");
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  return (
    <div className="hidden sm:flex sm:w-16 md:w-72 bg-gradient-to-t from-customPink to-customCyan flex-col justify-between h-screen p-4" >
      <div className="flex flex-col mx-auto ">
        <img src={Logo} alt="Logo" className="w-24 h-24 hidden md:flex" />
        <a href="#"className="pt-4 text-white text-xl flex items-center mb-6 hover:text-blue-300">
          <IoMdMenu className="mr-2 text-2xl" /> <span className="hidden md:flex align-middle">Menu</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300">
          <FaHome className="mr-2" /> <span className="hidden md:flex  align-middle">Dashboard</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300">
          <FaBook className="mr-2" /> <span className="hidden md:flex align-middle">Courses</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300">
          <FaUser className="mr-2" /> <span className="hidden md:flex align-middle">Profile</span>
        </a>
        <a href="#" className="text-white text-xl flex items-center mb-6 hover:text-blue-300">
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
