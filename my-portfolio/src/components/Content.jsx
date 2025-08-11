// src/components/Content.jsx

import React from 'react';
import Timeline from './Timeline';
import Projects from './Projects';

const experienceData = [
  {
    date: 'JULY - DEC 2019',
    title: 'Software Engineer Co-op',
    subtitle: 'Storry',
    description: '...',
    techStack: ['Android App', 'ScreenTime 2.0', 'Content', 'Backbone', 'JavaScript', 'CSS'],
  },
  {
    date: 'JULY - DEC 2015',
    title: 'Creative Technologist Co-op',
    subtitle: 'MullenLowe U.S.',
    description: '...',
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
];

const projectData = [
  {
    title: 'Build a Spotify Connected App',
    description: '...',
    techStack: ['React', 'Express', 'Spotify API', 'Heroku'],
    imageUrl: 'src/assets/images/spotify_app.png',
  },
  {
    title: 'Spotify Profile',
    description: '...',
    techStack: ['React', 'Express', 'Spotify API', 'Heroku'],
    imageUrl: 'src/assets/images/spotify_profile.png',
  },
];

const Content = () => {
  return (
    <div className="ml-96 flex-1 p-12 text-light-text overflow-y-auto">
      <section id="experience" className="mb-24">
        <h3 className="text-xl font-bold mb-6 text-gray-text">View Full Résumé ></h3>
        <Timeline items={experienceData} />
      </section>
      
      <section id="projects" className="mb-24">
        <Projects items={projectData} />
      </section>
      
      <footer className="text-center text-sm text-gray-text mt-20">
        <p>brittanychiang.com (v4)</p>
        <p className="mt-2">An ode portfolio site built with Gatsby with 6k+ stars and 2k+ forks</p>
      </footer>
    </div>
  );
};

export default Content;