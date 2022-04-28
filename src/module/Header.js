import React, { useState } from "react";
import styled from "styled-components";
import { TiThMenuOutline } from "react-icons/ti";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderContainer = styled.section`
  height: 87px;
  z-index: 99;

  @media screen and (max-width: 1023px) {
    height: auto;
  }

  .header--container {
    height: 100%;
    padding: 10px 10px;
    border-bottom: 5px solid var(--ast-global-color-3);

    @media screen and (max-width: 1023px) {
      display: flex;
      justify-content: space-between;
    }

    /* LOGO */
    .header__logo {
      width: 14.043%;
      height: 100%;

      @media screen and (max-width: 1023px) {
        padding-left: 10px;
      }

      .header__logo--content {
        width: 100%;
        height: 100%;

        a {
          display: block;
          height: 100%;
          width: 100%;

          .header__logo-item {
            width: 100%;
            height: 100%;
            min-width: 128px;
          }
        }
      }
    }

    /* NAVBAR */
    .header__nav {
      width: 65.961%;
      height: 100%;
      @media screen and (max-width: 1023px) {
        height: auto;
        position: absolute;
        top: 65px;
        left: 0;
        /* border-top: 4px solid #4b4f58; */
        text-align: center;
        width: 100%;
        background: #fff;
        z-index: 100;
      }
      @media screen and (max-width: 767px) {
        top: 62px;
        border-top: none;
      }

      div {
        width: 100%;
      }

      .header__nav--list {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 6px;

        @media screen and (max-width: 1023px) {
          display: block;
        }

        .header__nav--list-item {
          margin: 4px 0px;
          @media screen and (max-width: 1023px) {
            .active {
              background-color: #55595c;
            }

            &:hover {
              background-color: #55595c;
              cursor: pointer;
            }
          }
          @media screen and (max-width: 769px) {
            padding: 10px 0px;
          }
          @media screen and (max-width: 426px) {
            margin: 22px 0px;
          }

          a {
            padding-left: 7px;
            padding-right: 7px;
            font-size: 18px;
            font-weight: 700;
          }
        }

        .header__nav--list-item.active {
          background: #635858;

          a {
            color: white;
          }
        }
      }

      .close-menu {
        @media screen and (max-width: 1023px) {
          display: none;
          transition: all 2s ease;
        }
      }
    }

    /* CLOUD */
    .header__cloud {
      width: 19.66%;
      height: 100%;
      justify-content: flex-start;
      @media screen and (max-width: 1023px) {
        display: none;
      }

      .header__cloud--wrap {
        position: absolute;
        top: 0;
        width: 216px;
        height: 100%;

        .header__cloud--img {
          width: 100%;
        }
      }
    }

    /* Responsive menu */
    .respon-menu {
      display: none;

      @media screen and (max-width: 1023px) {
        display: block;
        padding-right: 10px;
      }

      .icon {
        font-size: 30px;
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  const [showmenu, setShowmenu] = useState(true);
  const handleClickMenu = () => {
    setShowmenu(!showmenu);
  };
  return (
    <HeaderContainer>
      <div className="header--container display-center  pad-10">
        <div className="header__logo">
          <div className="header__logo--content">
            <a href="/#">
              <img
                className="header__logo-item"
                src="https://hesman.net/wp-content/uploads/2022/02/hesman-logo.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div className="header__nav display-center">
          <div>
            <div
              className={`header__nav--list ${showmenu ? "close-menu" : ""}`}
            >
              <li className="header__nav--list-item active">
                <Link to="/">TRANG CHỦ</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/plot">GIỚI THIỆU</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/#">HỆ SINH THÁI</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/#">TOKENOMICS</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/#">LỘ TRÌNH</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/#">DAPP</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/#">ĐỐI TÁC</Link>
              </li>
              <li className="header__nav--list-item">
                <Link to="/#">LIÊN HỆ</Link>
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

        <div className="respon-menu">
          <div className="icon" onClick={handleClickMenu}>
            {showmenu ? <TiThMenuOutline /> : <AiFillCloseCircle />}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
