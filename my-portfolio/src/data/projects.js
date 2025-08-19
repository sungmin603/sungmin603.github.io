// Import images

import proj1 from '../images/proj1.png';
import proj2 from '../images/proj2.png';
import proj3 from '../images/proj3.png';
import proj4 from '../images/proj4.jpg';
import proj5 from '../images/proj5.png';
// import MobileImage2 from '../images/mobile-project-2.jpg';
// import UIImage1 from '../images/ui-project-1.jpg';
// import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: "RAG-LLM Web-service",
		description: "A retrieval-augmented generation pipeline integrating LLMs for SQL query Q&A.",
		tech: "Python, LangGraph, Qdrant, FastAPI, Docker, Mendix",
		img: proj1,
		category: "AI",
		isFeatured: true,
	},
	{
		id: 2,
		title: "DL-base Image Processing Platform",
		description: "Implemented deep learning models for image denoising and super-resolution.",
		tech: "Python, Image processing, LLM, Vue, OpenCV",
		img: proj2,
		// link: "https://github.com/yourname/dl-image",
		category: "AI",
		isFeatured: true,
	},
	{
		id: 3,
		title: "Data Analytics Platform",
		description: "Implemented deep learning models for image denoising and super-resolution.",
		tech: "Python, nginx, streamlit, FastAPI, Docker",
		img: proj3,
		// link: "https://github.com/yourname/dl-image",
		category: "AI",
		isFeatured: true,
	},	
	{
		id: 4,
		title: "Web-DB Platform",
		description: "A retrieval-augmented generation pipeline integrating LLMs for SQL query Q&A.",
		tech: "Python, Airflow, MongoDB, Mysql, FastAPI, Docker, Mendix",
		img: proj4,
		category: "AI",
		isFeatured: true,
	},
	{
		id: 5,
		title: "Infrastructure and System Integration",
		description: "Implemented deep learning models for image denoising and super-resolution.",
		tech: "Linux, Docker, K8S, Nginx, Nexus, Mlflow, Redis",
		img: proj5,
		// link: "https://github.com/yourname/dl-image",
		category: "AI",
		isFeatured: true,
	},
	{
		id: 6,
		title: 'Google Health Platform',
		category: 'Web Application',
		// img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 7,
		title: 'React Social App',
		category: 'Mobile Application',
		// img: MobileImage1,
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		// img: WebImage1,
	},
];
