import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImage from "../../../assets/image/featured.jpg";
import './Featured.css'


const FeaturedItem = () => {
    const currentDate = new Date ();
    return (
        <div className="featured">
            <SectionTitle subHeading={'Find our'} heading={'Featured Item'}></SectionTitle>
            <div className="flex justify-center items-center  gap-4 mx-36">
                <div><img className=" w-[   px] h-40" src={featuredImage} alt="featured image" /></div>
                <div className="pl-10">
                    <p>{currentDate.toDateString()}</p>
                    <p>
In our Featured Car section, discover automotive excellence in every detail. From sleek sedans to rugged SUVs, each handpicked vehicle embodies innovation and style. Explore cutting-edge technology, from hybrid powertrains to autonomous features, designed for elevated driving experiences. Dive into the artistry of design, where form meets function seamlessly. Welcome to a celebration of passion, innovation, and the timeless allure of the open road. Step into our world and ignite your automotive imagination.</p>
<button className="btn btn-outline btn-success">Success</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;