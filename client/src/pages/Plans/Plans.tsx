import NavBar from "../../components/NavBar";
import PlanCard from "../../components/PlanCard";

const Plans = () => {
  return (
    <div
      className="background h-screen w-full bg-cover bg-no-repeat absolute"
      style={{
        backgroundImage: "url('hero3.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4">
        <NavBar />
      </div>

      <div className="">
        <PlanCard />
      </div>
    </div>
  );
};

export default Plans;
