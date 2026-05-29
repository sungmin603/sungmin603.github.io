# SungMin Lee Resume Portfolio

이 저장소는 `sungmin603.github.io` GitHub Pages 사용자 도메인에 배포하기 위한 React + Vite + Tailwind 기반 이력서/포트폴리오 웹사이트입니다.

## GitHub Pages 운영 정책에 맞춘 구조

- 배포 도메인: `https://sungmin603.github.io`
- GitHub Pages 사용자 사이트이므로 Vite `base`는 `/`로 유지합니다.
- SPA 라우팅은 GitHub Pages 새로고침 이슈를 피하기 위해 `HashRouter`를 유지합니다.
- 정적 파일은 `my-portfolio/public` 아래에 둡니다.
  - PDF 이력서: `my-portfolio/public/files/250921-Resume-Lee.pdf`
  - favicon/manifest/logo: `my-portfolio/public/*`
- 빌드 산출물은 Vite 기본값인 `my-portfolio/dist`에 생성됩니다.
- 배포 명령은 `gh-pages -d dist`를 사용합니다.

## 실행 전 준비

```bash
cd my-portfolio
yarn install
```

> 현재 앱은 `my-portfolio` 디렉터리가 프런트엔드 프로젝트 루트입니다.

## 자주 쓰는 명령어

### 개발 서버 실행

```bash
cd my-portfolio
yarn dev
```

- Vite 개발 서버를 실행합니다.
- 로컬에서 빠르게 화면을 확인할 때 사용합니다.

### 테스트 실행

```bash
cd my-portfolio
yarn test
```

- Vitest + Testing Library 기반 단위 테스트를 실행합니다.
- 배너, 모달 등 주요 UI가 깨지지 않았는지 확인합니다.

### 테스트 감시 모드

```bash
cd my-portfolio
yarn test:watch
```

- 파일 변경 시 테스트를 반복 실행합니다.
- 컴포넌트 수정 중 사용하면 편합니다.

### 프로덕션 빌드

```bash
cd my-portfolio
yarn build
```

- GitHub Pages 배포용 정적 파일을 `dist` 폴더에 생성합니다.
- 배포 전 반드시 실행해 빌드 오류가 없는지 확인하세요.

### 빌드 결과 미리보기

```bash
cd my-portfolio
yarn serve
```

- `dist` 빌드 결과를 로컬에서 미리 확인합니다.
- `yarn build`를 먼저 실행해야 최신 결과를 볼 수 있습니다.

### GitHub Pages 배포

```bash
cd my-portfolio
yarn deploy
```

- `yarn build`를 먼저 실행한 뒤 `dist`를 `gh-pages` 브랜치로 배포합니다.


## GitHub Actions 자동 배포

`.github/workflows/deploy-gh-pages.yml` 워크플로가 `main` 브랜치 push/merge 시 자동 실행됩니다.

동작 순서:

1. `my-portfolio`에서 `npm ci`로 의존성을 설치합니다.
2. `npm run build`로 Vite 정적 산출물 `my-portfolio/dist`를 생성합니다.
3. `dist` 내용만 `gh-pages` 브랜치의 root로 publish합니다.
4. `force_orphan: true`를 사용하므로 `gh-pages` 브랜치에는 배포 산출물만 남고 source code는 포함되지 않습니다.

GitHub 저장소의 Pages 설정은 다음처럼 맞춰주세요.

- Source: `Deploy from a branch`
- Branch: `gh-pages`
- Folder: `/ (root)`

> 주의: 이 워크플로는 `npm ci`를 사용하므로 `my-portfolio/package-lock.json`이 repository에 있어야 합니다. package-lock을 삭제한 상태라면 로컬에서 `cd my-portfolio && npm install --package-lock-only`로 lockfile을 생성한 뒤 함께 커밋하세요.

## 이력서 수정 가이드

> 앞으로 이력서 내용이 바뀌면 우선 `my-portfolio/src/data/resumeData.js`를 수정하세요. 코드 구조가 바뀌더라도 이 섹션은 계속 최신 상태로 유지합니다.

### 1. 이름, 헤드라인, CV 링크, 연락처 수정

파일: `my-portfolio/src/data/resumeData.js`

수정 위치: `resumeData.profile`

주요 필드:

- `name`: 이름
- `greeting`: 홈 배너 첫 문장
- `headline`: 홈 배너 직무/포지션 문구
- `summary`: 홈 배너 짧은 소개
- `resumeFile`: 다운로드할 PDF 경로
- `resumeDownloadName`: 다운로드 파일명
- `location`, `email`, `phone`: 연락처
- `socialLinks`: LinkedIn, GitHub, Blog 링크

PDF 파일을 교체할 때는 `my-portfolio/public/files/`에 파일을 넣고 `resumeFile` 경로를 맞춰주세요.

### 2. 핵심 역량 카드 수정

파일: `my-portfolio/src/data/resumeData.js`

수정 위치: `resumeData.strengths`

홈 상단에 표시되는 핵심 역량 3개 카드입니다.
면접관이 첫 화면에서 바로 이해할 수 있도록 `title`과 `description`을 짧고 명확하게 작성하세요.

### 3. 자기소개 수정

파일: `my-portfolio/src/data/resumeData.js`

수정 위치: `resumeData.about`

각 항목은 About 페이지 문단으로 표시됩니다.

### 4. 경력/강의/출판/수상 수정

파일: `my-portfolio/src/data/resumeData.js`

수정 위치: `resumeData.experience`

- `work`: 회사 경력
- `teaching`: 강의/교육 이력
- `publications`: 출판물
- `awards`: 수상 이력

### 5. 학력 수정

파일: `my-portfolio/src/data/resumeData.js`

수정 위치: `resumeData.education`

### 6. 프로젝트 목록과 상세 페이지 수정

파일: `my-portfolio/src/data/resumeData.js`

수정 위치: `resumeData.projects`

프로젝트는 이제 목록 데이터와 상세 페이지 데이터를 하나의 객체에서 관리합니다.

프로젝트 객체의 주요 필드:

- `id`: 프로젝트 고유 번호. URL `/projects/:id`에 사용되므로 중복되면 안 됩니다.
- `isFeatured`: Project Categories에 표시할지 여부
- `isMain`: Main Projects에 표시할지 여부
- `title`: 프로젝트명
- `period`: 기간
- `role`: 역할 배열
- `category`: 카테고리 배열
- `tech`: 기술 스택 배열
- `description`: 목록 카드에 표시되는 요약 bullet 배열
- `img`: 대표 이미지
- `detail`: 상세 페이지 내용

`detail` 필드의 하위 구조:

- `overview`: 프로젝트 한두 문장 요약
- `background`: 문제 상황/도입 배경
- `details`: 내가 한 일
- `achievements`: 성과
- `links`: 관련 링크 배열. 예: `{ label: 'Demo', url: 'https://...' }`
- `images`: 상세 페이지 이미지 배열

기존 상세 설명이 없는 프로젝트는 자동으로 입력 가이드 문구가 표시되도록 기본 템플릿이 붙습니다. 실제 지원 전에는 각 프로젝트의 `detail`을 채워 면접관이 바로 이해할 수 있게 만드세요.

## 추천 수정 순서

1. `resumeData.profile`에서 타깃 직무에 맞게 headline/summary 변경
2. `resumeData.strengths`에서 핵심 역량 3개 정리
3. `resumeData.projects`에서 대표 프로젝트 `isMain`, `description`, `detail` 보강
4. `yarn test`로 UI 테스트 확인
5. `yarn build`로 배포 빌드 확인
6. `yarn serve`로 빌드 결과 미리보기
7. `yarn deploy`로 GitHub Pages 배포
