import styled from "styled-components";

export const PlanStyles = styled.section`
  .container {
    .header {
      display: flex;
      flex-direction: column;

      .name {
        text-align: center;
        padding: 15px 0px 15px 0px;
        background-color: #3b62ff;
        border-style: solid;
        border-width: 3px 0px 3px 0px;
        border-color: #ffff00;

        h1 {
          color: #ffffff;
          font-family: "Russo One", Sans-serif;
          font-size: 48px;
          font-weight: normal;
          text-transform: uppercase;
          font-weight: 900;
          font-weight: normal;
          @media screen and (max-width: 426px) {
            font-size: 24px;
          }
        }
      }

      .title {
        text-align: center;
        padding: 15px 0px 15px 0px;
        background-color: #000000;

        h2 {
          color: var(--e-global-color-a83d40f);
          font-family: "Chakra Petch", Sans-serif;
          font-size: 24px;
          font-weight: 700;

          @media screen and (max-width: 426px) {
            font-size: 20px;
            text-transform: inherit;
          }
        }
      }
    }

    .banner {
      width: 100%;
      @media screen and (max-width: 426px) {
        display: none;
      }

      img {
        width: 100%;
      }
    }

    .mobile {
      display: none;
      @media screen and (max-width: 426px) {
        display: block;
      }

      .mobile__plan {
        width: 100%;
        padding: 0px 0px 10px 0px;
        img {
          width: 100%;
        }
      }
    }
  }
`;

export const MobileItem = styled.div`
  padding: 60px 0px;
  margin: 10px 0px;
  /* background: url(${({ url }) => url}); */
  border-bottom: 5px solid black;
  border-top: 5px solid black;
  position: relative;
  color: white;

  /* &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0px;
    background: url(${({ bg2 }) => bg2});
  } */
`;

export const ItemTitle = styled.div`
  padding: 0px 10px;
  font-family: "Chakra Petch", Sans-serif;
  font-weight: 700;

  .title__name {
    display: flex;
    justify-content: space-between;
    font-size: 19px;

    h2 {
      text-transform: capitalize;
    }
    p {
    }
  }

  .title__content {
    p {
    }
  }
`;

export const ItemBg1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemBg2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }
`;
