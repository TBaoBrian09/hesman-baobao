import styled from "styled-components";

export const PlotStyles = styled.section`
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
            @media screen and (max-width: 426px) {
              font-size: 20px;
            }
          }

          .button--blue {
            font-family: "Chakra Petch", Sans-serif;
            font-size: 24px;
            font-weight: 700;
            fill: #000000;
            color: #fff;
            background-color: #3b62ff;
            @media screen and (max-width: 426px) {
              font-size: 20px;
            }
          }
        }
      }

      .plot__img-2 {
        position: relative;
        flex: 4;
        height: 946px;

        @media screen and (max-width: 426px) {
          height: auto;
        }

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

      @media screen and (max-width: 376px) {
        top: 675px;
      }

      img {
        width: 177px;

        @media screen and (max-width: 1023px) {
          width: 266px;
        }

        @media screen and (max-width: 376px) {
          width: 200px;
        }
      }
    }

    .plot__cloud {
      position: absolute;
      bottom: 10px;
      right: 0;

      img {
        width: 675px;

        @media screen and (max-width: 426px) {
          width: 100%;
        }
      }
    }

    .plot__character {
      position: absolute;
      bottom: -10px;
      right: 38px;
      width: calc(100% - 10px);
      display: flex;
      justify-content: end;

      @media screen and (max-width: 1023px) {
        width: 100%;
      }
      @media screen and (max-width: 426px) {
        width: 100%;
        right: 0px;
      }

      img {
        width: 570px;

        @media screen and (max-width: 1023px) {
          width: 630px;
        }

        @media screen and (max-width: 426px) {
          width: 100%;
        }
      }
    }
  }
`;
