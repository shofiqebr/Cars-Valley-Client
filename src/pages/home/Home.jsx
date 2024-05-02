

import Banner from './../home/banner/Banner';
import Category from './category/Category';
import PopularCars from './popularCars/PopularCars';
import Recomended from './recomended/Recomended';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category></Category>
            <PopularCars></PopularCars>
            <Recomended></Recomended>
        </div>
    );
};

export default Home;