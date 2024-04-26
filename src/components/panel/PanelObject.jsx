import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

const PanelObject = ({Icon, ModalContent}) => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div
        className='relative '
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
    >
        <div className='px-1 py-2 bg-main-500/40 rounded-md'
            
        >
            <Icon className="size-12 fill-basic-200"/>

        </div>
        <AnimatePresence>
            {isOpen &&
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    style={{ translateX: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-1/2 top-12 bg-basic-700 p-5 rounded-md z-20 w-auto max-sm:scale-90 max-xs:scale-75"
                >
                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                    <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-basic-700" />
                    {ModalContent}
                </motion.div>
            }    
        </AnimatePresence>
        
    </div>
    
  )
}

export default PanelObject