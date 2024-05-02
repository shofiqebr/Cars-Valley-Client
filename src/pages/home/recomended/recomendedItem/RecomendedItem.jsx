

const RecomendedItem = ({item}) => {
    const {name, photo, price, ShortDescription} = item;
    return (
        <div className="card w-96  bg-base-100 shadow-xl">
        <figure><img className="h-64 w-96" src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{ShortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    );
};

export default RecomendedItem;