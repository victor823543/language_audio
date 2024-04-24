import { RiVolumeUpFill, RiVolumeDownFill } from "@remixicon/react"

const ModalContentVolume = ({volume, setVolume}) => {
    return (
      <div className="flex justify-center items-center gap-3 text-basic-200">
        <RiVolumeDownFill className="size-10"/>
          <input type="range" min={0} max={10} value={volume * 10} onChange={(e) => setVolume(e.target.value / 10)}/>
        <RiVolumeUpFill className="size-10"/>
      </div>
    )
}
export default ModalContentVolume