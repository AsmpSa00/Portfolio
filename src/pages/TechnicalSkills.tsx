import React from 'react';
import styled from 'styled-components';
import { Container, PageWrapper, theme } from '../styles/GlobalStyles';
import { IconType } from 'react-icons';
import { 
  DiPython, 
  DiJavascript1, 
  DiReact, 
  DiNodejs, 
  DiHtml5, 
  DiCss3,
  DiMongodb,
  DiGit,
  DiAws
} from 'react-icons/di';
import { 
  SiTypescript, 
  SiSolidity, 
  SiTableau, 
  SiMicrostrategy,
  SiCplusplus,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiDocker,
  SiFigma
} from 'react-icons/si';
import { MdWork } from 'react-icons/md';

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: ${theme.colors.text};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsSection = styled.section`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const SkillsList = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    transform: translateY(-4px);
  }

  svg {
    font-size: 3rem;
    color: ${theme.colors.accent};
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }

  span {
    font-size: 0.9rem;
    color: ${theme.colors.textSecondary};
    font-weight: 500;
    text-align: center;
    
    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: 0.8rem;
    }
  }
`;

const TechnicalSkills: React.FC = () => {
  const languages: { icon: IconType; name: string }[] = [
    { icon: DiPython, name: 'Python' },
    { icon: SiCplusplus, name: 'C++' },
    { icon: DiHtml5, name: 'HTML5' },
    { icon: DiCss3, name: 'CSS3' },
    { icon: DiJavascript1, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: SiSolidity, name: 'Solidity' },
  ];

  const toolsFrameworks: { icon: IconType; name: string }[] = [
    { icon: SiMicrostrategy, name: 'Azure' },
    { icon: DiAws, name: 'AWS' },
    { icon: DiReact, name: 'React.js' },
    { icon: DiNodejs, name: 'Node.js' },
    { icon: MdWork, name: 'Power BI' },
    { icon: SiTableau, name: 'Tableau' },
    { icon: DiMongodb, name: 'MongoDB' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiPandas, name: 'Pandas' },
    { icon: SiNumpy, name: 'NumPy' },
    { icon: DiGit, name: 'Git' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiFigma, name: 'Figma' },
  ];

  return (
    <PageWrapper>
      <Container>
        <PageTitle>Technical Skills</PageTitle>
        <PageSubtitle>
          Technologies and tools I use to bring ideas to life and solve complex problems.
        </PageSubtitle>

        <SkillsSection>
          <SectionTitle>Languages</SectionTitle>
          <SectionSubtitle>Languages I've used in projects and coursework.</SectionSubtitle>
          <SkillsList>
            Python, C++, HTML5, CSS3, JavaScript, TypeScript, Solidity
          </SkillsList>
          <IconsGrid>
            {languages.map((language, index) => {
              const Icon = language.icon as React.ComponentType<any>;
              return (
                <IconWrapper key={index}>
                  <Icon />
                  <span>{language.name}</span>
                </IconWrapper>
              );
            })}
          </IconsGrid>
        </SkillsSection>

        <SkillsSection>
          <SectionTitle>Tools & Frameworks</SectionTitle>
          <SectionSubtitle>Libraries, frameworks, and tools that help power my apps.</SectionSubtitle>
          <SkillsList>
            Cloud Computing, UI/UX Design, Data Analysis, Node.js, Artificial Intelligence, 
            Tableau, React.js, Power BI, Azure, Database Management
          </SkillsList>
          <IconsGrid>
            {toolsFrameworks.map((tool, index) => {
              const Icon = tool.icon as React.ComponentType<any>;
              return (
                <IconWrapper key={index}>
                  <Icon />
                  <span>{tool.name}</span>
                </IconWrapper>
              );
            })}
          </IconsGrid>
        </SkillsSection>
      </Container>
    </PageWrapper>
  );
};

export default TechnicalSkills;
