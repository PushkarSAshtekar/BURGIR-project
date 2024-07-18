

import React from "react";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import b from "../assets/Burgermain.jpg";

import b1 from "../assets/Burgermain1.jpg";
import b2 from "../assets/bmain.jpg";
import b3 from "../assets/bmain1.jpg";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Menubar() {
  const navigate = useNavigate();
  const MenuPage = () => {
    navigate("/explore");
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
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

  return (
    <div className="slider-container py-10">
      <h2 className="font-semibold text-4xl m-10 text-orange-600 text-center uppercase">
        Menu
      </h2>
      <div className="flex justify-center mb-6">
        <button
          onClick={MenuPage}
          className="text-lg flex justify-center items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300 rounded-full py-2 px-6 shadow-lg"
        >
          See More
          <BsArrowRight />
        </button>
      </div>
      <Slider {...settings}>
        {[b, b1, b2, b3, b3].map((src, index) => (
          <div key={index} className="p-2">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Menubar;
