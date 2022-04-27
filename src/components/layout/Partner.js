import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

const PartnerStyles = styled.section`
  width: 100%;
  overflow: hidden;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("https://hesman.net/wp-content/uploads/2022/03/Our-Partners-Background.svg")
      no-repeat center center/cover;
    border-bottom: 5px solid #4b4f58;

    .header {
      display: flex;
      background-color: #000000;
      align-items: center;
      justify-content: center;
      gap: 40px;
      width: 100%;
      @media screen and (max-width: 1023px) {
        display: block;
        text-align: center;
      }
      @media screen and (max-width: 426px) {
        padding: 10px;
      }

      .title {
        h2 {
          color: var(--e-global-color-a83d40f);
          font-family: "Chakra Petch", Sans-serif;
          font-size: 60px;
          font-weight: 700;
          text-transform: inherit;

          @media screen and (max-width: 426px) {
            font-size: 30px;
            text-transform: uppercase;
          }
        }
      }

      .logo {
        img {
          @media screen and (max-width: 426px) {
            width: 60%;
          }
        }
      }
    }
    .slick-list {
      overflow: hidden;
    }
    .wrap-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: url("https://hesman.net/wp-content/uploads/2022/03/Our-Partners-Cloud.svg")
        no-repeat center center/cover;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 1140px;
        width: 100%;
        padding-bottom: 3rem;
        .title {
          color: var(--e-global-color-text);
          font-family: "Chakra Petch", Sans-serif;
          font-weight: bold;
          letter-spacing: -0.05px;

          h1 {
            font-size: 100px;
            text-transform: inherit;

            @media screen and (max-width: 426px) {
              font-size: 60px;
            }
          }
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(167px, 1fr));
          width: 100%;

          .item {
            width: 170px;
            padding: 10px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .slick-track {
            display: flex;
            gap: 160px;
          }
        }
      }
    }
  }
`;
const ContainerImg = styled.img`
  width: 100%;
  min-width: 193px;
`;
const Test = styled.div`
  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    width: 300px;
  }
  display: flex;
  justify-content: center;
`;

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
    <PartnerStyles>
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
                  <Test>
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
