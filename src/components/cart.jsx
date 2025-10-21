import React from 'react'

const Cart = ({text}) => {
  return (
    <div className='flex flex-col items-start w-90 gap-[20px] p-[10px]'>
        <h1 className='text-[#cbc9c9] text-[60px] font-bold'>{text}</h1>
        <div className='flex items-center gap-[10px]'>
            <div className='w-5 h-5 rounded-[100%] bg-[#A11FCE]'></div>
            <p className='text-[#A11FCE]'>-------------------</p>
        </div>
        <h1 className='text-[20px] font-bold'>Оставьте контакты</h1>
        <p>Оставьте заявку и вам на почту сразу же придет прайс-лист. 
А потом вам позвонит наш специалист.</p>
    </div>
  )
}

export default Cart