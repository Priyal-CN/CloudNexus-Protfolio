import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import AwardSection from './components/AwardSection';
import ProjectListView from './components/ProjectListView';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from 'components/ui/Footer';

const PortfolioProjects = () => {
  const [viewMode, setViewMode] = useState('grid');

  // Mock data for projects
  const allProjects = [
    {
      id: 1,
      title: "CHORUS – Cross-Platform Healthcare App",
      client: "Google",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      challenge: "Inconsistent BLE performance across platforms, real-time data synchronization, maintaining healthcare-grade data security, and optimizing performance for multiple platforms.",
      solution: "Built scalable microservices architecture with real-time inventory management and AI-powered recommendations.",
      technologies: ["React Native", "JavaScript", "BLE", "Web", "Android", "iOS (Swift)"],
      isAwardWinning: true,
    },
    {
      id: 2,
      title: "AI-Driven E-Learning Platform (EdTech)",
      client: "EdTech Sector",
      image: "https://media.istockphoto.com/id/1660945979/photo/edtech-education-technology-distance-learning-online-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=WI3MOypLoRt3IT0zGtDUzizgttKn548ljdfhkuzmIr4=",
      challenge: "Developing a scalable AI model for personalized learning while ensuring real-time performance in live classes and collaboration, and striking the right balance between gamification and academic rigor.",
      solution: "Developed unified analytics platform with HIPAA-compliant data processing and predictive modeling capabilities.",
      technologies: ["AI/ML", "React", "Node.js", "WebRTC", "MongoDB", "Web & Mobile" ,"(Android/iOS)"],
      isAwardWinning: false,
      
    },
    {
      id: 3,
      title: "AI-Powered Financial Management App",
      client: "FinTech",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      challenge: "Ensuring secure handling of sensitive financial data and Building accurate AI models for spending analysis and fraud detection.",
      solution: "Built ultra-low latency trading engine with real-time risk management and automated compliance monitoring.",
      technologies: ["AI/ML", "React Native", "Python","Node.js", "Secure APIs", "iOS", "Android"],
      isAwardWinning: true,
     
    },
    {
      id: 4,
      title: "Smart Business Operations & ERP App (Enterprise)",
      client: "Enterprise Sector",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RVJQfGVufDB8fDB8fHww",
      challenge: "Manual monitoring of production lines led to 15% equipment downtime and quality control issues.",
      solution: "Implemented IoT sensors with predictive maintenance algorithms and real-time quality monitoring dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Python", "AI/ML", "AWS/Azure", "Web & Mobile", "(Android/iOS)"],
      isAwardWinning: false,
      
    },
    {
      id: 5,
      title: "Predictive Analytics for Business Intelligence",
      client: "FinTech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      challenge: "The challenges included managing large-scale datasets across business functions, building accurate predictive models for reliable forecasting, ensuring scalability for enterprise-wide analytics, and maintaining security and compliance for sensitive data.",
      solution: "Created scalable LMS with video streaming, real-time collaboration tools, and AI-powered personalization.",
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "AWS", "Machine Learning"],
      isAwardWinning: true,
     
    },
    {
      id: 6,
      title: "Cold Chain Monitoring for Leading Pharma Client",
      client: "Pharma",
      image: "https://media.istockphoto.com/id/2172475809/photo/vaccine-bottle-on-the-showcase-with-digital-temperature-monitoring.webp?a=1&b=1&s=612x612&w=0&k=20&c=8miRCBbXrRkjvWYtDyHYPn4UO0p7w37V5m4fUa0GE6A=",
      challenge: "Ensuring real-time temperature monitoring across distributed storage and transport facilities, maintaining strict regulatory compliance, minimizing spoilage risks due to temperature excursions, and integrating IoT-enabled devices with enterprise systems for seamless data visibility.",
      solution: "Developed AI-powered optimization platform with predictive analytics and automated vendor management.",
      technologies: ["FastAPI","PostgreSQL", "Heat Maps"],
      isAwardWinning: false,

    }
  ];

  // Awards data
  const awards = [
    {
      title: "Best Technology Innovation",
      organization: "Tech Excellence Awards",
      year: "2024"
    },
    {
      title: "Outstanding Digital Transformation",
      organization: "Digital Leaders Summit",
      year: "2023"
    },
    {
      title: "Client Choice Award",
      organization: "Industry Recognition Board",
      year: "2023"
    }
  ];

  // Statistics
  const stats = [
    { value: "250+", label: "Projects Completed" },
    { value: "98%", label: "Client Retention" },
    { value: "25+", label: "Industry Awards" },
    { value: "99.9%", label: "Success Rate" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>CloudNexus Portfolio </title>
        <meta name="description" content="Explore our portfolio of successful technology projects. From e-commerce platforms to IoT solutions, see how we transform businesses through innovative technology solutions." />
        <meta name="keywords" content="portfolio, projects, case studies, technology solutions, web development, mobile apps, enterprise software" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-brand">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6">
                <Icon name="Briefcase" size={32} />
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="gradient-text">Portfolio</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Discover how we've transformed businesses across industries through innovative technology solutions. 
                Each project represents a unique challenge solved with cutting-edge technology and strategic thinking.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span>250+ Successful Projects</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Award" size={16} className="text-warning" />
                  <span>25+ Industry Awards</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span>98% Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <div className="container-brand">
            <AwardSection awards={awards} stats={stats} />
          </div>
        </section>

      
        {/* Projects Section */}
        <section className="pb-16">
          <div className="container-brand">
            {/* Projects Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects?.map((project) => (
                  <ProjectCard key={project?.id} project={project} />
                ))}
              </div>
            ) : (
              <ProjectListView projects={allProjects} />
            )}
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="py-16">
          <div className="container-brand">
            <ConsultationCTA />
          </div>
        </section>

        {/* Footer */}
        <Footer/>

      </div>
    </>
  );
};

export default PortfolioProjects;