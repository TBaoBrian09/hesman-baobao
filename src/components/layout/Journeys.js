import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";
import SlickSlider from "../slider/Slider";

const JourneysStyles = styled.section`
  position: relative;
  .container {
    .header {
      background-color: #000000;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--e-global-color-a83d40f);
      font-family: "Chakra Petch", Sans-serif;
      font-size: 34px;
      font-weight: 700;
      text-transform: uppercase;
      gap: 10px;
    }

    .content {
      width: 100%;
      padding: 50px 10px 50px 10px;

      .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 8px;

        .item {
          position: relative;
          border: 5px solid #000;
          filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
            hue-rotate(0deg);

          .item-img {
            img {
              width: 100%;
              height: 100%;
            }
          }

          .item-content {
            position: absolute;
            bottom: 18px;
            padding: 0 12px;

            h2 {
              color: #000000;
              font-family: "Chakra Petch", Sans-serif;
              font-size: 30px;
              font-weight: 700;
            }

            p {
            }
          }

          &:hover {
            filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
              hue-rotate(0deg);
          }
        }

        .slick-track {
          display: flex;
          gap: 0px 35px;
        }
      }
    }
  }
`;

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
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <JourneysStyles>
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
