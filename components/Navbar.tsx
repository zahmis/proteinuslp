import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const router = useRouter();

  return (
    <NavbarContainer>
      {navbarOpen && (
        <NavbarLinkContainer>
          <NavbarLink>Crafts</NavbarLink>
          <NavbarLink>Future</NavbarLink>
          <NavbarLink>Media</NavbarLink>
          <NavbarLink>About us</NavbarLink>
        </NavbarLinkContainer>
      )}
      <StyledLink href={'/'}>
        <NavbarLogo>
          <Image
            src=''
            alt='proteinusLogo'
            width={60}
            height={60}
            style={{
              backgroundColor: '#797979',
              flexGrow: '1',
            }}
          />

          <NavbarLink> Proteinus</NavbarLink>
        </NavbarLogo>
      </StyledLink>
      <NavbarLinkContainer>
        <StyledLink href={'/'}>
          <NavbarLink
            className={router.pathname === '/' ? 'current' : 'nonCurrent'}
          >
            Crafts
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/future'}>
          <NavbarLink
            className={router.pathname === '/future' ? 'current' : 'nonCurrent'}
          >
            Future
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/media'}>
          <NavbarLink
            className={router.pathname === '/media' ? 'current' : 'nonCurrent'}
          >
            Media
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/about'}>
          <NavbarLink
            className={router.pathname === '/about' ? 'current' : 'nonCurrent'}
          >
            About Us
          </NavbarLink>
        </StyledLink>

        {/* TODO: responsible 対応でスマホの時のみ表示するように改修する */}
        <NavbarHumberger>
          <Navbarbutton onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose
                style={{ color: '#fff', width: '40px', height: '40px' }}
              />
            ) : (
              <FiMenu
                style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
              />
            )}
          </Navbarbutton>
        </NavbarHumberger>
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
  color: ${(props) => (props.className === 'current' ? '#0029cc' : '#0f0800')};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavbarHumberger = styled.div`
  float: rigth;
`;

const Navbarbutton = styled.div``;
