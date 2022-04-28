import React from "react";
import Slider from "react-slick/lib/slider";
import styled from "styled-components";

const MemberStyles = styled.section`
  padding: 50px 10px 50px 10px;

  .member {
    width: 100%;
    display: flex;
    /* height: 900px; */
    position: relative;
    justify-content: space-around;

    @media screen and (max-width: 1023px) {
      display: block;
    }

    .review {
      /* position: absolute; */
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
      /* position: absolute; */
      width: 55%;

      @media screen and (max-width: 1023px) {
        width: 100%;
      }

      .item {
        position: relative;
        cursor: move;

        &:hover .item-name img {
          display: block;
        }

        filter: brightness(60%) contrast(100%) saturate(100%) blur(0px)
          hue-rotate(0deg);

        &:hover {
          filter: brightness(100%) contrast(100%) saturate(100%) blur(0px)
            hue-rotate(0deg);
        }
        img {
          width: 527px;
          border: none !important;
        }
        &:focus-visible {
          outline: none !important;
        }
        .item-name {
          position: absolute;
          bottom: 0;
          left: 144px;

          .item-img:focus-visible {
            border: none !important;
          }

          img {
            width: 250px;
            display: none;
          }
        }
      }
    }

    .slick-track {
      display: flex;
      gap: 73px;

      @media screen and (max-width: 1023px) {
        gap: 114px;
      }

      @media screen and (max-width: 426px) {
        gap: 224px;
      }
    }

    .slick-slide:active {
      border: none;
    }
  }
`;

const dataMember = [
  {
    id: 1,
    title: "",
  },
  {
    id: 2,
    title: "",
  },
  {
    id: 3,
    title: "",
  },
  {
    id: 4,
    title: "",
  },
  {
    id: 5,
    title: "",
  },
];

const Member = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
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
          <Slider {...settings}>
            <div className="item">
              <img
                className="item-img"
                src="https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp"
                alt=""
              />

              <div className="item-name">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="item">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp"
                alt=""
              />

              <div className="item-name">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="item">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp"
                alt=""
              />

              <div className="item-name">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="item">
              <img
                src="https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp"
                alt=""
              />

              <div className="item-name">
                <img
                  src="https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </MemberStyles>
  );
};

export default Member;
