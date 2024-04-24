import React from 'react'

const HalfSection = ({children}) => {
  return (
    <section className='flex-1 h-full py-10'>
            <div className='flex flex-col gap-2 h-full box-border p-2 overflow-hidden rounded-md bg-basic-900/20'>
              {children}
            </div>
    </section>
  )
}

export default HalfSection