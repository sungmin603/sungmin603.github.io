import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages user site(sungmin603.github.io)는 루트 도메인에 배포되므로 base는 '/'로 둡니다.
export default defineConfig({
	base: '/',
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './src/setupTests.js',
	},
});
