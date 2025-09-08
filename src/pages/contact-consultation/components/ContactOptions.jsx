import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const ContactOptions = ({ onOptionSelect, selectedOption }) => {
  const contactOptions = [
    {
      id: 'project',
      title: 'Project Consultation',
      description: 'Discuss your upcoming project requirements and get expert guidance on technology solutions.',
      icon: 'Briefcase',
      color: 'bg-blue-50 border-blue-200 hover:border-blue-300',
      iconColor: 'text-blue-600',
      popular: true
    },
    {
      id: 'partnership',
      title: 'Partnership Opportunities',
      description: 'Explore strategic partnerships and collaboration opportunities with our team.',
      icon: 'Handshake',
      color: 'bg-green-50 border-green-200 hover:border-green-300',
      iconColor: 'text-green-600'
    },
    {
      id: 'technical',
      title: 'Technical Questions',
      description: 'Get answers to specific technical questions about our services and capabilities.',
      icon: 'Code',
      color: 'bg-purple-50 border-purple-200 hover:border-purple-300',
      iconColor: 'text-purple-600'
    },
    {
      id: 'general',
      title: 'General Inquiries',
      description: 'Any other questions or information you need about our company and services.',
      icon: 'MessageCircle',
      color: 'bg-orange-50 border-orange-200 hover:border-orange-300',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Can We Help You?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the type of inquiry that best matches your needs, and we'll connect you with the right expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactOptions?.map((option) => (
            <div
              key={option?.id}
              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                selectedOption === option?.id
                  ? 'border-accent bg-accent/5 shadow-lg'
                  : option?.color
              }`}
              onClick={() => onOptionSelect(option?.id)}
            >
              {option?.popular && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${selectedOption === option?.id ? 'bg-accent text-white' : `bg-white ${option?.iconColor}`}`}>
                  <Icon name={option?.icon} size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {option?.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {option?.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Clock" size={16} className="text-accent" />
                    <span className="text-muted-foreground">
                      {option?.id === 'project' ? 'Response in 1 hour' : 'Response in 2 hours'}
                    </span>
                  </div>
                </div>
                
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedOption === option?.id
                    ? 'border-accent bg-accent' :'border-gray-300'
                }`}>
                  {selectedOption === option?.id && (
                    <Icon name="Check" size={16} className="text-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;