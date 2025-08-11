// src/components/Timeline.jsx

import React from 'react';

const Timeline = ({ items }) => {
  return (
    <div className="space-y-12">
      {items.map((item, index) => (
        <div key={index} className="flex relative group bg-dark-card p-6 rounded-lg shadow-xl border border-transparent hover:border-accent-color transition-all duration-300 transform hover:scale-105">
          <div className="flex-1">
            <p className="text-sm text-gray-text font-medium mb-1">{item.date}</p>
            <h3 className="text-xl font-bold text-light-text mb-1">{item.title}</h3>
            <p className="text-lg font-medium text-gray-text mb-4">{item.subtitle}</p>
            <p className="text-gray-text mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;