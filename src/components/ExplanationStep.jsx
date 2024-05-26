import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Section from "./Section"

const ExplanationStep = ({step, title, content, image, active}) => {
    const imgRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: imgRef})
    const titleY = useTransform(scrollYProgress, [0, 1], [-300, 400])
    const textY = useTransform(scrollYProgress, [0, 1], [500, -650])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

    return (
        <div key={step} className={`relative flex flex-col items-center justify-center h-screen snap-center ${active ? 'opacity-100' : 'opacity-30'}`}>
            <img ref={imgRef} src={image} alt="image" className="size-[50vh] rounded-lg shadow-lg"/>
            <motion.div 
                style={{y: titleY, opacity}}
                className="absolute left-[55%] max-sm:text-2lg max-md:text-3xl text-6xl w-fit text-secondary-400 font-bold font-nunitoSans p-4 rounded-lg shadow-xl backdrop-blur-sm bg-gradient-to-r from-secondary-500/70 to-main-700/50"
            >
                <h2 className="max-w-[40vh] ">
                   {title} 
                </h2>
                
            </motion.div>
            <motion.div
                style={{y: textY, opacity}}
                className="absolute right-[55%] max-sm:text-base max-md:text-l text-xl w-fit text-main-400 font-light font-nunitoSans p-4 rounded-lg shadow-xl backdrop-blur-sm bg-gradient-to-r from-secondary-500/70 to-main-700/50"
            >
                <h2 className="max-w-[40vh] ">
                   {content} 
                </h2>
            </motion.div>
        </div>
        
    )
}

export default ExplanationStep