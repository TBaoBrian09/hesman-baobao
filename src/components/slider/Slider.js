import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

export const SlickSliderStyles = styled.section`
  .cart--wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 10px;
    position: absolute;
    /* top: 390px; */

    .cart {
      width: ${({ width }) => width};

      .cart--item {
        /* width: 235px !important; */
        min-height: 364px;
        cursor: all-scroll;
        position: relative;
        border: 4px solid black;

        .wrap--img {
          position: absolute;

          img {
            width: 100%;
            height: 100%;
            background: no-repeat center center/cover;
          }
        }

        .opacity {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.5;
        }

        &:hover .opacity {
          display: none;
        }
      }

      .slick-track {
        display: flex;
        gap: 20px;
      }

      .slick-cloned {
        display: none;
      }
    }
  }

  .slick-track {
    width: 100% !important;
  }
`;

const SlickSlider = ({ dataItem, width, children, ...props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
  };

  console.log(width);

  return (
    <SlickSliderStyles width={width}>
      <div className="w-full cart--wrap">
        <div className="cart">
          <Slider {...settings}>
            {dataItem &&
              dataItem.map((item) => (
                <div className="cart--item" key={item.id}>
                  <div className="wrap--img">
                    <img src={item.url} alt="" />
                  </div>
                  <div className="opacity"></div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </SlickSliderStyles>
  );
};

export default SlickSlider;
