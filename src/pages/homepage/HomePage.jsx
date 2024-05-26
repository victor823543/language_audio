import TopSection from "./sections/TopSection"
import DisplayTitles from "./sections/DisplayTitles"
import Explaining from "./sections/Explaining"
import UserExperience from "./sections/UserExperience"
import NavBar from "../../components/NavBar"

const HomePage = () => {
  return (
    <div className="snap-y snap-mandatory">
      <NavBar />
      <TopSection />
      <DisplayTitles />
      <Explaining />
      <UserExperience />
    </div>
  )
}

export default HomePage