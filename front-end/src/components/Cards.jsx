function Cards({ item }) {
  return (
    <div className="card bg-base-100 w-92 shadow-sm my-3 p-3 hover:scale-110 duration-200">
      <figure>
        <img src={item.Image} alt={item.nome} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.nome}{" "}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>{item.title} </p>
        <div className="card-actions flex justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className="cursor-pointer px-3 py-1 border border[2px] rounded-full hover:bg-pink-500 hover:text-white duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
