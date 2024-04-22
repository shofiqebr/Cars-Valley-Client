

import Banner from './../home/banner/Banner';
import Category from './category/Category';
import PopularCars from './popularCars/PopularCars';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category></Category>
            <PopularCars></PopularCars>
        </div>
    );
};

export default Home;