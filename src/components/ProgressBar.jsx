import React from 'react'

const ProgressBar = ({progress}) => {


  return (
    <div className='h-2 w-full bg-basic-800/30 rounded-md'>
        <div 
            style={{width: `${progress}%`}} 
            className={`h-full bg-main-600/80 rounded-md`}>
        </div>
    </div>
  )
}

export default ProgressBar