
import AISvg from "../assets/icons/AISvg"
import ScissorSvg from "../assets/icons/ScissorSvg"
import TranslationSvg from "../assets/icons/TranslationSvg"
import AlgorithmSvg from "../assets/icons/AlgorithmSvg"
import AudiobookSvg from "../assets/icons/AudiobookSvg"
import TextSvg from '../assets/icons/TextSvg'




const ExplanationImages = ({id, color}) => {

    if (id == 1) {

        return (
            <AISvg className={'w-20 sm:w-28 md:w-44 lg:w-52'} color={color}/>
        )
    }
    if (id == 2) {
        return (
            <div className=" w-20 sm:w-28 md:w-44 lg:w-52 flex flex-col items-center">
                <TextSvg color={color}/>
                <ScissorSvg color={color}/> 
            </div>
        )
    }
    if (id == 3) {
        return (
            <div className="w-20 sm:w-28 md:w-44 lg:w-52 flex flex-col md:gap-6 items-center">
                <TranslationSvg color={color}/>
                <AlgorithmSvg className='w-full' color={color}/>
            </div>
        )
    }
    if (id == 4) {
        return (
            <AudiobookSvg className='w-20 sm:w-28 md:w-44 lg:w-52' color={color}/>
        )
    }
    if (id == 5) {
        return (
            <AudiobookSvg className='w-20 sm:w-28 md:w-44 lg:w-52' color={color}/>
        )
    }
}

export default ExplanationImages