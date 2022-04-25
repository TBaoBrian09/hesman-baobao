import React from "react";
import styled from "styled-components";

const ContactStyles = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px 50px 10px;
  @media screen and (max-width: 1023px) {
    padding: 0;
  }
  .container {
    width: 100%;
    max-width: 1140px;
    display: flex;

    .formContainer {
      width: 50%;
      @media screen and (max-width: 1023px) {
        width: 100%;
        padding: 65px 18px;
      }

      .title {
        h1 {
          color: var(--e-global-color-text);
          font-family: "Chakra Petch", Sans-serif;
          font-size: 100px;
          font-weight: bold;
          letter-spacing: -0.05px;
          @media screen and (max-width: 1023px) {
            text-transform: inherit;
            text-align: center;
          }
        }
      }

      .input {
        margin-bottom: 10px;

        input {
          background-color: #ffffff;
          border-color: #000000;
          border-width: 5px 5px 5px 5px;
          width: 100%;
          flex-grow: 1;
          font-size: 18px;
          padding: 15px 10px;
          font-weight: 700;
        }
      }

      .textare {
        margin-bottom: 10px;

        textarea {
          background-color: #ffffff;
          border-color: #000000;
          border-width: 5px 5px 5px 5px;
          width: 100%;
          flex-grow: 1;
          font-size: 18px;
          padding: 15px 10px;
          max-height: 120px;
          font-weight: 700;

          @media screen and (max-width: 1023px) {
            padding: 0;
          }
        }
      }

      .buttonContainer {
        display: flex;
        justify-content: space-between;

        .button {
          font-family: "Chakra Petch", Sans-serif;
          font-size: 24px;
          font-weight: 700;
          fill: #ffffff;
          color: #ffffff;
          padding: 10px 40px 10px 40px;
          border: none;
          text-transform: uppercase;
        }

        .btn-right {
          background-color: #303863;
        }

        .btn-left {
          background-color: var(--e-global-color-d1a5768);
        }
      }
    }

    .imgContainer {
      width: 50%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 1023px) {
        display: none;
      }

      img {
        width: 100%;
      }
    }
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

            <div className="container-input">
              <div className="input">
                <input type="text" name="fullname" placeholder="Họ và Tên" />
              </div>
              <div className="input">
                <input type="email" name="email" placeholder="Địa chỉ email" />
              </div>
              <div className="textare">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Lời nhắn"
                ></textarea>
              </div>
            </div>

            <div className="buttonContainer">
              <a href="/#" className="button btn-right">
                hesman studio
              </a>
              <button className="button btn-left">gửi</button>
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
