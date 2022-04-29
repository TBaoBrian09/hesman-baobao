import React, { useEffect, useState } from "react";
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
    img: "https://hesman.net/wp-content/uploads/2022/03/Group-68.png.webp",
    name: "https://hesman.net/wp-content/uploads/2022/03/Team-hung-lan-2.png.webp",
    title:
      "Họa sĩ Nguyễn Hùng Lân sinh năm 1956, là một trong số rất ít họa sĩ vẽ truyện tranh Việt đạt được nhiều thành tựu to lớn" +
      "trong sự nghiệp Ngoài Dũng sĩ Hesman làm mưa làm gió thị trường truyện tranh Việt, độc giả còn quen thuộc với truyện tranh /“Siêu nhân Việt Nam/”, Cô Tiên Xanh và những đầu sách mà ông tham gia vẽ tranh minh họa như Võ sĩ đạo Samurai, Nghìn lẻ một đêm, Gương sáng tuổi xanh, v.v. Số đầu truyện tranh của ông đã xuất bản tính từ năm 1987 đến nay đã gần 700 tập đủ mọi thể loại.",
  },
  {
    id: 2,
    img: "https://hesman.net/wp-content/uploads/2022/03/Group-67.png.webp",
    name: "https://hesman.net/wp-content/uploads/2022/03/Team-Title-4.png.webp",
    title:
      "Bắt đầu sản xuất game từ năm 2013 với dự án đầu tay là Gà Chiến Mobile thành công rực rỡ, anh Quân đã cùng vài đồng nghiệp cho ra đời các sản phẩm như Phong Vân Mobile, Đại sư huynh, và đặc biệt là Tình Võ Lâm Mobile, lấy ý tưởng từ Võ Lâm Truyền Kỳ với hơn 5 năm hoạt động sôi nổi. Anh từng làm việc tại nhiều công ty và tập đoàn danh tiếng của Việt Nam như Viettel, Tinh Van, VC Corp, v.v.",
  },
  {
    id: 3,
    img: "https://hesman.net/wp-content/uploads/2022/03/Group-66.png.webp",
    name: "https://hesman.net/wp-content/uploads/2022/03/Team-Title-2.png.webp",
    title:
      "Với niềm đam mê game từ bé, Đinh Quang Huy đã làm việc 8 năm ở vị trí game design tại các công ty lớn như VC Corp, Vật Giá, Tripsoft, cho ra đời nhiều sản phẩm đòi hỏi sự phức tạp về hệ thống, sự cân bằng tuyệt đối và mức độ phong phú về nội dung cao. Anh đặc biệt yêu thích trải nghiệm và nghiên cứu các tựa game nổi tiếng như Diablo, Võ Lâm Truyền Kỳ, Dota, v.v. để hoàn thiện các sản phẩm của mình.",
  },
  {
    id: 4,
    img: "https://hesman.net/wp-content/uploads/2022/03/Group-65.png.webp",
    name: "https://hesman.net/wp-content/uploads/2022/03/Team-Title-3.png.webp",
    title:
      "Với niềm đam mê game từ bé, Đinh Quang Huy đã làm việc 8 năm ở vị trí game design tại các công ty lớn như VC Corp, Vật Giá, Tripsoft, cho ra đời nhiều sản phẩm đòi hỏi sự phức tạp về hệ thống, sự cân bằng tuyệt đối và mức độ phong phú về nội dung cao. Anh đặc biệt yêu thích trải nghiệm và nghiên cứu các tựa game nổi tiếng như Diablo, Võ Lâm Truyền Kỳ, Dota, v.v. để hoàn thiện các sản phẩm của mình.",
  },
];

const Member = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const [aboutMember, setAboutMember] = useState({});
  console.log(
    Object.getOwnPropertyNames(aboutMember).length === 0 ? "true" : "false"
  );

  return (
    <MemberStyles>
      <div className="member">
        <div className="review">
          <h2>Đội ngũ</h2>
          <div className="title">
            <p>
              {Object.getOwnPropertyNames(aboutMember).length === 0
                ? dataMember[0].title
                : aboutMember.title}
            </p>
          </div>
        </div>

        <div className="slider">
          <Slider {...settings}>
            {dataMember.map((item) => (
              <div
                className="item"
                key={item.id}
                onClick={() => setAboutMember(item)}
              >
                <img className="item-img" src={item.img} alt="" />

                <div className="item-name">
                  <img src={item.name} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </MemberStyles>
  );
};

export default Member;
