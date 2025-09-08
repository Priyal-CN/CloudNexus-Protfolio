import React from 'react';
import Icon from '../../../components/AppIcon';


const AwardSection = ({ awards, stats }) => {
  return (
    <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4">
          <Icon name="Award" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Award-Winning Excellence</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our commitment to innovation and quality has been recognized by industry leaders and clients worldwide.
        </p>
      </div>
      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {awards?.map((award, index) => (
          <div key={index} className="bg-card rounded-xl p-6 text-center card-elevation">
            <div className="w-12 h-12 bg-warning text-warning-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Trophy" size={24} />
            </div>
            <h3 className="font-bold text-foreground mb-2">{award?.title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{award?.organization}</p>
            <p className="text-xs text-accent font-medium">{award?.year}</p>
          </div>
        ))}
      </div>
      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-accent metrics-counter mb-2">
              {stat?.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardSection;