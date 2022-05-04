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

      .mobile__plan {
        width: 100%;
        padding: 0px 0px 10px 0px;
        img {
          width: 100%;
        }
      }
    }
  }
`;

const MobileItem = styled.div`
  padding: 60px 0px;
  margin: 10px 0px;
  /* background: url(${({ url }) => url}); */
  border-bottom: 5px solid black;
  border-top: 5px solid black;
  position: relative;
  color: white;

  /* &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0px;
    background: url(${({ bg2 }) => bg2});
  } */
`;

const ItemTitle = styled.div`
  padding: 0px 10px;
  font-family: "Chakra Petch", Sans-serif;
  font-weight: 700;

  .title__name {
    display: flex;
    justify-content: space-between;
    font-size: 19px;

    h2 {
      text-transform: capitalize;
    }
    p {
    }
  }

  .title__content {
    p {
    }
  }
`;

const ItemBg1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemBg2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
  }
`;

const dataPlanItem = [
  {
    name: "Team",
    percen: "10%",
    title: "Khóa 1 năm, sau đó mở 5%/tháng trong vòng 20 tháng kế tiếp",
    bg2: "https://hesman.net/wp-content/uploads/2022/04/Group-82.png",
    bg1: "https://hesman.net/wp-content/uploads/2022/04/Rectangle-41.jpg",
  },
  {
    name: "Public Sale",
    percen: "35%",
    title:
      "Giá 0.02$. 50% vốn huy động thông qua IDO sẽ được thêm vào thanh khoản. Lượng token không bán được sẽ bị đốt",
    bg2: "https://hesman.net/wp-content/uploads/2022/04/Group-82-2.png",
    bg1: "https://hesman.net/wp-content/uploads/2022/04/Rectangle-41-2.jpg",
  },
  {
    name: "Initial Liquidity",
    percen: "5%",
    title: "10% mở khóa tại TGE. Sau đó mở 5%/tuần",
    bg2: "https://hesman.net/wp-content/uploads/2022/04/Group-82-3.png",
    bg1: "https://hesman.net/wp-content/uploads/2022/04/Rectangle-41-3.jpg",
  },
  {
    name: "Liquidity Mining and Incentives",
    percen: "30%",
    title:
      "Lượng token sẽ chỉ được mint ra theo tỉ lệ & số lượng người dùng stake NFT và token vào farm/pool. Người dùng sẽ chịu phí 10% trên lượng reward khi rút tài sản khỏi farm/pool.",
    bg2: "https://hesman.net/wp-content/uploads/2022/04/Group-82-4.png",
    bg1: "https://hesman.net/wp-content/uploads/2022/04/Rectangle-41-4.jpg",
  },
  {
    name: "Gaming Rewards",
    percen: "5%",
    title: "0.1% cố định/ngày",
    bg2: "https://hesman.net/wp-content/uploads/2022/04/Group-82-5.png",
    bg1: "https://hesman.net/wp-content/uploads/2022/04/Rectangle-41-5.jpg",
  },
];

const Plan = () => {
  return (
    <PlanStyles id="tokenomics">
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
                <MobileItem bg2={item.bg2} bg1={item.bg1} key={item.name}>
                  <ItemTitle>
                    <div className="title__name">
                      <h2>{item.name}</h2>
                      <p>{item.percen}</p>
                    </div>
                    <div className="title__content">
                      <p>{item.title}</p>
                    </div>
                  </ItemTitle>
                  <ItemBg1>
                    <img src={item.bg1} alt="" />
                  </ItemBg1>
                  <ItemBg2>
                    <img src={item.bg2} alt="" />
                  </ItemBg2>
                </MobileItem>
              ))}
          </div>
          <div className="mobile__plan">
            <img
              src="https://hesman.net/wp-content/uploads/2022/04/Group-84.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </PlanStyles>
  );
};

export default Plan;
