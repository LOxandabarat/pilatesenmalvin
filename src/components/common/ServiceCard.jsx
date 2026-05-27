import React from 'react';

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/5]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark bg-opacity-0 group-hover:bg-opacity-20 transition-base" />
      </div>
      <h3 className="text-lg font-heading text-center text-white">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-white text-center mt-2 opacity-90">
          {description}
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
