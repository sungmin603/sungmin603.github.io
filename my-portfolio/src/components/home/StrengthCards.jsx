import { strengths } from '../../data/resumeData';

const StrengthCards = () => {
	return (
		<section className="mt-14 sm:mt-20 max-w-5xl mx-auto">
			<div className="text-center mb-8">
				<h2 className="text-2xl sm:text-3xl font-general-semibold text-primary-dark dark:text-primary-light">
					Core Strengths
				</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{strengths.map(({ id, title, description, icon: Icon }) => (
					<article
						key={id}
						className="rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
					>
						<div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-900 text-indigo-500 dark:text-indigo-200 mb-5">
							<Icon className="text-2xl" />
						</div>
						<h3 className="text-xl font-general-semibold text-ternary-dark dark:text-ternary-light mb-3">
							{title}
						</h3>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-300">
							{description}
						</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default StrengthCards;
