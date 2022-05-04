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
    top: 60px;
    border-top: none;
  }
`;

const NavList = styled.div`
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
`;

const NavItem = styled.li`
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
`;

const Nav = ({ className = "", showmenu = true, dataNav = [], ...props }) => {
  console.log(showmenu);
  return (
    <NavStyles className={`${showmenu ? "close-menu" : ""}`}>
      <Content className="display-center">
        <NavList>
          {dataNav.length > 0 &&
            dataNav.map((item) => (
              <NavItem key={item.id}>
                <a href={item.href}>{item.title}</a>
              </NavItem>
            ))}
        </NavList>
      </Content>
    </NavStyles>
  );
};

export default Nav;
