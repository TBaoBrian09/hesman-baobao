import React from "react";
import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 5px solid #4b4f58;
  border-bottom: 5px solid #4b4f58;
  .container {
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-content: center;
    justify-content: center;

    .layout {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 25%);

      @media screen and (max-width: 1023px) {
        grid-template-columns: repeat(1, 100%);
        padding: 20px 0;
      }

      .layout-logo {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .layout-menu {
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        @media screen and (max-width: 1023px) {
        }

        .list {
          @media screen and (max-width: 1023px) {
            width: 100%;
          }
        }

        .item {
          padding: 13px 20px;

          a {
            font-family: "Jura", Sans-serif;
            font-size: 18px;
            font-weight: 400;
            text-transform: capitalize;
          }
        }
      }

      .layout-contact {
        display: flex;
        align-items: center;
        justify-content: center;

        .list {
          display: flex;
          gap: 20px;

          @media screen and (max-width: 1023px) {
            width: 100%;
            justify-content: space-around;
          }

          .item {
            font-size: 30px;
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className="container">
        <div className="layout">
          <div className="layout-logo">
            <a href="/#">
              <img
                src="https://hesman.net/wp-content/uploads/2022/02/hesman-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="layout-menu menu1">
            <div className="list">
              <li className="item">
                <a href="/#">Trang chủ</a>
              </li>
              <li className="item">
                <a href="/#">Giới thiệu</a>
              </li>
              <li className="item">
                <a href="/#">Hệ sinh thái</a>
              </li>
              <li className="item">
                <a href="/#">Tokenomics</a>
              </li>
              <li className="item">
                <a href="/#">Lộ trình</a>
              </li>
              <li className="item">
                <a href="/#">Dapp</a>
              </li>
            </div>
          </div>
          <div className="layout-menu menu2">
            <div className="list">
              <li className="item">
                <a href="/#">Đối tác</a>
              </li>
              <li className="item">
                <a href="/#">Pitch Deck</a>
              </li>
              <li className="item">
                <a href="/#">Whitepaper</a>
              </li>
              <li className="item">
                <a href="/#">Hesman studio</a>
              </li>
              <li className="item">
                <a href="/#">Điều khoản sử dụng</a>
              </li>
              <li className="item">
                <a href="/#">Chính sách Quyền riêng tư</a>
              </li>
            </div>
          </div>

          <div className="layout-contact">
            <div className="list">
              <li className="item">
                <a href="/#">
                  <AiFillFacebook />
                </a>
              </li>
              <li className="item">
                <a href="/#">
                  <BsTelegram />
                </a>
              </li>
              <li className="item">
                <a href="/#">
                  <AiFillTwitterSquare />
                </a>
              </li>
              <li className="item">
                <a href="/#">
                  <AiFillYoutube />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
