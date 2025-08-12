import React from 'react';
import About from './About';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

// 타임라인에 들어갈 더미 데이터
const educationData = [
  {
    title: 'University of Google',
    subtitle: 'Bachelor of Science in Computer Science',
    date: '2019 - 2023',
    description: 'Developed a strong foundation in data structures, algorithms, and software engineering principles. Completed projects in web development, machine learning, and mobile applications.'
  },
  // 다른 학력 추가
];

const experienceData = [
  {
    title: 'Google Inc.',
    subtitle: 'Software Engineer',
    date: '2023 - Present',
    description: 'Designed and developed user-facing features for a large-scale web application using React and TypeScript. Collaborated with a team of 5 engineers using Agile methodologies.'
  },
  // 다른 경력 추가
];

const Content = () => {
  return (
    <div className="ml-72 flex-1 p-8">
      <About />
      
      <section id="education" className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
        <Timeline items={educationData} />
      </section>

      <section id="experience" className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Experience</h2>
        <Timeline items={experienceData} />
      </section>

      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Content;