import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Collaborations() {
  const settings = {
    className: "center",
   
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 100,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="bg-white py-24 sm:py-32" id="collaborations">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-center capitalize font-bold tracking-tight text-gray-900 sm:text-4xl uppercase">Coorporate Clients</h1>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          <Slider {...settings}>
            <div>
              <img className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="../Images/Microsoft.png" alt="Transistor" width={158} height={48} />
            </div>
            <div>
              <img className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="../Images/nirmaan_logo.png" alt="Reform" width={158} height={48} />
            </div>
            <div>
              <img
                className="col-span-2 max-h-20 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="../Images/coding.jpeg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
            <div>
              <img className="col-span-2 max-h-20 w-full object-contain lg:col-span-1" src="../Images/tc.jpeg" alt="Tuple" width={158} height={48} />
            </div>
            <div>
              <img
                className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="../Images/EBIXFOREX.NS.png"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div>
              <img
                className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="../Images/altruist.jpg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
            <div>
              <img
                className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="../Images/jindalx.png"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
