import { useState } from "react"
import { genres, AllTitles } from "../../.."
import Header from "../../../components/Header"
import Divider from "../../../components/Divider"
import AudiobookDisplay from "../../../components/AudiobookDisplay"
import { useNavigate } from "react-router-dom"

const Filtering = ({bookObjectList}) => {
    const navigate = useNavigate()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [filteredTitles, setFilteredTitles] = useState([])

    const handleGenreClick = (genre) => {
        let newSelectedGenres = selectedGenres
        if (newSelectedGenres.includes(genre)) {
            newSelectedGenres = newSelectedGenres.filter(selectedGenre => selectedGenre !== genre)
        } else {
            newSelectedGenres.push(genre)
        }
        
        setSelectedGenres(newSelectedGenres)

        const filtered = bookObjectList.filter(object => {
            return object.genres.some(genre => 
                newSelectedGenres.some(selectedGenre =>
                    genre.toLowerCase().includes(selectedGenre.toLowerCase())))
        })
        setFilteredTitles(filtered)

    }

    return (
        <div className="flex flex-col gap-5 px-2 xs:px-8 sm:px-12 md:px-16 lg:px-20 items-center z-10">
            <Header>
                Filter by genre
            </Header>
            <div className="flex flex-wrap justify-center gap-2 xs:gap-3 w-2/3">
                {genres.map((genre, index) =>
                    <div 
                        key={genre}
                        onClick={() => handleGenreClick(genre)}
                        className={`p-2 xs:py-4 xs:px-2 text-sm sm:text-base rounded-3xl ${selectedGenres.includes(genre) ? 'bg-secondary-300 hover:bg-secondary-400' : 'bg-basic-300 hover:bg-main-300'} border-2 border-main-600 text-black font-montserrat`}
                    >
                        {genre}
                    </div>
                )}
            </div>
            <Divider />
            <div className="flex flex-wrap justify-center gap-10">
                {filteredTitles.map((title) =>
                    <div 
                        key={title.id}
                        className="border border-main-600 hover:bg-main-500/40 hover:scale-105 transition-all"
                        onClick={() => navigate(`/player/${title.id}`)}
                    >
                        <AudiobookDisplay item={title}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Filtering