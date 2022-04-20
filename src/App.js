import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

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
        width: 553px;
      }
    }

    .hero__superhero {
      width: calc(100% - 200px);
      text-align: right;
      position: absolute;
      top: 60px;

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

          {/* cloud legand commic */}
          <div className="hero__cloud--legand-comic">
            <img
              src="https://hesman.net/wp-content/uploads/2022/03/Hero-6-2.png.webp"
              alt=""
            />
          </div>
        </div>
      </HeroContainer>
    </>
  );
}

export default App;
