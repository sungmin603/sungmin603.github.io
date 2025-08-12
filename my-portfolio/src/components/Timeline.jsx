import React from 'react';

const Timeline = ({ items }) => {
  return (
    <div className="relative border-l-4 border-gray-200">
      {items.map((item, index) => (
        <div key={index} className="mb-8 flex items-start pl-6 relative">
          {/* 타임라인 점 */}
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full mt-1 -left-2 border-4 border-white"></div>
          
          <div className="flex flex-col ml-4">
            <span className="text-sm font-light text-gray-500 mb-1">{item.date}</span>
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-md text-gray-600 font-medium">{item.subtitle}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;