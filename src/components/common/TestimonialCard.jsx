import React from 'react';

const TestimonialCard = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-md mx-auto">
      <div className="text-4xl md:text-5xl text-secondary mb-4 font-serif">"</div>
      <p className="text-base md:text-lg text-dark opacity-80 italic mb-6 leading-relaxed">
        {quote}
      </p>
      <div className="border-t border-gray-200 pt-4">
        <p className="font-heading text-base md:text-lg text-dark font-semibold">
          {author}
        </p>
        {role && (
          <p className="text-xs md:text-sm text-dark opacity-60 mt-1">
            {role}
          </p>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
