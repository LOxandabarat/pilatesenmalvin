import React from 'react';

const JournalCard = ({ image, title, description, date }) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-slow group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        {date && (
          <p className="text-xs text-dark opacity-60 uppercase tracking-wider">
            {date}
          </p>
        )}
        <h3 className="text-xl font-heading text-dark group-hover:text-primary transition-base">
          {title}
        </h3>
        <p className="text-base md:text-lg text-dark opacity-80 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>
    </article>
  );
};

export default JournalCard;
