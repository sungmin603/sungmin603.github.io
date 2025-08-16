import { useContext } from 'react';
// import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
// import FeaturedProject from "./FeaturedProject";
import { ProjectsContext } from '../../context/ProjectsContext';
// import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		// searchProject,
		// setSearchProject,
		// searchProjectsByTitle,
		// selectProject,
		// setSelectProject,
		// selectProjectsByCategory,
	} = useContext(ProjectsContext);

	// 플래그로 분리
	const featuredProjects = projects.filter((p) => p.isFeatured);
	const otherProjects = projects.filter((p) => !p.isFeatured);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects Portfolio
        </p>
      </div>

      {/* Featured Projects → 카드(Grid) */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => (
            <ProjectSingle
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.img}
            />
          ))}
        </div>
      </div>

      {/* Other Projects → 리스트(간단 UI) */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
          Other Projects
        </h2>
        <ul className="space-y-4">
          {otherProjects.map((project) => (
            <li
              key={project.id}
              className="flex items-center space-x-4 p-3 border rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800"
            >
              {/* 작은 썸네일 */}
              <img
                src={project.img}
                alt={project.title}
                className="w-12 h-12 object-contain rounded-md"
              />
              {/* 텍스트 */}
              <div>
                <h3 className="text-base font-semibold text-ternary-dark dark:text-ternary-light">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsGrid;