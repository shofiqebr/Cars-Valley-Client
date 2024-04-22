

const CarItem = ({item}) => {
    const {name, photo, price, ShortDescription} = item;
    return (
        <div className="flex space-x-2  ">
            <img style={{borderRadius: '10px 50px 10px 50px'}} className="w-24 h-24" src={photo} alt="" />
            <div>

            <h3 className="uppercase font-medium">{name}----------</h3>
            <p>{ShortDescription}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
            
        </div>
    );
};

export default CarItem;