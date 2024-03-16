import NavBar from "../../components/NavBar"
import PlanCard from "../../components/PlanCard"

const Plans = () => {
  return (
    <div className="background h-[100vh] w-[100%] bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('hero3.jpg')",
      position: "absolute",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}>
      <div className="flex justify-center mt-4"><NavBar / ></div>
    
      
    <div className="mt-24 flex justify-center items-center p-4">
      <PlanCard />
    </div>
    </div>
  )
}

export default Plans;