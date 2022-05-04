import styled from "styled-components";

export const SloganStyles = styled.section`
  .slogan {
    display: flex;
    gap: 20px;
    position: relative;
    width: 100%;
    height: 900px;

    @media screen and (max-width: 1023px) {
      display: block;
      height: auto;
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 900px;
      width: 100%;
      z-index: -1;

      @media screen and (max-width: 426px) {
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .wrap {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      position: relative;
      @media screen and (max-width: 1023px) {
        width: 100%;
      }
      @media screen and (max-width: 426px) {
        padding: 100px 0px;
      }
    }
  }

  .right,
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    @media screen and (max-width: 1023px) {
      width: 100%;
      height: 900px;
      margin: auto;
    }

    @media screen and (max-width: 426px) {
      height: auto;
    }
  }

  .title {
    /* display: flex;
      height: 100%;
      align-items: center;
      justify-content: center; */

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .mission1 {
      margin-bottom: 20px;

      @media screen and (max-width: 426px) {
        margin-bottom: auto;
      }
      h2 {
        color: var(--e-global-color-astglobalcolor8);
        font-family: "Chakra Petch", Sans-serif;
        font-size: 90px;
        font-weight: 700;
        line-height: 56px;
        margin-bottom: 20px;

        @media screen and (max-width: 426px) {
          font-size: 40px;
          line-height: 38px;
          /* margin-bottom: 0px; */
          text-transform: inherit;
        }
      }
    }

    .mission2 {
      margin-bottom: 20px;
      h2 {
        color: var(--e-global-color-d1a5768);
        font-family: "Jura", Sans-serif;
        font-size: 44px;
        font-weight: 700;
        line-height: 66px;
        text-align: center;

        p {
          &:first-child {
            font-size: 29px;
            line-height: 43px;
            text-transform: lowercase;
            margin-bottom: 20px;
          }
          &:last-child {
            font-size: 32px;
            line-height: 43px;
          }
        }

        @media screen and (max-width: 767px) {
          font-size: 36px;
          line-height: 29px;
        }

        @media screen and (max-width: 426px) {
          line-height: 50px;
        }
      }
    }

    .mission3 {
      margin-bottom: 20px;
      h2 {
        color: var(--e-global-color-text);
        font-family: "Jura", Sans-serif;
        font-size: 44px;
        font-weight: 700;
        line-height: 66px;

        @media screen and (max-width: 1024px) {
          text-align: center;
        }

        @media screen and (max-width: 767px) {
          font-size: 36px;
          line-height: 29px;
        }
      }
    }

    .mission-nft {
      h1 {
        color: var(--e-global-color-d1a5768);
        font-family: "Jura", Sans-serif;
        font-size: 225px;
        font-weight: 700;
        line-height: 75%;

        @media screen and (max-width: 426px) {
          font-size: 150px;
        }
      }
    }

    .mission4 {
      margin-bottom: 20px;
      h2 {
        color: var(--e-global-color-text);
        font-family: "Jura", Sans-serif;
        font-size: 26px;
        font-weight: 700;
        line-height: 39px;
        text-align: center;
        @media screen and (max-width: 426px) {
          font-size: 18px;
        }
      }
    }
  }
`;
