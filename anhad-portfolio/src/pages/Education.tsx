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

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const EducationCard = styled(Card)`
  cursor: pointer;
`;

const Institution = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const Date = styled.p`
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

const Education: React.FC = () => {
  const navigate = useNavigate();

  const educationData = [
    {
      id: 'mcmaster-university',
      institution: 'McMaster University',
      degree: 'B.A.Sc., Computer Science (Co-op)',
      date: '',
      description: 'Focused on software development and testing, mathematical models, data analysis & security, algorithms, and computational theory.',
    },
    {
      id: 'azure-fundamentals',
      institution: 'Microsoft',
      degree: 'Azure Fundamentals',
      date: '',
      description: 'Expanded expertise in cloud computing and Azure services to enhance project delivery with cloud capabilities.',
    },
    {
      id: 'python-programming',
      institution: 'University of Michigan',
      degree: 'Python — Programming',
      date: '',
      description: 'Covered Python basics: variables, conditionals, loops, functions, and code reuse with practical exercises.',
    },
    {
      id: 'sql-masterclass',
      institution: 'Independent',
      degree: 'SQL Masterclass',
      date: '',
      description: 'Proficient with core SQL; applied sorting/filtering, views, and indexes to improve database performance.',
    },
    {
      id: 'react-developer',
      institution: 'Independent',
      degree: 'React Developer',
      date: '',
      description: 'Built and deployed enterprise-grade React apps using Hooks, Context, Suspense, lazy-loading, and Firebase; shipped PWAs.',
    },
    {
      id: 'tableau-masterclass',
      institution: 'Independent',
      degree: 'Tableau — A–Z Masterclass',
      date: '',
      description: 'Visualized data in Tableau to reveal patterns like purchase behavior and sales trends for decision-makers.',
    },
    {
      id: 'power-bi-masterclass',
      institution: 'Independent',
      degree: 'Power BI — Masterclass',
      date: '',
      description: 'Produced actionable insights and dashboards to support strategic decisions and competitive advantage.',
    },
    {
      id: 'sm-dy-ossd',
      institution: "St. Marguerite d'Youville Secondary School",
      degree: 'OSSD',
      date: '',
      description: 'Honor roll (90%+) while excelling across the Ontario Secondary School curriculum.',
    },
  ];

  const handleCardClick = (id: string) => {
    navigate(`/education/${id}`);
  };

  return (
    <PageWrapper>
      <Container>
        <PageTitle>Education</PageTitle>
        <PageSubtitle>
          My academic journey and professional certifications that have shaped my technical expertise.
        </PageSubtitle>
        
        <EducationGrid>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              hoverable
              onClick={() => handleCardClick(edu.id)}
            >
              <Institution>{edu.institution}</Institution>
              <Degree>{edu.degree}</Degree>
              <Date>{edu.date}</Date>
              <Description>{edu.description}</Description>
              <MoreLink>Learn more →</MoreLink>
            </EducationCard>
          ))}
        </EducationGrid>
      </Container>
    </PageWrapper>
  );
};

export default Education;
