import { RiPlayCircleFill, RiPauseCircleFill, RiReplay30Fill, RiForward30Fill } from "@remixicon/react"
import ProgressBar from "../../../components/ProgressBar"

const PlayerSection = (props) => {
  return (
    <>
        <div className='flex gap-2 justify-center w-full h-3/4'>
            <img src={props.cover} alt="bookcover" className=' rounded-lg w-full shadow-lg ' />
            
        </div>
        <div className='flex flex-col gap-2'>
            <div className='w-full px-4 flex justify-evenly'>
                <RiReplay30Fill 
                    className=" size-20 fill-basic-100"
                    onClick={props.rewind}
                />
                {props.playing ? 
                    <RiPauseCircleFill 
                    className=" size-24 fill-basic-100"
                    onClick={props.playPause}
                    />
                    :
                    <RiPlayCircleFill 
                    className=" size-24 fill-basic-100"
                    onClick={props.playPause}
                    />
                }
                
                <RiForward30Fill 
                    className=" size-20 fill-basic-100"
                    onClick={props.forward}
                />
            </div>
            <div className="px-3">
                <ProgressBar progress={props.progress.played * 100}/>
            </div>
            <div className='flex justify-between items-center gap-2 py-2 text-white'>
                    <div className='font-extralight text-sm'>{props.progress.playedFormatted}</div>
                    <div className='text-center text-sm'>{props.name}</div>
                    <div className='font-extralight text-sm'>{props.progress.leftFormatted}</div>
                </div>
        </div>
    </>
  )
}

export default PlayerSection