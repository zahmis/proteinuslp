import React, { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ProteinusNew from '../public/icons/proteinusNew.svg';

export const Navbar = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => setNavbarOpen(!navbarOpen);

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
          <LogoWrapper>
            <ProteinusNew viewBox='15 -10 120 120' />
          </LogoWrapper>
          <NavbarLink> Proteinus</NavbarLink>
        </NavbarLogo>
      </StyledLink>
      <NavbarLinkContainer>
        <StyledLink href={'/'}>
          <NavbarLink isCurrent={router.pathname === '/'}>Crafts</NavbarLink>
        </StyledLink>

        <StyledLink href={'/future'}>
          <NavbarLink isCurrent={router.pathname === '/future'}>
            Future
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/media'}>
          <NavbarLink isCurrent={router.pathname === '/media'}>
            Media
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/about'}>
          <NavbarLink isCurrent={router.pathname === '/about'}>
            About Us
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/admins_list'}>
          <NavbarLink isCurrent={router.pathname === '/admins_list'}>
            Log in
          </NavbarLink>
        </StyledLink>

        {/* TODO: responsible 対応でスマホの時のみ表示するように改修する */}
        {isMobile && (
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
        )}
      </NavbarLinkContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavbarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  svg {
    border-radius: 50%;
  }
`;

const NavbarLinkContainer = styled.div`
  display: flex;
  margin-right: 120px;
  justify-content: flex-end;
`;

type NavbarLinkProps = {
  isCurrent?: boolean;
};

const NavbarLink = styled.div`
  color: ${(props: NavbarLinkProps) =>
    props.isCurrent ? '#0029cc' : '#0f0800'};
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px;
  opacity: 56%;
  @media (max-width: 380px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavbarHumberger = styled.div`
  @media (min-width: 381px) {
    display: none;
    float: rigth;
  }
  @media (min-width: 381px) {
    display: none;
    float: right;
  }
`;

const Navbarbutton = styled.div``;
