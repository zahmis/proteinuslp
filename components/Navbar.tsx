import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const router = useRouter();

  return (
    <NavbarContainer>
      <StyledLink href={'/'}>
        <NavbarLogo>
          <Image
            src=''
            alt='proteinus-logo'
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
            className={router.pathname === '/' ? 'current' : 'non-current'}
          >
            Crafts
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/future'}>
          <NavbarLink
            className={
              router.pathname === '/future' ? 'current' : 'non-current'
            }
          >
            Future
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/media'}>
          <NavbarLink
            className={router.pathname === '/media' ? 'current' : 'non-current'}
          >
            Media
          </NavbarLink>
        </StyledLink>

        <StyledLink href={'/about'}>
          <NavbarLink
            className={router.pathname === '/about' ? 'current' : 'non-current'}
          >
            About Us
          </NavbarLink>
        </StyledLink>
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
  &.current {
    color: #0029cc;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
