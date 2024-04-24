import WaveBackground from "../../../components/WaveBackground"
import { motion } from "framer-motion"

const TopSection = () => {
  return (
    <WaveBackground 
        className="max-w-4xl mx-auto pb-40"
        colors={["#942c15", "#c88613", "#9c6a0d", "#724e05", "#cf380e"]}
        backgroundFill={'black'}
    >
        <motion.p 
            className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            Learn <span className="text-main-600 font-elegant text-4xl md:text-6xl lg:text-9xl mx-3">language</span> <br /> by listening
        </motion.p>
        <motion.p 
            className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center font-nunitoSans"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}}
        >
            Improve at a language of your choice while enjoying an audiobook
        </motion.p>
        <motion.p
            className="relative top-2/3 text-center text-basic-100/70 text-sm font-montserrat font-lextralight"
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.75, delay: 3}}
        >
            Scroll to explore
        </motion.p>
    </WaveBackground>
  )
}

export default TopSection