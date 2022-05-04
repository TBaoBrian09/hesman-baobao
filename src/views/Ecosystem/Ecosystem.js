import React from "react";
import Slider from "react-slick/lib/slider";
import { EcosystemStyles } from "./EcosystemStyles";

const Ecosystem = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <EcosystemStyles id="ecosystem">
      <div className="container">
        <div className="header">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
          hệ sinh thái
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
        </div>
        <div className="banner">
          <img
            src="https://hesman.net/wp-content/uploads/2022/04/slide-pc-1-10.jpg.webp"
            alt=""
          />
        </div>
        <div className="mobile-slider">
          <div className="list">
            <Slider {...settings}>
              <div className="item">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/04/slide-2-4.png.webp"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/04/slide-3-4.png.webp"
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/04/slide-1-9.jpg"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </EcosystemStyles>
  );
};

export default Ecosystem;
