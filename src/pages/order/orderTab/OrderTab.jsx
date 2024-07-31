
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// // import "swiper/css";
// import 'swiper/swiper-bundle.min.css'; 
// import "swiper/css/pagination";
// import CarCard from "../../../components/carCard/CarCard";


// const OrderTab = ({ items }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//     };
//     return (
//         <div >

//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className='grid md:grid-cols-3 gap-10'>
//                         {
//                             items.map(item => <CarCard
//                                 key={item._id}
//                                 item={item}
//                             ></CarCard>)
//                         }
//                     </div>

//                 </SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;



// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

// import SwiperCore, { Pagination } from 'swiper/core';
// import 'swiper/components/pagination/pagination.min.css'; // Import Swiper pagination styles

import CarCard from '../../../components/carCard/CarCard';

// Install Swiper modules
// SwiperCore.use([Pagination]);

const OrderTab = ({ items }) => {
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return `<span class="${className}">${index + 1}</span>`;
    //     },
    // };

    return (
        <div className='grid md:grid-cols-3 gap-10 py-5'>
            {/* <Swiper
                pagination={pagination}
                className="mySwiper"
            > */}
                {items.map((item) => (
                    // <SwiperSlide key={item._id}>
                    <div key={item._id}>
                              <div className='grid md:grid-cols-3 gap-10'>
                            <CarCard item={item} />
                        </div>
                    </div>
                      
                    // </SwiperSlide>
                ))}
            {/* </Swiper> */}
        </div>
    );
};

export default OrderTab;
