// Resume content single source of truth.
// 이력서 내용 수정은 가능하면 이 파일에서 시작하세요. README.md의 "이력서 수정 가이드"도 함께 갱신하세요.

import { FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';

import WorkImg1 from '../images/brands/Samsung.png';
import WorkImg2 from '../images/brands/HyundaiMobis.png';
import WorkImg3 from '../images/brands/hyundaiMipo.jpg';
import WorkImg4 from '../images/brands/SamsungHeavyindustry.png';
import TeachingImg1 from '../images/teaching1.png';
import TeachingImg2 from '../images/teaching2.jpg';
import TeachingImg3 from '../images/teaching3.jpg';
import proj1 from '../images/proj1.png';
import proj3 from '../images/proj3.png';
import proj4 from '../images/proj4.jpg';
import proj5 from '../images/proj5.png';

const projectDetailsById = {
	4: {
		overview:
			'대규모 산업 환경에서 사용 가능한 확장성 높은 이미지 기반 이상 탐지 시스템을 설계·개발한 프로젝트입니다.',
		background:
			'CDSEM 장비에서 촬영된 이미지로부터 공정 이상을 자동으로 판별하는 시스템이 필요했습니다. 기존에는 엔지니어가 이미지를 수동으로 검토해야 했으며, 물량 증가에 따른 자동화가 요구되었습니다.',
		details: [
			'DINOv2 기반 이미지 임베딩 및 이상 탐지 알고리즘 설계',
			'GPU 추론 인프라를 k8s 위에서 확장 가능하게 구축',
			'FastAPI를 사용한 REST API 서버 개발',
			'Postgres & MinIO를 활용한 이미지 메타데이터 및 원본 파일 관리',
			'프로젝트 전체 생애주기 리드 (요구사항 정의 → 설계 → 개발 → 배포)',
		],
		achievements: [
			'수동 검수 대비 검토 시간 대폭 단축',
			'확장 가능한 GPU 클러스터 추론 파이프라인 구축 완료',
		],
		links: [],
		images: [proj1],
	},

	5: {
		overview:
			'R&D 센터 내 불량 원인 분석을 위한 인하우스 데이터 분석 툴을 자체 개발한 프로젝트입니다.',
		background:
			'다양한 공정 데이터가 여러 시스템에 분산되어 있어 원인 분석에 많은 시간이 소요되었습니다. 이를 통합·자동화하기 위한 분석 시스템이 필요했습니다.',
		details: [
			'PaaS 환경에서 Python 기반 데이터 파이프라인 구축',
			'통계적 분석 방법론 적용 (상관 분석, 분포 분석 등)',
			'Spotfire를 활용한 대시보드 및 시각화 구현',
			'지속적인 데이터 업데이트 자동화',
		],
		achievements: [
			'불량 원인 분석 시간 단축',
			'엔지니어 셀프서비스 분석 환경 제공',
		],
		links: [],
		images: [proj3],
	},

	6: {
		overview:
			'사내 불량 보고서 PPT 파일을 자연어로 검색하고 열람할 수 있는 웹 플랫폼을 개발한 프로젝트입니다.',
		background:
			'수천 개의 PPT 보고서가 서버에 저장되어 있지만 키워드 검색이 불가능했습니다. LLM과 RAG를 활용하여 자연어 질의로 관련 보고서를 빠르게 찾는 시스템을 구축하였습니다.',
		details: [
			'LLM + LangGraph 기반 Modular RAG 파이프라인 구현',
			'Qdrant 벡터 DB를 활용한 유사도 검색',
			'MySQL로 파일 메타데이터 관리',
			'FastAPI 백엔드 + Vue 프론트엔드 개발',
			'Docker 컨테이너 기반 배포 환경 구성',
		],
		achievements: [
			'자연어 질의 기반 PPT 보고서 검색 기능 구현',
			'검색 정확도 및 재현율 개선을 위한 RAG 파이프라인 최적화',
		],
		links: [],
		images: [proj5],
	},
};

const projectDetailTemplate = (project) => ({
	overview:
		project?.description?.map((item) => item.replace(/^-\s*/, '')).join(' ') ||
		'프로젝트 요약을 입력하세요.',
	background:
		'이 프로젝트를 시작하게 된 문제 상황, 사용자 요구사항, 기존 방식의 한계를 입력하세요.',
	details: [
		'담당 역할과 직접 수행한 설계/개발/운영 내용을 입력하세요.',
		'사용한 기술과 선택 이유, 협업 방식, 문제 해결 과정을 입력하세요.',
	],
	achievements: [
		'정량/정성 성과를 입력하세요. 공개 가능한 범위에서 시간 단축, 품질 개선, 사용 부서 확대 등을 적습니다.',
	],
	links: [],
	images: project?.img ? [project.img] : [],
});

const attachProjectDetails = (projects) =>
	projects.map((project) => ({
		...project,
		detail: projectDetailsById[project.id] || projectDetailTemplate(project),
	}));

export const resumeData = {
	profile: {
		name: 'SungMin Lee',
		greeting: 'Hi, I am SungMin',
		headline: 'A Full-Stack Developer & Data Scientist',
		summary:
			'AI, data pipeline, web platform, infrastructure를 연결해 실제 현장 문제를 해결하는 엔지니어입니다.',
		resumeFile: '/files/250921-Resume-Lee.pdf',
		resumeDownloadName: 'Resume-Lee.pdf',
		location: 'Hanam-si, Gyeonggi-do, Republic of Korea',
		email: '603lsm@gmail.com',
		phone: '+82 10 6410 2463',
		socialLinks: [
			{ id: 1, type: 'linkedin', url: 'https://www.linkedin.com/in/sungmin603' },
			{ id: 2, type: 'github', url: 'https://github.com/sungmin603' },
			{ id: 3, type: 'blog', url: 'https://blog.naver.com/mgo0129' },
		],
	},
	strengths: [
		{
			id: 1,
			title: 'AI / LLM Engineering',
			description: 'RAG, LangGraph, PyTorch, image anomaly detection 기반으로 AI 서비스를 설계·구현합니다.',
			icon: FiCpu,
		},
		{
			id: 2,
			title: 'Data Engineering',
			description: 'ETL, Airflow, SQL/NoSQL, 분석 대시보드를 통해 제조 데이터를 분석 가능한 형태로 만듭니다.',
			icon: FiDatabase,
		},
		{
			id: 3,
			title: 'Full-Stack Delivery',
			description: 'FastAPI, Vue/Mendix, Docker 기반으로 요구사항 정의부터 배포·운영까지 리드합니다.',
			icon: FiLayers,
		},
	],
	about: [
	{
		id: 1,
		bio: 'I am a full-stack developer with extensive experience across AI projects, data, web, server, and database. My background also spans roles as a data scientist and in engineering tasks such as technical drawings, giving me a broad perspective at the intersection of science and engineering. My primary technology stack includes Python, Docker, FastAPI, LangGraph, and PyTorch, and I have worked on diverse projects such as RAG-LLM applications, deep learning image processing, ETL pipelines, web services, and visualization dashboards. I have experience leading projects, focusing on problem-solving with my team, and fostering effective collaboration.',
	},
	{
		id: 2,
		bio: 'As a engineer, I strive to align with user requirements, address fundamental problems, and leverage emerging technologies such as AI. I believe in encouraging team collaboration and promoting the adoption of new technologies within projects. Looking forward, my ambition is to establish leadership in a specific domain by applying AI-driven solutions and to deliver services that create meaningful impact.',
	},
],
	experience: {
	work:[
	{
		id: 1,
		company: "Samsung Electronics",
		position: "Staff Engineer(Full-stack Engineer, ML Engineer)",
		period: "2022 - present",
		description: [
			"- Development of AI projects with LLMs, RAG, and AI-based image processing.",
			"- Development of data analytics with data pipeline, RCA, and dashboard.",
			"- Development of Full-stack web, and tooling infrastructure.",
		],
		logo: WorkImg1
	},
	{
		id: 2,
		company: "Samsung Electronics",
		position: "Engineer(Data Scientist)",
		period: "2018 - 2021",
		description: [
			"- Root cause Analysis in DRAM(D1z, D1a, D1b, D1c) and developing auto analysis solution.",
			"- Abnormal detection with measurement and inspection.",
			"- Managed, tracked and predicted main lots' manufacuturing quality state.",
		],
		logo: WorkImg1
	},
	{
		id: 3,
		company: "Hyundai Mobis",
		position: "Research Engineer",
		period: "2017 - 2018",
		description: [
			"- Development of car’s steering system.",
			"- Gear system optimization.",
		],
		logo: WorkImg2
	},
	{
		id: 4,
		company: "Hyundai Mipo",
		position: "Internship",
		period: "2014 - 2014",
		description: [
			"- Internship with drawings tools."
		],
		logo: WorkImg3
	},
	{
		id: 5,
		company: "Samsung Heavy Industry",
		position: "Internship",
		period: "2013 - 2013",
		description: [
			"- Internship with drawings tools."
		],
		logo: WorkImg4
	}
	],
	teaching : [
	{
      id: 1,
      course: "Practical ETL Course",
      institution: "Samsung internal lecture",
      period: "2024 - present",
      description: "- Delivered practical training on ETL processes tailored to corporate environments.",
	  logo: TeachingImg1
	},
    {
      id: 2,
      course: "Fundamentals of Data Analysis",
      institution: "Samsung internal lecture",
      period: "2024 - present",
      description: "- Conducted training on data analysis methods applied to semiconductor manufacturing data.",
	  logo: TeachingImg2
    },
	{
      id: 3,
	  course: "Spotfire Workshop",
      institution: "Samsung internal lecture",
      period: "2024 - present",
      description: "- Led training and hands-on workshops on building and utilizing Spotfire dashboards.",
	  logo: TeachingImg3
    },
	],
	publications : [
	{
      id: 1,
      title: "나홀로 명도소소을 위한 가이드북",
      type: "Book",
      publisher: "Puple",
      year: 2025,
    },
	{
      id: 2,
      title: "Spotfire 간단히 그래프 그리기",
      type: "Book",
      publisher: "Puple",
      year: 2022,
    },
	], 
	awards: [
    {
      id: 1,
      title: "2025 AI BP Festival",
      organization: "Samsung Electronics AI Center",
      year: 2025,
    },
	{
      id: 2,
      title: "2024 SRD e-Technology Journal",
      organization: "Samsung Electronics CTO",
      year: 2024,
    },
    {
      id: 3,
      title: "2023 The Innovator",
      organization: "Samsung Electronics CTO",
      year: 2023,
    },
	]

},
	education: [
	{
		id: 1,
		type: "Master",
		school: "Seoul National University",
		degree: "M.S. in optimization algorithms",
		period: "2015 - 2017",
		bio: "Conducted research on ship-route planning optimization"
	},
	{
		id: 2,
		type: "Bachelor",
		school: "Seoul National University",
		degree: "B.S. in Naval architecture & Ocean engineering",
		period: "2009 - 2015",
		bio: "Specialized in physics, engineering, design, analysis"
	},
	{
		id: 3,
		type: "High school",
		school: "Daegu science high school",
		period: "2006 - 2008",
	},
],
	projects: attachProjectDetails([
	{
		id: 1,
		isFeatured: true,
		isMain: false,
		title: "AI & Machine Learning",
		category: ["AI & ML"],
		tech: ["Python, LangGraph, Qdrant, FastAPI, Docker, Mendix"],
		description: [
			"- LLM Services",
			"- RAG Pipelines",
			"- Computer Vision"
		],
		img: proj1,
	},
	{
		id: 2,
		isFeatured: true,
		isMain: false,
		title: "Data Engineering & Analytics",
		category: ["Data & Analytics"],
		tech: ["Python, Image processing, LLM, Vue, OpenCV"],
		description: [
			"- Data Pipelines",
			"- Analytics & Root Cause Analysis",
			"- Data Visualization & Dashboards"
		],
		img: proj3,
		// link: "https://github.com/yourname/dl-image",
	},
	{
		id: 3,
		isFeatured: true,
		isMain: false,
		title: "Web Development & Infrastructure",
		category: ["Web & Infra"],
		tech: ["Python, Airflow, MongoDB, Mysql, FastAPI, Docker, Mendix"],
		description: [
			"- Full-Stack Web Development",
			"- Backend Systems (API & Databases)",
			"- Infrastructure & Operations (Setup & Tooling)"
		],
		img: proj4,
	},
	{
		id: 4,
		isFeatured: false,
		isMain: true,
		title: 'CDSEM Anomaly Detection Interpreter',
		period: '2026 - present',
		role: ["Project Lead","Main Developer"],
		category: ["AI & ML"],
		tech : ["Python","k8S","Dinov3","image-processing","FastAPI","Postgres","minIO"],
		description : [
			"- Development of a scalable Image Anomaly Detection System for large-scale industrial environments",
			"- Architected an image-based anomaly detection algorithm and implemented a scalable GPU inference infrastructure",
			"- Led the project end-to-end"
		],
		// img: WebImage1,
	},
	{
		id: 5,
		isFeatured: false,
		isMain: true,		
		title: 'Data Analysis System',
		period: '2018 - present',
		role: ["Project Lead","Main Developer"],
		category: ["Data & Analytics"],
		tech : ["PaaS","Python","Stastics","Spotfire"],
		description : [
			"- Created an in-house analytics tool to identify root causes of defects in R&D center",
			"- Built data pipelines, applied analytical methods, and visualized results",
			"- Led and developed the full project lifecycle independently"
		],
		// img: WebImage1,
	},
	{
		id: 6,
		isFeatured: false,
		isMain: true,
		title: 'PPT Report Search Web Platform',
		period: '2025 - present',
		role: ["Project Lead","Main Developer"],
		category: ["AI & ML","Web & Infra"],
		tech : ["LLM","Langgraph","Qdrant","MySQL","FastAPI","Docker","Vue"],
		description : [
			"- Developed a web platform for searching, and browsing defect report PPT files",
			"- Implemented Modular RAG for natural language search",
			"- Led the project end-to-end"
		],
		// img: MobileImage1,
	},	
	{
		id: 7,
		title: 'Code Search Web Platform',
		period: '2025 - present',
		role: ["Project Lead","Main Developer"],
		category: ["AI & ML","Web & Infra"],
		tech : ["LLM","Langgraph","Qdrant","Postgres","FastAPI","Docker","Mendix"],
		description : [
			"- Developed a web platform for searching and registering SQL/Python code",
			"- Implemented Modular RAG for natural language search",
			"- Led the project end-to-end"
		],
		// img: WebImage2,
		// ProjectHeader: {
		// 	title: 'Project Management UI - From Context',
		// 	publishDate: 'Jul 26, 2021',
		// 	tags: 'UI / Frontend',
		// },
	},

	{
		id: 8,
		title: 'Total View Web Platform',
		period: '2025 - present',
		role: ["Project Lead","Main Developer"],
		category: ["Web & Infra"],
		tech : ["Impala","MySQL","FastAPI","Docker","Mendix"],
		description : [
			"- Integrated legacy system views into a unified web UI",
			"- Developed backend with APIs, image data, and ETL pipelines",
			"- Led project and cross-departmental collaboration"
		],
	},
	{
		id: 9,
		title: 'Image Processing Web Platform',
		period: '2024 - present',
		role: ["Main Developer"],
		category: ["AI & ML","Web & Infra"],
		tech : ["LLM","Pytorch","MySQL","FastAPI","Docker","Vue"],
		description : [
			"- Built a platform for AI and traditional image processing",
			"- Developed AI-based segmentation, denoising, and similar image retrieval",
			"- Set up and optimized GPU environments for AI models"
		],
	},
	{
		id: 10,
		title: 'Recipe Database and Web Platform',
		period: '2023 - present',
		role: ["Main Developer"],
		category: ["Data & Analytics", "Web & Infra"],
		tech : ["MongoDB","MySQL","Airflow","FastAPI","Docker","Mendix"],
		description : [
			"- Developed a system for process recipe data collection, storage, and retrieval",
			"- Designed whole data pipelines and visualization",
			"- Managed backend and database systems"
		],
		// img: WebImage1,
	},

	{
		id: 11,
		title: 'Integrated Employee Information Sharing System',
		period: '2024 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Web & Infra"],
		tech : ["Python","Airflow","Mendix"],
		description : [
			"- Centralized workforce information into a web platform across the R&D center",
			"- Standardized schedules and automated data pipelines",
			"- Led project with cross-team collaboration"
		],
		// img: WebImage1,
	},
	{
		id: 12,
		title: 'Bonding Process Tracking Dashboard',
		period: '2024 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Data & Analytics"],
		tech : ["Python","Airflow","Spotfire"],
		description : [
			"- Tracked manufacturing histories of lots with bonding processes",
			"- Built data pipelines, applied analytical methods, and visualized results",
			"- Led the project end-to-end"
		],
		// img: WebImage1,
	},
	{
		id: 13,
		title: 'Lot Monitoring Dashboard',
		period: '2024 - 2024',
		role: ["Project Lead","Main Developer"],
		category: ["Data & Analytics"],
		tech : ["Python","Airflow","Spotfire"],
		description : [
			"- Managed and monitored evaluation lots assigned to the department, including manufacturing history",
			"- Built data pipelines, applied analytical methods, and visualized results",
			"- Led the project end-to-end"
		],
		// img: WebImage1,
	},
	{
		id: 14,
		title: 'MI/TEM Index Monitoring System',
		period: '2022 - present',
		role: ["Project Lead","Main Developer"],
		category: ["Data & Analytics", "Web & Infra"],
		tech : ["MySQL","Spotfire"],
		description : [
			"- Built monitoring system with data pipelines, visualized dashboard",
			"- Led project with cross-team collaboration"
		],
		// img: WebImage1,
	},
	{
		id: 15,
		title: "Team's Webpage",
		period: '2023 - 2023',
		role: ["Project Lead","Main Developer"],
		category: ["Web & Infra"],
		tech : ["MySQL","Mendix"],
		description : [
			"- Built department-specific web pages for workflows",
		],
		// img: WebImage1,
	},
	{
		id: 16,
		title: 'MI Request system',
		period: '2023 - 2023',
		role: ["Project Lead","Main Developer"],
		category: ["Web & Infra"],
		tech : ["MySQL","Mendix"],
		description : [
			"- Systematized inter-departmental task requests, coordination, and execution processes",
			"- Led project with cross-team collaboration"
		],
		// img: WebImage1,
	},

]),
};

export const { profile, strengths, about, experience, education, projects } = resumeData;
