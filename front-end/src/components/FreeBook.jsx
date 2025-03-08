import React from "react";
import list from "../../public/list";

function FreeBook() {
  const fiterData = list.filter((data) => data.category === "Free");
  console.log(fiterData);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sed
          nihil, eum cupiditate veniam enim sit ullam quibusdam, vitae quis nemo
          eius quam quod. Earum dicta reprehenderit quaerat perferendis!
          Voluptatem?
        </p>
      </div>
    </>
  );
}

export default FreeBook;
