import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, PageWrapper, Card, Button, theme } from '../styles/GlobalStyles';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// React 19 type tweak: cast icon components to ComponentType to satisfy strict JSX element typing
const EmailIcon = MdEmail as unknown as React.ComponentType<any>;
const PhoneIcon = MdPhone as unknown as React.ComponentType<any>;
const LinkedinIcon = FaLinkedin as unknown as React.ComponentType<any>;
const GithubIcon = FaGithub as unknown as React.ComponentType<any>;

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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Section = styled.section``;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const ResumePreview = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ResumeImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  border: 2px solid ${theme.colors.border};
  margin-bottom: 1.5rem;
  background: ${theme.colors.cardBackground};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const DownloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${theme.colors.border};
  color: ${theme.colors.accent};
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${theme.colors.accent};
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.4);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.25rem;
  }
`;

const ContactForm = styled(Card)`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.backgroundLight};
  color: ${theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${theme.colors.border};
  border-radius: 8px;
  background: ${theme.colors.backgroundLight};
  color: ${theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ email: '', message: '' });
  };

  const handleDownloadResume = () => {
    // In a real application, you would link to your actual resume PDF
    const resumeUrl = '/resume/anhad-chawla-resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Anhad_Chawla_Resume.pdf';
    link.click();
  };

  return (
    <PageWrapper>
      <Container>
        <PageTitle>Let's Connect</PageTitle>
        <PageSubtitle>
          Ready to collaborate on exciting projects or discuss opportunities? 
          Let's connect and build something amazing together.
        </PageSubtitle>

        <ContentGrid>
          <Section>
            <SectionTitle>My Resume</SectionTitle>
            <ResumePreview>
              <ResumeImage
                src="/images/resume/resume.png"
                alt="Anhad Chawla Resume Preview"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500/1e1e1e/007bff?text=Resume+Preview';
                }}
              />
              <DownloadButton
                variant="primary"
                onClick={handleDownloadResume}
              >
                📄 Download Resume
              </DownloadButton>
            </ResumePreview>

          </Section>

          <Section>
            <SectionTitle>Contact Me</SectionTitle>
            <ContactForm>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="email">Your Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </FormGroup>

                <SubmitButton type="submit" variant="primary">
                  Send Message
                </SubmitButton>

                <ContactIcons>
                  <IconLink
                    href="mailto:anhad11107@gmail.com"
                    aria-label="Email"
                    title="Email: anhad11107@gmail.com"
                  >
                    <EmailIcon />
                  </IconLink>
                  <IconLink
                    href="tel:+14378822552"
                    aria-label="Phone"
                    title="Phone: +1 (437) 882-2552"
                  >
                    <PhoneIcon />
                  </IconLink>
                  <IconLink
                    href="https://www.linkedin.com/in/anhad-chawla-a90269208/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <LinkedinIcon />
                  </IconLink>
                  <IconLink
                    href="https://github.com/AsmpSa00"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <GithubIcon />
                  </IconLink>
                </ContactIcons>
              </form>
            </ContactForm>
          </Section>
        </ContentGrid>
      </Container>
    </PageWrapper>
  );
};

export default Contact;
