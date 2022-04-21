import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

import Hero from "./components/Hero";
import Video from "./components/Video";

const ContainerApp = styled.section`
  width: 100%;
  margin-bottom: 50px;

  .plot {
    display: flex;
    width: 100%;
    justify-content: center;

    .plot__img-1 {
      flex: 2;

      img {
        width: 100%;
      }
    }

    .content {
      flex: 5;
    }

    .plot__img-2 {
      flex: 3;

      img {
        width: 100%;
      }
    }
  }
`;

function App() {
  return (
    <ContainerApp>
      <Header></Header>
      <Hero />
      <Video />
      <div className="plot">
        <div className="plot__img-1">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-1-377x1024.jpg.webp"
            alt=""
          />
        </div>

        <div className="content">
          <div className="content__name">
            <h2>Dũng Sĩ</h2>
            <h1>HESMAN</h1>
          </div>

          <div className="content__year">
            <p>
              Dũng sĩ Hesman là bộ truyện tranh dài tập về siêu anh hùng đầu
              tiên của Việt Nam, được xuất bản vào năm 1993.
            </p>
          </div>

          <div className="content__title">
            <span>
              Hesman Legend là dự án được xây dựng để hướng tới kỷ niệm 30 năm,
              nhằm mục đích làm sống lại tác phẩm kinh điển này và kết nối giá
              trị văn hóa của cộng đồng đến thế hệ trẻ.
            </span>
          </div>
        </div>

        <div className="plot__img-2">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/About-Studio-2.jpg.webp"
            alt=""
          />
        </div>
      </div>
    </ContainerApp>
  );
}

export default App;
