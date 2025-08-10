import React from 'react';

const projects = [
  {
    title: 'Project Alpha',
    description: '이 프로젝트는 [어떤 문제 해결, 어떤 기능 구현]을 목표로 개발되었습니다. [사용 기술 스택]을 사용하여 [결과/성과]를 만들어냈습니다.',
    techStack: ['React', 'Tailwind', 'Vite'],
    imageUrl: 'src/assets/images/project1.png', // 이미지 경로 수정
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Project Beta',
    description: '두 번째 프로젝트 설명입니다. [어떤 기술적 도전], [배운 점] 등을 상세하게 작성하면 좋습니다.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    imageUrl: 'src/assets/images/project2.png', // 이미지 경로 수정
    githubUrl: '#',
    liveUrl: '#',
  },
  // 프로젝트를 더 추가할 수 있습니다.
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-12 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;