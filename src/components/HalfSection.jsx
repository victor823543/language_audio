import React from 'react'
import cn from '../utils/cn'

const HalfSection = ({children, className}) => {
  return (
    <section className={cn('flex-1 h-full py-10', className)}>
            <div className='flex flex-col gap-2 h-full box-border p-2 overflow-hidden rounded-md bg-basic-900/20'>
              {children}
            </div>
    </section>
  )
}

export default HalfSection