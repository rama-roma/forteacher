import Card1 from "./card1";
import img5 from '../assets/fedc9becd2beba80e2db8c797362255efe1c090a.jpg'
import img6 from '../assets/ba4d64e90c8c7e3b9e76e76bad3a8fb887533bd8.jpg'
import img7 from '../assets/2783d8905f3151697a161ff5c683d52ee4249ef9.jpg'
import img8 from '../assets/e38c3795b12486acbe1df1c4b5c0a91cf9374eb4.jpg'
export default function Main() {
  return (
    <>
    <main className="hidden md:block mt-20 max-w-[1980px] m-auto">
      <section className="bg-gradient-to-r from-[#FD17A1] to-[#A11FCE] p-[10px]">
        <div className="max-w-[1300px] m-auto flex flex-col gap-[20px]">
          <h1 className="text-[40px] text-[white] font-bold">Наши торговые марки</h1>
          <div className="flex items-center justify-between">
            <Card1 img={img1} text="Бомба слайм"/>
            <Card1 img={img2} text="Научно нескучно"/>
            <Card1 img={img3} text="EASY BEADS"/>
            <Card1 img={img4} text="Magical crystal"/>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Слаймы</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex justify-between items-center gap-[10px]">
            <Card2 image={img5}/>
            <Card2 image={img6}/>
            <Card2 image={img7}/>
            <Card2 image={img8}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Наполнители для слаймов</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex justify-between items-center gap-[10px]">
            <Card2 image={img6}/>
            <Card2 image={img7}/>
            <Card2 image={img5}/>
            <Card2 image={img8}/>
        </div> 
      </section>


      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Аквамозаика</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex justify-between items-center gap-[10px]">
            <Card2 image={img5}/>
            <Card2 image={img6}/>
            <Card2 image={img8}/>
            <Card2 image={img7}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex justify-center">
        <img className="w-400" src={img9} alt="" />
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Наборы для опытов</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex justify-between items-center gap-[10px]">
            <Card2 image={img5}/>
            <Card2 image={img6}/>
            <Card2 image={img7}/>
            <Card2 image={img8}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Наборы с эпоксидной смолой</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex justify-between items-center gap-[10px]">
            <Card2 image={img6}/>
            <Card2 image={img5}/>
            <Card2 image={img8}/>
            <Card2 image={img7}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex justify-center">
        <img className="w-400" src={img10} alt="" />
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <h1 className="font-bold text-[40px]">Слаймы оптом с доставкой по России</h1>
        <div className="flex items-center justify-between">
          <Mini/>
          <Mini/>
          <Mini/>
          <Mini/>
        </div>
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex justify-center">
        <img className="w-400" src={img11} alt="" />
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex flex-col gap-[20px]">
        <h1 className="text-[40px] font-bold">Отзывы клиентов из Wildberries</h1>
        <div className="flex flex-wrap items-center justify-center gap-[20px]">
          <Min/>
          <Min/>
          <Min/>
          <Min/>
          <Min/>
          <Min/>
        </div>
        <div className="flex justify-center">
          <Btn text="Показать еще"/>
        </div>
      </section>
      
      <section className="mt-30 max-w-[1300px] m-auto flex flex-col gap-[20px]">
        <h1 className="text-[40px] font-bold">С нами легко начать работать</h1>
        <p className="text-[grey]">Работаем официально и предоставляем все документы. Возможна отсрочка платежа.</p>
        <div className="flex items-center justify-between">
          <Cart text="01"/>
          <Cart text="02"/>
          <Cart text="03"/>
          <Cart text="04"/>
        </div>
      </section>

      <section className="mt-30 p-[20px] max-w-[1980px] m-auto  bg-[radial-gradient(circle,_#00FFFF,_#7652DC,_#8D30D6,_#B228BE,_#FF1DE8)]">
         <div className="max-w-[1300px] m-auto flex flex-col gap-[30px]">
          <h1 className="text-[white] font-bold text-[40px]">Получить предложение</h1>
          <p className="text-[white] w-200">Мы отправим Вам на почту подробное письмо о наших возможностях и уникальных условиях СПЕЦИАЛЬНО для вашего бизнеса!</p>
          <div className="flex justify-between gap-[10px] items-start">
           <article className="flex flex-col items-start gap-[20px]">
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Имя" />
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Телефон" />
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="E-mail" />
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Город" />
            <div className="flex text-[white] items-center gap-[20px]">
              <input className="text-[50px] w-10 h-10" type="checkbox" />
              <p>Я принимаю условия передачи информации</p>
            </div>
           </article>
           <article>
            <input className="p-[10px] h-70 w-190 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Напишите, что вас заинтересовало или свой вопрос. Мы сможем подготовиться к нашей беседе" />
           </article>
         </div>
         </div>
      </section>

      <section className="max-w-[1300px] m-auto mt-30 flex flex-col gap-[30px]">
        <h1 className="text-[40px] font-bold">Популярные вопросы</h1>
        <AccordionUsage/>
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex justify-center">
        <Product/>
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex justify-between items-center">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-[30px] font-bold">Полезный контент всегда под рукой</h1>
          <p className="text-[grey] w-190">Рассказываем, как упростить работу, освободить время для других важных дел и делимся важными новостями для бизнеса.</p>
          <img src={img13} alt="" />
        </div>
        <div>
          <img src={img12} alt="" />
        </div>
      </section>
    </main>

    <main className="block md:hidden mt-20 max-w-[1980px] m-auto">
      <section className="bg-gradient-to-r from-[#FD17A1] to-[#A11FCE] p-[10px]">
        <div className="max-w-[1300px] m-auto flex flex-col gap-[20px]">
          <h1 className="text-[40px] text-[white] font-bold">Наши торговые марки</h1>
          <div className="flex flex-wrap gap-[20px] items-center justify-between">
            <Card1 img={img1} text="Бомба слайм"/>
            <Card1 img={img2} text="Научно нескучно"/>
            <Card1 img={img3} text="EASY BEADS"/>
            <Card1 img={img4} text="Magical crystal"/>
          </div>
        </div>
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Слаймы</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-between items-center gap-[10px]">
            <Card2 image={img5}/>
            <Card2 image={img6}/>
            <Card2 image={img7}/>
            <Card2 image={img8}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Наполнители для слаймов</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10  flex flex-wrap justify-between items-center gap-[10px]">
            <Card2 image={img6}/>
            <Card2 image={img7}/>
            <Card2 image={img5}/>
            <Card2 image={img8}/>
        </div> 
      </section>


      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Аквамозаика</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-between items-center gap-[10px]">
            <Card2 image={img5}/>
            <Card2 image={img6}/>
            <Card2 image={img8}/>
            <Card2 image={img7}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex justify-center">
        <img className="w-400" src={img9} alt="" />
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Наборы для опытов</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-between items-center gap-[10px]">
            <Card2 image={img5}/>
            <Card2 image={img6}/>
            <Card2 image={img7}/>
            <Card2 image={img8}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-start gap-[20px] w-[60%]">
            <h1 className="text-[30px] font-bold">Наборы с эпоксидной смолой</h1>
            <p className="text-[#595959]">Игрушка-антистресс, представляющая собой пластичную, хорошо тянущуюся, одновременно клейкую и сохраняющую своё единство массу. Малышам помогает развить моторику. </p>
          </div>
          <p className="text-[20px] text-[#E026EE] underline">Показать все товары</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-between items-center gap-[10px]">
            <Card2 image={img6}/>
            <Card2 image={img5}/>
            <Card2 image={img8}/>
            <Card2 image={img7}/>
        </div> 
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex justify-center">
        <img className="w-400" src={img10} alt="" />
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex flex-col gap-[30px]">
        <h1 className="font-bold text-[40px]">Слаймы оптом с доставкой по России</h1>
        <div className="flex flex-wrap items-center justify-between">
          <Mini/>
          <Mini/>
          <Mini/>
          <Mini/>
        </div>
      </section>

      <section className="mt-20 max-w-[1300px] m-auto flex justify-center">
        <img className="w-400" src={img11} alt="" />
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex flex-col gap-[20px]">
        <h1 className="text-[40px] font-bold text-center">Отзывы клиентов из Wildberries</h1>
        <div className="flex flex-wrap items-center justify-center gap-[20px]">
          <Min/>
          <Min/>
          <Min/>
          <Min/>
          <Min/>
          <Min/>
        </div>
        <div className="flex justify-center">
          <Btn text="Показать еще"/>
        </div>
      </section>
      
      <section className="mt-30 max-w-[1300px] m-auto flex flex-col gap-[20px]">
        <h1 className="text-[40px] font-bold text-center">С нами легко начать работать</h1>
        <p className="text-[grey] text-center">Работаем официально и предоставляем все документы. Возможна отсрочка платежа.</p>
        <div className="flex flex-wrap items-center justify-between">
          <Cart text="01"/>
          <Cart text="02"/>
          <Cart text="03"/>
          <Cart text="04"/>
        </div>
      </section>

      <section className="mt-30 p-[20px] max-w-[1980px] m-auto  bg-[radial-gradient(circle,_#00FFFF,_#7652DC,_#8D30D6,_#B228BE,_#FF1DE8)]">
         <div className="max-w-[1300px] m-auto flex flex-col gap-[30px]">
          <h1 className="text-[white] font-bold text-[40px]">Получить предложение</h1>
          <p className="text-[white] w-150">Мы отправим Вам на почту подробное письмо о наших возможностях и уникальных условиях СПЕЦИАЛЬНО для вашего бизнеса!</p>
          <div className="flex flex-wrap justify-between gap-[10px] items-start">
           <article className="flex flex-col items-start gap-[20px]">
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Имя" />
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Телефон" />
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="E-mail" />
            <input className="p-[15px] w-140 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Город" />
            <div className="flex text-[white] items-center gap-[20px]">
              <input className="text-[50px] w-10 h-10" type="checkbox" />
              <p>Я принимаю условия передачи информации</p>
            </div>
           </article>
           <article>
            <input className="p-[10px] h-70 w-150 border border-[white] bg-[white] rounded-[10px]" type="text" placeholder="Напишите, что вас заинтересовало или свой вопрос. Мы сможем подготовиться к нашей беседе" />
           </article>
         </div>
         </div>
      </section>

      <section className="max-w-[1300px] m-auto mt-30 flex flex-col gap-[30px]">
        <h1 className="text-[40px] font-bold">Популярные вопросы</h1>
        <AccordionUsage/>
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex justify-center">
        <Product/>
      </section>

      <section className="mt-30 max-w-[1300px] m-auto flex flex-col justify-between items-center">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-[30px] font-bold text-center">Полезный контент всегда под рукой</h1>
          <p className="text-[grey] w-150">Рассказываем, как упростить работу, освободить время для других важных дел и делимся важными новостями для бизнеса.</p>
          <img src={img13} alt="" />
        </div>
        <div>
          <img src={img12} alt="" />
        </div>
      </section>
    </main>
    </>
  )
}
import img13 from '../assets/Frame 1777.svg'
import img12 from '../assets/Frame 1768.svg'
import img11 from '../assets/Видео.svg'
import img10 from '../assets/Banner new.svg'
import img1 from '../assets/93f0fc31a457c154ef057cbabb6f00a80a36d720.png'
import img2 from '../assets/40627ec2d79050e66b1f8942626a00f798167e0c.png'
import img3 from '../assets/0e0e9c58a8c4d609b16846d2c1d7fb6ca57266a6.png'
import img4 from '../assets/115c5db3f4271e21de6e52b9200cbde015cf2775.png'
import img9 from '../assets/БАННЕР 1140х250 ДОСТАВКА.svg'
import Card2 from "../components/card2";
import Mini from "../components/mini";
import Min from "../components/min";
import Btn from "../components/btn";
import Cart from "../components/cart";
import AccordionUsage from "../components/accordion";
import Product from "../components/Product";

