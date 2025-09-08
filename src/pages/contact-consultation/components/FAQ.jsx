import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      category: 'Consultation Process',
      questions: [
        {
          question: 'What happens during the initial consultation?',
          answer: `During your initial consultation, we'll discuss your project requirements, business goals, and technical challenges. Our expert will:\n\n• Understand your current situation and pain points\n• Explore your vision and desired outcomes\n• Assess technical requirements and constraints\n• Provide initial recommendations and next steps\n• Answer any questions you have about our services\n\nThe consultation is completely free and there's no obligation to proceed.`
        },
        {
          question: 'How long does a consultation typically last?',
          answer: `Consultation duration depends on the type you choose:\n\n• Discovery Call: 30 minutes - Perfect for initial discussions and understanding your needs\n• Technical Deep Dive: 60 minutes - Detailed technical discussion about your project\n• Strategy Session: 45 minutes - Strategic planning to align technology with business goals\n\nWe can always extend the time if needed to ensure all your questions are answered.`
        },
        {
          question: 'Do I need to prepare anything for the consultation?',
          answer: `To get the most out of your consultation, consider preparing:\n\n• A brief overview of your project or challenge\n• Any existing documentation, wireframes, or technical specifications\n• Your budget range and timeline expectations\n• List of questions or concerns you'd like to discuss\n• Access to any current systems we might need to review\n\nDon't worry if you don't have everything - we can work with whatever information you have available.`
        }
      ]
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'What types of projects do you work on?',
          answer: `We work on a wide range of technology projects including:\n\n• Web application development (React, Node.js, Python)\n• Mobile app development (iOS, Android, React Native)\n• Cloud infrastructure and DevOps solutions\n• API development and system integrations\n• Database design and optimization\n• UI/UX design and user experience consulting\n• Digital transformation and modernization projects\n\nIf you have a specific technology need, we'd be happy to discuss how we can help.`
        },
        {
          question: 'How do you determine project pricing?',
          answer: `Our pricing is based on several factors:\n\n• Project scope and complexity\n• Timeline and urgency requirements\n• Technology stack and tools required\n• Team size and expertise level needed\n• Ongoing support and maintenance needs\n\nWe offer both fixed-price and time-and-materials pricing models. During your consultation, we'll discuss your budget and recommend the best approach for your project.`
        },
        {
          question: 'Do you offer ongoing support after project completion?',
          answer: `Yes, we provide comprehensive post-launch support including:\n\n• Bug fixes and maintenance\n• Performance monitoring and optimization\n• Security updates and patches\n• Feature enhancements and additions\n• Technical support and troubleshooting\n• Training for your team\n\nWe offer flexible support packages ranging from basic maintenance to full managed services.`
        }
      ]
    },
    {
      category: 'Working Together',
      questions: [
        {
          question: 'What is your typical project timeline?',answer: `Project timelines vary based on scope and complexity:\n\n• Simple websites: 2-4 weeks\n• Web applications: 2-6 months\n• Mobile apps: 3-8 months\n• Enterprise solutions: 6-18 months\n• MVP development: 1-3 months\n\nWe'll provide a detailed timeline during your consultation based on your specific requirements. We also offer expedited delivery for urgent projects.`
        },
        {
          question: 'How do you handle project communication?',
          answer: `We believe in transparent, regular communication:\n\n• Weekly progress reports and demos\n• Dedicated project manager as your main point of contact\n• Access to our project management tools\n• Regular video calls and check-ins\n• Slack or Teams integration for real-time communication\n• Detailed documentation throughout the project\n\nYou'll always know exactly where your project stands and what's coming next.`
        },
        {
          question: 'Can you work with our existing team?',
          answer: `Absolutely! We're experienced in collaborative environments:\n\n• Integrate with your existing development team\n• Provide technical leadership and mentoring\n• Follow your established processes and workflows\n• Use your preferred tools and platforms\n• Provide knowledge transfer and training\n• Scale our involvement up or down as needed\n\nWe're flexible and adapt to your working style and requirements.`
        }
      ]
    },
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'What information do you need to get started?',
          answer: `To begin your project, we typically need:\n\n• Project overview and objectives\n• Target audience and user requirements\n• Technical requirements and constraints\n• Budget range and timeline expectations\n• Any existing assets (designs, code, documentation)\n• Stakeholder information and decision-making process\n\nWe'll guide you through gathering this information during our initial consultation.`
        },
        {
          question: 'How quickly can we start working together?',answer: `We can typically start new projects within:\n\n• Small projects: 1-2 weeks\n• Medium projects: 2-3 weeks\n• Large projects: 3-4 weeks\n• Emergency projects: Within days\n\nThe timeline depends on our current capacity and your project requirements. During busy periods, we may have a longer lead time, but we'll always be transparent about availability.`
        },
        {
          question: 'Do you sign NDAs and confidentiality agreements?',
          answer: `Yes, we take confidentiality very seriously:\n\n• We're happy to sign your NDA before any detailed discussions\n• All our team members are bound by confidentiality agreements\n• We have secure processes for handling sensitive information\n• We can work within your security requirements and protocols\n• We maintain strict data protection and privacy standards\n\nYour intellectual property and business information are completely safe with us.`
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex, questionIndex) => {
    const itemKey = `${categoryIndex}-${questionIndex}`;
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems?.has(itemKey)) {
      newOpenItems?.delete(itemKey);
    } else {
      newOpenItems?.add(itemKey);
    }
    
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our consultation process, services, and how we work with clients.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData?.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                  <Icon 
                    name={
                      categoryIndex === 0 ? 'MessageSquare' :
                      categoryIndex === 1 ? 'DollarSign' :
                      categoryIndex === 2 ? 'Users' : 'Rocket'
                    } 
                    size={20} 
                    className="text-accent" 
                  />
                </div>
                {category?.category}
              </h3>
              
              <div className="space-y-4">
                {category?.questions?.map((item, questionIndex) => {
                  const itemKey = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems?.has(itemKey);
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-card rounded-lg border border-border card-elevation"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200 rounded-lg"
                      >
                        <span className="text-lg font-medium text-foreground pr-4">
                          {item?.question}
                        </span>
                        <Icon
                          name={isOpen ? "ChevronUp" : "ChevronDown"}
                          size={20}
                          className="text-muted-foreground flex-shrink-0"
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="pt-4 border-t border-border">
                            <div className="text-muted-foreground whitespace-pre-line">
                              {item?.answer}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-trust rounded-xl p-8 max-w-2xl mx-auto">
            <Icon name="HelpCircle" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help with any specific questions about your project or our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+91 8793830447" className="inline-block">
                <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors duration-200 flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <span>Call Us Now</span>
                </button>
              </a>
              <a href="mailto:work@CloudNexus.in" className="inline-block">
                <button className="border border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 flex items-center space-x-2">
                  <Icon name="Mail" size={18} />
                  <span>Send Email</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;