import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import Actions from "./Actions/Actions";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  min-height: 80px;
  width: 100%;
  padding-top: 24px;
`;

const Links = styled.div`
  display: flex;
  height: 100%;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  height: 100%;
  padding: 4px 16px 0 16px;
  display: flex;
  justify-content: center;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: ${(props) => (props.act === 1 ? "#5ece7b" : "#000000")};
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    font-weight: 600;
    color: #5ece7b;
    border-bottom: solid 2px #5ece7b;
  }
`;

const LogoContainer = styled(NavLink)`
  width: 41px;
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  object-position: center;
  object-fit: none;
`;

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Links>
          {this.props.navData.map((elem, index) => (
            <StyledLink
              className={({ isActive }) => (isActive ? "active" : "0")}
              key={index}
              to={elem.name === "all" ? "/" : elem.name}
            >
              {elem.name}
            </StyledLink>
          ))}
        </Links>
        <LogoContainer to="/">
          <Logo src={logo} />
        </LogoContainer>

        <Actions />
      </StyledHeader>
    );
  }
}

export default Header;
