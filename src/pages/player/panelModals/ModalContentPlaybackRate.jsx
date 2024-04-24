import { RiSpeedUpFill, RiSlowDownFill } from "@remixicon/react"
import { motion } from "framer-motion"
import { useState } from "react"

const ModalContentPlaybackRate = ({rate, setRate, languageARate, languageBRate, setLanguageARate, setLanguageBRate}) => {
  const [mode, setMode] = useState(0)  

  

  return (
      <div className="flex flex-col justify-center items-center gap-3 text-basic-200">
        <div 
          className=" min-w-48 flex rounded-md overflow-hidden text-black"
        >
          <div
            className={`w-1/2 px-4 py-2 bg-basic-300 flex justify-center ${mode === 0 ? 'relative' : 'block'}`}
            layoutId="tab"
            onClick={() => setMode(0)}
          >
            <span className="relative z-20 text-center">Both</span>
            {mode === 0 &&
              <motion.span
                className="absolute inset-0 z-0 bg-secondary-400"
                layoutId="tab"
              ></motion.span>
            }
          </div>
          <div
            className={`w-1/2 px-4 py-2 bg-basic-300 flex justify-center ${mode === 1 ? 'relative' : 'block'}`}
            layoutId="tab"
            onClick={() => setMode(1)}
          >
            <span className="relative z-20">Specific</span>
            {mode === 1 &&
              <motion.span
                className="absolute inset-0 z-0 bg-secondary-400"
                layoutId="tab"
              ></motion.span>
            }
          </div>
        </div>
        {mode === 0 ?
        <div className="flex justify-center gap-3">
          <RiSlowDownFill className="size-10"/>
            <input type="range" min={5} max={10} value={rate * 10} onChange={(e) => setRate(e.target.value / 10)}/>
          <RiSpeedUpFill className="size-10"/>
        </div>
        :
        <div className="flex flex-col gap-2 items-center">
          <p className="font-montserrat text-light text-xl">English</p>
          <div className="flex justify-center gap-3">
            <RiSlowDownFill className="size-10"/>
              <input type="range" min={5} max={10} value={languageARate * 10} onChange={(e) => setLanguageARate(e.target.value / 10)}/>
            <RiSpeedUpFill className="size-10"/>
          </div>
          <p className="font-montserrat text-light text-xl">Spanish</p>
          <div className="flex justify-center gap-3">
            <RiSlowDownFill className="size-10"/>
              <input type="range" min={5} max={10} value={languageBRate * 10} onChange={(e) => setLanguageBRate(e.target.value / 10)}/>
            <RiSpeedUpFill className="size-10"/>
          </div>
        </div>
        
        }
      </div>
    )
}
export default ModalContentPlaybackRate