import { motion } from "framer-motion"
import Section from "./Section"

const ExplanationStep = ({step, title, content, active}) => {


    return (
        <div key={step} className={`flex flex-col items-center py-14 ${active ? 'opacity-100' : 'opacity-30'}`}>
            <h2 className="text-6xl font-bold text-white mb-28">{step}</h2>
            <Section
                variant='box'
                className='sm:p-4 md:p-6 lg:p-10 w-[200px] md:w-[300px] lg:w-[500px] xl:w-[600px]'
            >
                <h3
                    className="max-sm:text-lg max-md:text-xl text-2xl text-secondary-400 font-nunitoSans"
                >{title}</h3>
                <p
                    className="max-md:text-base text-lg text-main-300/70 font-nunitoSans"
                >{content}</p>
            </Section>
        </div>
        
    )
}

export default ExplanationStep