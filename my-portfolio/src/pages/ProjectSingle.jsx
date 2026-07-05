import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
	FiArrowLeft,
	FiExternalLink,
	FiInfo,
	FiBookOpen,
	FiCheckSquare,
	FiAward,
	FiLink,
	FiGitBranch,
} from 'react-icons/fi';
import ArchitectureDiagram from '../components/projects/ArchitectureDiagram';
import { projects as projectsData } from '../data/resumeData';

/* 섹션 공통 래퍼 */
const formatParagraphs = (text) =>
	text?.split('\n').filter(Boolean).map((paragraph, idx) => (
		<p key={idx} className="text-ternary-dark dark:text-ternary-light leading-relaxed text-base">
			{paragraph}
		</p>
	));

const Section = ({ icon: Icon, title, iconColor = 'text-indigo-500', children }) => (
	<section className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sm:p-8">
		<h2 className="flex items-center gap-2 text-lg sm:text-xl font-bold text-primary-dark dark:text-primary-light mb-5">
			<Icon className={`${iconColor} text-xl flex-shrink-0`} />
			{title}
		</h2>
		{children}
	</section>
);

const ProjectSingle = () => {
	const { id } = useParams();
	const project = projectsData.find((p) => p.id === Number(id));
	const details = project?.detail;

	if (!project) {
		return (
			<div className="container mx-auto mt-20 text-center text-ternary-dark dark:text-ternary-light">
				<p className="text-2xl mb-6">프로젝트를 찾을 수 없습니다.</p>
				<Link to="/projects" className="text-indigo-500 hover:underline">
					← 프로젝트 목록으로 돌아가기
				</Link>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.45, delay: 0.1 }}
			className="container mx-auto mt-5 sm:mt-10 px-4 max-w-4xl pb-24"
		>
			{/* 뒤로 가기 */}
			<Link
				to="/projects"
				className="inline-flex items-center gap-2 text-sm text-indigo-500 hover:text-indigo-400 mb-8 transition-colors"
			>
				<FiArrowLeft />
				프로젝트 목록으로
			</Link>

			{/* ── 헤더 ── */}
			<div className="mb-10">
				{project.period && (
					<p className="text-sm text-gray-400 dark:text-gray-500 mb-2">
						{project.period}
					</p>
				)}
				<h1 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-5">
					{project.title}
				</h1>

				<div className="flex flex-wrap gap-2 mb-3">
					{project.category?.map((cat, idx) => (
						<span key={idx} className="pill-sky">
							{cat}
						</span>
					))}
				</div>
				<div className="flex flex-wrap gap-2 mb-3">
					{project.tech?.map((tech, idx) => (
						<span key={idx} className="pill-green">
							{tech}
						</span>
					))}
				</div>
				{project.role && (
					<p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
						<span className="font-semibold text-ternary-dark dark:text-ternary-light">
							Role:{' '}
						</span>
						{project.role.join(', ')}
					</p>
				)}
			</div>

			{details ? (
				<div className="space-y-6">

					{/* Overview */}
					{details.overview && (
						<Section icon={FiInfo} title="Overview" iconColor="text-indigo-500">
							<div className={details.images?.length > 0 ? 'grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start' : ''}>
								<div className="space-y-4">
									{formatParagraphs(details.overview)}
								</div>
								{details.images?.length > 0 && (
									<div className="grid grid-cols-1 gap-3">
										{details.images.map((img, idx) => (
											<div
												key={idx}
												className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
											>
												<img
													src={img}
													alt={`${project.title} visual ${idx + 1}`}
													className="w-full max-h-64 object-contain"
												/>
											</div>
										))}
									</div>
								)}
							</div>
						</Section>
					)}

					{/* Background */}
					{details.background && (
						<Section icon={FiBookOpen} title="Background" iconColor="text-amber-500">
							<div className="space-y-4">
								{formatParagraphs(details.background)}
							</div>
						</Section>
					)}

					{/* What I did */}
					{details.details?.length > 0 && (
						<Section icon={FiCheckSquare} title="What I did" iconColor="text-blue-500">
							<ul className="space-y-3">
								{details.details.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3">
										<span className="mt-2 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
										<span className="text-ternary-dark dark:text-ternary-light leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</Section>
					)}

					{/* Achievements */}
					{details.achievements?.length > 0 && (
						<Section
							icon={FiAward}
							title="Achievements"
							iconColor="text-green-500"
						>
							<ul className="space-y-3">
								{details.achievements.map((item, idx) => (
									<li key={idx} className="flex items-start gap-3">
										<span className="mt-2 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
										<span className="text-ternary-dark dark:text-ternary-light leading-relaxed">
											{item}
										</span>
									</li>
								))}
							</ul>
						</Section>
					)}

					{/* System Architecture */}
					{details.architecture?.length > 0 && (
						<Section
							icon={FiGitBranch}
							title="System Architecture"
							iconColor="text-purple-500"
						>
							<ArchitectureDiagram steps={details.architecture} />
						</Section>
					)}

					{/* Links */}
					{details.links?.length > 0 && (
						<Section icon={FiLink} title="Links" iconColor="text-sky-500">
							<div className="flex flex-wrap gap-3">
								{details.links.map((link, idx) => (
									<a
										key={idx}
										href={link.url}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors text-sm font-medium"
									>
										<FiExternalLink />
										{link.label}
									</a>
								))}
							</div>
						</Section>
					)}
				</div>
			) : (
				/* details 없으면 projects.js description으로 fallback */
				<Section icon={FiInfo} title="Description" iconColor="text-indigo-500">
					<ul className="space-y-3">
						{project.description?.map((item, idx) => (
							<li key={idx} className="flex items-start gap-3">
								<span className="mt-2 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
								<span className="text-ternary-dark dark:text-ternary-light leading-relaxed">
									{item.replace(/^-\s*/, '')}
								</span>
							</li>
						))}
					</ul>
				</Section>
			)}
		</motion.div>
	);
};

export default ProjectSingle;
