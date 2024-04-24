import { useState } from "react"
import NavBarButton from "./NavBarButton"
import { useNavigate } from "react-router-dom"

const NavBar = ({className, inverted, invertedHover}) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleLinkClick = (path) => {
        navigate(path)
        setOpen(false)
        
    }

  return (
    <>
        <div className="fixed top-3 right-3 z-50">
            <NavBarButton active={open} setActive={setOpen} className={className} inverted={inverted} invertedHover={invertedHover}/>
        </div>
        {open &&
            <div 
                className="fixed inset-0 bg-cover bg-gradient-to-bl from-slate-950/90 to-secondary-800/90 z-40 flex flex-col items-center justify-center"
            >
                <div className="flex flex-col items-center gap-6 text-4xl font-montserrat text-basic-200">
                    <div className="hover:text-main-500 hover:font-bold" onClick={() => handleLinkClick('/')}>
                        HOMEPAGE
                    </div>
                    <div className="hover:text-main-500 hover:font-bold" onClick={() => handleLinkClick('/audiobooks')}>
                        SEARCH
                    </div>
                    <div className="hover:text-main-500 hover:font-bold" onClick={() => handleLinkClick('/player/1')}>
                        RANDOM LISTEN
                    </div>
                </div>
            </div>
        }
    </>
    
  )
}

export default NavBar