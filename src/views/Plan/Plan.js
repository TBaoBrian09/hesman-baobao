import React from "react";
import {
  ItemBg1,
  ItemBg2,
  ItemTitle,
  MobileItem,
  PlanStyles,
} from "./PlanStyles";

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
