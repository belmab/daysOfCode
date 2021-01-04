import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledNavbar,
  StyledNavItem,
  StyledLink,
} from '../Styled/StyledNavbar';

function Navbar() {
  return (
    <div>
      <StyledNavbar>
        <StyledNavItem>
          <StyledLink to="/">Home</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink to="/about">About</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </StyledNavItem>
      </StyledNavbar>
    </div>
  );
}

export default Navbar;
