import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageWrapper, Button, theme } from '../styles/GlobalStyles';

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${theme.colors.accent};
  font-weight: 500;
  
  &:hover {
    color: ${theme.colors.accentHover};
  }
`;

const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Institution = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin-bottom: 0.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Degree = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const Date = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const CertificateImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 12px;
  border: 2px solid ${theme.colors.border};
  margin: 2rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: ${theme.colors.cardBackground};
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const EducationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Education data - in a real app, this would come from an API or context
  const educationData: Record<string, any> = {
    'mcmaster-university': {
      institution: 'McMaster University',
      degree: 'B.A.Sc., Computer Science (Co-op)',
      date: '',
      certificateImage: '/images/certificates/mcmaster.png',
      description: `
        <p>Focused on the development and testing of software and software systems, with a strong foundation in:</p>
        <ul>
          <li>Mathematical models and computational theory</li>
          <li>Algorithms and data structures</li>
          <li>Data analysis, security, and systems design</li>
          <li>End-to-end software engineering practices</li>
        </ul>
      `,
    },
    'azure-fundamentals': {
      institution: 'Microsoft',
      degree: 'Azure Fundamentals',
      date: '',
      certificateImage: '/images/certificates/Azure%20Fundamentals.png',
      description: `
        <p>I expanded my expertise in cloud computing and Azure services. Ready to apply this to propel projects forward with enhanced cloud capabilities.</p>
      `,
    },
    'python-programming': {
      institution: 'University of Michigan',
      degree: 'Python — Programming',
      date: '',
      certificateImage: '/images/certificates/Python%20Certficate_page-0001%20(1).jpg',
      description: `
        <p>Learned Python fundamentals: variables, conditional and repeated execution, functions, and code reuse—applied through practical exercises.</p>
      `,
    },
    'sql-masterclass': {
      institution: 'Independent',
      degree: 'SQL Masterclass',
      date: '',
      certificateImage: '/images/certificates/SQL%20certficate.jpg',
      description: `
        <p>Employed essential SQL commands, sorting and filtering techniques, and improved performance using views and indexes.</p>
      `,
    },
    'react-developer': {
      institution: 'Independent',
      degree: 'React Developer',
      date: '',
      certificateImage: '/images/certificates/React%20Certficate.jpg',
      description: `
        <p>Built enterprise-level React applications and deployed to production. Used Hooks, Context API, Suspense, lazy-loading, Firebase, and shipped PWAs.</p>
      `,
    },
    'tableau-masterclass': {
      institution: 'Independent',
      degree: 'Tableau — A–Z Masterclass',
      date: '',
      certificateImage: '/images/certificates/Tableau%20Certificate.jpg',
      description: `
        <p>Developed data visualizations in Tableau (2022+) to discover patterns like customer behavior and sales trends for stakeholders.</p>
      `,
    },
    'power-bi-masterclass': {
      institution: 'Independent',
      degree: 'Power BI — Masterclass',
      date: '',
      certificateImage: '/images/certificates/Power%20Bi%20Certficate.jpg',
      description: `
        <p>Generated valuable insights and dashboards to support strategic decision-making and create competitive advantages.</p>
      `,
    },
    'sm-dy-ossd': {
      institution: "St. Marguerite d'Youville Secondary School",
      degree: 'OSSD',
      date: '',
      certificateImage: '/images/certificates/ossd.png',
      description: `
        <p>Honor roll student achieving 90%+ average towards the Ontario Secondary School Diploma.</p>
      `,
    },
  };

  const education = educationData[id || ''];

  if (!education) {
    return (
      <PageWrapper>
        <Container>
          <DetailContainer>
            <BackButton to="/education">← Back to Education</BackButton>
            <h1>Education not found</h1>
            <p>The requested education detail could not be found.</p>
          </DetailContainer>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <DetailContainer>
          <BackButton to="/education">← Back to Education</BackButton>
          
          <Institution>{education.institution}</Institution>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
          
          <CertificateImage 
            src={education.certificateImage} 
            alt={`${education.degree} Certificate`}
            onError={(e) => {
              // Fallback to placeholder if image doesn't exist
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400/1e1e1e/007bff?text=Certificate+Placeholder';
            }}
          />
          
          <Description dangerouslySetInnerHTML={{ __html: education.description }} />
        </DetailContainer>
      </Container>
    </PageWrapper>
  );
};

export default EducationDetail;
