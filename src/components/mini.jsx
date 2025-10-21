import React from 'react'
import img1 from '../assets/Group.svg'
const Mini = () => {
  return (
    <div className='flex flex-col w-80 items-start gap-[20px] p-[10px]'>
        <img src={img1} alt="" />
        <h1 className='text-[20px] font-bold'>Минимальная сумма закупки</h1>
        <p className='text-[grey]'>Не берите лишнего, берите столько, сколько требуется. Даже по одной штуке разных брендов. Мы отгружаем заказ от 10000 рублей</p>
    </div>
  )
}

export default Mini