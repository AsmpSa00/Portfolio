import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageWrapper, theme } from '../styles/GlobalStyles';

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

const Company = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.accent};
  margin-bottom: 0.5rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Role = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.4rem;
  }
`;

const Period = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const CompanyImage = styled.img`
  width: 100%;
  max-width: 400px;
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
  
  h3 {
    color: ${theme.colors.text};
    font-size: 1.3rem;
    margin: 2rem 0 1rem 0;
  }
`;

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Experience data - in a real app, this would come from an API or context
  const experienceData: Record<string, any> = {
    'needpedia': {
      company: 'NEEDPEDIA',
      role: 'Developer',
      period: 'May 2023 – Feb 2024 · Remote',
      description: `
        <p>At NEEDPEDIA, I contributed across the stack to deliver dynamic, user-friendly applications and automated workflows.</p>
        
        <h3>Highlights:</h3>
        <ul>
          <li>Utilized <strong>Python</strong> for backend development and <strong>React.js</strong> for frontend UI.</li>
          <li>Employed <strong>Node.js</strong> for server-side scripting and efficient data processing.</li>
          <li>Integrated <strong>AI-driven features</strong> to enhance automation and operational efficiency.</li>
          <li>Collaborated with cross-functional teams to design and ship impactful features.</li>
        </ul>
      `,
    },
    'igeo-consultants': {
      company: 'IGEO Consultants',
      role: 'Data Analyst / UI/UX Designer',
      period: 'Sep 2022 – May 2023 · Mississauga, ON',
      description: `
        <p>At IGEO, I combined data analysis with user-centered design to drive decisions and improve product usability.</p>
        
        <h3>Highlights:</h3>
        <ul>
          <li>Used <strong>Python</strong> for data analysis and manipulation to extract actionable insights.</li>
          <li>Leveraged <strong>Power BI</strong> and <strong>Tableau</strong> to visualize trends for decision-making.</li>
          <li>Applied statistical techniques to identify patterns that informed <strong>UI/UX</strong> design decisions.</li>
        </ul>
      `,
    },
    'freelance-developer': {
      company: 'Freelance',
      role: 'Web Developer',
      period: 'June 2022 - December 2022',
      companyImage: '/images/companies/freelance.png', // Placeholder path
      description: `
        <p>During my freelance period, I worked with multiple small businesses and startups to create custom web solutions tailored to their specific needs. This experience taught me to work independently and manage client relationships effectively.</p>
        
        <h3>Services Provided:</h3>
        <ul>
          <li>Custom website development from design to deployment</li>
          <li>E-commerce solutions using modern frameworks</li>
          <li>Website maintenance and performance optimization</li>
          <li>SEO optimization and analytics implementation</li>
          <li>Mobile-responsive design and development</li>
        </ul>
        
        <h3>Technologies Used:</h3>
        <ul>
          <li>Frontend: React, Vue.js, HTML5, CSS3, JavaScript</li>
          <li>Backend: Node.js, PHP, WordPress</li>
          <li>E-commerce: Shopify, WooCommerce</li>
          <li>Hosting: AWS, Netlify, Vercel</li>
        </ul>
        
        <h3>Notable Projects:</h3>
        <ul>
          <li>E-commerce platform for a local retail business (increased online sales by 60%)</li>
          <li>Portfolio website for a photography studio</li>
          <li>Restaurant website with online ordering system</li>
          <li>Corporate website for a consulting firm</li>
        </ul>
        
        <p>This experience significantly improved my client communication skills and taught me to deliver projects within tight deadlines while maintaining high quality standards.</p>
      `,
    },
    'tech-intern': {
      company: 'Tech Solutions Inc.',
      role: 'Software Engineering Intern',
      period: 'Summer 2022',
      companyImage: '/images/companies/tech-solutions.png', // Placeholder path
      description: `
        <p>My internship at Tech Solutions Inc. was my first professional experience in software development. It provided me with invaluable exposure to industry best practices and collaborative development in a corporate environment.</p>
        
        <h3>Learning Objectives:</h3>
        <ul>
          <li>Understanding software development lifecycle (SDLC)</li>
          <li>Learning version control with Git and collaborative workflows</li>
          <li>Participating in agile development processes</li>
          <li>Writing clean, maintainable code following industry standards</li>
          <li>Working with senior developers and receiving mentorship</li>
        </ul>
        
        <h3>Projects Worked On:</h3>
        <ul>
          <li>Bug fixes and minor feature implementations in existing applications</li>
          <li>Unit testing for legacy code to improve test coverage</li>
          <li>Documentation updates and API documentation</li>
          <li>Performance optimization for database queries</li>
        </ul>
        
        <h3>Technologies Learned:</h3>
        <ul>
          <li>Java, Spring Boot framework</li>
          <li>MySQL database management</li>
          <li>Jenkins for CI/CD pipelines</li>
          <li>JIRA for project management</li>
          <li>Confluence for documentation</li>
        </ul>
        
        <h3>Key Takeaways:</h3>
        <ul>
          <li>Importance of code reviews and peer feedback</li>
          <li>How to work effectively in a team environment</li>
          <li>Understanding of enterprise-level software architecture</li>
          <li>Professional communication and time management skills</li>
        </ul>
        
        <p>This internship laid the foundation for my professional career and sparked my passion for software development.</p>
      `,
    },
  };

  const experience = experienceData[id || ''];

  if (!experience) {
    return (
      <PageWrapper>
        <Container>
          <DetailContainer>
            <BackButton to="/experience">← Back to Experience</BackButton>
            <h1>Experience not found</h1>
            <p>The requested experience detail could not be found.</p>
          </DetailContainer>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <DetailContainer>
          <BackButton to="/experience">← Back to Experience</BackButton>
          
          <Company>{experience.company}</Company>
          <Role>{experience.role}</Role>
          <Period>{experience.period}</Period>
          
          <Description dangerouslySetInnerHTML={{ __html: experience.description }} />
        </DetailContainer>
      </Container>
    </PageWrapper>
  );
};

export default ExperienceDetail;
