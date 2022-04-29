import React, { useState } from "react";
import { NavContainer } from "./NavStyles";

const Nav = ({ showmenu, onClick = () => {} }) => {
  return (
    <NavContainer className="header__nav display-center">
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
    </NavContainer>
  );
};

export default Nav;
