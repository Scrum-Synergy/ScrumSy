import NavBar from "../../components/NavBar";

const Home = () => {
  return (
    <>
      <div
        className="background h-[100vh] w-[100%] bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('hero.jpg')",
          position: "absolute",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        <NavBar />
      </div>
    </>
  );
};

export default Home;
