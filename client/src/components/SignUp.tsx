import React from 'react';

const SignUp: React.FC = () => {
  return (
    <div className=" relative w-96 p-4 bg-stone-900 bg-opacity-40 rounded-2xl shadow border-2 border-cyan-400 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold font-['Advent Pro']">Sign up</h1>
      <div className="my-4">
      </div>
      <input type="text" className="w-72 h-12 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] placeholder-white  p-4" placeholder="Full Name" />
      <input type="email" className="w-72 h-12 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] mt-4 placeholder-white  p-4" placeholder="Email" />
      <input type="text" className="w-72 h-12 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] mt-4 placeholder-white  p-4" placeholder="Username" />
      <input type="password" className="w-72 h-12 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] mt-4 placeholder-white  p-4" placeholder="Password" />
      <input type="password" className="w-72 h-12 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] mt-4 placeholder-white  p-4" placeholder="Confirm Password" />
      <div className=" relative ">
        <select className="w-72 h-12 rounded-xl shadow border-2 border-white bg-gradient-to-r from-pink-600 to-cyan-600 text-white text-xl font-normal font-['Alegreya Sans'] mt-4 appearance-none ">
          <option value="student" className="py-4 text-xl bg-stone-900 bg-opacity-40">Student</option>
          <option value="professor" className="py-2 text-xl bg-stone-900 bg-opacity-40">Professor</option>
          <option value="parent" className=" py-2 text-xl bg-stone-900 bg-opacity-40">Parent</option>
        </select>
        <div className="absolute inset-y-11 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L4 6h12z"/></svg>
        </div>
      </div>
      <button className="w-72 h-12 bg-gradient-to-r from-customPink to-customCyan rounded-xl shadow border-2 border-white text-white text-xl font-normal font-['Alegreya Sans'] mt-6">Sign Up</button>
      <p className="text-white text-xl font-normal font-['Alegreya Sans'] mt-4">Already have an account? <a href="#" className="text-sky-400">Login</a></p>
    </div>
  );
}

export default SignUp;
