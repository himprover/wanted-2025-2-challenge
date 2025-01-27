/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true, // Next.js 13의 새로운 app 디렉토리 사용
	},
};

module.exports = nextConfig;
