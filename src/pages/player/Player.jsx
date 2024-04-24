import { useParams } from "react-router-dom"
import { Palette } from "color-thief-react"
import { useState, useEffect, useRef } from 'react'
import ReactPlayer from "react-player"
import NavBar from "../../components/NavBar"
import { AllTitles } from "../.."
import textData from '../../assets/json/text_objext_1.json'
import PlayerSection from "./sections/PlayerSection"
import TextSection from "./sections/TextSection"
import HalfSection from "../../components/HalfSection"
import { findSpanIndexAndLanguage } from "../../utils/functions"
import PanelObject from "../../components/panel/PanelObject"
import ModalContentLanguage from "./panelModals/ModalContentLanguage"
import ModalContentText from "./panelModals/ModalContentText"
import ModalContentVolume from "./panelModals/ModalContentVolume"
import { RiFontSize2 } from "@remixicon/react"
import { RiVolumeUpFill } from "@remixicon/react"
import { RiTranslate2 } from "@remixicon/react"
import { RiSpeedUpFill } from "@remixicon/react"
import ModalContentPlaybackRate from "./panelModals/ModalContentPlaybackRate"




const Player = () => {
  const { id } = useParams()
  const audioId = parseInt(id, 10);
  const audiobookInfo = AllTitles[audioId]
  const playerRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [progress, setProgress] = useState({played: 0, playedSeconds: 0, loaded: 0, loadedSeconds: 0, playedFormatted: '00:00', leftFormatted: '-00:00'})
  const [currentSentenceId, setCurrentSentenceId] = useState(0)
  const [currentLanguageId, setCurrentLanguageId] = useState(0)
  const [fontSize, setFontSize] = useState(16)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [languageARate, setLanguageARate] = useState(1)
  const [languageBRate, setLanguageBRate] = useState(1)
  const [playbackRateMode, setPlaybackRateMode] = useState(0)
  const [volume, setVolume] = useState(1)


  useEffect(() => {
    setPlaybackRateMode(1)
  }, [languageARate, languageBRate]) 

  useEffect(() => {
    if (playbackRateMode) {
      if (currentLanguageId) {
        setPlaybackRate(languageBRate)
      } else {
        setPlaybackRate(languageARate)
      }
    }
  }, [currentLanguageId])

  const handlePlayPause = () => {
    setPlaying(!playing)
  }

  const handleRewind = () => {
      if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime()
          playerRef.current.seekTo(currentTime - 30)
          console.log(currentTime)
      }
  }

  const handleForward = () => {
      if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime()
          playerRef.current.seekTo(currentTime + 30)
      }
  }

  const handleDuration = (time) => {
      setDuration(time)
  }

  const handleProgress = (state) => {
      updateId(state.playedSeconds)  

      const newProgress = state
      const hours = Math.floor(state.playedSeconds / 3600)
      const minutes = Math.floor((state.playedSeconds % 3600) / 60)
      const seconds = Math.floor(state.playedSeconds % 60)
      if (hours) {
          newProgress.playedFormatted = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      } else {
          newProgress.playedFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      }
      const hoursRem = Math.floor((duration - state.playedSeconds) / 3600)
      const minutesRem = Math.floor(((duration - state.playedSeconds) % 3600) / 60)
      const secondsRem = Math.floor((duration - state.playedSeconds) % 60)
      if (hoursRem) {
          newProgress.leftFormatted = `-${String(hoursRem).padStart(2, '0')}:${String(minutesRem).padStart(2, '0')}:${String(secondsRem).padStart(2, '0')}`
      } else {
          newProgress.leftFormatted = `-${String(minutesRem).padStart(2, '0')}:${String(secondsRem).padStart(2, '0')}`
      }
      console.log(newProgress)
      setProgress(newProgress)
  }

  const updateId = (secondsProgressed) => {
    const { sentenceId, languageId } = findSpanIndexAndLanguage(secondsProgressed, textData.timestamps)
    console.log(secondsProgressed)
    console.log(sentenceId)
    console.log(languageId)
    setCurrentSentenceId(sentenceId)
    setCurrentLanguageId(languageId)
  }

  const goToSentence = (sentenceId, languageId) => {
    if (playerRef.current) {
      const index = (sentenceId * 2) + languageId
      const target = textData.timestamps[index][0]
      playerRef.current.seekTo(target)
    }
  }


  const handleSetPlaybackRate = (newRate) => {
    setPlaybackRate(newRate)
    setLanguageARate(newRate)
    setLanguageBRate(newRate)
    setPlaybackRateMode(0)
  }
  

  return (
    <div className="fixed w-full h-full flex px-6">
      <HalfSection>
        <TextSection 
          text_a={textData.text_a}
          text_b={textData.text_b}
          current_id={currentSentenceId}
          current_language={currentLanguageId}
          seek={goToSentence}
          fontSize={fontSize}
        />
      </HalfSection>
      <div className="h-full px-1 flex flex-col gap-2 justify-center">
        <PanelObject 
          Icon={RiFontSize2}
          ModalContent={
            <ModalContentText 
              handleSubtract={() => setFontSize(prev => prev - 1)}
              handleAdd={() =>setFontSize(prev => prev + 1)}
            />}
        />
        <PanelObject 
          Icon={RiTranslate2}
          ModalContent={<ModalContentLanguage info={audiobookInfo}/>}
        />
        <PanelObject 
          Icon={RiVolumeUpFill}
          ModalContent={<ModalContentVolume volume={volume} setVolume={setVolume}/>}
        />
        <PanelObject 
          Icon={RiSpeedUpFill}
          ModalContent={<ModalContentPlaybackRate 
            rate={playbackRate} 
            setRate={handleSetPlaybackRate}
            languageARate={languageARate}
            languageBRate={languageBRate}
            setLanguageARate={setLanguageARate}
            setLanguageBRate={setLanguageBRate}
          />}

        />

        
      </div>
      <HalfSection>
        <PlayerSection 
          playing={playing}
          cover={audiobookInfo.cover}
          playPause={handlePlayPause}
          rewind={handleRewind}
          forward={handleForward}
          progress={progress}
          name={audiobookInfo.name}
        />
      </HalfSection>
      
      
      <NavBar className='bg-basic-700/40' invertedHover={true}/>

      <ReactPlayer 
            ref={playerRef}
            url={'/audio/the_adventures_of_sherlock_holmes.mp3'}
            playing={playing}
            onReady={() => console.log('ready')}
            onDuration={handleDuration}
            onProgress={handleProgress}
            playbackRate={playbackRate}
            volume={volume}
            width={0}
            height={0}
      />

      <Palette src={audiobookInfo.cover} crossOrigin='anonymous' format='hslArray' colorCount={2}>
            {({data, loading}) => {
                
                if (loading || !data) return <div>Loading...</div>
                else { 
                    const gradient = `linear-gradient(to bottom right, hsl(${data[0][0]}, ${data[0][1]}%, ${data[0][2]}%), hsla(${data[1][0]}, ${data[1][1]}%, ${data[1][2]}%))`
                    const darkGradient = `linear-gradient(to bottom right, hsl(${data[0][0]}, ${data[0][1]}%, ${data[0][2] - 10}%), hsl(${data[1][0]}, ${data[1][1]}%, ${data[1][2]-10}%))`
                    return ( 
                        <div style={{backgroundImage: gradient}} className=' bg-cover absolute inset-0 -z-30'></div>
                    ) }}}
        </Palette>
    </div>
  )
}




export default Player