import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamCulture = () => {
  const cultureValues = [
    {
      icon: "Heart",
      title: "Human-Centered Innovation",
      description: "We believe technology should enhance human potential, not replace it. Every solution we create starts with understanding people's needs and aspirations."
    },
    {
      icon: "Users",
      title: "Collaborative Excellence",
      description: "Our diverse team brings together different perspectives, experiences, and expertise to create solutions that are both innovative and inclusive."
    },
    {
      icon: "Target",
      title: "Results-Driven Partnership",
      description: "We measure our success by our clients\' achievements. Every project is a partnership focused on delivering measurable business outcomes."
    },
    {
      icon: "Lightbulb",
      title: "Continuous Learning",
      description: "In a rapidly evolving technology landscape, we invest heavily in learning, experimentation, and staying ahead of industry trends."
    }
  ];

  const teamImages = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces"
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container-brand">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our Culture &amp; Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We've built a culture that attracts top talent and delivers exceptional results through collaboration, innovation, and unwavering commitment to client success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Culture Values */}
          <div className="space-y-8">
            {cultureValues?.map((value, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                  <Icon 
                    name={value?.icon} 
                    size={24} 
                    className="text-accent group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {value?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Team Images Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden">
                  <Image
                    src={teamImages?.[0]}
                    alt="Team collaboration session"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={teamImages?.[1]}
                    alt="Team brainstorming"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-2xl overflow-hidden">
                  <Image
                    src={teamImages?.[2]}
                    alt="Team meeting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces"
                    alt="Team celebration"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-card p-6 border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Team Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Interaction Philosophy */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-8">
            <Icon name="Handshake" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Partnership-First Approach
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't just deliver projects – we build lasting partnerships that drive continuous innovation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-trust rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Ear" size={24} className="text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Deep Listening
              </h4>
              <p className="text-sm text-muted-foreground">
                We invest time to truly understand your business challenges, goals, and unique context before proposing solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-trust rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={24} className="text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Transparent Communication
              </h4>
              <p className="text-sm text-muted-foreground">
                Regular updates, honest feedback, and clear documentation ensure everyone stays aligned throughout the project lifecycle.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-trust rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} className="text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Long-term Success
              </h4>
              <p className="text-sm text-muted-foreground">
                Our relationship doesn't end at project delivery. We provide ongoing support and strategic guidance for sustained growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;