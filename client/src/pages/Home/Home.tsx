import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";


const getStarted = () => {
  //show sign up component
}



const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('hero2.jpg')", filter: "brightness(0.9) blur(3px)"}}></div>
        <div className="p-4 relative z-10"><NavBar /></div>
        <div className="md:mt-8 mt-10 ml-12 md:ml-20 relative z-0">
          <img className="sm:w-[400px] md:w-[650px] w-64" src="ReviPro.svg" alt="" />
          <div className="justify-between">
            <p className="py-4 w-64 md:w-[450px] text-white font-sans kodchasan-semibold-italic text-xl sm:text-2xl md:text-3xl ">
              Maximizing Learning, Minimizing Stress
            </p>
            <button onClick={getStarted} className="w-36 sm:w-44 md:w-56 md:h-12 h-10 bg-gradient-to-r from-blue-600 to-customCyan rounded-[50px] border-spacing-8 border-2 text-white text-base md:text-xl kodchasan-semibold md:mt-6 mt-2" style={{}}>
              Get Started
            </button>
          </div>
        </div>
        <div id="about" className="h-[100%] mt-[229px] w-[100%] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('her.jpg')"}}></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
