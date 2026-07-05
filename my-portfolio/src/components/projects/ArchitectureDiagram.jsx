const ArchitectureDiagram = ({ steps = [] }) => {
	if (!steps.length) return null;

	return (
		<div className="w-full rounded-2xl border border-indigo-100 dark:border-gray-700 bg-indigo-50/50 dark:bg-gray-900/40 p-4 sm:p-5">
			<div className="flex flex-col gap-3">
				{steps.map((step, index) => (
					<div key={`${step}-${index}`} className="flex flex-col items-center">
						<div className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-center shadow-sm">
							<p className="whitespace-pre-line text-sm sm:text-base font-general-medium leading-relaxed text-ternary-dark dark:text-ternary-light">
								{step}
							</p>
						</div>
						{index < steps.length - 1 && (
							<div className="my-2 text-xl text-indigo-400 dark:text-indigo-300" aria-hidden="true">
								↓
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ArchitectureDiagram;
