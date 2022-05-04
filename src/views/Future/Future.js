import React from "react";
import { FutureStyles, PaddingTop } from "./FutureStyles";

const Future = () => {
  return (
    <FutureStyles>
      <div className="container">
        <div className="imgContainer">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Future2.png.webp"
            alt=""
          />
        </div>

        <div className="mobileContainer">
          <div className="mobile__heading">
            <div className="mobile__cloud">
              <img
                src="https://hesman.net/wp-content/uploads/2022/04/Vision-7.png.webp"
                alt=""
              />
            </div>
            <div className="mobile__title">
              <h1>Sản xuất</h1>
              <p>hoạt hình & điện ảnh</p>
            </div>
            <div className="mobile__imgContainer">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-1.png.webp"
                alt=""
              />
            </div>
          </div>

          <div className="mobile__img">
            <div className="mobile__img-item mobile-bg-item1">
              <PaddingTop pt="50px">
                <div className="mobile__title">
                  <h1>Mô hình</h1>
                  <p>lắp ráp 3D</p>
                </div>
              </PaddingTop>
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-2.png.webp"
                alt=""
              />
            </div>

            <div className="mobile__img-item mobile-bg-item2">
              <PaddingTop pt="50px">
                <div className="mobile__title">
                  <h1>KOLs</h1>
                  <p>collaboration</p>
                </div>
              </PaddingTop>

              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-3.png.webp"
                alt=""
              />
            </div>

            <div className="mobile__img-item mobile-bg-item3">
              <PaddingTop pt="50px">
                <div className="mobile__title">
                  <h1>Sản xuất</h1>
                  <p>nhạc độc quyền</p>
                </div>
              </PaddingTop>

              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Cartoon-4.png.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </FutureStyles>
  );
};

export default Future;
