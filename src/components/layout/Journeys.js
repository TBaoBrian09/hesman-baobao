import React from "react";
import styled from "styled-components";
import SlickSlider from "../slider/Slider";

const JourneysStyles = styled.section`
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
    }

    .content {
      width: 100%;
      padding: 0px 18px;

      .list {
        display: flex;
      }
    }
  }
`;

const dataItem = [
  {
    id: 1,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-1.png.webp",
  },
  {
    id: 2,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-2.png.webp",
  },
  {
    id: 3,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-3.png.webp",
  },
  {
    id: 4,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-4.png.webp",
  },
  {
    id: 5,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-5.png.webp",
  },
  {
    id: 6,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-6.png.webp",
  },
  {
    id: 7,
    url: "https://hesman.net/wp-content/uploads/2022/03/Lo-trinh-7.png.webp",
  },
];

const Journeys = () => {
  return (
    <JourneysStyles>
      <div className="container">
        <div className="header">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
          lộ trình
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
        </div>

        <div className="content">
          <SlickSlider dataItem={dataItem} width="100%"></SlickSlider>
        </div>
      </div>
    </JourneysStyles>
  );
};

export default Journeys;
