/**
 * Main Project 상세 설명 데이터 (isMain: true 인 프로젝트만)
 * - projects.js 의 id 와 매핑됩니다.
 * - 각 항목을 자유롭게 편집하세요.
 *
 * 구조:
 *   overview     : string   – 프로젝트 요약 (1~2문장)
 *   background   : string   – 도입 배경 / 문제 상황
 *   details      : string[] – 구체적인 작업 내용 (bullet)
 *   achievements : string[] – 성과 / 결과
 *   links        : { label: string, url: string }[] – 관련 링크
 *   images       : any[]    – 보여줄 이미지 (import 후 배열에 추가)
 *
 * 이미지 추가 방법:
 *   1) 파일 상단에 import myImg from '../images/myimage.png'; 추가
 *   2) 해당 프로젝트의 images 배열에 myImg 추가
 */

// 사용할 이미지 import (필요에 따라 추가)
import proj1 from '../images/proj1.png';
import proj3 from '../images/proj3.png';
import proj5 from '../images/proj5.png';

export const projectDetailsData = {
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
