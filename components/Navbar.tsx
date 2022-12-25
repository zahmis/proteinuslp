import React, { useState } from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        <NavbarLink> Home</NavbarLink>
        <NavbarLink> Crafts</NavbarLink>
        <NavbarLink> Future</NavbarLink>
        <NavbarLink> About Us</NavbarLink>
        <NavbarLink> Media</NavbarLink>
        <NavbarLink> Information</NavbarLink>
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #bf7722;
  opacity: 56%;
  display: flex;
  flex-direction: column;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const NavbarLink = styled.div`
  color: #0f0800;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
`;
