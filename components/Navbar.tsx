import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { useMediaQuery } from "react-responsive";


export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <NavbarContainer>
      <NavbarHumberger>
        <Navbarbutton onClick={handleToggle}>
          {navbarOpen ? (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
          ) : (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
          )}
        </Navbarbutton>
      </NavbarHumberger>

      {navbarOpen && (
        <NavbarLinkContainer>
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>Crafts</NavbarLink>
          <NavbarLink>Future</NavbarLink>
          <NavbarLink>About us</NavbarLink>
          <NavbarLink>Media</NavbarLink>
        </NavbarLinkContainer>
      )}
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

const NavbarHumberger = styled.div`
  float:rigth;
`;

const Navbarbutton = styled.div`
  
`;
