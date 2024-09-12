import React from 'react'
import { HiOutlineClock } from 'react-icons/hi2'

const ChapterListCard = ({chapter,index}) => {
  return (
    <div className='grid grid-cols-5 p-2 items-center border-b'>
         <div>
            <h2 className= 'w-8 h-8 flex items-center justify-center p-2 bg-primary text-white rounded-full'>{index+1}</h2>
         </div>
         <div className='col-span-4'>
              <h2 className='font-medium'>{chapter?.name}</h2>
              <h2 className='flex items-center gap-1 text-sm text-primary'><HiOutlineClock /> {chapter?.duration}</h2>
         </div>
    </div>
  )
}

export default ChapterListCard