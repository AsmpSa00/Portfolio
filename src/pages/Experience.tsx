import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageWrapper, Card, theme } from '../styles/GlobalStyles';

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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ExperienceCard = styled(Card)`
  cursor: pointer;
`;

const Company = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
`;

const MoreLink = styled.span`
  display: inline-block;
  margin-top: 0.75rem;
  color: ${theme.colors.accent};
  font-weight: 600;
  font-size: 0.95rem;
`;

const Experience: React.FC = () => {
  const navigate = useNavigate();

  const experienceData = [
    {
      id: 'needpedia',
      company: 'NEEDPEDIA',
      role: 'Developer',
      period: 'May 2023 – Feb 2024 · Remote',
      description: 'Built dynamic applications across Python (backend) and React.js (frontend). Integrated AI-driven features using Node.js to automate workflows and improve efficiency.',
    },
    {
      id: 'igeo-consultants',
      company: 'IGEO Consultants',
      role: 'Data Analyst / UI/UX Designer',
      period: 'Sep 2022 – May 2023 · Mississauga, ON',
      description: 'Analyzed datasets with Python and visualized insights via Power BI & Tableau. Applied statistical analysis to inform product UX for better user outcomes.',
    },
  ];

  const handleCardClick = (id: string) => {
    navigate(`/experience/${id}`);
  };

  return (
    <PageWrapper>
      <Container>
        <PageTitle>Experience</PageTitle>
        <PageSubtitle>
          My professional journey and the roles that have shaped my career in technology.
        </PageSubtitle>
        
        <ExperienceGrid>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              hoverable
              onClick={() => handleCardClick(exp.id)}
            >
              <Company>{exp.company}</Company>
              <Role>{exp.role}</Role>
              <Period>{exp.period}</Period>
              <Description>{exp.description}</Description>
              <MoreLink>Learn more →</MoreLink>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </PageWrapper>
  );
};

export default Experience;
