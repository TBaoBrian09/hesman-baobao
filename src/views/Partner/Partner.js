import React from "react";
import Slider from "react-slick/lib/slider";
import { ContainerImg, PartnerStyles, Test } from "./PartnerStyles";

const dataPartner = [
  {
    id: 1,
    url: "https://hesman.net/wp-content/uploads/2022/03/Stamp3.png.webp",
  },
  {
    id: 2,
    url: "https://hesman.net/wp-content/uploads/2022/03/Stamp4.png.webp",
  },
  {
    id: 3,
    url: "https://hesman.net/wp-content/uploads/2022/03/Stamp.png.webp",
  },
  {
    id: 4,
    url: "https://hesman.net/wp-content/uploads/2022/03/Stamp5.png.webp",
  },
  {
    id: 5,
    url: "https://hesman.net/wp-content/uploads/2022/04/Stamp7-2.jpg.webp",
  },
  {
    id: 6,
    url: "https://hesman.net/wp-content/uploads/2022/04/Stamp6.png.webp",
  },
];

const Partner = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToScroll: 3,
    slidesToShow: 3,
    accessibility: true,
    variableWidth: false,
    focusOnSelect: false,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          // centerMode: true,
        },
      },
    ],
  };
  return (
    <PartnerStyles id="partner">
      <div className="container">
        <div className="header">
          <div className="title">
            <h2>nhà phát triển game</h2>
          </div>
          <div className="logo">
            <img
              src="https://hesman.net/wp-content/uploads/2022/03/logo-NHA-PHAT-TRIEN.svg"
              alt=""
            />
          </div>
        </div>

        <div className="wrap-content">
          <div className="content">
            <div className="title">
              <h1>Đối tác</h1>
            </div>
            <div className="list">
              <Slider {...settings}>
                {dataPartner.map((item) => (
                  <Test key={item.id}>
                    <ContainerImg src={item.url} alt="" />
                  </Test>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </PartnerStyles>
  );
};

export default Partner;
