/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		deviceSizes: [320, 420, 768, 1024, 1200],
		loader: 'default',
		domains: ['res.cloudinary.com'],
		// remotePatterns: [
		// 	{
		// 		protocol: 'http',
		// 		hostname: 'localhost',
		// 		port: '1337',
		// 		pathname: '/:path*',
		// 	},
		// ],
	},
};

module.exports = nextConfig;
