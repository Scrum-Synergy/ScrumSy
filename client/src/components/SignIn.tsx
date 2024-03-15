import React, { useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp'; 

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  // State to control which component is being displayed
  const [showSignUp, setShowSignUp] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      
        // Koussay 🌹 , 
          // Avoid putting a const link because it will affect “git pull” in the future and it is difficult to change it in all files. 
          // It is always recommended to put the (server/localhost) variable in the env file.

          // Add ( ' https://scrum-sy-api.vercel.app ' ) in env file . . .
          // use -  process.env.VITE_SERVER
          
      const response = await axios.post('https://scrum-sy-api.vercel.app/api/users/signin', {
        email: formData.email,
        password: formData.password
      });
      console.log(response.data);
  
      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Function to toggle between SignIn and SignUp components
  const toggleSignUp = () => {
    setShowSignUp(prevState => !prevState);
  };

  // If showSignUp is true, render SignUp component
  if (showSignUp) {
    return <SignUp />;
  }

  // Otherwise, render SignIn component
  return (
    <div className="relative w-96 h-[560px] bg-stone-900 bg-opacity-40 rounded-2xl shadow border-2 border-cyan-400 flex flex-col items-center justify-center">
      <h1 className="p-2 text-white text-4xl font-bold font-['Alegreya Sans'] shadow-sm ">Sign In</h1>
      <div className="my-2"></div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-72 h-10 rounded-lg shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-lg font-normal font-['Alegreya Sans'] placeholder-white p-2 mb-2" 
          placeholder="Password" 
          required 
        />
        <button 
          type="submit" 
          className="w-72 h-12 bg-gradient-to-r from-customPink to-customCyan rounded-xl shadow border-2 border-white text-white text-xl font-normal font-['Alegreya Sans'] mt-6"
        >
          Sign In
        </button>
      </form>
      <p className="text-white text-xl font-normal font-['Alegreya Sans'] mt-4">Don't have an account? <button onClick={toggleSignUp} className="text-sky-400">Sign Up</button></p>
    </div>
  );
}

export default SignIn;
