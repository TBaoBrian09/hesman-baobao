import styled from "styled-components";

export const EcosystemStyles = styled.section`
  position: relative;
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
      font-size: 24px;
    }
    @media screen and (max-width: 378px) {
      font-size: 20px;
    }
  }

  .banner {
    width: 100%;
    @media screen and (max-width: 426px) {
      display: none;
    }

    img {
      width: 100%;
      margin-bottom: 5px;
    }
  }

  .mobile-slider {
    display: none;
    @media screen and (max-width: 426px) {
      display: block;
    }
    .list {
      .item {
        img {
          width: 100%;
          padding: 0px 30px;
        }
      }
    }
  }
`;