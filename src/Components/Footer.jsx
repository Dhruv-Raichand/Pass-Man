import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full'>
        <div>
        <div className="logo font-bold text-2xl">
        <span className="text-green-500"> &lt;</span>
        HNJI
        <span className="text-green-500"> BETA/&gt;</span>
        </div>
        </div>
        <div className='flex justify-center items-center'>
      Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by Mahatma Gandhi 
        </div>
    </div>
  )
}

export default Footer
