import React from "react";
import styled from "styled-components";

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

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Logo = () => {
  return (
    <LogoStyles>
      <div className="header__logo--content">
        <a href="/#">
          <img
            className="header__logo-item"
            src="https://hesman.net/wp-content/uploads/2022/02/hesman-logo.svg"
            alt=""
          />
        </a>
      </div>
    </LogoStyles>
  );
};

export default Logo;
