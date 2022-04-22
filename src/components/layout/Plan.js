import React from "react";
import styled from "styled-components";

const PlanStyles = styled.section`
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
        }
      }
    }

    .banner {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
`;

const Plan = () => {
  return (
    <PlanStyles>
      <div className="container">
        <div className="header">
          <div className="name">
            <h1>toconmics</h1>
          </div>
          <div className="title">
            <h2>
              Hesman Shard token sẽ được phát hành theo mô hình fair-launch.
              Không private, không seed round.
            </h2>
          </div>
        </div>
        <div className="banner">
          <img
            src="https://hesman.net/wp-content/uploads/2022/04/tokenomic-5.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </PlanStyles>
  );
};

export default Plan;
