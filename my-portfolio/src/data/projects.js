// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
// import MobileImage2 from '../images/mobile-project-2.jpg';
// import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: "RAG-LLM Web-service",
		description: "A retrieval-augmented generation pipeline integrating LLMs for SQL query Q&A.",
		tech: "Python, LangGraph, Qdrant, FastAPI, Docker, Mendix",
		img: "/images/projects/rag-llm.png",
		category: "AI",
		isFeatured: true,
	},
	{
		id: 2,
		title: "DL image processing Web-service",
		description: "Implemented deep learning models for image denoising and super-resolution.",
		tech: "Python, Image processing, LLM, Vue, OpenCV",
		img: "/images/projects/dl-image.png",
		link: "https://github.com/yourname/dl-image",
		category: "AI",
		isFeatured: true,
	},
	{
		id: 3,
		title: "MLOps platform",
		description: "Implemented deep learning models for image denoising and super-resolution.",
		tech: "Python, nginx, streamlit, FastAPI, Docker",
		img: "/images/projects/dl-image.png",
		link: "https://github.com/yourname/dl-image",
		category: "AI",
		isFeatured: true,
	},
	{
		id: 4,
		title: "Data Science Web-service",
		description: "Implemented deep learning models for image denoising and super-resolution.",
		tech: "Python, nginx, streamlit, FastAPI, Docker",
		img: "/images/projects/dl-image.png",
		link: "https://github.com/yourname/dl-image",
		category: "AI",
		isFeatured: true,
	},	
	{
		id: 5,
		title: "Web-service and Database",
		description: "A retrieval-augmented generation pipeline integrating LLMs for SQL query Q&A.",
		tech: "Python, LangGraph, Qdrant, FastAPI, Docker, Mendix",
		img: "/images/projects/rag-llm.png",
		category: "AI",
		isFeatured: true,
	},
	{
		id: 6,
		title: 'Google Health Platform',
		category: 'Web Application',
		img: WebImage2,
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
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Apple Design System',
		category: 'Web Application',
		img: WebImage1,
	},
];
