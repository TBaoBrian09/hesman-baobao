import styled from "styled-components";

export const MemberStyles = styled.section`
  padding: 50px 10px 50px 10px;

  .member {
    width: 100%;
    display: flex;
    /* height: 900px; */
    position: relative;
    justify-content: space-around;

    @media screen and (max-width: 1023px) {
      display: block;
    }

    .review {
      /* position: absolute; */
      width: 32%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      @media screen and (max-width: 1023px) {
        width: 100%;
        align-items: flex-start;
        margin-bottom: 40px;
      }

      h2 {
        color: var(--e-global-color-text);
        font-family: "Chakra Petch", Sans-serif;
        font-size: 90px;
        font-weight: 700;
        line-height: 76px;
        letter-spacing: -0.05px;
        margin-bottom: 20px;
        @media screen and (max-width: 1024px) {
          text-transform: inherit;
        }

        @media screen and (max-width: 425px) {
          font-size: 50px;
        }
      }

      .title {
        text-align: justify;
        p {
          font-family: "Jura", Sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 1px;
        }
      }
    }

    .slider {
      /* position: absolute; */
      width: 55%;
      margin: auto;

      @media screen and (max-width: 1023px) {
        width: 100%;
      }

      .item {
        position: relative;
        cursor: move;

        &:hover .item-name img {
          display: block;
        }

        filter: brightness(60%) contrast(100%) saturate(100%) blur(0px)
          hue-rotate(0deg);

        &:hover {
          filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
            hue-rotate(0deg);
        }
        img {
          width: 527px;
          border: none !important;
        }
        &:focus-visible {
          outline: none !important;
        }
        .item-name {
          position: absolute;
          bottom: 0;
          left: 144px;

          .item-img:focus-visible {
            border: none !important;
          }

          img {
            width: 250px;
            display: none;
          }
        }
      }
    }

    .slick-track {
      display: flex;
      /* gap: 73px; */

      @media screen and (max-width: 1024px) {
        gap: 114px;
      }

      @media screen and (max-width: 426px) {
        gap: 0px;
      }
    }

    .slick-slide:active {
      border: none;
    }
  }
`;
