

const CarsCategory = () => {
    con
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
      
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
       
        </div>
    );
};

export default CarsCategory;