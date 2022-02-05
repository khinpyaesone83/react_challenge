import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Header>TCG Marketplace</Header>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
        </LogoContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 20;
`;

const Header = styled.h2`
  font-size: 1.3rem;
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  top: 55px;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
`;
