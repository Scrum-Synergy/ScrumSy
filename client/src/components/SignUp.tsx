import React, { useState } from 'react';
import axios from 'axios';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    userType: 'student', // Default user type
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/users', {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        userType: formData.userType,
        username: formData.username,
        phoneNumber: formData.phoneNumber
      });
      console.log(response.data);
      setFormData({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        userType: 'student',
        phoneNumber: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative w-96 bg-stone-900 bg-opacity-40 rounded-2xl shadow border-2 border-cyan-400 flex flex-col items-center justify-center">
      <h1 className="p-2 text-white text-4xl font-bold font-['Alegreya Sans'] shadow-sm ">Sign Up</h1>
      <div className="my-2"></div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input 
          type="text" 
          name="fullName" 
          value={formData.fullName} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Full Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Email" 
          required 
        />
        <input 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Username" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Password" 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Confirm Password" 
          required 
        />
        <input 
          type="text" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Phone Number" 
          required 
        />
        <div className=" ">
          <select 
            name="userType" 
            value={formData.userType} 
            onChange={handleChange} 
            className="w-72 h-10 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] "
            required
          >
            
            <option value="student" className=" text-xl bg-stone-900 bg-opacity-40">Student</option>
            <option value="professor" className="py-2 text-xl bg-stone-900 bg-opacity-40">Professor</option>
            <option value="parent" className=" py-2 text-xl bg-stone-900 bg-opacity-40">Parent</option>
          </select>
          <div className="flex  justify-end bg-black  pointer-events-none">
            
          </div>
        </div>
        <button 
          type="submit" 
          className="w-72 h-12 bg-gradient-to-r from-customPink to-customCyan rounded-xl shadow border-2 border-white text-white text-xl font-normal font-['Alegreya Sans'] mt-6"
        >
          Sign Up
        </button>
      </form>
      <p className="text-white text-xl font-normal font-['Alegreya Sans'] mt-4">Already have an account? <a href="#" className="text-sky-400">Login</a></p>
    </div>
  );
}

export default SignUp;
