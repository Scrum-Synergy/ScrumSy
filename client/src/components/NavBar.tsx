import { useState } from 'react';
import SignIn from './SignIn';

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="h-[83px] w-full px-8">
      <div className="h-[83px] w-full bg-stone-900 bg-opacity-40 rounded-[28px] flex justify-between items-center p-4">
        <a href='/' className="mr-12 ml-4 text-white text-4xl kodchasan-bold-italic">ReviPro</a>
        <div className='flex gap-16'>
          <div className='gap-3  justify-around p-4 hidden md:flex'>
            <a href='/' className="m-auto text-white text-[25px] kodchasan-semibold-italic">HOME</a>
            <img src="icons/line.svg" width={40} alt="" />

            <a href='#about' className="m-auto text-white text-[25px] kodchasan-semibold-italic">ABOUT</a>
            <img src="icons/line.svg" width={40} alt="" />

            <a href='/plans' className="m-auto text-white text-[25px] kodchasan-semibold-italic">PLANS</a>
          </div>
          <div className='flex justify-center items-center gap-6 p-2'>
            <button onClick={toggleSignUp} className=' hidden sm:flex justify-center items-center rounded-[27px] bg-gradient-to-r from-blue-600 to-customCyan w-36 h-14 font-["Advent Pro"] text-white text-2xl'>
              Login <img className='m-2' src="icons/user.svg" width={35} alt="" />
            </button>
            <div className='absolute top-[120px] right-10 '>{showSignUp && <SignIn />}</div>

            <a className='mr-3' href="/">
              <img src="icons/menu.svg" width={50} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
