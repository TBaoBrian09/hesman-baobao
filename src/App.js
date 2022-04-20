import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";

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

function App() {
  return (
    <>
      <Header></Header>
      <Hero />
    </>
  );
}

export default App;
