import React, { useState } from 'react'

const Card2 = ({ image }) => {
  const [cnt, setCnt] = useState(1)

  const increment = () => {
    setCnt(cnt + 1)
  }

  const decrement = () => {
    if (cnt > 1) setCnt(cnt - 1)
  }

  return (
    <div className='flex flex-col items-start w-80 justify-center gap-[20px] p-[10px] shadow-lg'>
      <img src={image} alt="" />
      <p>Слайм большой набор для девочек (добавки шармики посыпки блёстки баночки) сделай сам лизун подарок</p>

      <div className='flex items-center gap-[10px]'>
        <h1 className='font-bold text-[20px]'>10 249 ₽/опт</h1>
        <p className='text-[grey]'>1 215 ₽</p>
      </div>

      <div className='flex items-center gap-[20px]'>
        <button
          onClick={decrement}
          className='w-10 h-10 bg-[#E026EE] rounded-[100%] text-white flex justify-center items-center hover:opacity-80'
        >
          -
        </button>

        <h1>{cnt}</h1>

        <button
          onClick={increment}
          className='w-10 h-10 bg-[#E026EE] rounded-[100%] text-white flex justify-center items-center hover:opacity-80'
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Card2
