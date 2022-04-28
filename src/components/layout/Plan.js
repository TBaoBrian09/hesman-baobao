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

      .list {
        .item {
          padding: 60px 10px;
          margin: 10px 0px;
          background: ${(props) => props.bgUrl || "#bef0f5"} no-repeat center
            center/cover;
          border-bottom: 5px solid black;
          border-top: 5px solid black;
        }
      }
    }
  }
`;

const dataPlanItem = [
  {
    name: "Team",
    percen: "10%",
    title: "Khóa 1 năm, sau đó mở 5%/tháng trong vòng 20 tháng kế tiếp",
    bgUrl: "url('https://hesman.net/wp-content/uploads/2022/04/Group-82.png')",
  },
  {
    name: "Public Sale",
    percen: "35%",
    title:
      "Giá 0.02$. 50% vốn huy động thông qua IDO sẽ được thêm vào thanh khoản. Lượng token không bán được sẽ bị đốt",
    bgUrl: "url('https://hesman.net/wp-content/uploads/2022/04/Group-82.png')",
  },
  {
    name: "Initial Liquidity",
    percen: "5%",
    title: "10% mở khóa tại TGE. Sau đó mở 5%/tuần",
    bgUrl: "url('https://hesman.net/wp-content/uploads/2022/04/Group-82.png')",
  },
  {
    name: "Liquidity Mining and Incentives",
    percen: "30%",
    title:
      "Lượng token sẽ chỉ được mint ra theo tỉ lệ & số lượng người dùng stake NFT và token vào farm/pool. Người dùng sẽ chịu phí 10% trên lượng reward khi rút tài sản khỏi farm/pool.",
    bgUrl: "url('https://hesman.net/wp-content/uploads/2022/04/Group-82.png')",
  },
  {
    name: "Gaming Rewards",
    percen: "5%",
    title: "0.1% cố định/ngày",
    bgUrl: "url('https://hesman.net/wp-content/uploads/2022/04/Group-82.png')",
  },
];

const Plan = () => {
  return (
    <PlanStyles>
      <div className="container">
        <div className="header">
          <div className="name">
            <h1>tokennomics</h1>
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

        <div className="mobile">
          <div className="list">
            {dataPlanItem.length > 0 &&
              dataPlanItem.map((item) => (
                <div className="item" bgUrl={item.bgUrl} key={item.name}>
                  <div className="title__name">
                    <h2>{item.name}</h2>
                    <p>{item.percen}</p>
                  </div>
                  <div className="title__content">
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </PlanStyles>
  );
};

export default Plan;
