
import AISvg from "../assets/icons/AISvg"
import ScissorSvg from "../assets/icons/ScissorSvg"
import TranslationSvg from "../assets/icons/TranslationSvg"
import AlgorithmSvg from "../assets/icons/AlgorithmSvg"
import AudiobookSvg from "../assets/icons/AudiobookSvg"
import TextSvg from '../assets/icons/TextSvg'




const ExplanationImages = ({id, color}) => {

    if (id == 1) {

        return (
            <AISvg color={color}/>
        )
    }
    if (id == 2) {
        return (
            <div className=" w-52 flex flex-col items-center">
                <TextSvg color={color}/>
                <ScissorSvg color={color}/> 
            </div>
        )
    }
    if (id == 3) {
        return (
            <div className="w-52 flex flex-col gap-6 items-center">
                <TranslationSvg color={color}/>
                <AlgorithmSvg color={color}/>
            </div>
        )
    }
    if (id == 4) {
        return (
            <AudiobookSvg color={color}/>
        )
    }
    if (id == 5) {
        return (
            <AudiobookSvg color={color}/>
        )
    }
}

export default ExplanationImages