import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/image/img1.jpg'
import img2 from '../../../assets/image/img2.jpg'
import img3 from '../../../assets/image/img3.jpg'
import img4 from '../../../assets/image/img4.jpg'
import img5 from '../../../assets/image/img5.jpg'
import img6 from '../../../assets/image/img6.jpg'
import img7 from '../../../assets/image/img7.jpg'
import img8 from '../../../assets/image/img8.jpg'




const Banner = () => {
    return (
        <Carousel autoPlay autoFocus stopOnHover infiniteLoop>
       
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img2} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img3} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img4} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img5} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img6} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img7} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img src={img8} />
        </div>
        <div className='h-[350px] md:h-[500px] lg:h-[750px]'>
            <img  src={img1} />
        </div>
      
        
      
    </Carousel>
    );
};

export default Banner;