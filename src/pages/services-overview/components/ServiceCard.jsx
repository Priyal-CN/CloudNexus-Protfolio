import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceCard = ({ service, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  const active = isHovered || isActive;

  return (
    <div 
      className="relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND LAYERS */}
      
      <div
        className={`absolute w-full h-full rounded-2xl transition-all duration-500 ease-out
          ${active 
            ? 'bg-sky-300 opacity-50 -rotate-6 scale-105' 
            : 'bg-sky-200 opacity-0 scale-95'
          }`}
      ></div>

      {/* MAIN CARD */}
      <div
        className={`relative rounded-2xl p-6 w-72 transition-all duration-500 ease-out
          ${active 
            ? 'bg-[#4e7bbd] text-white scale-105 shadow-2xl' 
            : 'bg-[#4e7bbd]   text-white shadow-lg'
          }`}
      >
        {/* Icon */}
        <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 transition-all duration-300
          ${active ? 'bg-white/30 scale-110' : 'bg-white/20'}
        `}>
          <Icon name={service?.icon} size={28} strokeWidth={2} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-center">{service?.title}</h3>
        <p className="text-sm opacity-90 text-center mt-2 leading-relaxed">{service?.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
