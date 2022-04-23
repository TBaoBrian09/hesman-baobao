import React from "react";
import styled from "styled-components";

const ContactStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    max-width: 1140px;
    display: flex;
  }
`;

const Contact = () => {
  return (
    <ContactStyles>
      <div className="container">
        <div className="formContainer">
          <form action="">
            <div className="title">
              <h1>Liên hệ</h1>
            </div>
            <div className="input">
              <input type="text" placeholder="Họ và Tên" />
            </div>
            <div className="input">
              <input type="text" placeholder="Họ và Tên" />
            </div>
            <div className="input">
              <input type="text" placeholder="Họ và Tên" />
            </div>
            <div className="buttonContainer">
              <button>hesman studio</button>
              <button>gửi</button>
            </div>
          </form>
        </div>
        <div className="imgContainer">
          <img
            src="https://hesman.net/wp-content/uploads/2022/03/Frame.svg"
            alt=""
          />
        </div>
      </div>
    </ContactStyles>
  );
};

export default Contact;
