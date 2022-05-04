import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/logo/Logo";
import Nav from "../components/navbar/Nav";
import CloudHeader from "../components/cloud/CloudHeader";
import Image from "../components/image/Image";
import ButtonMb from "../components/button/ButtonMb";

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
  }
`;

const dataNav = [
  {
    id: 1,
    title: "TRANG CHỦ",
    href: "#",
  },
  {
    id: 2,
    title: "GIỚI THIỆU",
    href: "#plot",
  },
  {
    id: 3,
    title: "HỆ SINH THÁI",
    href: "#ecosystem",
  },
  {
    id: 4,
    title: "TOKENOMICS",
    href: "#tokenomics",
  },
  {
    id: 5,
    title: "LỘ TRÌNH",
    href: "#journey",
  },
  {
    id: 6,
    title: "DAPP",
    href: "#partner",
  },
  {
    id: 7,
    title: "ĐỐI TÁC",
    href: "/#",
  },
  {
    id: 8,
    title: "LIÊN HỆ",
    href: "#contact",
  },
];

const Header = () => {
  const [showmenu, setShowmenu] = useState(true);
  const handleClickMenu = () => {
    setShowmenu(!showmenu);
  };
  return (
    <HeaderContainer>
      <div className="header--container display-center pad-10">
        <Logo
          to="/"
          src="https://hesman.net/wp-content/uploads/2022/02/hesman-logo.svg"
          alt="logo"
        />

        <Nav
          showmenu={showmenu}
          dataNav={dataNav}
          className="display-center"
        ></Nav>

        <CloudHeader width="19.66%" className="display-center">
          <Image src="https://hesman.net/wp-content/uploads/2022/03/Header-JoinNow.png.webp" />
        </CloudHeader>

        <ButtonMb onClick={handleClickMenu}></ButtonMb>
      </div>
    </HeaderContainer>
  );
};

export default Header;
