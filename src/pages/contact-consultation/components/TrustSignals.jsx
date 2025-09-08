import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const trustMetrics = [
    {
      icon: 'Users',
      value: '270+',
      label: 'Happy Clients',
      description: 'Successful partnerships built'
    },
    {
      icon: 'Award',
      value: '95%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction score'
    },
    {
      icon: 'Clock',
      value: '< 2hrs',
      label: 'Response Time',
      description: 'Average response time'
    },
    {
      icon: 'Shield',
      value: '100%',
      label: 'Confidential',
      description: 'Information security'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management',
      icon: 'Shield',
      verified: true
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security & Availability',
      icon: 'Lock',
      verified: true
    },
    {
      name: 'GDPR Compliant',
      description: 'Data Protection Regulation',
      icon: 'FileCheck',
      verified: true
    },
    {
      name: 'AWS Partner',
      description: 'Advanced Consulting Partner',
      icon: 'Cloud',
      verified: true
    }
  ];

  const securityFeatures = [
    {
      icon: 'Lock',
      title: 'End-to-End Encryption',
      description: 'All communications and data transfers are encrypted using industry-standard protocols.'
    },
    {
      icon: 'Shield',
      title: 'NDA Protection',
      description: 'We sign comprehensive NDAs before any detailed project discussions begin.'
    },
    {
      icon: 'FileCheck',
      title: 'Secure Documentation',
      description: 'All project documents are stored in secure, access-controlled environments.'
    },
    {
      icon: 'Eye',
      title: 'Privacy First',
      description: 'We never share client information or project details with third parties.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Contact',
      description: 'Reach out through any of our contact methods',
      icon: 'MessageSquare'
    },
    {
      step: '02',
      title: 'Consultation Scheduled',
      description: 'We schedule a free consultation within 24 hours',
      icon: 'Calendar'
    },
    {
      step: '03',
      title: 'Discovery Session',
      description: 'Deep dive into your requirements and challenges',
      icon: 'Search'
    },
    {
      step: '04',
      title: 'Proposal Delivery',
      description: 'Receive a detailed proposal within 48 hours',
      icon: 'FileText'
    },
    {
      step: '05',
      title: 'Project Kickoff',
      description: 'Begin your project with our expert team',
      icon: 'Rocket'
    }
  ];

  return (
    <section className="py-16 bg-trust">
      <div className="container-brand">
        {/* Trust Metrics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our track record speaks for itself. Here's why companies choose CloudNexus for their technology needs.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={metric?.icon} size={32} className="text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 metrics-counter">
                  {metric?.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {metric?.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric?.description}
                </div>
              </div>
            ))}
          </div>
        </div>

    

        {/* Security & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Security Features */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Icon name="Shield" size={24} className="text-accent mr-3" />
              Your Information is Secure
            </h3>
            <div className="space-y-4">
              {securityFeatures?.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature?.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Icon name="Award" size={24} className="text-accent mr-3" />
              Certifications & Compliance
            </h3>
            <div className="space-y-4">
              {certifications?.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon name={cert?.icon} size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {cert?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert?.description}
                      </p>
                    </div>
                  </div>
                  {cert?.verified && (
                    <div className="flex items-center space-x-1 text-green-600">
                      <Icon name="CheckCircle" size={16} />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consultation Process */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Consultation Process
            </h3>
            <p className="text-lg text-muted-foreground">
              A transparent, step-by-step approach to understanding your needs and delivering results.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps?.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Connector Line */}
                  {index < processSteps?.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/20 z-0" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step?.step}
                    </div>
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10">
                      <Icon name={step?.icon} size={24} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {step?.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="mt-16 bg-card rounded-xl p-8 text-center card-elevation">
          <Icon name="Clock" size={48} className="text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Our Response Time Guarantee
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We understand that time is critical in business. That's why we guarantee a response to all inquiries within 2 hours during business hours, and within 24 hours on weekends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} className="text-accent" />
              <span>Business Hours: Mon-Fri 10:30AM-7:30PM IST</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="text-accent" />
              <span>Weekend Response: Within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;