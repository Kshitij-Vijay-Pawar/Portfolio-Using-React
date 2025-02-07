import React from 'react'
import 'remixicon/fonts/remixicon.css'

const header = () => {
  return (
    <div className='fixed w-full z-10 p-15 flex items-center justify-end'>
        <button className='bg-black text-white text-xl px-6 py-3 rounded-full border-4
        hover:bg-gray-500'>Hire ME</button>
        <i className="ri-more-2-fill text-4xl ml-3 text-white"></i>
    </div>
  )
}

export default header