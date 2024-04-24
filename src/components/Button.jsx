import { cva } from "class-variance-authority"
import { motion } from "framer-motion"
import cn from "../utils/cn"

const buttonVariants = cva(
    'text-center font-montserrat rounded-md text-basic-200 font-light',
    {
        variants: {
            variant: {
                default: 'bg-main-900/40 ring ring-main-500 shadow-main-600 shadow-sm',
                subtle: 'bg-main-500/10 text-main-400/80 border border-main-700',
            },
            size: {
                default: 'text-lg py-2 px-4',
                lg: 'text-2xl py-4 px-6',
                sm: 'text-sm py-1 px-3',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

const Button = ({className, children, variant, size, ...props}) => {
  return (
    <motion.button 
        className={cn(buttonVariants({ variant, size, className }))} 
        {...props}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >
        {children}
    </motion.button>
  )
}

export default Button