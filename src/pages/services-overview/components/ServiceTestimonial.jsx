import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceTestimonial = ({ testimonial, isActive, onPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay(testimonial?.id);
  };

  return (
    <div className={`bg-card border border-border rounded-xl p-6 transition-all duration-300 ${
      isActive ? 'ring-2 ring-accent shadow-card-hover' : 'card-elevation hover:shadow-card-hover'
    }`}>
      {/* Client Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial?.avatar}
              alt={testimonial?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
          <p className="text-xs text-muted-foreground">{testimonial?.company}</p>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)]?.map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < testimonial?.rating ? 'text-warning fill-current' : 'text-muted'}
            />
          ))}
        </div>
      </div>
      {/* Service Context */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 bg-accent/10 rounded-md flex items-center justify-center">
          <Icon name={testimonial?.serviceIcon} size={14} className="text-accent" />
        </div>
        <span className="text-sm font-medium text-foreground">{testimonial?.service}</span>
        <span className="text-xs text-muted-foreground">•</span>
        <span className="text-xs text-muted-foreground">{testimonial?.industry}</span>
      </div>
      {/* Testimonial Content */}
      <blockquote className="text-muted-foreground text-sm leading-relaxed mb-4 italic">
        "{testimonial?.content}"
      </blockquote>
      {/* Results Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {testimonial?.results?.map((result, index) => (
          <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-lg font-bold text-success">{result?.value}</div>
            <div className="text-xs text-muted-foreground">{result?.metric}</div>
          </div>
        ))}
      </div>
      {/* Video Testimonial */}
      {testimonial?.hasVideo && (
        <div className="relative mb-4">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative group cursor-pointer" onClick={handlePlay}>
            <Image
              src={testimonial?.videoThumbnail}
              alt="Video testimonial thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Icon name="Play" size={24} color="white" className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/80 text-white px-2 py-1 rounded text-xs">
              {testimonial?.videoDuration}
            </div>
          </div>
        </div>
      )}
      {/* Project Details */}
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={12} />
            <span>{testimonial?.projectDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Clock" size={12} />
            <span>{testimonial?.projectDuration}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="ExternalLink"
          iconPosition="right"
          iconSize={12}
          className="text-accent hover:text-accent/80 p-0 h-auto"
        >
          Case Study
        </Button>
      </div>
    </div>
  );
};

export default ServiceTestimonial;