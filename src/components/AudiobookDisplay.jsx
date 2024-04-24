import React from 'react'

const AudiobookDisplay = ({item}) => {
  return (
    <div className='flex flex-col gap-2 p-3 text-basic-200 text-center font-montserrat font-light'>
        <img 
            src={item.cover} 
            alt="cover" 
            className=' size-72 rounded-md'
        />
        <p>
            {item.name}
        </p>
        <p>
            {item.author}
        </p>
    </div>
  )
}

export default AudiobookDisplay