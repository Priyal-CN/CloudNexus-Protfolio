import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionVisionSection from './components/MissionVisionSection';
import TimelineSection from './components/TimelineSection';
import ValuesSection from './components/ValuesSection';
import StatsSection from './components/StatsSection';
import CertificationsSection from './components/CertificationsSection';
import InnovationSection from './components/InnovationSection';
import Footer from "../../components/ui/Footer";


const AboutCompany = () => {
  return (
    <>
      <Helmet>
        <title>CloudNexus Portfolio</title>
        <meta 
          name="description" 
          content="Discover CloudNexus's journey from startup to global technology partner. Learn about our mission, values, culture, and commitment to transforming businesses through innovative technology solutions." 
        />
        <meta name="keywords" content="about CloudNexus, company story, technology partner, innovation, mission, values, culture, team" />
        <meta property="og:title" content="About CloudNexus - Visionary Technology Partners" />
        <meta property="og:description" content="Discover our journey, mission, and commitment to transforming businesses through innovative technology solutions." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-company" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <MissionVisionSection />
          <TimelineSection />
          <ValuesSection />
          <StatsSection />
          <CertificationsSection />
          <InnovationSection />
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default AboutCompany;