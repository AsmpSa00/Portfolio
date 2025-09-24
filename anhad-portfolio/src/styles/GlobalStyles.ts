import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    background: '#111111',
    backgroundLight: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#cccccc',
    accent: '#007bff',
    accentHover: '#0056b3',
    cardBackground: '#1e1e1e',
    border: '#333333',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    mono: "'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.primary};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: ${theme.colors.accent};
    color: white;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export const PageWrapper = styled.div`
  min-height: 100vh;
  padding-top: 80px; // Account for fixed navigation
`;

export const Card = styled.div<{ hoverable?: boolean }>`
  background: ${theme.colors.cardBackground};
  border: 2px solid ${theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  ${props => props.hoverable && `
    cursor: pointer;
    
    &:hover {
      border-color: ${theme.colors.accent};
      box-shadow: 0 0 20px rgba(0, 123, 255, 0.3);
      transform: translateY(-2px);
    }
  `}
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  
  ${props => props.variant === 'primary' ? `
    background: ${theme.colors.accent};
    color: white;
    border: 2px solid ${theme.colors.accent};
    
    &:hover {
      background: ${theme.colors.accentHover};
      border-color: ${theme.colors.accentHover};
    }
  ` : `
    background: transparent;
    color: ${theme.colors.text};
    border: 2px solid ${theme.colors.border};
    
    &:hover {
      border-color: ${theme.colors.accent};
      color: ${theme.colors.accent};
    }
  `}
`;
