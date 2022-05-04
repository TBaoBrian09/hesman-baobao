import React from "react";
import { PlotStyles } from "./PlotStyles";

const Plot = () => {
  return (
    <PlotStyles id="plot">
      <div className="plot">
        <div className="plot--about">
          <div className="plot__img-1">
            <img
              src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-1-377x1024.jpg.webp"
              alt=""
            />
          </div>

          <div className="content">
            <div className="content--bg">
              <div className="content--wrap">
                <div className="content__name">
                  <h2>
                    Dũng Sĩ
                    <br />
                    <span>HESMAN</span>
                  </h2>
                </div>
                <div className="content__year">
                  <p>
                    Dũng sĩ Hesman là bộ truyện tranh dài tập về siêu anh hùng
                    đầu tiên của Việt Nam, được xuất bản vào năm 1993.
                  </p>
                </div>

                <div className="content__title">
                  <h2>
                    Hesman Legend là dự án được xây dựng để hướng tới kỷ niệm 30
                    năm, nhằm mục đích làm sống lại tác phẩm kinh điển này và
                    kết nối giá trị văn hóa của cộng đồng đến thế hệ trẻ.
                  </h2>
                </div>

                <div className="content__button">
                  <a href="/#" className="button button--yellow">
                    WHITEPAPER
                  </a>
                  <a href="/#" className="button button--blue">
                    PITCH DECK
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="plot__img-2">
            <img
              src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-2.jpg.webp"
              alt=""
            />
          </div>
        </div>

        <div className="plot__logo">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Stamp.jpg.webp"
            alt=""
          />
        </div>

        <div className="plot__cloud">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-3-2.png.webp"
            alt=""
          />
        </div>

        <div className="plot__character">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-4.png.webp"
            alt=""
          />
        </div>
      </div>
    </PlotStyles>
  );
};

export default Plot;
