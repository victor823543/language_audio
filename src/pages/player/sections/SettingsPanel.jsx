import ModalContentLanguage from "../panelModals/ModalContentLanguage"
import ModalContentText from "../panelModals/ModalContentText"
import ModalContentVolume from "../panelModals/ModalContentVolume"
import ModalContentPlaybackRate from "../panelModals/ModalContentPlaybackRate"
import PanelObject from "../../../components/panel/PanelObject"
import { RiFontSize2 } from "@remixicon/react"
import { RiVolumeUpFill } from "@remixicon/react"
import { RiTranslate2 } from "@remixicon/react"
import { RiSpeedUpFill } from "@remixicon/react"


const SettingsPanel = ({setFontSize, playbackRate, handleSetPlaybackRate, languageARate, languageBRate, setLanguageARate, setLanguageBRate, audiobookInfo, volume, setVolume}) => {
  return (
    <>
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

    </>
  )
}

export default SettingsPanel