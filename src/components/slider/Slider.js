import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

export const SlickSliderStyles = styled.div`
  .cart--wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    /* top: 390px; */

    .cart {
      width: ${({ width }) => width};

      .cart--item {
        width: 100%;
        min-height: 364px;
        cursor: ${({ cursor }) => cursor};
        position: relative;
        border: ${({ borderpx }) => borderpx} solid
          ${({ bordercolor }) => bordercolor};

        .wrap--img {
          position: absolute;

          img {
            width: 100%;
            height: 100%;
            background: no-repeat center center/cover;
          }
        }

        .title {
          position: absolute;
          bottom: 15px;

          p {
            text-align: center;
          }
        }

        .opacity {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: ${({ bgOpacity }) => bgOpacity};
          opacity: ${({ opacity }) => opacity};
        }

        &:hover .opacity {
          display: none;
        }
      }

      .slick-track {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      }

      .slick-cloned {
        display: none;
      }

      .slick-slide {
        width: 100%;
      }

      .slick-track:before,
      .slick-track:after {
        display: none;
        content: "";
      }
    }
  }

  .slick-track {
    width: 100% !important;
  }
`;

const SlickSlider = ({
  dataItem,
  width,
  opacity,
  bgOpacity,
  cursor,
  borderpx,
  bordercolor,
  children,
  ...props
}) => {
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
                    <div className="title">
                      <p>{item.title}</p>
                    </div>
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
