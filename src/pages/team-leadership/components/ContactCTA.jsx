import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactCTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent to-cta text-white">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Users" size={64} className="mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 text-balance">
              Let's discuss how our leadership team can help transform your technology challenges into competitive advantages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact-consultation">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                className="bg-white text-accent hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Consultation
              </Button>
            </Link>
            
            <Link to="/portfolio-projects">
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
                iconSize={20}
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">&lt; 2 Hours</div>
                <div className="text-white/80">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">95%</div>
                <div className="text-white/80">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;