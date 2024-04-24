import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const TextSection = ({text_a, text_b, current_id, current_language, seek, fontSize}) => {
    const containerRef = useRef(null)

    useEffect(() => {
        console.log(fontSize)
    }, [fontSize])

    useEffect(() => {
            if (containerRef.current) {
                const itemElement = containerRef.current.children[current_id];
            if (itemElement) {
                // Scroll to the top position of the itemElement
                itemElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            
        }, [current_id, current_language]);
  return (
    <div className='flex w-full h-full'>
        <div 
            className='flex-1 flex flex-col gap-2 relative overflow-y-scroll' 
            ref={containerRef}
        >
            {text_a.map((sentence_a, index) => {
                const sentence_b = text_b[index]
                const containerStyles = (current_id === index) ? '' : ''
                const pStyles1 = ((current_id === index) && (current_language === 0)) ? 'text-main-400' : 'text-basic-100'
                const pStyles2 = ((current_id === index) && (current_language === 1)) ? 'text-main-400' : 'text-basic-100'
                return (
                    <div 
                        className={`flex relative ${containerStyles}`}
                        key={index}
                        style={{fontSize: fontSize}}
                    >
                        <p className={`w-1/2 px-3 ${pStyles1}`} onClick={() => seek(index, 0)}>
                            {sentence_a}
                        </p>
                        <p className={`w-1/2 px-3 ${pStyles2}`} onClick={() => seek(index, 1)}>
                            {sentence_b}
                        </p>

                        {current_id === index &&
                            <motion.div
                                className={`absolute bg-main-700/30 inset-0 w-1/2 h-full rounded-md ${current_language === 0 ? '' : 'left-1/2'}`}
                                layout
                                layoutId='highlight'
                            >
                            </motion.div>
                        }

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TextSection