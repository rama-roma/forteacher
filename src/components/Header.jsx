import React from 'react'
import '../fontawesome-free-6.7.2-web/css/all.css'
export default function Header() {
  return (
    <>
    <header className='hidden md:block max-w-[1980px] m-auto'>
        <nav className='max-w-[1980px] m-auto bg-[#290C4F] p-[10px]'>
            <div className='max-w-[1300px] m-auto flex justify-between items-center text-[white]'>
                <ul className='flex items-center gap-[20px]'>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
                <div className='flex items-center gap-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        <i className='fa-solid fa-phone'></i>
                        <p className='font-bold'>+7 (495) 320-93-80</p>
                    </div>
                    <i className='fa-brands fa-youtube'></i>
                    <i className='fa-brands fa-telegram'></i>
                </div>
            </div>
        </nav>
        <nav className='max-w-[1980px] m-auto bg-[#8436E8] p-[10px]'>
            <div className='max-w-[1300px] m-auto flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex items-center gap-[10px] text-[white]'>
                    <i className='fa-solid fa-circle'></i>
                    <p>Доставка по всей России</p>
                </div>
                <div className='flex items-center gap-[10px] text-[white]'>
                    <i className='fa-solid fa-circle'></i>
                    <p>Самовывоз по Москве</p>
                </div>
                <button class="shadow-lg bg-gradient-to-r from-[#FD17A1] to-[#A11FCE] text-white font-bold py-2 px-4 rounded-[30px] flex items-center gap-[20px]">
                    <i className='fa-solid fa-cart-shopping'></i>
                    <div className='bg-[#FFCA10] p-1 rounded-[20px]'>
                        <p className='font-bold text-[black]'>1299 штук</p>
                    </div>
                    <p>На сумму 100 369 ₽</p>
                </button>
            </div>
        </nav>
        <section className='max-w-[1300px] m-auto flex flex-col'>
            <div className='flex items-center justify-between mt-10'>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Слаймы оптом</option>
                </select>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Наполнители для слаймов</option>
                </select>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Аквамозаика</option>
                </select>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Наборы для опытов</option>
                </select>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Наборы с эпоксидной смолой</option>
                </select>
                <Btn text="В розницу"/>
            </div>

            <div className='relative top-[-90px] flex justify-center'>
                <img className='w-400' src={img1} alt="" />
            </div>

            <div className='flex items-center justify-between mt-[-120px]'>
              <Product/>
            </div>
        </section>
    </header>

    <header className='block md:hidden max-w-[1980px] m-auto'>
        <nav className='max-w-[1980px] m-auto bg-[#290C4F] p-[10px]'>
            <div className='max-w-[1300px] m-auto flex justify-between items-center text-[white]'>
                <ul className='flex items-center gap-[20px]'>
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
                <div className='flex items-center gap-[20px]'>
                    <div className='flex items-center gap-[10px]'>
                        <i className='fa-solid fa-phone'></i>
                        <p className='font-bold'>+7 (495) 320-93-80</p>
                    </div>
                    <i className='fa-brands fa-youtube'></i>
                    <i className='fa-brands fa-telegram'></i>
                </div>
            </div>
        </nav>
        <nav className='max-w-[1980px] m-auto bg-[#8436E8] p-[10px]'>
            <div className='max-w-[1300px] m-auto flex justify-between items-center'>
                <img src={logo} alt="" />
                <div className='flex items-center gap-[10px] text-[white]'>
                    <i className='fa-solid fa-circle'></i>
                    <p>Доставка по всей России</p>
                </div>
                <div className='flex items-center gap-[10px] text-[white]'>
                    <i className='fa-solid fa-circle'></i>
                    <p>Самовывоз по Москве</p>
                </div>
            </div>
        </nav>
        <section className='max-w-[600px] m-auto flex flex-col'>
            <div className='flex items-center justify-between mt-10'>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Слаймы оптом</option>
                </select>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Наполнители для слаймов</option>
                </select>
                <select name="" id="" className='bg-[#dbd7d778] p-[10px] rounded-[20px]'>
                    <option value="">Аквамозаика</option>
                </select><br />
            </div><br />

            <div className='relative top-[-90px] flex justify-center'>
                <img className='w-400' src={img1} alt="" />
            </div>

            <div className='flex items-center justify-between mt-[-120px]'>
              <Product/>
            </div>
        </section>
    </header>
    </>
  )
}


import img1 from '../assets/БАННЕР КАРУСЕЛЬ 2.svg'
import logo from '../assets/Лого.svg'
import Btn from './btn'
import Product from './Product'

