import { motion, useAnimate, stagger, useInView } from "framer-motion"
import { useEffect } from "react"
import cn from "../utils/cn"

const GeneratedText = ({text, className, colorTheme}) => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {once: true})
    const words = text.split(' ')

    useEffect(() => {
        if (isInView) {
            animate(
                "span",
                {
                opacity: 1,
                },
                {
                duration: 2,
                delay: stagger(0.2),
                }
            )  
        }
        
    }, [isInView])

    const renderWords = () => {
        return (
          <motion.div ref={scope}>
            {words.map((word, index) => {
              return (
                <motion.span
                  key={word + index}
                  className='opacity-0'
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          </motion.div>
        );
      };

    return (
        <div className="text-main-300/70">
            <div 
              className={cn("text-4xl font-montserrat text-shadow shadow-main-500 leading-snug tracking-wide", className)}
              style={{color: colorTheme === 'secondary' && '#38bdf8', textShadow: `0 2px 4px ${colorTheme === 'secondary' && '#0ea5e9'}`}}
            >
              {renderWords()}
            </div>
        </div>
    )
}

export default GeneratedText