import { RiPlayCircleFill, RiPauseCircleFill, RiReplay30Fill, RiForward30Fill, RiSettings4Fill } from "@remixicon/react"
import ProgressBar from "../../../components/ProgressBar"
import { useState, useRef, useEffect } from 'react'
import Tabs from "../../../components/Tabs"
import { motion } from "framer-motion"
import ModalContentLanguage from "../panelModals/ModalContentLanguage"
import ModalContentPlaybackRate from "../panelModals/ModalContentPlaybackRate"
import ModalContentText from "../panelModals/ModalContentText"
import ModalContentVolume from "../panelModals/ModalContentVolume"

const PlayerSection = ({children, playing, cover, playPause, rewind, forward, progress, name, showText, setShowText, panel}) => {
 const extrasRef = useRef(null);
 const secondaryRef = useRef(null)
 const containerRef = useRef(null)
 const [size, setSize] = useState(0)
 const [showPanel, setShowPanel] = useState(false)

 // Function to update the dimensions state when the component mounts or when the window resizes
 const updateDimensions = () => {
    if (secondaryRef.current && containerRef.current) {
        let height = secondaryRef.current.clientHeight
        if (extrasRef.current) {
            height += extrasRef.current.clientHeight
        }
        const containerHeight = containerRef.current.clientHeight
        setSize(containerHeight - height)
    }
 };

 // Call updateDimensions when the component mounts and when the window resizes
 useEffect(() => {
   updateDimensions();
   window.addEventListener('resize', updateDimensions);
   return () => {
     window.removeEventListener('resize', updateDimensions);
   };
 }, []);

  return (
    <div className="h-full w-full flex flex-col max-lg:justify-center" ref={containerRef}>
        <div ref={extrasRef}>
        {panel && 
            <motion.div 
                className={`z-30 w-full flex flex-col justify-center items-center mb-2 ${showPanel ? 'absolute inset-0 bg-cover bg-basic-900/90' : ''}`}
                layout
            >
                <motion.div onClick={() => setShowPanel(!showPanel)} className=" rounded-lg bg-basic-200/60" layout>
                    <RiSettings4Fill className=" size-12"/> 
                </motion.div>

                {showPanel &&
                    <div className="w-full flex flex-col items-center justify-center gap-2 mb-2">
                        <ModalContentText 
                            handleSubtract={() => panel.setFontSize(prev => prev - 1)}
                            handleAdd={() => panel.setFontSize(prev => prev + 1)}
                        />
                        <ModalContentLanguage info={panel.audiobookInfo}/>
                        <ModalContentVolume volume={panel.volume} setVolume={panel.setVolume}/>
                        <ModalContentPlaybackRate 
                            rate={panel.playbackRate} 
                            setRate={panel.handleSetPlaybackRate}
                            languageARate={panel.languageARate}
                            languageBRate={panel.languageBRate}
                            setLanguageARate={panel.setLanguageARate}
                            setLanguageBRate={panel.setLanguageBRate}
                        />
                    </div>
                }
                
            </motion.div>
        }
        {false &&
            <div className="w-full flex justify-center gap-2 mb-2">
                {panel}
            </div>
        }
        {
            <div className="lg:hidden w-full flex justify-center mb-2">
                <Tabs 
                    tabs={[{id: 0, label: 'Cover'}, {id: 1, label: 'Text'}]}
                    activeTab={showText ? 1 : 0}
                    setActiveTab={setShowText}
                />
            </div>
        }
        </div>
        
        {showText ?
        
            <div className="overflow-hidden mt-3 mb-5">
                {children}
            </div>
            
        :
            <div className='flex gap-2 justify-center xs:flex-grow'>
                    <img src={cover} alt="bookcover" className='object-fill rounded-lg shadow-lg max-xs:hidden' style={{height: size, width: size}} />
                    <img src={cover} alt="bookcover" className='object-fill rounded-lg shadow-lg xs:hidden w-[90vh] h-[90vw]'/>

            </div>
        }
        <div className='flex flex-col justify-end gap-2 flex-shrink max-lg:pt-3 max-lg:pb-8 max-lg:px-4 max-xs:px-1' ref={secondaryRef}>
            <div className='w-full px-4 flex justify-evenly'>
                <RiReplay30Fill 
                    className=" size-20 fill-basic-100"
                    onClick={rewind}
                />
                {playing ? 
                    <RiPauseCircleFill 
                    className=" size-24 fill-basic-100"
                    onClick={playPause}
                    />
                    :
                    <RiPlayCircleFill 
                    className=" size-24 fill-basic-100"
                    onClick={playPause}
                    />
                }
                
                <RiForward30Fill 
                    className=" size-20 fill-basic-100"
                    onClick={forward}
                />
            </div>
            <div className="px-3">
                <ProgressBar progress={progress.played * 100}/>
            </div>
            <div className='flex justify-between items-center gap-2 py-2 text-white'>
                <div className='font-extralight text-sm'>{progress.playedFormatted}</div>
                <div className='text-center text-sm'>{name}</div>
                <div className='font-extralight text-sm'>{progress.leftFormatted}</div>
            </div>
        </div>
    </div>
  )
}

export default PlayerSection