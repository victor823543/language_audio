import ExplanationStep from "../../../components/ExplanationStep"
import Header from "../../../components/Header"
import { motion, useTransform, useScroll, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"
import ExplanationImages from "../../../components/ExplanationImages"


const data = [
    {
        title: 'Transcribed with AI',
        content: 'Using advanced Large Language Models, audiobooks in different languages is transcribed, returning timestamps for each words.'
    },
    {
        title: 'Splitting text',
        content: 'The text to each audiobook is split into sentences based of a vast number of criteria specific for each language.'
    },
    {
        title: 'Aligning sentences using algorithms',
        content: 'The sentences are translated into the same language, before they are compared using various methods for measuring string similarity. Using complex algorithms the sentences of each language are then aligned.'
    },
    {
        title: 'Aligning audio to text',
        content: 'Each audiotranscription is compared to the now completely matching text sentences and a list of timestamps for each sentence corresponding the text sentences is created.'
    },
    {
        title: 'Mixing audiofiles',
        content: 'Based of the timestamps, the audiofiles are automatically split into parts, before they are put together with the same sentence in both languages.'
    }
]

const Explaining = () => {
    const ref = useRef(null)
    const [activePart, setActivePart] = useState(0)
    const { scrollYProgress } = useScroll({target: ref})
    const y = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"])
    const color = useTransform(scrollYProgress, [0, 1], ['#f59e0b', '#38bdf8'])
    const background = useTransform(scrollYProgress, [0, 0.5, 1], [
        "linear-gradient(180deg, #000000 0%, #0f172a 100%)",
        "linear-gradient(180deg, #78350f 0%, #0c4a6e 100%)",
        "linear-gradient(180deg, #082f49 0%, #020617 100%)"
      ]);

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const activeIndex = Math.ceil(latest * 5) - 1
        setActivePart(activeIndex)
       
    })

    return (
        <div ref={ref} className={`relativ h-[200vh] w-full`}>
            <motion.div 
                style={{background}}
                className={`sticky top-0 flex flex-col pb-12 gap-4 items-center bg-black h-screen overflow-y-hidden`}
            >
                <div className="pt-6 backdrop-blur-md z-10">
                    <Header
                        size='lg'
                        textShadow='md'
                    >
                        FULLY AUTOMATED PRODUCTION
                    </Header>
                </div>
                <motion.div className="flex flex-row w-full h-fit">
                    <motion.div
                        style={{y}}
                        className="w-1/2 mt-14 flex flex-col items-center"
                    >
                        {data.map((object, index) => 
                            <ExplanationStep 
                                step={index + 1}
                                title={object.title}
                                content={object.content}
                                active={index === activePart ? true : false}
                            />
                        )}
                    </motion.div>
                    <div className="w-1/2 h-[80vh] flex flex-col justify-center items-center">
                        <motion.div
                        
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                        >
                            <ExplanationImages id={activePart + 1} color={color}/>
                        </motion.div>
                    </div>     
                </motion.div>
                
                
                
            </motion.div>
        </div>
    )
}

export default Explaining