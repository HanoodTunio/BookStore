function Cards({ item }) {
  return (
    <div className="card w-92 shadow-sm my-3 p-3 hover:scale-110 duration-200 border border-red-500 bg-white dark:bg-gray-800">
      <figure>
        <img src={item.Image} alt={item.name} />
      </figure>

      <div className="card-body text-black dark:text-white">
        <h2 className="card-title text-black dark:text-white">
          {item.name}
          <div className="badge badge-secondary text-black dark:text-white">
            {item.category}
          </div>
        </h2>

        <p className="text-black dark:text-white">{item.title} </p>

        <div className="card-actions flex justify-between">
          <div className="badge badge-outline text-black dark:text-white">
            ${item.price}
          </div>

          {/* Ensure "Buy Now" button dynamically changes text color */}
          <div className="cursor-pointer px-3 py-1 border-2 rounded-full border-gray-500 hover:bg-pink-500 hover:text-white duration-200 text-black dark:text-white">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
