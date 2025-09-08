import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectListView = ({ projects }) => {
  return (
    <div className="space-y-6">
      {projects?.map((project) => (
        <div key={project?.id} className="bg-card rounded-xl overflow-hidden card-elevation hover:card-elevation transition-all duration-300 group">
          <div className="flex flex-col lg:flex-row">
            {/* Project Image */}
            <div className="relative lg:w-80 h-48 lg:h-auto overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  {project?.type}
                </span>
                {project?.isAwardWinning && (
                  <div className="w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center">
                    <Icon name="Award" size={16} />
                  </div>
                )}
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1 p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={project?.clientLogo}
                    alt={project?.client}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                      {project?.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{project?.client}</span>
                      <span>•</span>
                      <span>{project?.industry}</span>
                    </div>
                  </div>
                </div>
                
                <Link to={`/portfolio-projects/${project?.id}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                    iconSize={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </Link>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">
                  {project?.challenge}
                </p>
                <p className="text-sm text-foreground">
                  <span className="font-medium">Solution:</span> {project?.solution}
                </p>
              </div>

              {/* Technology Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-surface text-foreground text-xs rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results & Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {project?.results?.map((result, index) => (
                  <div key={index} className="text-center p-3 bg-trust rounded-lg">
                    <div className="text-lg font-bold text-accent metrics-counter">
                      {result?.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result?.metric}
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Details */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={16} />
                    <span>{project?.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Users" size={16} />
                    <span>{project?.teamSize} team members</span>
                  </div>
                </div>

                <Link to={`/portfolio-projects/${project?.id}`}>
                  <Button
                    variant="outline"
                    size="sm"
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectListView;