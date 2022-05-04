import React, { useEffect, useState } from "react";
import Slider from "react-slick/lib/slider";
import { MemberStyles } from "./MemberStyles";

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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
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
