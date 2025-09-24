import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageWrapper, Card, theme } from '../styles/GlobalStyles';

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${theme.colors.text}, ${theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const NavigationCard = styled(Card)`
  text-align: center;
  cursor: pointer;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${theme.colors.accent};
`;

const CardDescription = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigationCards = [
    {
      title: 'Education',
      description: 'McMaster University, Microsoft, University of Michigan, and more.',
      path: '/education',
    },
    {
      title: 'Experience',
      description: 'Developer at NEEDPEDIA, Data Analyst at IGEO Consultants, and more.',
      path: '/experience',
    },
    {
      title: 'Technical Skills',
      description: 'Python, React, Azure, Power BI, and other tools I\'ve worked with.',
      path: '/technical-skills',
    },
    {
      title: 'Projects',
      description: '8+ major projects from AI Chatbots to Geospatial Software.',
      path: '/portfolio',
    },
  ];

  return (
    <PageWrapper>
      <Container>
        <Hero>
          <Name>Anhad Chawla</Name>
          <Introduction>
            AI Integration Advocate | Seeking New Opportunities | Python & Node.js Developer | Building Smart Automation with n8n & LLMs.
            <br /><br />
            I’m Anhad Chawla, a developer and student passionate about building real-world AI solutions.
            <br />
            I’m currently working with Python, Node.js, and tools like n8n to create AI-powered workflows that solve practical problems. My projects focus on connecting large language models with automation logic in ways that are actually useful.
            <br />
            I learn by building—every project sharpens how I approach agent design, prompt handling, decision flows, and system integration. I’m especially interested in AI agents and how they can be used to automate real tasks in structured, meaningful ways.
            <br />
            I’m always exploring new tools and approaches to push what these systems can do. If you’re working in AI, automation, or building with LLMs, I’d love to connect.
          </Introduction>
        </Hero>

        <CardsGrid>
          {navigationCards.map((card) => (
            <NavigationCard
              key={card.path}
              hoverable
              onClick={() => navigate(card.path)}
            >
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </NavigationCard>
          ))}
        </CardsGrid>
      </Container>
    </PageWrapper>
  );
};

export default Home;
