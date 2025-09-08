import React from "react";
import Icon from "../../../components/AppIcon";
import { Typewriter } from "react-simple-typewriter";

const ContactHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-accent text-white py-20 lg:py-32">
      <div className="container-brand">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Icon name="MessageSquare" size={20} className="text-accent" />
            <span className="text-sm font-medium">
              Let's Start a Conversation
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Ready to Transform Your <br/>
            <span className="text-[#4e7bbd]">
              <Typewriter
                words={["Business?"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-balance">
            Connect with our technology experts to discuss your project, explore
            partnership opportunities, or get answers to your technical
            questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-blue-200">
              <Icon name="Clock" size={18} />
              <span className="text-sm">Response within 2 hours</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Icon name="Shield" size={18} />
              <span className="text-sm">100% Confidential</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-300 rounded-full"></div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Icon name="Award" size={18} />
              <span className="text-sm">Free Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
