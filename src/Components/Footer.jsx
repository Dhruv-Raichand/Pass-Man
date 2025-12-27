import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full'>
        <div>
        <div className="logo font-bold text-2xl">
        <span className="text-green-500"> &lt;</span>
        PASS
        <span className="text-green-500"> MAN/&gt;</span>
        </div>
        </div>
        <div className='flex justify-center items-center'>
      Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> by Dhruv Raichand 
        </div>
    </div>
  )
}

export default Footer
