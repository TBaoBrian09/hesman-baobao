import styled from "styled-components";

export const JourneysStyles = styled.section`
  position: relative;
  .container {
    .header {
      background-color: #000000;
      padding: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--e-global-color-a83d40f);
      font-family: "Chakra Petch", Sans-serif;
      font-size: 34px;
      font-weight: 700;
      text-transform: uppercase;
      gap: 10px;
      @media screen and (max-width: 426px) {
        font-size: 25px;
      }
    }

    .content {
      width: 100%;
      padding: 50px 0px 50px 0px;

      .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        gap: 8px;

        .item {
          position: relative;
          border: 5px solid #000;
          filter: brightness(100%) contrast(100%) saturate(0%) blur(0px)
            hue-rotate(0deg);

          .item-img {
            img {
              width: 100%;
              height: 100%;
            }
          }

          .item-content {
            position: absolute;
            bottom: 18px;
            padding: 0 12px;

            @media screen and (max-width: 1440px) {
              bottom: 4px;
            }

            h2 {
              color: #000000;
              font-family: "Chakra Petch", Sans-serif;
              font-size: 30px;
              font-weight: 700;
            }

            p {
            }
          }

          &:hover {
            filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
              hue-rotate(0deg);
          }
        }

        .slick-track {
          display: flex;
          gap: 0px 6px;
        }

        .slick-dots li button:before {
          font-size: 16px;
        }
      }
    }
  }
`;
