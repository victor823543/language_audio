import Section from "../../../components/Section"
import { AllTitles } from "../../.."
import ItemSlider from "../../../components/ItemSlider"
import { useNavigate } from "react-router-dom"
import Button from "../../../components/Button"
import GeneratedText from "../../../components/GeneratedText"
import Divider from "../../../components/Divider"

const DisplayTitles = () => {
    const navigate = useNavigate()

    const handleClick = (id) => navigate(`/player/${id}`)

  return (
    <div className="bg-black flex flex-col items-center">
        <Divider className='mb-20'/>
        <div className="w-full flex justify-center py-6 px-10">
            <GeneratedText 
                text='Explore an abundance of listens for all tastes'
                className=''
            />
        </div>

        <Section 
            color='gradient'
        >
            <ItemSlider 
                items={Object.values(AllTitles)}
                onClick={handleClick}
                speed="slow"
            />
        </Section> 

        <div className="flex justify-center py-6 px-3">
            <Button
                onClick={() => navigate('/audiobooks')}
                size={'lg'}
                variant='subtle'
            >
                BROWSE ALL TITLES
            </Button>
        </div>
        <Divider className='my-20'/>
    </div>
    
  )
}

export default DisplayTitles