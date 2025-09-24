import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, PageWrapper, Button, theme } from '../styles/GlobalStyles';
import { IconType } from 'react-icons';
import { DiPython, DiReact, DiNodejs } from 'react-icons/di';
import { SiTableau, SiTensorflow } from 'react-icons/si';
import { MdWork } from 'react-icons/md';

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
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  label {
    font-size: 0.9rem;
    color: ${theme.colors.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  span {
    font-size: 1rem;
    color: ${theme.colors.text};
    font-weight: 500;
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 0;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;
  border: 2px solid ${theme.colors.border};
  background: ${theme.colors.cardBackground};
`;

const TechnologiesSection = styled.div`
  margin: 2rem 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 1rem;
`;

const TechIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
  
  svg {
    font-size: 2.5rem;
    color: ${theme.colors.accent};
    
    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease;
    }
  }
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.textSecondary};
  margin: 2rem 0;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.75rem;
    }
  }
  
  h3 {
    color: ${theme.colors.text};
    font-size: 1.3rem;
    margin: 2.5rem 0 1rem 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const ActionButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Project data - in a real app, this would come from an API or context
  const projectData: Record<string, {
    title: string;
    status: string;
    duration: string;
    role: string;
    images: string[];
    technologies: IconType[];
    liveDemo: string;
    github: string;
    description: string;
  }> = {
'ai-voice-agent': {
      title: 'AI Voice Agent for Restaurants',
      status: 'In Progress',
      duration: '—',
      role: 'Solo Developer',
      images: [
        '/images/projects/ai_voice.png'
      ],
      technologies: [DiPython, DiNodejs],
      liveDemo: '',
      github: 'https://github.com/AsmpSa00/OrderDev',
      description: `
        <p>Built an AI Voice Agent that takes live restaurant phone orders, processes them using GPT, and texts order summaries to customers in real time — no humans required.</p>
        <p><strong>Live demo:</strong> In progress</p>
        
        <h3>How it works</h3>
        <ul>
          <li><strong>Voice Line Setup (Twilio):</strong> Configured SIP trunking, purchased a number, set termination/origination URIs, and secured auth.</li>
          <li><strong>Voice Agent (Retell AI):</strong> Multi-state agent trained to act like staff; fed menu, store details, and prompts to ask clarifying questions.</li>
          <li><strong>Automation Flow (n8n):</strong> Webhook triggers post-call; filter for fully analyzed calls → send transcript to OpenAI → validate order → auto-send WhatsApp/SMS via Twilio.</li>
        </ul>
        
        <h3>What I learned</h3>
        <ul>
          <li>Voice AI can be productionized by connecting SIP trunking, agent logic, and automation.</li>
          <li>Prompt/flow design is critical to handle dynamic conversations like food orders.</li>
          <li>Real-time pipelines unlock practical, end-to-end AI solutions for businesses.</li>
        </ul>
      `,
    },
'ai-chatbot': {
      title: 'AI-Powered Restaurant Chatbot System',
      status: 'Completed',
      duration: '3 months',
      role: 'Full-Stack Developer',
      images: [
        '/images/projects/ai_chat.png'
      ],
      technologies: [DiPython, SiTensorflow, DiReact, DiNodejs],
      liveDemo: 'https://asmpsa.pythonanywhere.com',
      github: 'https://github.com/AsmpSa00/Restraunt_AI',
      description: `
        <p>Developed an intelligent restaurant chatbot that revolutionizes the customer ordering experience through natural language processing and machine learning. The system can understand complex food preferences, dietary restrictions, and ordering patterns to provide personalized recommendations.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Natural Language Processing for understanding customer queries</li>
          <li>Machine Learning-powered food recommendations</li>
          <li>Real-time order tracking and updates</li>
          <li>Integration with restaurant POS systems</li>
          <li>Multi-language support for diverse customer base</li>
          <li>Voice-to-text functionality for accessibility</li>
        </ul>
        
        <h3>Technical Implementation:</h3>
        <ul>
          <li>Built NLP models using TensorFlow and spaCy for intent recognition</li>
          <li>Implemented React frontend with real-time chat interface</li>
          <li>Developed Node.js backend with Express for API management</li>
          <li>Used MongoDB for storing conversation history and user preferences</li>
          <li>Integrated with payment gateways for seamless transactions</li>
        </ul>
        
      `,
    },
    'geospatial-software': {
      title: 'Geospatial Data Visualization Platform',
      status: 'Completed',
      duration: '4 months',
      role: 'Data Analyst & Frontend Developer',
      images: [
        '/images/projects/geospatial/dashboard.png',
        '/images/projects/geospatial/maps.png',
        '/images/projects/geospatial/analytics.png'
      ],
      technologies: [DiPython, MdWork, SiTableau, DiReact],
      liveDemo: 'https://geospatial-platform.herokuapp.com',
      github: 'https://github.com/anhadchawla/geospatial-platform',
      description: `
        <p>Created a comprehensive geospatial data visualization platform that enables organizations to analyze geographic data through interactive maps, dashboards, and advanced analytics. The platform supports various data formats and provides insights for urban planning, environmental monitoring, and business intelligence.</p>
        
        <h3>Platform Capabilities:</h3>
        <ul>
          <li>Interactive map visualization with multiple layer support</li>
          <li>Real-time data streaming and processing</li>
          <li>Advanced spatial analysis and clustering algorithms</li>
          <li>Custom dashboard creation with drag-and-drop interface</li>
          <li>Data export functionality in multiple formats</li>
          <li>Collaborative features for team-based analysis</li>
        </ul>
        
        <h3>Technology Stack:</h3>
        <ul>
          <li>Python with GeoPandas and Folium for spatial data processing</li>
          <li>React with Leaflet for interactive frontend mapping</li>
          <li>Power BI and Tableau integration for advanced analytics</li>
          <li>PostgreSQL with PostGIS extension for spatial database</li>
          <li>Docker containerization for easy deployment</li>
        </ul>
        
        <h3>Use Cases:</h3>
        <ul>
          <li>Urban development pattern analysis for city planners</li>
          <li>Environmental impact assessment for NGOs</li>
          <li>Market analysis and location intelligence for businesses</li>
          <li>Transportation network optimization</li>
        </ul>
      `,
    },
'project-1-geospatial': {
      title: 'Geospatial Imaging & Satellite Tracking Software',
      status: 'Completed',
      duration: '3 months',
      role: 'Full-Stack Developer',
      images: [
        '/images/projects/geo_track.png'
      ],
      technologies: [DiNodejs, DiPython],
      liveDemo: '',
      github: 'https://github.com/AsmpSa00/GEOVEO',
      description: `
        <p>Web app featuring real-time satellite tracking and weather data retrieval.</p>
        <ul>
          <li>Backend with <strong>Express</strong> handling API routes and middleware.</li>
          <li>Satellite map with AOI drawing and weather data fetch.</li>
          <li>Real-time tracking endpoints in <strong>Node.js</strong> for satellite positions.</li>
          <li>Integrated <strong>HTML/CSS</strong> for a seamless UX.</li>
        </ul>
      `,
    },
'project-4-nft': {
      title: 'Furious Formula NFT Project',
      status: 'Completed',
      duration: '',
      role: 'Developer',
      images: ['/images/projects/furious_formula.gif'],
      technologies: [],
      liveDemo: '',
      github: '',
      description: `
        <ul>
          <li>Python scripts for dynamic image generation of NFT assets.</li>
          <li>Integrated <strong>Solana</strong> smart contracts for secure infra.</li>
          <li>Executed minting pipeline connecting assets to contracts.</li>
          <li>Drove engagement through unique digital experiences.</li>
        </ul>
      `,
    },
'project-5-pc-build': {
      title: 'Custom PC Build',
      status: 'Completed',
      duration: '',
      role: 'Builder',
      images: ['/images/projects/build_pc.png'],
      technologies: [],
      liveDemo: '',
      github: '',
      description: `
        <p>Budgeted, sourced, and assembled optimized PC builds; deepened understanding of component selection and configuration.</p>
      `,
    },
'project-3-websites': {
      title: 'Websites: IGEO, IGEO Constructions, Portfolio',
      status: 'Completed',
      duration: '',
      role: 'Web Developer',
      images: ['/images/projects/web_dev.png'],
      technologies: [],
      liveDemo: '',
      github: 'https://github.com/AsmpSa00/Portfolio',
      description: `
        <p>Planned, designed, and shipped multiple sites (igeoconsultants.com, igeoconstructions.com, and this site) with focus on UX and performance.</p>
        <p><strong>Live Preview:</strong> This site</p>
      `,
    },
'project-6-content': {
      title: 'Content Creation & Video Editing',
      status: 'Active',
      duration: '4+ years',
      role: 'Editor',
      images: ['/images/projects/vid_edit.png'],
      technologies: [],
      liveDemo: '',
      github: '',
      description: `
        <p>Produced for DailyDoingsYT and freelance clients—storytelling and editing to communicate clearly and engage audiences.</p>
      `,
    },
'project-8-ui-design': {
      title: 'UI/Graphic Designer',
      status: 'Completed',
      duration: '',
      role: 'Designer',
      images: ['/images/projects/ui_design.png'],
      technologies: [],
      liveDemo: '',
      github: '',
      description: `
        <p>Logos, templates, thumbnails, banners—clean, consistent design focusing on usability and brand cohesion.</p>
      `,
    },
  };

  const project = projectData[id || ''];

  if (!project) {
    return (
      <PageWrapper>
        <Container>
          <DetailContainer>
            <BackButton to="/portfolio">← Back to Portfolio</BackButton>
            <h1>Project not found</h1>
            <p>The requested project could not be found.</p>
          </DetailContainer>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <DetailContainer>
          <BackButton to="/portfolio">← Back to Portfolio</BackButton>
          
          <ProjectTitle>{project.title}</ProjectTitle>
          
          <ProjectMeta>
            <MetaItem>
              <label>Status</label>
              <span>{project.status}</span>
            </MetaItem>
            <MetaItem>
              <label>Duration</label>
              <span>{project.duration}</span>
            </MetaItem>
            <MetaItem>
              <label>Role</label>
              <span>{project.role}</span>
            </MetaItem>
          </ProjectMeta>

          <ImageGallery>
            {project.images.map((image: string, index: number) => (
              <ProjectImage
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x400/1e1e1e/007bff?text=Project+Image+${index + 1}`;
                }}
              />
            ))}
          </ImageGallery>

          <TechnologiesSection>
            <SectionTitle>Technologies Used</SectionTitle>
            <TechIcons>
              {project.technologies.map((TechIcon, index) => {
                const Icon = TechIcon as React.ComponentType<any>;
                return <Icon key={index} />;
              })}
            </TechIcons>
          </TechnologiesSection>

          <Description dangerouslySetInnerHTML={{ __html: project.description }} />

          {(project.liveDemo || project.github) && (
            <ActionButtons>
              {project.liveDemo && (
                <ActionButton
                  as="a"
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Live Demo
                </ActionButton>
              )}
              {project.github && (
                <ActionButton
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  GitHub Repository
                </ActionButton>
              )}
            </ActionButtons>
          )}
        </DetailContainer>
      </Container>
    </PageWrapper>
  );
};

export default ProjectDetail;
