import styled from "styled-components";

export const PartnerStyles = styled.section`
  width: 100%;
  overflow: hidden;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url("https://hesman.net/wp-content/uploads/2022/03/Our-Partners-Background.svg")
      no-repeat center center/cover;
    border-bottom: 5px solid #4b4f58;

    .header {
      display: flex;
      background-color: #000000;
      align-items: center;
      justify-content: center;
      gap: 40px;
      width: 100%;
      @media screen and (max-width: 1023px) {
        display: block;
        text-align: center;
      }
      @media screen and (max-width: 426px) {
        padding: 10px;
      }

      .title {
        h2 {
          color: var(--e-global-color-a83d40f);
          font-family: "Chakra Petch", Sans-serif;
          font-size: 60px;
          font-weight: 700;
          text-transform: inherit;

          @media screen and (max-width: 426px) {
            font-size: 30px;
            text-transform: uppercase;
          }
        }
      }

      .logo {
        img {
          @media screen and (max-width: 426px) {
            width: 60%;
          }
        }
      }
    }
    .slick-list {
      overflow: hidden;
    }
    .wrap-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: url("https://hesman.net/wp-content/uploads/2022/03/Our-Partners-Cloud.svg")
        no-repeat center center/cover;

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 1140px;
        width: 100%;
        padding-bottom: 3rem;
        .title {
          color: var(--e-global-color-text);
          font-family: "Chakra Petch", Sans-serif;
          font-weight: bold;
          letter-spacing: -0.05px;

          h1 {
            font-size: 100px;
            text-transform: inherit;

            @media screen and (max-width: 426px) {
              font-size: 60px;
            }
          }
        }

        .list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(167px, 1fr));
          width: 100%;

          .item {
            width: 170px;
            padding: 10px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          .slick-track {
            display: flex;
            gap: 160px;
          }
        }
      }
    }
  }
`;
export const ContainerImg = styled.img`
  width: 100%;
  min-width: 193px;
`;
export const Test = styled.div`
  @media only screen and (min-width: 600px) and (max-width: 1024px) {
    width: 300px;
  }
  display: flex;
  justify-content: center;
`;
