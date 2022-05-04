import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px solid #4b4f58;
  border-bottom: 5px solid #4b4f58;
  .container {
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-content: center;
    justify-content: center;

    .layout {
      width: 100%;
      display: grid;
      grid-template-columns: 15% 60% 25%;

      @media screen and (max-width: 1025px) {
        grid-template-columns: repeat(1, 100%);
        padding: 20px 0;
      }

      .layout-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 426px) {
          padding: 35px 0px;
        }
      }

      .layout-menu-container {
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media screen and (max-width: 767px) {
          display: block;
        }
        @media screen and (max-width: 426px) {
          display: flex;
        }
        .layout-menu {
          padding: 10px 0px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          @media screen and (max-width: 1025px) {
          }

          .list {
            @media screen and (max-width: 1025px) {
              width: 100%;
            }
          }

          .item {
            padding: 13px 20px;

            a {
              font-family: "Jura", Sans-serif;
              font-size: 18px;
              font-weight: 400;
              text-transform: capitalize;
              @media screen and (max-width: 426px) {
                font-size: 16px;
              }
            }
          }
        }
      }

      .layout-contact {
        display: flex;
        align-items: center;
        justify-content: center;

        .list {
          display: flex;
          gap: 20px;

          @media screen and (max-width: 1023px) {
            width: 100%;
            justify-content: space-around;
          }

          .item {
            font-size: 30px;
          }
        }
      }
    }
  }
`;
