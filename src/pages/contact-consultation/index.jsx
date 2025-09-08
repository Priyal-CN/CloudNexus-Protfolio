import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import FAQ from './components/FAQ';
import TrustSignals from './components/TrustSignals';

const ContactConsultation = () => {
  const [activeSection, setActiveSection] = useState('contact');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionNavigation = [
    { id: 'contact', label: 'Contact Form', icon: 'MessageSquare' },
    { id: 'methods', label: 'Contact Methods', icon: 'Phone' }
  ];

  return (
    <>
      <Helmet>
        <title>CloudNexus Portfolio </title>
        <meta 
          name="description" 
          content="Get in touch with CloudNexus's technology experts. Schedule a free consultation, ask technical questions, or explore partnership opportunities. Multiple contact methods available with guaranteed response times." 
        />
        <meta name="keywords" content="contact CloudNexus, technology consultation, free consultation, project inquiry, partnership opportunities, technical support" />
        <meta property="og:title" content="Contact & Consultation - CloudNexus Portfolio" />
        <meta property="og:description" content="Connect with our technology experts for free consultation and project discussions. Multiple contact methods with guaranteed response times." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-consultation" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ContactHero />

        {/* Section Navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="container-brand">
            <div className="flex items-center justify-center space-x-1 py-4">
              {sectionNavigation?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => {
                    setActiveSection(section?.id);
                    const element = document.getElementById(section?.id);
                    if (element) {
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === section?.id
                      ? 'bg-accent text-white' :'text-muted-foreground hover:text-accent hover:bg-accent/10'
                  }`}
                >
                  <span>{section?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact">
          <div id="contact-form">
            <ContactForm />
          </div>
        </div>

        {/* Contact Methods Section */}
        <div id="methods">
          <ContactMethods />
        </div>

        {/* Trust Signals */}
        <TrustSignals />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container-brand text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Don't wait - reach out today and let's discuss how we can help transform your business with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+15551234567"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Call Now: +91 8793830447</span>
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  if (element) {
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p>Available Mon-Fri 10:30AM-7:30PM PST • Response within 2 hours • Free consultation</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactConsultation;