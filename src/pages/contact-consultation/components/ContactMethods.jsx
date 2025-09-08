import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const contactMethods = [
    {
      id: 'phone',
      title: 'Phone Call',
      description: 'Speak directly with our experts for immediate assistance.',
      icon: 'Phone',
      value: '+91 8793830447',
      action: 'Call Now',
      available: 'Available 9AM-6PM PST',
      color: 'bg-green-50 border-green-200 text-green-700',
      iconBg: 'bg-green-100',
      href: 'tel:+91 8793830447'
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive responses.',
      icon: 'Mail',
      value: 'work@CloudNexus.in',
      action: 'Send Email',
      available: 'Response within 2 hours',
      color: 'bg-blue-50 border-blue-200 text-blue-700',
      iconBg: 'bg-blue-100',
      href: 'mailto:work@CloudNexus.in'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Connect with us on WhatsApp for quick communication.',
      icon: 'MessageSquare',
      value: '+91 8793830447',
      action: 'Message Us',
      available: 'Available 24/7',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      iconBg: 'bg-purple-100',
      href: 'https://wa.me/+918793830447'
    }
  ];

  
  return (
    <>
      <section className="py-16 bg-background">
        <div className="container-brand">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the communication method that works best for you. We're here to help in whatever way is most convenient.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactMethods?.map((method) => (
              <div
                key={method?.id}
                className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${method?.color}`}
              >
                <div className={`w-12 h-12 ${method?.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={method?.icon} size={24} className={method?.color?.split(' ')?.[2]} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method?.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method?.description}
                </p>
                
                <div className="mb-4">
                  <p className="font-medium text-foreground text-sm">
                    {method?.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {method?.available}
                  </p>
                </div>
                
                {method?.href ? (
                  <a
                    href={method?.href}
                    target={method?.href?.startsWith('http') ? '_blank' : undefined}
                    rel={method?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Button variant="outline" size="sm" fullWidth>
                      {method?.action}
                    </Button>
                  </a>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    onClick={method?.onClick}
                  >
                    {method?.action}
                  </Button>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
     
    </>
  );
};

export default ContactMethods;