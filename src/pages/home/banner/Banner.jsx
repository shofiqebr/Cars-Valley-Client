import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src="https://i.ibb.co/XCjv58S/75b6d8e92309c1d010c98f8d7592305b.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://i.ibb.co/St8kTRj/31158b7fd6b665dc137abf4d6700e3d6.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://i.ibb.co/Vg96hnp/web-136350854.webp" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    );
};

export default Banner;