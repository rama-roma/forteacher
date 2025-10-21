import React from 'react'

const Card1 = ({img, text}) => {
  return (
    <div className='flex flex-col items-center gap-[20px] bg-[#270A3866] justify-center p-[10px] w-70 h-70 rounded-[20px]'>
        <img className='w-50' src={img} alt="" />
        <h1 className='text-[white]'>{text}</h1>
    </div>
  )
}

export default Card1