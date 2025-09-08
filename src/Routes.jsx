import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import PortfolioProjects from './pages/portfolio-projects';
import ProjectDetail from "./pages/portfolio-projects/components/ProjectDetail";
import AboutCompany from './pages/about-company';
import TeamLeadership from './pages/team-leadership';
import ContactConsultation from './pages/contact-consultation';
import ServicesOverview from './pages/services-overview';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio-projects" element={<PortfolioProjects />} />
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/team-leadership" element={<TeamLeadership />} />
        <Route path="/contact-consultation" element={<ContactConsultation />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/homepage" element={<Homepage />} />

        {/* Project detail page */}
        <Route path="/portfolio-projects/:id" element={<ProjectDetail/>} />
        
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
