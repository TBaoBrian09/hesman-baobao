import React from "react";
import styled from "styled-components";

const FutureStyles = styled.section`
  margin-top: -17px;

  @media screen and (max-width: 426px) {
    margin-top: 0px;
  }
  .container {
    width: 100%;

    .imgContainer {
      @media screen and (max-width: 426px) {
        display: none;
      }
      img {
        width: 100%;
      }
    }

    .mobileContainer {
      display: none;
      @media screen and (max-width: 426px) {
        display: block;
      }

      .mobile__heading {
        .mobile__cloud {
          text-align: center;
        }
        .mobile__imgContainer {
          img {
            width: 100%;
          }
        }
      }

      .mobile__img {
        .mobile-bg-item1 {
          background: url("https://hesman.net/wp-content/uploads/2022/03/BG.png")
            no-repeat center center/cover;
        }
        .mobile-bg-item2 {
          background: url("https://hesman.net/wp-content/uploads/2022/03/BG-2.png")
            no-repeat center center/cover;
        }
        .mobile-bg-item3 {
          background: url("https://hesman.net/wp-content/uploads/2022/03/BG-3.png")
            no-repeat center center/cover;
        }
      }

      .mobile__title {
        text-align: center;

        h1 {
          font-size: 48px;
          line-height: 30px;
          text-transform: inherit;
          margin-bottom: 20px;
        }

        p {
          font-size: 24px;
          line-height: 32px;
          color: var(--e-global-color-d1a5768);
          font-family: "Jura", Sans-serif;
          font-weight: 700;
        }
      }
    }
  }
`;

const Future = () => {
  return (
    <FutureStyles>
      <div className="container">
        <div className="imgContainer">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Future2.png.webp"
            alt=""
          />
        </div>

        <div className="mobileContainer">
          <div className="mobile__heading">
            <div className="mobile__cloud">
              <img
                src="https://hesman.net/wp-content/uploads/2022/04/Vision-7.png.webp"
                alt=""
              />
            </div>
            <div className="mobile__title">
              <h1>Sản xuất</h1>
              <p>hoạt hình & điện ảnh</p>
            </div>
            <div className="mobile__imgContainer">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-1.png.webp"
                alt=""
              />
            </div>
          </div>

          <div className="mobile__img">
            <div className="mobile__img-item mobile-bg-item1">
              <PaddingTop pt="50px">
                <div className="mobile__title">
                  <h1>Mô hình</h1>
                  <p>lắp ráp 3D</p>
                </div>
              </PaddingTop>
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-2.png.webp"
                alt=""
              />
            </div>

            <div className="mobile__img-item mobile-bg-item2">
              <PaddingTop pt="50px">
                <div className="mobile__title">
                  <h1>KOLs</h1>
                  <p>collaboration</p>
                </div>
              </PaddingTop>

              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-3.png.webp"
                alt=""
              />
            </div>

            <div className="mobile__img-item mobile-bg-item3">
              <PaddingTop pt="50px">
                <div className="mobile__title">
                  <h1>Sản xuất</h1>
                  <p>nhạc độc quyền</p>
                </div>
              </PaddingTop>

              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-4.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </FutureStyles>
  );
};

const PaddingTop = styled.div`
  padding-top: ${(props) => props.pt || "0px"};
`;

export default Future;
