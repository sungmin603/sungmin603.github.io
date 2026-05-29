import { projects } from './resumeData';

export const projectDetailsData = Object.fromEntries(
	projects.map((project) => [project.id, project.detail])
);
