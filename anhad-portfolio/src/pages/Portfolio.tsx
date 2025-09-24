import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Container, Card, PageWrapper, theme } from '../styles/GlobalStyles';
import { IconType } from 'react-icons';
import { DiPython, DiReact, DiNodejs, DiMongodb, DiJavascript1 } from 'react-icons/di';
import { SiTypescript, SiTableau, SiTensorflow, SiSolidity, SiNextdotjs, SiDocker } from 'react-icons/si';
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(Card)`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 25px rgba(0, 123, 255, 0.4);
    transform: translateY(-4px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  background: ${theme.colors.backgroundLight};
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MoreLink = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  color: ${theme.colors.accent};
  font-weight: 600;
  font-size: 0.95rem;
`;

const TechIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  
  svg {
    font-size: 1.5rem;
    color: ${theme.colors.accent};
    
    &:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease;
    }
  }
`;

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  const projects: {
    id: string;
    title: string;
    description: string;
    image: string;
    technologies: IconType[];
  }[] = [
    {
      id: 'ai-voice-agent',
      title: 'AI Voice Agent for Restaurants',
      description: 'Built a voice agent that takes live phone orders, uses GPT to process them, and texts order summaries automatically via Twilio + n8n.',
      image: '/images/projects/ai_voice.png',
      technologies: [DiNodejs, DiPython, SiDocker],
    },
    {
      id: 'project-1-geospatial',
      title: 'Geospatial Imaging & Satellite Tracking',
      description: 'Express backend, satellite AOI drawing, weather data integration, and real-time tracking endpoints in Node.js.',
      image: '/images/projects/geo_track.png',
      technologies: [DiNodejs, DiPython, SiTableau],
    },
    {
      id: 'ai-chatbot',
      title: 'AI-Powered Restaurant Chatbot System',
      description: 'NLP + voice recognition to handle menus, orders, and reservations—reducing wait times and cutting third-party fees.',
      image: '/images/projects/ai_chat.png',
      technologies: [DiPython, SiTensorflow, DiReact, DiNodejs],
    },
    {
      id: 'project-4-nft',
      title: 'Furious Formula NFT Project',
      description: 'Python-based dynamic image generation + Solana smart contracts; executed minting with strong audience engagement.',
      image: '/images/projects/furious_formula.gif',
      technologies: [SiSolidity, DiJavascript1],
    },
    {
      id: 'project-5-pc-build',
      title: 'Custom PC Build',
      description: 'Budgeted, sourced, and assembled optimized PC builds—hands-on experience with hardware selection and configuration.',
      image: '/images/projects/build_pc.png',
      technologies: [DiJavascript1],
    },
    {
      id: 'project-3-websites',
      title: 'Websites: IGEO, IGEO Constructions, Portfolio',
      description: 'Planned, designed, and launched multiple sites (igeoconsultants.com, igeoconstructions.com, and this site).',
      image: '/images/projects/web_dev.png',
      technologies: [DiReact, SiNextdotjs, SiTypescript],
    },
    {
      id: 'project-6-content',
      title: 'Content Creation & Video Editing',
      description: 'Produced for DailyDoingsYT and freelance for 4+ years—storytelling, editing, and attention-grabbing visuals.',
      image: '/images/projects/vid_edit.png',
      technologies: [DiJavascript1],
    },
    {
      id: 'project-8-ui-design',
      title: 'UI/Graphic Designer',
      description: 'Logos, templates, thumbnails, banners—clean, consistent design that supports intuitive user experiences.',
      image: '/images/projects/ui_design.png',
      technologies: [DiReact],
    },
  ];

  const handleCardClick = (id: string) => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <PageWrapper>
      <Container>
        <PageTitle>Portfolio</PageTitle>
        <PageSubtitle>
          A collection of projects showcasing my skills in web development, data analysis, and emerging technologies.
        </PageSubtitle>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              hoverable
              onClick={() => handleCardClick(project.id)}
            >
              <ProjectImage 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x200/1e1e1e/007bff?text=Project+Image';
                }}
              />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechIcons>
                {project.technologies.map((TechIcon, index) => {
                  const Icon = TechIcon as React.ComponentType<any>;
                  return <Icon key={index} />;
                })}
              </TechIcons>
              <MoreLink>Learn more →</MoreLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </PageWrapper>
  );
};

export default Portfolio;
