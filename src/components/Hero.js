import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  /* height: 1000vh; */
  min-height: 795px;
  overflow: hidden;

  .hero--container {
    position: absolute;
    width: 100%;

    .hero__cloud--legand {
      width: 100%;
      z-index: 99;
      img {
        max-width: 272px;
      }
    }

    .hero__cloud--legand-comic {
      width: calc(100% - 110px);
      text-align: right;
      position: absolute;
      top: 237px;

      img {
        width: 240px;
      }
    }

    .hero__show {
      position: absolute;
      top: -105px;
      left: 52px;

      img {
        width: 700px;
      }
    }

    .hero__commicbook {
      width: calc(100% - 213px);
      text-align: right;
      position: absolute;
      top: 167px;

      img {
        width: 533px;
      }
    }

    .hero__superhero {
      width: calc(100% - 200px);
      text-align: right;
      position: absolute;
      top: 58px;

      img {
        width: 700px;
      }
    }

    .hero__present {
      position: absolute;
      top: 60px;
      width: calc(100% - 734px);
      text-align: right;

      img {
        width: 300px;
      }
    }

    .hero__cart--wrap {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0px 10px;
      position: absolute;
      top: 390px;

      .hero__cart {
        width: 50%;

        .hero__cart--item {
          width: 235px !important;
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
      }
    }
  }

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: url("https://hesman.net/wp-content/uploads/2022/04/Hero-Background.svg")
      no-repeat center center/cover;
    z-index: -1;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero--container">
        {/* presents img */}
        <div className="hero__present">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Hero-3.svg"
            alt=""
          />
        </div>

        {/* commic superhero img */}
        <div className="hero__superhero">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Hero-4.svg"
            alt=""
          />
        </div>

        {/* commic book img*/}
        <div className="hero__commicbook">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Hero-5.svg"
            alt=""
          />
        </div>

        {/* cloud show hero img */}
        <div className="hero__show">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Hero-1.svg"
            alt=""
          />
        </div>

        {/* clound legand */}
        <div className="hero__cloud--legand">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Vision.png.webp"
            alt=""
          />
        </div>

        <HeroCartSlick />

        {/* cloud legand commic */}
        <div className="hero__cloud--legand-comic">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Hero-6-2.png.webp"
            alt=""
          />
        </div>
      </div>
    </HeroContainer>
  );
};

function HeroCartSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className="w-full hero__cart--wrap">
        <div className="hero__cart">
          <Slider {...settings}>
            <div className="hero__cart--item">
              <div className="wrap--img">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/hero-1.png.webp"
                  alt=""
                />
              </div>
              <div className="opacity"></div>
            </div>

            <div className="hero__cart--item">
              <div className="wrap--img">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Hero-2.png.webp"
                  alt=""
                />
              </div>
              <div className="opacity"></div>
            </div>

            <div className="hero__cart--item">
              <div className="wrap--img">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Hero-3.png.webp"
                  alt=""
                />
              </div>
              <div className="opacity"></div>
            </div>

            <div className="hero__cart--item">
              <div className="wrap--img">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Hero-3.png.webp"
                  alt=""
                />
              </div>
              <div className="opacity"></div>
            </div>

            <div className="hero__cart--item">
              <div className="wrap--img">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Hero-3.png.webp"
                  alt=""
                />
              </div>
              <div className="opacity"></div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Hero;
