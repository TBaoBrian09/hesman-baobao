import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

const MemberStyles = styled.section`
  padding: 50px 10px 50px 10px;

  .member {
    display: flex;

    @media screen and (max-width: 1023px) {
      display: block;
    }

    .review {
      width: 32%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      @media screen and (max-width: 1023px) {
        width: 100%;
        align-items: flex-start;
        margin-bottom: 40px;
      }

      h2 {
        color: var(--e-global-color-text);
        font-family: "Chakra Petch", Sans-serif;
        font-size: 90px;
        font-weight: 700;
        line-height: 76px;
        letter-spacing: -0.05px;
        margin-bottom: 20px;
        @media screen and (max-width: 1023px) {
          text-transform: inherit;
        }
      }

      .title {
        text-align: justify;
        p {
          font-family: "Jura", Sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 1px;
        }
      }
    }

    .slider {
      width: 68%;
      display: flex;
      max-height: 650px;
      overflow: hidden;
      @media screen and (max-width: 1023px) {
        width: 100%;
        gap: 105px;
      }

      .slider-item {
        position: relative;
        margin: 0 -90px;
      }

      img {
        width: 517px;

        @media screen and (max-width: 1023px) {
          width: 443px;
        }
      }

      .cloud__name {
        position: absolute;
        bottom: -37px;
        right: 138px;

        img {
          width: 250px;
        }
      }
    }
  }
`;

const Member = () => {
  return (
    <MemberStyles>
      <div className="member">
        <div className="review">
          <h2>Đội ngũ</h2>
          <div className="title">
            <p>
              Họa sĩ Nguyễn Hùng Lân sinh năm 1956, là một trong số rất ít họa
              sĩ vẽ truyện tranh Việt đạt được nhiều thành tựu to lớn trong sự
              nghiệp
            </p>
            <p>
              Ngoài Dũng sĩ Hesman làm mưa làm gió thị trường truyện tranh Việt,
              độc giả còn quen thuộc với truyện tranh “Siêu nhân Việt Nam”, Cô
              Tiên Xanh và những đầu sách mà ông tham gia vẽ tranh minh họa như
              Võ sĩ đạo Samurai, Nghìn lẻ một đêm, Gương sáng tuổi xanh, v.v. Số
              đầu truyện tranh của ông đã xuất bản tính từ năm 1987 đến nay đã
              gần 700 tập đủ mọi thể loại.
            </p>
          </div>
        </div>

        <div className="slider">
          <div className="slider-item">
            <img
              srcSet="https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp"
              alt=""
            />
            <div className="cloud__name">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                alt=""
              />
            </div>
          </div>

          <div className="slider-item">
            <img
              srcSet="https://hesman.net/wp-content/uploads/2022/03/Group-66.png.webp"
              alt=""
            />
            <div className="cloud__name">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                alt=""
              />
            </div>
          </div>

          <div className="slider-item">
            <img
              srcSet="https://hesman.net/wp-content/uploads/2022/03/Group-67.png.webp"
              alt=""
            />
            <div className="cloud__name">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                alt=""
              />
            </div>
          </div>

          <div className="slider-item">
            <img
              srcSet="https://hesman.net/wp-content/uploads/2022/03/Group-68.png.webp"
              alt=""
            />
            <div className="cloud__name">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                alt=""
              />
            </div>
          </div>

          <div className="slider-item">
            <img srcSet="../images/Group12.png" alt="" />
          </div>
        </div>
      </div>
    </MemberStyles>
  );
};

export default Member;
