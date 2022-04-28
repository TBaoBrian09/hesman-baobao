import React, { useState } from "react";
import styled from "styled-components";

const NavContainer = styled.div`
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
      @media screen and (max-width: 500px) {
        margin: 22px 0px;
      }

      a {
        padding-left: 7px;
        padding-right: 7px;
        font-size: 18px;
        font-weight: 700;
      }
    }
  }

  .close-menu {
    @media screen and (max-width: 1023px) {
      display: none;
      transition: all 2s ease;
    }
  }
`;

const Nav = ({showmenu, onClick = () => {}}) => {
 
  return (
    <div className="header__nav display-center">
      <div>
        <div className={`header__nav--list ${showmenu ? "close-menu" : ""}`}>
          <li className="header__nav--list-item">
            <a href="/#">TRANG CHỦ</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">GIỚI THIỆU</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">HỆ SINH THÁI</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">TOKENOMICS</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">LỘ TRÌNH</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">DAPP</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">ĐỐI TÁC</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">LIÊN HỆ</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
