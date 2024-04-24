import Search from "./sections/Search"
import Filtering from "./sections/Filtering"
import { AllTitles } from "../.."
import AuroraBackground from '../../components/AuroraBackground'
import Header from "../../components/Header"
import NavBar from "../../components/NavBar"

const Audiobooks = () => {


    const bookObjectList = Object.values(AllTitles)
    return (
      <div className="flex flex-col gap-5 py-10 px-8 items-center">
        <AuroraBackground 
          activate
          className='fixed inset-0 bg-black'
        ></AuroraBackground >
        <Header>Search for book by title or author</Header>
        <Search bookObjectList={bookObjectList} />
        <Filtering bookObjectList={bookObjectList} />
        <NavBar />
      </div>
    )
}

export default Audiobooks