import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { ProjectsContext } from '../../context/ProjectsContext';

/* 프로젝트 카드 공통 내용 */
const ProjectCardContent = ({ project, isMain }) => (
	<>
		<p className={isMain ? 'main-project-title' : 'other-project-title'}>
			{project.period && (
				<span className={isMain ? 'main-project-period' : 'other-project-period'}>
					({project.period})
				</span>
			)}
			{project.title}
		</p>

		<div className={isMain ? 'main-project-tags' : 'other-project-tags'}>
			{project.category.map((cat, idx) => (
				<span key={idx} className="pill-sky">{cat}</span>
			))}
			{project.tech.map((tech, idx) => (
				<span key={idx} className="pill-green">{tech}</span>
			))}
		</div>

		{project.role && (
			<div className={isMain ? 'main-project-role' : 'other-project-role'}>
				{project.role.join(', ')}
			</div>
		)}

		<div className={isMain ? 'main-project-desc' : 'other-project-desc'}>
			{project.description.map((desc, idx) => (
				<div key={idx} className={isMain ? 'main-project-desc-item' : 'other-project-desc-item'}>
					{desc}
				</div>
			))}
		</div>
	</>
);

const ProjectsGrid = ({ limit }) => {
	const { projects } = useContext(ProjectsContext);

	const featuredProjects = projects.filter((p) => p.isFeatured);
	const mainProjects     = projects.filter((p) => p.isMain);
	const otherProjects    = projects.filter((p) => !p.isFeatured && !p.isMain);

	const displayedFeatured = limit ? featuredProjects.slice(0, limit) : featuredProjects;
	const displayedMain     = limit ? mainProjects.slice(0, limit)     : mainProjects;
	const displayedOther    = limit ? otherProjects.slice(0, limit)    : otherProjects;

	return (
		<section className="py-5 sm:py-10 mt-5 sm:mt-10">

			{/* ── Project Categories ── */}
			<div className="mt-16 max-w-4xl mx-auto">
				<h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
					Project Categories
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{displayedFeatured.map((project) => (
						<div
							key={project.id}
							className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg shadow-md overflow-hidden h-96 bg-white dark:bg-gray-800"
						>
							<div className="w-full h-40 bg-gray-100 flex items-center justify-center">
								{project.img && (
									<img
										src={project.img}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								)}
							</div>
							<div className="flex flex-col justify-between flex-1 p-4">
								<h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light mb-2">
									{project.title}
								</h3>
								<div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
									{project.description.map((desc, idx) => (
										<div key={idx} className="text-sm text-gray-500">
											{desc}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* ── Main Projects ── */}
			<div className="mt-20 max-w-4xl mx-auto pt-10">
				<h2 className="text-xl sm:text-2xl font-semibold mb-2 text-left text-primary-dark dark:text-primary-light">
					Main Projects
				</h2>
				<p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1.5rem' }}>
					클릭하면 상세 내용을 볼 수 있습니다.
				</p>
				<ul className="main-project-list">
					{displayedMain.map((project) => (
						<li key={project.id}>
							<Link to={`/projects/${project.id}`} className="main-project-link">
								<div className="main-project-content">
									<ProjectCardContent project={project} isMain={true} />
								</div>
								<div className="main-project-arrow">
									<span className="main-project-arrow-text">자세히 보기</span>
									<FiArrowRight className="main-project-arrow-icon" />
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>

			{/* ── Other Projects ── */}
			<div className="mt-16 max-w-4xl mx-auto pt-10">
				<h2 className="text-xl sm:text-2xl font-semibold mb-6 text-left text-primary-dark dark:text-primary-light">
					Other Projects
				</h2>
				<ul className="other-project-list">
					{displayedOther.map((project) => (
						<li key={project.id} className="other-project-card">
							<ProjectCardContent project={project} isMain={false} />
						</li>
					))}
				</ul>
			</div>

		</section>
	);
};

export default ProjectsGrid;
