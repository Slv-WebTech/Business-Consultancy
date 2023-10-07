import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Collegeslist() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 100,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
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
    <div className="bg-white py-24 sm:py-12" id="collegespoll">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 lg:grid-cols-1">
        <div className="max-w-3xl">
          <h2 className="text-3xl capitalize font-bold tracking-tight text-gray-900 sm:text-4xl">Our On-Campus Pooling Partners </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our collaborative alliances with esteemed educational institutions help us access and nurture top talent. Together, we shape the future of industry
            leaders through valuable partnerships and opportunities.
          </p>
        </div>
        <Slider {...settings}>
          <div className="flex items-center gap-x-6 ">
            <img className="h-30 w-76" src="../Images/sastra.jpeg" alt="" />
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-36 w-76 ml-6" src="../Images/ecell.png" alt="" />
          </div>

          <div className="flex items-center gap-x-6 ">
            <img className="h-30 w-76" src="../Images/snu.jpeg" alt="" />
          </div>

          <div className="flex items-center gap-x-6 ml-6 ">
            <img className="h-30 w-76 mt-6" src="../Images/alva.jpeg" alt="" />
          </div>

          <div className="flex items-center gap-x-6 ml-12">
            <img className="h-36 w-46" src="../Images/jgi.jpeg" alt="" />
          </div>

          <div className="flex items-center gap-x-6 ">
            <img className="h-30 w-76 mt-6" src="../Images/anupama.jpeg" alt="" />
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-30 w-76" src="../Images/Chaitanya.png" alt="" />
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-30 w-76 mt-6" src="../Images/rajivgandhi.png" alt="" />
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-30 w-76" src="../Images/lpu.png" alt="" />
          </div>

          <div className="flex items-center gap-x-6 ml-12">
            <img className="h-36 w-36" src="../Images/acharya.jpeg" alt="" />
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-30 w-76 mt-6" src="../Images/shanmuga.png" alt="" />
          </div>

          <div className="flex items-center gap-x-6 ">
            <img className="h-30 w-76 mt-6" src="../Images/sant francis.png" alt="" />
          </div>

          <div className="flex items-center gap-x-6">
            <img className="h-30 w-76" src="../Images/rajivgandhi.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
