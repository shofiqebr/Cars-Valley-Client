import CarItem from "../shared/carItem/CarItem";
import Cover from "../shared/cover/Cover";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}v></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item =><CarItem 
                    key={item._id}
                    item={item}
                    ></CarItem>

                    )
                }
            </div>
            
        </div>
    );
};

export default MenuCategory;