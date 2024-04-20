import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/image/slide1.jpg'
import slide2 from '../../../assets/image/slide2.jpg'
import slide3 from '../../../assets/image/slide3.jpg'
import slide4 from '../../../assets/image/slide4.jpg'
import slide5 from '../../../assets/image/slide5.jpg'
import slide6 from '../../../assets/image/slide6.jpg'


const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-52 w-60' src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-52 w-60' src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-52 w-60' src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-52 w-60' src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-52 w-60' src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-52 w-60' src={slide6} alt="" /></SwiperSlide>
        
      </Swiper>
    );
};

export default Category;