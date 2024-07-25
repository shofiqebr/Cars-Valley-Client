

const CarItem = ({item}) => {
    const {name, photo, price, ShortDescription} = item;
    return (
        <div className="flex space-x-5 justify-center items-center  ">
            <img style={{borderRadius: '10px 50px 10px 50px'}} className="md:w-56 w-32 md:h-56 h-32" src={photo} alt="" />
            <div className="md:pt-10">

            <h3 className="uppercase  md:text-3xl font-semibold">{name}----------</h3>
            <p className="font-semibold">{ShortDescription}</p>
            <p className="text-orange-600 text-xl font-bold">{price}</p>
            </div>
            
        </div>
    );
};

export default CarItem;