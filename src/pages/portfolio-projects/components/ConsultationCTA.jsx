import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationCTA = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-center text-white mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Icon name="MessageSquare" size={32} color="white" />
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can create a custom solution that delivers measurable results for your organization.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/contact-consultation">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              className="bg-white text-primary hover:bg-white/90 cta-shadow"
            >
              Schedule Free Consultation
            </Button>
          </Link>
          
          <Link to="/services-overview">
            <Button
              variant="ghost"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={20}
              className="text-white border-white/30 hover:bg-white/10 hover:border-white"
            >
              Explore Our Services
            </Button>
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">5+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationCTA;