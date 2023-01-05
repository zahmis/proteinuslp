import React, { useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { useMediaQuery } from "react-responsive";

import Image from "next/image";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
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
      <NavbarLogo>
        <Image
          src=""
          alt="proteinus-logo"
          width={60}
          height={60}
          style={{
            backgroundColor: "#797979",
            flexGrow: "1",
          }}
        />
        <NavbarLink> Proteinus</NavbarLink>
      </NavbarLogo>
      <NavbarLinkContainer>
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
  opacity: 56%;
  display: flex;
  justify-content: space-between;
`;

const NavbarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  margin-right: 120px;
  justify-content: flex-end;
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
