import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const TeamMemberCard = ({ member }) => {

  return (
    <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group">
      {/* Profile Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl overflow-hidden">
              <Image
                src={member?.avatar}
                alt={member?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={16} color="white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-foreground mb-1">
              {member?.name}
            </h3>
            <p className="text-accent font-semibold mb-2">
              {member?.position}
            </p>
            
          </div>
        </div>

    
      </div>

      {/* Expertise Tags */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {member?.expertise?.slice(0, 3)?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-trust text-accent text-xs font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
          {member?.expertise?.length > 3 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">
              +{member?.expertise?.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      {/* Expandable Content */}
      <div className={`transition-all duration-300`}>
        <div className="px-6 pb-4 border-t border-border">
          <div className="pt-4 space-y-4">
                       
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {member?.socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link?.url}
                  className="w-8 h-8 bg-muted hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={`${member?.name} ${link?.platform}`}
                >
                  <Icon 
                    name={link?.icon} 
                    size={16} 
                  />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamMemberCard;