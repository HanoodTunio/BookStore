import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

function CourseCard() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json") // Fetching JSON file
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => setList(data)) // Update state with data
      .catch((err) => console.error("Error fetching list:", err));
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-30 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus ratione. Voluptatibus nobis odio explicabo quaerat,
            perspiciatis voluptas minima quam error quidem rerum illum libero
            nulla corporis soluta eligendi nisi!
          </p>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-10 cursor-pointer">
            Back
          </button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 space-x-2 space-y-1 justify-items-center">
          {list.length > 0 ? (
            list.map((item) => <Cards item={item} key={item.id} />)
          ) : (
            <p>Loading books...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseCard;
