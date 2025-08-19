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
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-ternary-dark dark:text-ternary-light">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-primary-dark rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {/* 이미지 영역 (항상 동일한 크기) */}
              {project.img && (
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* 카드 내용 */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-ternary-dark dark:text-ternary-light">
                    {project.category}
                  </p>
                </div>
                {project.description && (
                  <p className="mt-2 text-sm text-ternary-dark dark:text-ternary-light line-clamp-3">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
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