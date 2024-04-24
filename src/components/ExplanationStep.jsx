import { motion } from "framer-motion"
import Section from "./Section"

const ExplanationStep = ({step, title, content, active}) => {


    return (
        <div key={step} className={`flex flex-col items-center py-14 ${active ? 'opacity-100' : 'opacity-30'}`}>
            <h2 className="text-6xl font-bold text-white mb-28">{step}</h2>
            <Section
                variant='box'
                className='p-10 w-[600px]'
            >
                <h3
                    className="text-2xl text-secondary-400 font-nunitoSans"
                >{title}</h3>
                <p
                    className="text-lg text-main-300/70 font-nunitoSans"
                >{content}</p>
            </Section>
        </div>
        
    )
}

export default ExplanationStep