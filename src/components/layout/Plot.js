import React from "react";
import styled from "styled-components";

const PlotStyles = styled.section`
  .plot {
    position: relative;
    .plot--about {
      display: flex;
    
      position: relative;
      @media screen and (max-width: 1023px) {
        display: block;
      }

      .plot__img-1 {
        position: relative;
        flex: 2.11;
        height: 946px;
        img {
          width: 100%;
          height: 100%;
        }

        @media screen and (max-width: 1023px) {
          display: none;
        }
      }
  width: 100%;
      .content {
        flex: 4.5;
        position: relative;
        margin-top: 13px;
        height: 919px;
        @media screen and (max-width: 1023px) {
          margin-top: 0px;
        }

        .content--bg {
          background: url("https://hesman.net/wp-content/uploads/2022/03/Hero-7-2.jpg.webp")
            no-repeat center center/cover;
          width: 100%;
          height: 100%;

          border-right: 8px solid black;
          @media screen and (max-width: 1023px) {
            border: none;
            border-top: 8px solid black;
          }
        }

        .content--wrap {
          padding: 60px 90px 0px 90px;
          @media screen and (max-width: 426px) {
            padding: 60px 20px 0px 20px;
          }
        }

        .content__name {
          margin-bottom: 17px;

          h2 {
            color: var(--e-global-color-text);
            font-family: "Chakra Petch", Sans-serif;
            font-size: 80px;
            font-weight: 700;
            line-height: 80px;
            text-transform: inherit;

            @media screen and (max-width: 767px) {
              font-size: 50px;
              line-height: 50px;
            }

            span {
              color: #3b62ff;
            }
          }
        }

        .content__year {
          color: var(--e-global-color-text);
          font-family: "Jura", Sans-serif;
          font-size: 28px;
          font-weight: 700;
          line-height: 36px;
          margin-bottom: 17px;
        }

        .content__title {
          margin-bottom: 17px;
          h2 {
            color: var(--e-global-color-text);
            font-family: "Jura", Sans-serif;
            font-size: 16px;
            font-weight: 400;
            line-height: 27px;
          }
        }

        .content__button {
          display: flex;
          gap: 20px;

          @media screen and (max-width: 1023px) {
            justify-content: center;
          }

          .button--yellow {
            font-family: "Chakra Petch", Sans-serif;
            font-size: 24px;
            font-weight: 700;
            fill: #000000;
            color: #000000;
            background-color: #ffff00;
          }

          .button--blue {
            font-family: "Chakra Petch", Sans-serif;
            font-size: 24px;
            font-weight: 700;
            fill: #000000;
            color: #fff;
            background-color: #3b62ff;
          }
        }
      }

      .plot__img-2 {
        position: relative;
        flex: 4;
        height: 946px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .plot__logo {
      position: absolute;
      top: 532px;
      left: 149px;

      @media screen and (max-width: 1023px) {
        width: 100%;
        text-align: center;
        left: 0;
      }
      @media screen and (max-width: 767px) {
        top: 600px;
      }

      img {
        width: 177px;

        @media screen and (max-width: 1023px) {
          width: 266px;
        }
      }
    }

    .plot__cloud {
      position: absolute;
      bottom: 10px;
      right: 0;

      img {
        width: 675px;
      }
    }

    .plot__character {
      position: absolute;
      bottom: -10px;
      right: 38px;
      width: calc(100% - 10px);
      text-align: end;

      @media screen and (max-width: 1023px) {
        width: 100%;
      }

      img {
        width: 570px;

        @media screen and (max-width: 1023px) {
          width: 630px;
        }
      }
    }
  }
`;

const Plot = () => {
  return (
    <PlotStyles>
      <div className="plot">
        <div className="plot--about">
          <div className="plot__img-1">
            <img
              src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-1-377x1024.jpg.webp"
              alt=""
            />
          </div>

          <div className="content">
            <div className="content--bg">
              <div className="content--wrap">
                <div className="content__name">
                  <h2>
                    Dũng Sĩ
                    <br />
                    <span>HESMAN</span>
                  </h2>
                </div>
                <div className="content__year">
                  <p>
                    Dũng sĩ Hesman là bộ truyện tranh dài tập về siêu anh hùng
                    đầu tiên của Việt Nam, được xuất bản vào năm 1993.
                  </p>
                </div>

                <div className="content__title">
                  <h2>
                    Hesman Legend là dự án được xây dựng để hướng tới kỷ niệm 30
                    năm, nhằm mục đích làm sống lại tác phẩm kinh điển này và
                    kết nối giá trị văn hóa của cộng đồng đến thế hệ trẻ.
                  </h2>
                </div>

                <div className="content__button">
                  <a href="/#" className="button button--yellow">
                    WHITEPAPER
                  </a>
                  <a href="/#" className="button button--blue">
                    PITCH DECK
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="plot__img-2">
            <img
              src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-2.jpg.webp"
              alt=""
            />
          </div>
        </div>

        <div className="plot__logo">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Stamp.jpg.webp"
            alt=""
          />
        </div>

        <div className="plot__cloud">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-3-2.png.webp"
            alt=""
          />
        </div>

        <div className="plot__character">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-4.png.webp"
            alt=""
          />
        </div>
      </div>
    </PlotStyles>
  );
};

export default Plot;
