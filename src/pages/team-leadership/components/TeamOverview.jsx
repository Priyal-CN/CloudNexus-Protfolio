import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamOverview = () => {
  const teamStats = [
    {
      icon: "Users",
      value: "25+",
      label: "Years Combined Experience",
      description: "Decades of technology leadership"
    },
    {
      icon: "Award",
      value: "50+",
      label: "Industry Certifications",
      description: "AWS, Azure, Google Cloud & more"
    },
    {
      icon: "GraduationCap",
      value: "15+",
      label: "Advanced Degrees",
      description: "Masters & PhDs in Computer Science"
    },
    {
      icon: "Building",
      value: "200+",
      label: "Projects Delivered",
      description: "Successful enterprise implementations"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-primary to-accent text-white py-16 lg:py-24">
      <div className="container-brand">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Leadership That Drives
            <span className="block text-accent-foreground">Innovation</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto text-balance">
            Meet the visionary leaders who combine deep technical expertise with strategic business acumen to deliver transformational technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {teamStats?.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <Icon 
                  name={stat?.icon} 
                  size={32} 
                  color="white" 
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 metrics-counter">
                {stat?.value}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat?.label}
              </div>
              <div className="text-sm text-white/70">
                {stat?.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;