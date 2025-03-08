import React from "react";
import list from "../../public/list";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useEffect, useState } from "react";

function FreeBook() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/list.json") // Fetching JSON file
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => setList(data)) // Update state with data
      .catch((err) => console.error("Error fetching list:", err));
  }, []);

  const filteredData = list.filter(
    (data) => data.category.toLowerCase() === "free"
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut sed
            nihil, eum cupiditate veniam enim sit ullam quibusdam, vitae quis
            nemo eius quam quod. Earum dicta reprehenderit quaerat perferendis!
            Voluptatem?
          </p>
        </div>

        <div className="slider-container mt-8">
          {filteredData.length > 0 ? (
            <Slider {...settings}>
              {filteredData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          ) : (
            <p>Loading books...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default FreeBook;
