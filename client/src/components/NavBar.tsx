
const NavBar = () => {
  return (
    <div className=" h-[83px] relative m-auto">
      <div className=" w-full h-[83px] left-0 top-0 absolute bg-stone-900 bg-opacity-40 rounded-b-[28px] flex justify-between items-center px-4">
        <a href='/' className="text-white text-4xl font-Kodchasan font-bold italic  ">ReviPro</a>
        <div className='flex  gap-16  '>
        <div className='gap-5  hidden md:flex justify-around p-4 '>
          <a href='/' className="m-auto text-white text-2xl font-Kodchasan font-bold italic">HOME</a>
          <img src="icons/line.svg" width={40} alt="" />

          <a href='/' className="m-auto text-white text-2xl font-Kodchasan font-bold italic">ABOUT</a>
          <img src="icons/line.svg" width={40} alt="" />

          <a href='/' className="m-auto text-white text-2xl font-Kodchasan font-bold italic">COURSE</a>
        </div>
        <div className='flex justify-center items-center gap-6 p-2'>
          <button className='flex justify-center items-center rounded-[27px] bg-zinc-300 bg-opacity-40 w-36 h-14 font-["Advent Pro"] text-white font-semibold text-2xl'>
            Login <img className='m-2' src="icons/user.svg" width={35} alt="" />
          </button>
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
