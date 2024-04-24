import cn from "../utils/cn"
import { cva } from 'class-variance-authority'


const sectionVariants = cva(
    'p-4 relative',
    {
        variants: {
            variant: {
                default: 'py-10 px-6',
                box: 'rounded-md shadow-md shadow-main-300/50 border border-main-800',
                neonBorder: 'p-6 border-2 border-secondary-600 shadow-md shadow-secondary-400/60 rounded-lg',
            },
            color: {
                default: 'bg-gradient-to-br from-secondary-950 to-main-900',
                gradient: 'bg-gradient-to-b from-black via-main-700/70 to-black',
                transparent: 'bg-transparent'
            },
        },
        defaultVariants: {
            variant: 'default',
            color: 'default',
        },
    }
)

const Section = ({className, children, variant, color, neonGradient}) => {
    
  return (
    <section className={cn(sectionVariants({ variant, color, className}))}
        style={neonGradient && 
            {   
                borderImage: 'linear-gradient(to top right, #0284c7, #d97706) 1',
            }}
    >
        {children}
        {color === 'gradient' &&
            <div className="absolute bg-black w-full h-full inset-0 -z-50"></div>
        }
    </section>
  )
}

export default Section