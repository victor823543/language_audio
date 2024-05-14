import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cva } from 'class-variance-authority'
import cn from '../utils/cn'

const headerVariants = cva(
    'text-center font-montserrat',
    {
        variants: {
            variant: {
                default: 'text-main-400',
                bold: 'text-basic-200 font-bold',
            },
            size: {
                default: 'text-xl xs:text-2xl md:text-3xl lg:text-4xl',
                lg: 'text-2xl md:text-3xl: lg:text-5xl xl:text-7xl',
                sm: 'text-xl',
            },
            textShadow: {
                none: '',
                sm: 'text-shadow-sm shadow-main-600',
                md: 'text-shadow shadow-main-600',
                lg: 'text-shadow-lg shadow-main-600',
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            textShadow: 'none',
        },
    }
)

const shadowAnimations = {
    initial: {color: '#020617', opacity: 0, top: -20},
    whileInView: {color: '#fbbf24', opacity: 1, top: 0}
}

const Header = ({className, variant, size, textShadow, bgBlur, children, ...props}) => {

    return (
        <div className={`z-20 ${bgBlur && 'backdrop-blur-md'}`}>
            <motion.h1
                className={headerVariants({variant, size, textShadow, className})}
                {...props}
                initial={textShadow ? shadowAnimations.initial : {opacity: 0, top: -20}}
                whileInView={textShadow ? shadowAnimations.whileInView : {opacity: 1, top: 0}}
                viewport={{once: true}}
                transition={{delay: 0.5, duration: 1}}
            >
                {children}
            </motion.h1>
            <motion.div
                className='h-1 border-t border-main-600 mt-2'
                initial={{width: '0%'}}
                whileInView={{width: '100%'}}
                viewport={{once: true}}
                transition={{delay: 0.75, duration: 1}}
            ></motion.div>
        </div>
        
    )
}

export default Header