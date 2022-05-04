import styled from "styled-components";

export const FutureStyles = styled.section`
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

export const PaddingTop = styled.div`
  padding-top: ${(props) => props.pt || "0px"};
`;
