// Resume content single source of truth.
// 이력서 내용 수정은 가능하면 이 파일에서 시작하세요. README.md의 "이력서 수정 가이드"도 함께 갱신하세요.

import { FiCpu, FiDatabase, FiLayers, FiUsers } from 'react-icons/fi';

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
			'CADI는 반도체 계측 이미지에서 기존 통계 수치 기반 모니터링으로는 탐지하기 어려운 이미지 기반 불량을 탐지하기 위해 개발한 AI 이상감지 플랫폼입니다.\n\n핵심 아이디어는 동일한 패턴과 정렬 조건의 이미지 그룹 내에서 서로 다르게 나타나는 특징을 위치 기반으로 비교하고, 통계 기반으로 이상 여부를 판단하는 것입니다. 이를 통해 신규 제품이나 신규 불량에도 별도 모델 재학습 없이 적용 가능한 범용 이상감지 알고리즘과 시스템을 구현했습니다.',
		background:
			'반도체 계측 업무에서는 수치화된 계측값만으로 관리되는 경우가 많아, 이미지에 나타나는 pattern defect, particle, abnormal structure와 같은 비정형 불량은 탐지가 어렵습니다.\n\n또한 신규 제품이나 신규 공정 step에서는 충분한 학습 데이터가 확보되기 어렵기 때문에, 특정 defect class에 의존하는 supervised model보다는 다양한 제품과 불량 유형에 적용 가능한 generic anomaly detection 방식이 필요했습니다.',
		details: [
			'개발 리드 및 핵심 개발자로 과제 기획, 알고리즘 설계, 테스트, 시스템 구현 수행',
			'동일 패턴/정렬 조건의 이미지 그룹 내 상대적 차이를 비교하는 범용 이상감지 알고리즘 설계',
			'image grouping, preprocessing, feature extraction, anomaly scoring, heatmap visualization pipeline 구현',
			'Multi-GPU inference 및 병렬 처리 기반의 대량 이미지 처리 구조 구축',
			'Backend, frontend, database, 결과 시각화, 알림 기능을 포함한 end-to-end 시스템 개발',
			'반도체 이미지 이상 탐지를 현업에서 활용 가능한 production AI service로 구현',
		],
		achievements: [
			'Baseline 대비 detection recall 67% → 90% 개선',
			'Single-thread 처리 대비 약 40× throughput 개선',
			'약 30MM 공수 절감 효과 산정',
			'기존 수치 기반 방식으로 탐지하기 어려웠던 이미지 기반 불량 탐지 가능',
			'반도체 계측 이미지에 적용 가능한 범용 이상탐지 알고리즘 개발',
		],
		architecture: [
			'CD-SEM / Metrology Images',
			'Image Grouping & Metadata Mapping',
			'Preprocessing Pipeline',
			'AI Feature Extraction / Anomaly Scoring',
			'Result DB & Object Storage',
			'Dashboard / Heatmap Visualization / Notification',
		],
		links: [],
		images: [proj1],
	},

	5: {
		overview:
			'DAS는 반도체 연구소 환경에서 불량 원인 분석을 지원하기 위해 개발한 RCA 데이터 분석 플랫폼입니다.\n\n공정, 설비, chamber, reticle, 계측, 검사, overlay, VM, FDC, 지연시간 등 다양한 제조 데이터를 통합하여 불량 원인 후보를 정량적으로 탐색하고, 엔지니어가 분석 결과를 해석할 수 있도록 지원합니다.',
		background:
			'반도체 연구소의 RCA 업무는 신규 제품, 신규 공정, 신규 설비 평가가 많아 샘플 수가 적고 데이터 구조가 복잡합니다. 또한 공정 이력이 분기되거나 데이터 key가 일관되지 않아 비교군과 대조군을 안정적으로 구성하기 어려운 문제가 있습니다.\n\n기존 RCA는 전문가의 경험과 수작업 분석에 대한 의존도가 높았기 때문에, 다양한 제조 데이터를 통합하고 반복 분석 workflow를 시스템화할 필요가 있었습니다.',
		details: [
			'단독 개발자로 기획, 데이터 구조 설계, 분석 workflow 설계, 개발, 운영까지 end-to-end 수행',
			'Data Lake 기반 공정·계측·검사·품질 데이터 수집 및 전처리 pipeline 구축',
			'공정 이력 분기와 데이터 불일치를 보정하기 위한 제조 데이터 전처리 로직 설계',
			'데이터 유형별 통계 분석 및 유의차 요인 탐색 기능 구현',
			'분석 결과 시각화, raw data 제공, self-service analysis 환경 구축',
			'RCA 전문가뿐 아니라 비숙련 엔지니어도 사용할 수 있는 분석 workflow 제공',
		],
		achievements: [
			'약 40MM 공수 절감 효과 산정',
			'반도체 연구소의 대표 RCA 분석 플랫폼으로 활용',
			'비숙련 엔지니어도 구조화된 RCA 분석을 수행할 수 있는 self-service 환경 제공',
			'RCA 전문가의 분석 workflow를 시스템화하여 분석 재현성과 접근성 개선',
			'반도체 불량 분석 경험을 실제 data platform으로 구현',
		],
		architecture: [
			'Manufacturing Data Sources\n(Process / Equipment / Metrology / Inspection / VM / FDC)',
			'Data Lake API / Batch Loading',
			'Preprocessing & Data Alignment',
			'Statistical RCA / Candidate Ranking',
			'Result Tables & Visualization',
			'Self-Service RCA Dashboard',
		],
		links: [],
		images: [proj3],
	},

	6: {
		overview:
			'ppt-RAG와 Code-RAG은 반도체 엔지니어링 지식 자산의 검색성과 재사용성을 높이기 위해 개발한 RAG 기반 검색 플랫폼입니다.\n\nppt-RAG는 불량 보고서, 분석 보고서, 성분 분석 자료 등 PPT 리포트 검색을 위한 플랫폼이며, Code-RAG은 반도체 데이터 분석에 사용되는 SQL query와 Python script를 검색하는 플랫폼입니다.',
		background:
			'기존에는 보고서, SQL query, Python script 등 중요한 engineering knowledge가 개인 또는 부서별로 분산 관리되어 재사용이 어렵고, keyword 기반 검색만으로는 원하는 자료를 찾기 어려웠습니다.\n\n특히 반도체 데이터 분석 업무에서는 내부 데이터 구조, query 작성 방식, 기존 분석 자산에 대한 이해가 필요하기 때문에, 비숙련자가 기존 지식 자산을 검색하고 재사용하기 어려운 문제가 있었습니다.',
		details: [
			'Project lead 및 핵심 개발자로 RAG 검색 구조 설계와 구현 수행',
			'Vector DB schema 설계 및 report/code metadata 정형화 구조 구축',
			'PPT report, SQL query, Python script의 검색 품질 향상을 위한 metadata extraction pipeline 구현',
			'자연어, keyword, augmented keyword 기반 adaptive retrieval 구조 구현',
			'QA 평가 체계 구축 및 검색 품질 개선',
			'SSE 기반 실시간 응답 구현으로 검색 대기 경험 개선',
		],
		achievements: [
			'ppt-RAG: naive RAG 대비 검색 정확도 60% → 90% 개선',
			'Code-RAG: naive RAG 대비 검색 정확도 20% → 70% 개선',
			'각 플랫폼별 약 30MM 공수 절감 효과 산정',
			'Report, SQL/Python 등 내부 engineering knowledge의 접근성과 재사용성 개선',
			'비숙련자도 기존 분석 자산을 검색·이해·활용할 수 있는 기반 구축',
		],
		architecture: [
			'Reports / SQL Queries / Python Scripts',
			'OCR & Metadata Extraction',
			'Embedding & Vector DB',
			'Query Augmentation / Adaptive Retrieval',
			'Re-ranking / QA Evaluation',
			'Search UI / Streaming Response',
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
		headline: 'Semiconductor AI Engineer',
		summary:
			'반도체 현업의 Workflow를 AI/Data 시스템으로 설계, 개발, 운영해 온 반도체 AI Engineer입니다.',
		resumeFile: '/files/250921-Resume-Lee.pdf',
		resumeDownloadName: 'Resume-Lee.pdf',
		resumes: [
			{
				id: 'en',
				label: 'Download Resume EN',
				labelLines: ['Download Resume', 'EN'],
				file: '/resume/260705-Resume-en(LEE).pdf',
				downloadName: '260705-Resume-en(LEE).pdf',
				note: 'public/resume/260705-Resume-en(LEE).pdf 파일과 연결됩니다.',
			},
			{
				id: 'ko',
				label: 'Download Resume KO',
				labelLines: ['Download Resume', 'KO'],
				file: '/resume/260705-Resume-ko(LEE).pdf',
				downloadName: '260705-Resume-ko(LEE).pdf',
				note: 'public/resume/260705-Resume-ko(LEE).pdf 파일과 연결됩니다.',
			},
		],
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
			title: '반도체 현업 AI 적용 및 운영 경험',
			description: '이미지 이상 탐지, RAG 검색 플랫폼 등 반도체 현업에 실질적인 AI 시스템 개발 및 운영',
			icon: FiCpu,
		},
		{
			id: 2,
			title: '대규모 반도체 데이터 처리 및 플랫폼 개발 역량',
			description: '랏 이력, 이미지, 레시피, 리포트 등 반도체의 다양한 데이터를 수집, 전처리, 분석, 서비스화하는 end-to-end 플랫폼 개발 및 운영',
			icon: FiDatabase,
		},
		{
			id: 3,
			title: '반도체 데이터 도메인 역량',
			description: 'DRAM 제품 불량 분석 및 주요 랏 건강도 관리를 통한 수율 개선 수행',
			icon: FiLayers,
		},
		{
			id: 4,
			title: '리더십 & 역량',
			description: '개발 조직 운영, 과제 기획, 개발 정책, 개발 리드, 아키텍처 설계, 과제 간 유기적 연결, 운영 체계 구축, 신기술 학습 및 현업 적용 역량 보유',
			icon: FiUsers,
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
		title: '이미지 이상감지 플랫폼',
		period: '2026.01 - 2026.06',
		role: ["Project Lead", "Main Developer"],
		category: ["Production AI", "Image Anomaly Detection"],
		tech : ["Python", "Multi-GPU", "Image Processing", "FastAPI", "Postgres", "Object Storage"],
		description : [
			"계측 이미지에서 기존 통계 수치 기반으로는 탐지하기 어려운 이미지 기반 불량을 탐지하기 위한 반도체 AI 이상감지 플랫폼입니다."
		],
		// img: WebImage1,
	},
	{
		id: 5,
		isFeatured: false,
		isMain: true,		
		title: 'RCA 데이터 분석 플랫폼',
		period: '2022.03 - 2023.10',
		role: ["Project Lead", "Main Developer"],
		category: ["RCA", "Data Platform"],
		tech : ["Data Lake", "Python", "Statistics", "Spotfire"],
		description : [
			"반도체 연구소 환경에서 불량 원인 분석을 지원하기 위해 다양한 제조 데이터를 통합하고 정량적으로 원인 후보를 탐색하는 RCA 데이터 분석 플랫폼입니다."
		],
		// img: WebImage1,
	},
	{
		id: 6,
		isFeatured: false,
		isMain: true,
		title: 'RAG 검색 플랫폼',
		period: '2025.03 - 2025.10',
		role: ["Project Lead", "Main Developer"],
		category: ["LLM/RAG", "Knowledge Platform"],
		tech : ["LLM", "LangGraph", "Vector DB", "MySQL", "FastAPI", "Docker", "Vue"],
		description : [
			"반도체 엔지니어링 지식 자산의 검색성과 재사용성을 높이기 위해 개발한 RAG 기반 검색 플랫폼입니다."
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
