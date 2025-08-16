import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import FeaturedProject from "./FeaturedProject";
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
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

		{/* Featured Projects */}
		<div className="mt-12">
			<h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
			Featured Projects
			</h2>
			{featuredProjects.map((project) => (
			<FeaturedProject
				key={project.id}
				title={project.title}
				description={project.description}
				techStack={project.tech}
				image={project.img}
				link={project.link}
			/>
			))}
		</div>

		{/* Other Projects */}
		<div className="mt-16 max-w-4xl mx-auto">
		<h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
			Other Projects
		</h2>
		<ul className="space-y-4">
			{otherProjects.map((project) => (
			<li
				key={project.id}
				className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
			>
				{/* 작은 이미지 */}
				<img
				src={project.img}
				alt={project.title}
				className="w-14 h-14 object-contain rounded-md"
				/>
				{/* 텍스트 */}
				<div>
				<h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
					{project.title}
				</h3>
				<p className="text-sm text-gray-600 dark:text-gray-400">
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
