import React from "react";
import { SloganStyles } from "./SloganStyles";

const Slogan = () => {
  return (
    <SloganStyles>
      <div className="slogan">
        <div className="right">
          <div className="wrap">
            <div className="title">
              <div>
                <div className="mission1">
                  <h2>Sứ mệnh</h2>
                </div>
                <div className="mission2">
                  <h2>TIÊN PHONG</h2>
                </div>
                <div className="mission3">
                  <h2>CHO CÁC DỰ ÁN</h2>
                </div>
                <div className="mission-nft">
                  <h1>NFT</h1>
                </div>
                <div className="mission4">
                  <h2>
                    TRONG NƯỚC, ĐƯA CÁC TÁC PHẨM
                    <br />
                    NGHỆ THUẬT VIỆT RA THỊ TRƯỜNG QUỐC TẾ
                  </h2>
                </div>
              </div>
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
              <div>
                <div className="mission1">
                  <h2>Tầm nhìn</h2>
                </div>

                <div className="mission3">
                  <h2>ĐƯA HESMAN LEGAND</h2>
                </div>

                <div className="mission2">
                  <h2>
                    <p>thành dự án toàn diện</p>
                    <p>PHÓNG TÁC THÀNH TRUYỆN TRANH</p>
                  </h2>
                </div>

                <div className="mission3">
                  <h2>Việt Nam</h2>
                </div>
              </div>
            </div>

            <div className="bg">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Frame2.png.webp"
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
