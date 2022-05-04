import { FooterStyles } from "./FooterStyles";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

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

          <div className="layout-menu-container">
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
