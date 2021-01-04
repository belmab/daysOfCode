import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbar = styled.h2`
  display: flex;
  justify-content: space-around;

  text-align: center;
  align-items: center;
  padding-bottom: 1rem;
`;

export const StyledNavItem = styled.li`
  list-style-type: none;
  align-self: 'center';
  padding-right: '0.7rem';
  text-decoration: 'none';
  margin-left: 0.5rem;
`;

export const StyledLink = styled(Link)`
  font-family: 'Press Start 2P', cursive;
  font-size: 0.8rem;
  text-decoration: none;
  color: #444;
  padding-bottom: 0.4rem;

  :hover {
    border-bottom: 3px solid #444;
  }
`;
