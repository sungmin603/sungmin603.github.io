// src/components/Projects.jsx

import React from 'react';

const Projects = ({ items }) => {
  return (
    <div className="space-y-12">
      {items.map((project, index) => (
        <div key={index} className="flex bg-dark-card p-6 rounded-lg shadow-xl border border-transparent hover:border-accent-color transition-all duration-300 transform hover:scale-105">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-24 h-24 object-cover rounded mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-light-text mb-1">{project.title}</h3>
            <p className="text-gray-text mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
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

export default Projects;