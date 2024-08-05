import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImage from "../../../assets/image/featured.jpg";
import './Featured.css'


const FeaturedItem = () => {
    const currentDate = new Date ();
    return (
        <div className="featured bg-fixed">
            <SectionTitle subHeading={'Find our'} heading={'Featured Item'}></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-80 pb-20 pt-12 px-36">
                <div><img src={featuredImage} alt="featured image" /></div>
                <div className="pl-10 text-white">
                    <p className="font-bold">{currentDate.toDateString()}</p>
                    <p>
In our Featured Car section, discover automotive excellence in every detail. From sleek sedans to rugged SUVs, each handpicked vehicle embodies innovation and style. Explore cutting-edge technology, from hybrid powertrains to autonomous features, designed for elevated driving experiences. Dive into the artistry of design, where form meets function seamlessly. Welcome to a celebration of passion, innovation, and the timeless allure of the open road. Step into our world and ignite your automotive imagination.</p>
                </div>
            </div>
            <div className="text-center py-10">

<button className=" btn btn-outline btn-success">Success</button>
            </div>
        </div>
    );
};

export default FeaturedItem;