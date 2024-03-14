import NavBar from "../../components/NavBar"
import PlanCard from "../../components/PlanCard"

const Plans = () => {
  return (
    <div className="background h-[100vh] w-[100%] bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('hero.jpg')",
      position: "absolute",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}>
    <NavBar / >
      
    <div className="flex justify-center items-center p-4">
      <PlanCard />
    </div>
    </div>
  )
}

export default Plans;