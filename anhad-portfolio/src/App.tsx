import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Education from './pages/Education';
import EducationDetail from './pages/EducationDetail';
import Experience from './pages/Experience';
import ExperienceDetail from './pages/ExperienceDetail';
import TechnicalSkills from './pages/TechnicalSkills';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/:id" element={<EducationDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/technical-skills" element={<TechnicalSkills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
