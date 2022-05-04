import React from "react";
import Slider from "react-slick/lib/slider";
import SlickSlider from "../../components/slider/Slider";
import { JourneysStyles } from "./JourneyStyles";

const dataItem = [
  {
    id: 1,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-1.png.webp",
    month: "Tháng 5",
    title: "Chính thức ra mắt dự án & NFT lưu niệm",
  },
  {
    id: 2,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-2.png.webp",
    month: "Tháng 6",
    title: "IDO",
  },
  {
    id: 3,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-3.png.webp",
    month: "Tháng 7",
    title: "Beta test game Hesman Legend",
  },
  {
    id: 4,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-4.png.webp",
    month: "Tháng 8",
    title: "Tổ chức sự kiện họp mặt người hâm mộ Hesman",
  },
  {
    id: 5,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-5.png.webp",
    month: "Tháng 9",
    title: "Mainnet launching cho game Hesman Legend (Story mode)",
  },
  {
    id: 6,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-6.png.webp",
    month: "Tháng 10",
    title: "Khởi chạy PvP Battle",
  },
  {
    id: 7,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-7.png.webp",
    month: "Tháng 11",
    title: "Ra mắt các sản phẩm kết hợp local brand Việt Nam",
  },
];

const Journeys = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    // autoplay: true,
    autoplaySpeed: 3000,
    // slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <JourneysStyles id="journey">
      <div className="container">
        <div className="header">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
          lộ trình
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
        </div>

        <div className="content">
          <div className="slider">
            <div className="list">
              <Slider {...settings}>
                {dataItem.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="item-img">
                      <img src={item.url} alt="" />
                    </div>

                    <div className="item-content">
                      <h2>{item.month}</h2>
                      <p> {item.title}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </JourneysStyles>
  );
};

export default Journeys;
