

const CarItem = ({item}) => {
    const {name, photo, price, ShortDescription} = item;
    return (
        <div className="flex space-x-10 justify-center items-center lg:w-[600px] ">
            <img style={{borderRadius: '10px 30px 10px 30px'}} className=" w-32 h-32" src={photo} alt="" />
            <div className="md:pt-10">

            <h3 className="uppercase  md:text-xl font-bold">{name}----------</h3>
            <p className="font-semibold">{ShortDescription}</p>
            <p className="text-orange-600 text-xl font-bold">{price}</p>
            </div>
            
        </div>
    );
};

export default CarItem;