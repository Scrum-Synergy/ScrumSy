import NavBar from "../../components/NavBar";

const getStarted = () => {
  console.log('Get Started')
}

const Home = () => {
  return (
    <>
      <div
        className=" bg-black w-full h-[108vh] "
        style={{
          backgroundImage: "url('hero.jpg')",
          position: "absolute",
          backgroundSize: "cover",
         
          backgroundPosition: " center",
        }}
      >
        <div className="flex justify-center mt-4 "><NavBar /></div>
        

        <div className="mt-36 ml-36">
          <img className="" src="ReviPro.svg" alt="" />
          <div className="justify-between">
          <p className="py-4 w-[450px] text-white font-sans kodchasan-semibold-italic text-3xl ">
          Maximizing Learning, Minimizing Stress
          </p>
          <button onClick={getStarted} className="w-56 h-12 bg-gradient-to-r from-blue-600 to-customCyan rounded-[50px] border-spacing-8 border-2 text-white text-xl kodchasan-semibold mt-6" style={{}}>
            Get Started
          </button>
          
          
          </div>
         
        </div>
        <div className=" mt-60 background h-[100vh] w-[100%] bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('Abstract.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }} >
          
        </div >
        


          
      </div>
    </>
  );
};

export default Home;
