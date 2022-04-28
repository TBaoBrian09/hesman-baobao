import { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 795px;
  overflow: hidden;

  @media screen and (max-width: 426px) {
    min-height: 1000px;
  }

  .hero--container {
    position: absolute;
    width: 100%;
    height: 100%;

    .hero__cloud--legand {
      width: 100%;
      z-index: 99;
      img {
        max-width: 272px;

        @media screen and (max-width: 426px) {
          max-width: 150px;
        }
      }
    }

    .hero__cloud--legand-comic {
      width: calc(100% - 110px);
      text-align: right;
      position: absolute;
      top: 237px;
      @media screen and (max-width: 1023px) {
        display: none;
      }

      img {
        width: 240px;
      }
    }

    .hero__commicbook {
      width: calc(100% - 213px);
      text-align: right;
      position: absolute;
      top: 167px;

      @media screen and (max-width: 1023px) {
        top: 409px;
        left: 97px;
      }
      @media screen and (max-width: 426px) {
        top: 200px;
        width: 100%;
        left: 0;
        text-align: center;
      }

      img {
        width: 533px;

        @media screen and (max-width: 426px) {
          width: 350px;
        }
      }
    }

    .hero__superhero {
      width: calc(100% - 200px);
      text-align: right;
      position: absolute;
      top: 58px;

      @media screen and (max-width: 1023px) {
        top: 300px;
      }
      @media screen and (max-width: 500px) {
        top: 150px;
        width: 100%;
      }

      img {
        width: 700px;
        @media screen and (max-width: 500px) {
          width: 400px;
        }
      }
    }

    .hero__present {
      position: absolute;
      top: 60px;
      width: calc(100% - 734px);
      text-align: right;
      @media screen and (max-width: 1023px) {
        top: 273px;
      }

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

      @media screen and (max-width: 1023px) {
        /* top: 220px; */
      }

      @media screen and (max-width: 769px) {
        top: 245px;
      }

      @media screen and (max-with: 426px) {
        top: 0px;
        bottom: 0px;
      }

      .hero__cart {
        width: 50%;
        height: 590px;

        @media screen and (max-width: 426px) {
          width: 100%;
        }

        .hero__cart--item {
          width: 235px;
          min-height: 364px;
          cursor: all-scroll;
          position: relative;
          display: flex;
          align-items: end;

          .wrap--img {
            /* position: absolute; */
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: end;

            img {
              width: 100%;
              background: no-repeat center center/cover;
              border: 4px solid black;
              filter: brightness(60%) contrast(100%) saturate(100%) blur(0px)
                hue-rotate(0deg);

              &:hover {
                filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
                  hue-rotate(0deg);
              }
            }
          }

          /* .opacity {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.5;
          } */

          &:hover .opacity {
            display: none;
          }
        }

        .slick-slider {
          @media screen and (max-width: 500px) {
            height: 100%;
          }
        }

        .slick-initialized .slick-slide {
          width: 30% !important;

          .slick-list {
            @media screen and (max-width: 500px) {
              height: 100%;
            }
          }
        }

        .slick-track {
          display: flex;
          gap: 20px;
        }

        .slick-dots {
          bottom: 12px;
        }

        .slick-dots li button:before {
          font-size: 15px;
          color: white;
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

const dataHero = [
  {
    id: 0,
    url: "https://hesman.net/wp-content/uploads/2022/03/Hero-1.svg",
    widthPc: "700px",
    widthMb: "600px",
    top: "-86px",
    left: "51px",
    topMb: "",
    leftMb: "-145px",
  },
  {
    id: 1,
    url: "https://hesman.net/wp-content/uploads/2022/03/HuyHung.png.webp",
    widthPc: "330px",
    widthMb: "303px",
    top: "",
    left: "",
    topMb: "45px",
    leftMb: "54px",
  },
  {
    id: 2,
    url: "https://hesman.net/wp-content/uploads/2022/03/Gasco.png.webp",
    widthPc: "490px",
    widthMb: "559px",
    left: "183px",
    top: "42px",
    topMb: "8px",
    leftMb: "-92px",
  },
];

const dataHeroItem = [
  {
    id: 0,
    url: "https://hesman.net/wp-content/uploads/2022/03/hero-1.png.webp",
  },
  {
    id: 1,
    url: "https://hesman.net/wp-content/uploads/2022/03/Hero-2.png.webp",
  },
  {
    id: 2,
    url: "https://hesman.net/wp-content/uploads/2022/03/Hero-3.png.webp",
  },
];

const Hero = () => {
  const [id, setId] = useState(0);

  console.log(id);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // STYLED

  const HeroShow = styled.div`
    position: absolute;
    width: 100%;
    left: ${({ left }) => left};
    top: ${({ top }) => top};

    @media screen and (max-width: 426px) {
      top: ${({ topMb }) => topMb};
      left: ${({ leftMb }) => leftMb};
    }
  `;

  const Img = styled.img`
    width: ${({ widthPc }) => widthPc};

    @media screen and (max-widht: 1023px) {
    }

    @media screen and (max-width: 426px) {
      width: ${({ widthMb }) => widthMb};
    }
  `;

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
        <HeroShow
          top={dataHero[id].top}
          left={dataHero[id].left}
          topMb={dataHero[id].topMb}
          leftMb={dataHero[id].leftMb}
        >
          <Img
            src={dataHero[id].url}
            widthPc={dataHero[id].widthPc}
            widthMb={dataHero[id].widthMb}
          />
        </HeroShow>

        {/* clound legand */}
        <div className="hero__cloud--legand">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Vision.png.webp"
            alt=""
          />
        </div>

        {/* SLider */}
        <div className="w-full hero__cart--wrap">
          <div className="hero__cart">
            <Slider {...settings}>
              {dataHeroItem.length > 0 &&
                dataHeroItem.map((item) => (
                  <div
                    key={item.id}
                    className="hero__cart--item"
                    onClick={() => setId(item.id)}
                  >
                    <div className="wrap--img">
                      <img src={item.url} alt="" />
                    </div>
                    {/* <div className="opacity"></div> */}
                  </div>
                ))}
            </Slider>
          </div>
        </div>

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

export default Hero;
