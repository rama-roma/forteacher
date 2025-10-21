import React from 'react'
import logo from '../assets/Лого.svg'
export default function Footer() {
  return (
    <>
    <footer className='hidden md:block mt-30 max-w-[1980px] m-auto p-[40px] bg-[#441B7B]'>
      <section className='max-w-[1300px] m-auto flex flex-col'>
        <div className='flex items-center justify-between'>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>+7 (495) 320-93-80</h1>
            <p>Бесплатный звонок в РФ</p>
          </article>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>Info@rocket.ru</h1>
            <p>Обратная связь</p>
          </article>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>+7 (495) 320-93-80</h1>
            <p>Бесплатный звонок в РФ</p>
          </article>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>+7 (495) 320-93-80</h1>
            <p>Бесплатный звонок в РФ</p>
          </article>
        </div><br /><br />
        <div className='border border-[#2C1977] w-full'></div><br />
        <div className='flex items-baseline justify-between text-[white]'>
          <article className='flex gap-[10px] flex-col items-start'>
            <p>Предложение для оптовиков</p>
            <p>Предложение для родительских комитетов</p>
            <p>Предложение для большой семьи</p>
          </article>
          <article className='flex gap-[10px] flex-col items-start'>
            <p>Предложение для оптовиков</p>
            <p>Предложение для родительских комитетов</p>
            <p>Предложение для большой семьи</p>
          </article>
          <article className='flex gap-[10px] flex-col items-start'>
            <p>Предложение для оптовиков</p>
            <p>Предложение для родительских комитетов</p>
            <p>Предложение для большой семьи</p>
          </article>
        </div><br />
        <div className='border border-[#2C1977] w-full'></div><br />
        <div className='flex items-center justify-between'>
          <img src={logo} alt="" />
          <p className='text-[white]'>Доставка по всей России</p>
          <p className='text-[white]'>Самовывоз по Москве</p>
        </div><br />
        <div className='flex items-center justify-start gap-[40px] text-[#A890FF]'>
          <p>© 2021 ООО «Ракета»</p>
          <p>Для СМИ</p>
          <p>Политика конфиденциальности</p>
          <p>Карта сайта</p>
        </div>
      </section>
    </footer>

    <footer className='block md:hidden mt-30 max-w-[1980px] m-auto p-[40px] bg-[#441B7B]'>
      <section className='max-w-[1300px] m-auto flex flex-col'>
        <div className='flex items-center justify-between'>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>+7 (495) 320-93-80</h1>
            <p>Бесплатный звонок в РФ</p>
          </article>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>+7 (495) 320-93-80</h1>
            <p>Бесплатный звонок в РФ</p>
          </article>
          <article className='text-[white] flex flex-col items-start'>
            <h1 className='text-[20px] font-bold'>+7 (495) 320-93-80</h1>
            <p>Бесплатный звонок в РФ</p>
          </article>
        </div><br /><br />
        <div className='border border-[#2C1977] w-full'></div><br />
        <div className='flex items-baseline justify-between text-[white]'>
          <article className='flex gap-[10px] flex-col items-start'>
            <p>Предложение для оптовиков</p>
            <p>Предложение для родительских комитетов</p>
            <p>Предложение для большой семьи</p>
          </article>
          <article className='flex gap-[10px] flex-col items-start'>
            <p>Предложение для оптовиков</p>
            <p>Предложение для родительских комитетов</p>
            <p>Предложение для большой семьи</p>
          </article>
          <article className='flex gap-[10px] flex-col items-start'>
            <p>Предложение для оптовиков</p>
            <p>Предложение для родительских комитетов</p>
            <p>Предложение для большой семьи</p>
          </article>
        </div><br />
        <div className='border border-[#2C1977] w-full'></div><br />
        <div className='flex items-center justify-between'>
          <img src={logo} alt="" />
          <p className='text-[white]'>Доставка по всей России</p>
        </div><br />
        <div className='flex items-center justify-start gap-[40px] text-[#A890FF]'>
          <p>© 2021 ООО «Ракета»</p>
          <p>Для СМИ</p>
          <p>Политика конфиденциальности</p>
          <p>Карта сайта</p>
        </div>
      </section>
    </footer>
    </>
  )
}
