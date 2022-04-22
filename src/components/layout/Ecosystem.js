import React from "react";
import styled from "styled-components";

const EcosystemStyles = styled.section`
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
  }

  .banner {
    width: 100%;

    img {
      margin-bottom: 5px;
      width: 70px;
    }
  }
`;

const Ecosystem = () => {
  return (
    <EcosystemStyles>
      <div className="container">
        <div className="header">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
          hệ sinh thái
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame-1.png.webp"
            alt=""
          />
        </div>
        <div className="banner">
          <img
            src="https://hesman.net/wp-content/uploads/2022/04/slide-pc-1-10.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </EcosystemStyles>
  );
};

export default Ecosystem;
