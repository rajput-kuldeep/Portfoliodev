import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
const Slider = () => {
  return (
    <div className='w-[100vw]'>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      breakpoints={{
       
        1024: {
          slidesPerView: 2,
        },
        
        0: {
          slidesPerView: 1,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-[100vw] h-[100vh]  px-10'
    >
      <SwiperSlide className='w-[100vw] lg:w-[80vw] py-4'>
       <Link to= "https://swiggy-clone-3zmv.vercel.app"> <img src="swiggy.png" alt="" className='w-[100vw] bg-blue-500 h-full object-cover bg-center bg-cover rounded-xl border-[2px]'/></Link>
      </SwiperSlide>
      <SwiperSlide className='w-1/2 py-4'>
       <Link to="https://web-landing-eosin.vercel.app/"> <img src="landing.png" alt=""  className='w-[100vw] bg-blue-500 h-full object-cover bg-center bg-cover rounded-xl border-[2px]' /></Link>
      </SwiperSlide>
      <SwiperSlide className='w-1/2 py-4'>
        <Link to= "https://www.purecordylife.com"><img src="pcl.png" alt="" className='w-[100vw] bg-blue-500 h-full object-cover bg-center bg-cover rounded-xl border-[2px]' /></Link>
      </SwiperSlide>
      <SwiperSlide className='w-1/2 py-4'>
       <Link to="https://currency-zeta.vercel.app/" > <img src="portfolio.png" alt="" className='w-[100vw] bg-blue-500 h-full object-cover bg-center bg-cover rounded-xl border-[2px]' /></Link>
      </SwiperSlide>
      <SwiperSlide className='w-1/2 py-4'>
        <img src="sidcup.png" alt=""  className='w-[100vw] bg-blue-500 h-full object-cover bg-center bg-cover rounded-xl border-[2px]'/>
      </SwiperSlide>
      ...
    </Swiper>
    </div>
  )
};

export default Slider
