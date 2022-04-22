import React from "react";
import styled from "styled-components";

const SloganStyles = styled.section`
  .slogan {
    display: flex;
    gap: 20px;
    position: relative;
    width: 100%;
    height: 900px;
    .wrap {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      position: relative;
    }

    .right {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
    }

    .left {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 10px;
    }

    .bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 900px;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
`;

const Slogan = () => {
  return (
    <SloganStyles>
      <div className="slogan">
        <div className="right">
          <div className="wrap">
            <div className="title">
              <h2>Sứ mệnh</h2>
              <p>TIÊN PHONG</p>
              <span>CHO CÁC DỰ ÁN</span>
              <h1>NFT</h1>
              <span>
                TRONG NƯỚC, ĐƯA CÁC TÁC PHẨM
                <br />
                NGHỆ THUẬT VIỆT RA THỊ TRƯỜNG QUỐC TẾ
              </span>
            </div>
            <div className="bg">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Frame.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="left">
          <div className="wrap">
            <div className="title">
              <h2>Tầm nhìn</h2>
              <span>ĐƯA HESMAN LEGAND</span>
              <h1>NFT</h1>
              <p>
                thành dự án NFT đầu tiên <br /> PHÓNG TÁC THÀNH TRUYỆN TRANH
              </p>
              <span>Việt Nam</span>
            </div>

            <div className="bg">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Frame.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </SloganStyles>
  );
};

export default Slogan;
