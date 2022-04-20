import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.section`
  height: 87px;
  z-index: 99;

  .header--container {
    height: 100%;
    border-bottom: 5px solid var(--ast-global-color-3);

    /* LOGO */
    .header__logo {
      width: 14.043%;
      height: 100%;

      .header__logo--content {
        width: 100%;
        height: 100%;

        a {
          height: 100%;
          width: 100%;
          .header__logo-item {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    /* NAVBAR */
    .header__nav {
      width: 65.961%;
      height: 100%;

      .header__nav--list {
        display: flex;
        align-items: center;
        justify-content: center;

        .header__nav--list-item {
          a {
            padding-left: 7px;
            padding-right: 7px;
            font-size: 18px;
            font-weight: 700;
          }
        }
      }
    }

    /* CLOUD */
    .header__cloud {
      width: 19.66%;
      height: 100%;

      .header__cloud--wrap {
        width: 216px;
        height: 100%;

        .header__cloud--img {
          width: 100%;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header--container display-center  pad-10">
        <div className="header__logo">
          <div className="header__logo--content">
            <a href="#">
              <img
                className="header__logo-item"
                src="https://hesman.net/wp-content/uploads/2022/02/hesman-logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="header__nav display-center ">
          <div>
            <div className="header__nav--list">
              <li className="header__nav--list-item">
                <a href="">TRANG CHỦ</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">GIỚI THIỆU</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">HỆ SINH THÁI</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">TOKENOMICS</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">LỘ TRÌNH</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">DAPP</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">ĐỐI TÁC</a>
              </li>
              <li className="header__nav--list-item">
                <a href="">LIÊN HỆ</a>
              </li>
            </div>
          </div>
        </div>

        <div className="header__cloud display-center ">
          <div className="header__cloud--wrap">
            <img
              className="header__cloud--img"
              src="https://hesman.net/wp-content/uploads/2022/03/Header-JoinNow.png.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
