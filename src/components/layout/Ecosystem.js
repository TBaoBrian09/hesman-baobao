import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

const EcosystemStyles = styled.section`
  position: relative;
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

    @media screen and (max-width: 426px) {
      font-size: 24px;
    }
  }

  .banner {
    width: 100%;
    @media screen and (max-width: 426px) {
      display: none;
    }

    img {
      width: 100%;
      margin-bottom: 5px;
    }
  }

  .mobile-slider {
    display: none;
    @media screen and (max-width: 426px) {
      display: block;
    }
    .list {
      .item {
        img {
          width: 100%;
          padding: 0px 30px;
        }
      }
    }
  }
`;

const Ecosystem = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <EcosystemStyles>
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
