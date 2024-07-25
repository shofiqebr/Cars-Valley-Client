

const CarItem = ({item}) => {
    const {name, photo, price, ShortDescription} = item;
    return (
        <div className="flex space-x-5  ">
            <img style={{borderRadius: '10px 50px 10px 50px'}} className="w-56 h-56" src={photo} alt="" />
            <div className="pt-10">

            <h3 className="uppercase  text-3xl font-semibold">{name}----------</h3>
            <p className="font-semibold">{ShortDescription}</p>
            <p className="text-orange-600 text-xl font-bold">{price}</p>
            </div>
            
        </div>
    );
};

export default CarItem;