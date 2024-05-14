import React from 'react'

const AudiobookDisplay = ({item}) => {
  return (
    <div className='flex flex-col gap-2 p-3 text-basic-200 text-center font-montserrat font-light max-sm:max-w-44 max-md:max-w-56 max-w-72 overflow-hidden'>
        <img 
            src={item.cover} 
            alt="cover" 
            className=' max-md:size-44 max-lg:size-56 size-72 rounded-md'
        />
        <p className='overflow-hidden text-nowrap text-ellipsis max-md:text-sm'>
            {item.name}
        </p>
        <p className='overflow-hidden text-ellipsis max-md:text-sm'>
            {item.author}
        </p>
    </div>
  )
}

export default AudiobookDisplay