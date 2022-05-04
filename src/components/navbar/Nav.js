import styled from "styled-components";
import { Content } from "../../styles/GlobalStyles";

const NavStyles = styled.div`
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

  .header__nav--list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;

    @media screen and (max-width: 1023px) {
      display: block;
    }

    @media screen and (max-width: 769px) {
      .header__nav--list-item.active {
        background: #635858;
        a {
          color: white;
        }
      }
    }

    .header__nav--list-item {
      margin: 4px 0px;
      @media screen and (max-width: 1023px) {
        &:hover {
          background-color: #55595c;
          cursor: pointer;
        }
      }
      @media screen and (max-width: 769px) {
        padding: 10px 0px;
        .active {
          /* background-color: #55595c; */
        }
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
  }

  .close-menu {
    @media screen and (max-width: 1023px) {
      display: none;
      transition: all 2s ease;
    }
  }
`;

const Nav = ({ className = "", showmenu = true, ...props }) => {
  return (
    <NavStyles className={`display-center ${className}`}>
      <Content>
        <div className={`header__nav--list ${showmenu ? "close-menu" : ""}`}>
          <li className="header__nav--list-item active">
            <a href="/">TRANG CHỦ</a>
          </li>
          <li className="header__nav--list-item">
            <a href="#plot">GIỚI THIỆU</a>
          </li>
          <li className="header__nav--list-item">
            <a href="#ecosystem">HỆ SINH THÁI</a>
          </li>
          <li className="header__nav--list-item">
            <a href="#tokenomics">TOKENOMICS</a>
          </li>
          <li className="header__nav--list-item">
            <a href="#journey">LỘ TRÌNH</a>
          </li>
          <li className="header__nav--list-item">
            <a href="#partner">DAPP</a>
          </li>
          <li className="header__nav--list-item">
            <a href="/#">ĐỐI TÁC</a>
          </li>
          <li className="header__nav--list-item">
            <a href="#contact">LIÊN HỆ</a>
          </li>
        </div>
      </Content>
    </NavStyles>
  );
};

export default Nav;
