import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../image/Image";

const LogoStyles = styled.div`
  width: 14.043%;
  height: 100%;
  @media screen and (max-width: 1023px) {
    padding-left: 10px;
  }

  .header__logo--content {
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
`;

const LogoContent = styled.div`
  width: 100%;
  height: 100%;
`;

const Logo = ({
  className = "",
  to = "/",
  minWidth = "",
  src = "",
  alt = "",
  ...props
}) => {
  return (
    <LogoStyles>
      <LogoContent>
        <Link to={to}>
          <Image minWidth={minWidth} src={src} alt={alt} />
        </Link>
      </LogoContent>
    </LogoStyles>
  );
};

export default Logo;
