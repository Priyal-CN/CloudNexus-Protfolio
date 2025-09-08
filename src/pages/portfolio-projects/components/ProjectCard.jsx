import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, className = "" }) => {
  return (
    <div className={`group bg-card rounded-xl overflow-hidden card-elevation hover:card-elevation transition-all duration-300 ${className}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 sm:h-56">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
       
        {/* Award Badge */}
        {project?.isAwardWinning && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center">
              <Icon name="Award" size={16} />
            </div>
          </div>
        )}

      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Client & Industry */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-base font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{project?.client}</span>
          </div>

        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
          {project?.title}
        </h3>

        {/* Challenge Overview */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project?.challenge}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-foreground text-xs rounded border"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{project?.technologies?.length - 3} more
            </span>
          )}
        </div>


        {/* Action Button */}
        <Link to={`/portfolio-projects/${project?.id}`} className="block">
          <Button
            variant="outline"
            fullWidth
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent"
          >
            View Case Study
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;