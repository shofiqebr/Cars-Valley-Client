

import Banner from './../home/banner/Banner';
import Brands from './brands/Brands';
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
            <Brands></Brands>
            <FeaturedItem></FeaturedItem>



            
        </div>
    );
};

export default Home;