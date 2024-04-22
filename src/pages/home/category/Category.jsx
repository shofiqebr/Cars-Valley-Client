import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/image/slide1.jpg';
import slide2 from '../../../assets/image/slide2.jpg';
import slide3 from '../../../assets/image/slide3.jpg';
import slide4 from '../../../assets/image/slide4.jpg';
import slide5 from '../../../assets/image/slide5.jpg';
import slide6 from '../../../assets/image/slide6.jpg';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';


const Category = () => {
    return (
      <section>
      <SectionTitle  subHeading={'Our most luxurious'} heading={'Car brands'}></SectionTitle>
        <Swiper 
        slidesPerView={4}
        spaceBetween={2}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide><img className='h-60 w-60' src={slide1} alt="" />
        <h3 className='text-center -mt-10 text-white uppercase text-xl font-medium'>Toyota</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-60 w-60' src={slide2} alt="" />
        <h3 className='text-center -mt-10 text-white uppercase text-xl font-medium'>Honda</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-60 w-60' src={slide3} alt="" />
        <h3 className='text-center -mt-10 text-white uppercase text-xl font-medium'>Ford</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-60 w-60' src={slide4} alt="" />
        <h3 className='text-center -mt-10 text-white uppercase text-xl font-medium'>BMW</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-60 w-60' src={slide5} alt="" />
        <h3 className='text-center -mt-10 text-white uppercase text-xl font-medium'>Mercedes-Benz</h3>
        </SwiperSlide>
        <SwiperSlide><img className='h-60 w-60' src={slide6} alt="" />
        <h3 className='text-center -mt-10 text-white uppercase text-xl font-medium'>Nissan</h3>
        </SwiperSlide>
        
      </Swiper>
      
      </section>
    );
};

export default Category;