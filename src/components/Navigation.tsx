import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/GlobalStyles';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.background};
  border-bottom: 2px solid ${theme.colors.border};
  padding: 1rem 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? theme.colors.accent : theme.colors.text};
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${theme.colors.accent};
    background: rgba(0, 123, 255, 0.1);
  }

  ${props => props.$isActive && `
    background: rgba(0, 123, 255, 0.1);
  `}

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background: ${theme.colors.text};
    transition: all 0.3s ease;
  }
`;

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/technical-skills', label: 'Skills' },
    { path: '/portfolio', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">AC</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $isActive={isActive(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;
