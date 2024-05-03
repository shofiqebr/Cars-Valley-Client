

import Banner from './../home/banner/Banner';
import Category from './category/Category';
import FeaturedItem from './featuredItem/FeaturedItem';
import PopularCars from './popularCars/PopularCars';
import Recomended from './recomended/Recomended';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category></Category>
            <PopularCars></PopularCars>
            <Recomended></Recomended>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;